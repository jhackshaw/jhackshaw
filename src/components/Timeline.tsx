import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";
import { MDXRenderer } from "gatsby-plugin-mdx";

const TimelineItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  flex-wrap: nowrap;
`;

const TimelineContent = styled.div`
  flex: 1 1 100%;

  ul {
    padding-inline-start: 20px;
  }
`;

const StyledTimeLine = styled.div`
  ${TimelineItem}:not(:last-child) {
    ${TimelineContent} {
      padding-bottom: 3rem;
    }
  }
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

    @media screen and (min-width: 760px) {
      display: none !important;
    }
  }
`;

const TimelineBody = styled.div`
  font-size: 1rem;
  line-height: 1.5rem;
  font-family: var(--font-family);
`;

const TimelineTitle = styled.div`
  flex: 1 1 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: space-between;

  @media screen and (min-width: 760px) {
    flex-flow: row nowrap;
  }

  h3 {
    color: var(--text-main);
    font-size: 1.25rem;
    line-height: 1.6;
    font-weight: 500;
    margin: 0 0 0.5rem;
  }

  small {
    color: var(--text-lighter);
    font-weight: 300;
    font-size: 0.8rem;

    @media screen and (min-width: 760px) {
      margin-top: 0;
      font-size: 1rem;
    }
  }

  span {
    margin: 0.2rem 0;
    color: var(--text-light);
    font-weight: 400;
  }
`;

const TimelineLine = styled.div`
  flex-grow: 1;
  background-color: var(--text-lightest);
  width: 3px;
  display: none;

  @media screen and (min-width: 375px) {
    display: block;
  }
`;

const TimelineStepper = styled.div`
  display: none;

  @media screen and (min-width: 760px) {
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
