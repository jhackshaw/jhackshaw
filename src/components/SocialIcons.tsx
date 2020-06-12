import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  font-weight: 300;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
    margin-left: -0.5rem;
  }

  a {
    margin: 0 0.5rem;
    color: gray;
  }
`;

export const SocialIcons: React.FC = () => {
  return (
    <Wrapper>
      <a href="https://twitter.com/jhackshaw/">
        <FaTwitter size={28} color="inherit" />
      </a>
      <a href="https://linkedin.com/in/jeffrey-hackshaw/">
        <FaLinkedin size={28} color="inherit" />
      </a>
      <a href="https://github.com/jhackshaw/">
        <FaGithub size={28} color="inherit" />
      </a>
      <a href="https://github.com/jhackshaw-dds/">
        <FaGithub size={28} color="inherit" />
      </a>
    </Wrapper>
  );
};
