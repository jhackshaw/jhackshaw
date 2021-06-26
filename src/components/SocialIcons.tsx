import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaReddit
} from "react-icons/fa";
import styled from "styled-components";
import { NoFussLink } from "./NoFussLink";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  font-weight: 200;

  @media screen and (min-width: 760px) {
    justify-content: flex-start;
    margin-left: -0.5rem;
  }

  a {
    margin: 0 0.5rem;
    color: var(--text-light);
  }
`;

export const SocialIcons: React.FC = () => {
  return (
    <Wrapper>
      <NoFussLink
        to="https://linkedin.com/in/jeffrey-hackshaw/"
        title="LinkedIn"
      >
        <FaLinkedin size={28} color="#2867B2" />
      </NoFussLink>
      <NoFussLink to="https://github.com/jhackshaw/" title="Personal GitHub">
        <FaGithub size={28} />
      </NoFussLink>
      <a href="mailto:jeffrey.hackshaw@gmail.com" title="Email">
        <FaEnvelope size={28} />
      </a>
    </Wrapper>
  );
};
