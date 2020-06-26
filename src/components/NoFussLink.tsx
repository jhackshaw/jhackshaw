import React from "react";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import { Link, GatsbyLinkProps } from "gatsby";
import styled from "styled-components";

const StyledAnchor = styled(OutboundLink)`
  text-decoration: none;
  color: inherit;
`;

const StyledLink = styled(Link)<GatsbyLinkProps<{}>>`
  text-decoration: none;
  color: inherit;
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
  ) : to.startsWith("#") ? (
    <StyledAnchor href={to}>{children}</StyledAnchor>
  ) : (
    <StyledAnchor target="_blank" rel="noopener noreferrer" href={to}>
      {children}
    </StyledAnchor>
  );
};
