import React from "react";
import styled from "styled-components";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const StyledFooter = styled.div`
  position: relative;
  background-color: #3a424e;
  margin-top: 5rem;
`;

const FooterContent = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  padding: 3rem 1rem;
  margin: 0 auto;
  max-width: 1200px;

  @media screen and (min-width: 760px) {
    padding: 3rem;
  }

  @media screen and (min-width: 1280px) {
    padding: 3rem 5rem;
  }

  h3 {
    color: #00bde3;
    font-size: 1.6rem;
    margin-top: 0;
    margin-bottom: 0.5rem;
  }

  p {
    margin: 0;
  }
`;

const IconLinks = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;

  a {
    margin: 1rem 1rem 0.5rem 0;
    color: #fff;
  }
`;

export const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <FooterContent>
        <div>
          <h3>Jeff Hackshaw</h3>
          <span>Thanks for reading!</span>
        </div>
        <div>
          <IconLinks>
            <a
              href="https://twitter.com/jhackshaw/"
              target="_blank"
              rel="noopener noreferrer"
              title="Twitter"
            >
              <FaTwitter size={16} />
            </a>
            <a
              href="https://linkedin.com/in/jeffrey-hackshaw/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <FaLinkedin size={16} />
            </a>
            <a href="mailto:jeffrey.hackshaw@gmail.com" title="Email">
              <FaEnvelope size={16} />
            </a>
            <a
              href="https://github.com/jhackshaw/"
              target="_blank"
              rel="noopener noreferrer"
              title="Personal GitHub"
            >
              <FaGithub size={16} />
            </a>
            <a
              href="https://github.com/jhackshaw-dds/"
              target="_blank"
              rel="noopener noreferrer"
              title="DDS GitHub Account"
            >
              <FaGithub size={16} />
            </a>
          </IconLinks>
          <small>&copy; Copyright 2020, Jeff Hackshaw</small>
        </div>
      </FooterContent>
    </StyledFooter>
  );
};
