import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";
import { MDXRenderer } from "gatsby-plugin-mdx";

const StyledTimeLine = styled.div`
  padding: 1rem 0;
`;

const TimelineItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  flex-wrap: nowrap;
`;

const TimelineHeader = styled.div`
  min-height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;

  .gatsby-image-wrapper {
    display: block;
    flex: 0 0 80px;
    margin-right: 1rem;

    @media screen and (min-width: 768px) {
      display: none !important;
    }
  }
`;

const TimelineContent = styled.div`
  padding-bottom: 2rem;
  flex: 1 1 100%;
  min-height: 150px;

  ul {
    padding-inline-start: 20px;
  }
`;

const TimelineBody = styled.div`
  color: #212121;
  font-size: 1rem;
  line-height: 1.5rem;
  font-family: "Open Sans", "Helvetica Neue", sans-serif;
`;

const TimelineTitle = styled.div`
  flex: 1 1 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    flex-flow: row nowrap;
  }

  h3 {
    font-size: 1.3rem;
    font-weight: 500;
    margin: 0 0 0.5rem;

    @media screen and (min-width: 768px) {
      font-size: 1.5rem;
    }

    @media screen and (min-width: 1024px) {
      font-size: 1.8rem;
    }
  }

  small {
    font-size: 0.8rem;
    color: #424242;
    font-weight: 300;
    margin-top: 0.5rem;

    @media screen and (min-width: 768px) {
      font-size: 1rem;
      margin-top: 0;
    }
  }

  span {
    font-size: 1rem;
    font-weight: 300;
    color: #424242;

    @media screen and (min-width: 768px) {
      font-size: 1.3rem;
    }

    @media screen and (min-width: 1024px) {
      font-size: 1.5rem;
    }
  }
`;

const TimelineLine = styled.div`
  flex-grow: 1;
  background-color: #e0e0e0;
  width: 5px;
  display: none;

  @media screen and (min-width: 375px) {
    display: block;
  }
`;

const TimelineStepper = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 2rem;
  }
`;

interface Props {
  steps: {
    frontmatter: {
      position: string;
      company: string;
      start: string;
      end: string;
      image: {
        childImageSharp: {
          fixed: any;
        };
      };
    };
    body: string;
  }[];
}

export const Timeline: React.FC<Props> = ({ steps }) => {
  return (
    <StyledTimeLine>
      {steps.map((step, id) => (
        <TimelineItem key={id}>
          <TimelineStepper>
            <Img fixed={step.frontmatter.image.childImageSharp.fixed} />
            <TimelineLine />
          </TimelineStepper>
          <TimelineContent>
            <TimelineHeader>
              <Img fixed={step.frontmatter.image.childImageSharp.fixed} />
              <TimelineTitle>
                <div>
                  <h3>{step.frontmatter.position}</h3>
                  <span>{step.frontmatter.company}</span>
                </div>
                <div>
                  <small>
                    {step.frontmatter.start} -{" "}
                    {step.frontmatter.end ?? "Present"}
                  </small>
                </div>
              </TimelineTitle>
            </TimelineHeader>
            <TimelineBody>
              <MDXRenderer>{step.body}</MDXRenderer>
            </TimelineBody>
          </TimelineContent>
        </TimelineItem>
      ))}
    </StyledTimeLine>
  );
};
