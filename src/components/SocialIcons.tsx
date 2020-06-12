import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
    margin-left: -12px;
  }

  a {
    margin: 0 12px;
    color: #000;
  }
`;

export const SocialIcons: React.FC = () => {
  return (
    <Wrapper>
      <a href="https://twitter.com/jhackshaw/">
        <FaTwitter size={20} />
      </a>
      <a href="https://linkedin.com/in/jeffrey-hackshaw/">
        <FaLinkedin size={20} />
      </a>
      <a href="https://github.com/jhackshaw/">
        <FaGithub size={20} />
      </a>
      <a href="https://github.com/jhackshaw-dds/">
        <FaGithub size={20} />
      </a>
    </Wrapper>
  );
};
