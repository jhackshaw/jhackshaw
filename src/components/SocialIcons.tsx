import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  font-weight: 200;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
    margin-left: -0.5rem;
  }

  a {
    margin: 0 0.5rem;
  }
`;

export const SocialIcons: React.FC = () => {
  return (
    <Wrapper>
      <a href="https://twitter.com/jhackshaw/" title="Twitter">
        <FaTwitter size={28} color="#1DA1F2" />
      </a>
      <a href="https://linkedin.com/in/jeffrey-hackshaw/" title="LinkedIn">
        <FaLinkedin size={28} color="#2867B2" />
      </a>
      <a href="https://github.com/jhackshaw/" title="Personal GitHub">
        <FaGithub size={28} color="#211F1F" />
      </a>
      <a href="https://github.com/jhackshaw-dds/" title="DDS GitHub Account">
        <FaGithub size={28} color="211F1F" />
      </a>
    </Wrapper>
  );
};
