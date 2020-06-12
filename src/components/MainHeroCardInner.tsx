import React from "react";
import styled from "styled-components";
import { ProfilePicture, HeroCardTitle, SocialIcons } from ".";

const HeroInner = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  text-align: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    text-align: left;
  }

  p {
    font-weight: 300;
    color: gray;
  }
`;

const Details = styled.div`
  @media screen and (min-width: 768px) {
    margin-left: 1rem;
  }

  p {
    line-height: 1.8rem;
    font-size: 1.2rem;
  }
`;

export const MainHeroCardInner: React.FC = () => {
  return (
    <HeroInner>
      <ProfilePicture />
      <Details>
        <HeroCardTitle>Jeff Hackshaw</HeroCardTitle>
        <p>
          Hi there! I&apos;m a full stack web developer, soon to be Marine Corps
          veteran, science fiction enthusiast, and husband. Thanks for visiting!
        </p>
        <SocialIcons />
      </Details>
    </HeroInner>
  );
};
