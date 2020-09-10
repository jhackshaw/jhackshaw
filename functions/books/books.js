const fetch = require("node-fetch");
const parser = require("fast-xml-parser");
const he = require("he");

// This is not secret
const key = "8YzDHWGrcaI0gI0n7jjtsA";
const userId = "62303823";

const parseXmlBody = body => {
  if (parser.validate(body) !== true) {
    throw new Error("invalid xml data");
  }
  const { GoodreadsResponse } = parser.parse(body, {
    ignoreAttributes: false,
    parseAttributeValue: true,
    attrNodeName: "attrs",
    arrayMode: true
  });
  const reviews = GoodreadsResponse[0].reviews[0];
  const count = reviews.attrs["@_total"];
  if (count < 1) {
    return {
      count: 0,
      books: []
    };
  }
  const books = reviews.review.map(review => ({
    date: review.read_at || review.date_added,
    title: review.book[0] ? review.book[0].title : "",
    rating: review.rating,
    author:
      review.book[0] &&
      review.book[0].authors[0] &&
      review.book[0].authors[0].author[0] &&
      review.book[0].authors[0].author[0].name,
    image: review.book[0] && review.book[0].image_url,
    description: he.decode(review.book[0] && review.book[0].description)
  }));
  return {
    books,
    count
  };
};

exports.handler = async event => {
  try {
    const params = new URLSearchParams({
      ...event.queryStringParameters,
      v: "2",
      shelf: "read",
      id: userId,
      key,
      per_page: "15"
    });
    console.log(params.toString());
    const response = await fetch(
      `https://www.goodreads.com/review/list/?${params}`
    );
    const xmlBody = await response.text();
    const body = parseXmlBody(xmlBody);
    return {
      statusCode: 200,
      body: JSON.stringify(body)
    };
  } catch (e) {
    return {
      statusCode: 400,
      body: e.toString()
    };
  }
};
