import React from "react";
import { Link, GatsbyLinkProps } from "gatsby";
import styled from "styled-components";

const StyledAnchor = styled.a`
  text-decoration: none;
  color: #000;
`;

const StyledLink = styled(Link)<GatsbyLinkProps<{}>>`
  text-decoration: none;
  color: #000;
`;

export const NoFussLink: React.FC<Omit<GatsbyLinkProps<{}>, "ref">> = ({
  to,
  children,
  ...rest
}) => {
  return !to ? (
    <>{children}</>
  ) : to.startsWith("/") ? (
    <StyledLink to={to} {...rest}>
      {children}
    </StyledLink>
  ) : (
    <StyledAnchor target="_black" rel="noopener noreferrer" href={to}>
      {children}
    </StyledAnchor>
  );
};
