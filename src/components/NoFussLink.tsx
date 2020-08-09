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

interface Props extends Omit<GatsbyLinkProps<{}>, "ref"> {
  href?: string;
}

export const NoFussLink: React.FC<Props> = ({
  to,
  href,
  children,
  ...rest
}) => {
  const url = href ?? to;

  return !url ? (
    <>{children}</>
  ) : url.startsWith("/") ? (
    <StyledLink to={url} {...rest}>
      {children}
    </StyledLink>
  ) : url.startsWith("#") ? (
    <StyledAnchor href={url} {...rest}>
      {children}
    </StyledAnchor>
  ) : (
    <StyledAnchor
      target="_blank"
      rel="noopener noreferrer"
      href={url}
      {...rest}
    >
      {children}
    </StyledAnchor>
  );
};
