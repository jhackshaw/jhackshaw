import React from "react";
import { TOC } from "../queries";
import styled from "styled-components";
import { useActiveHash, getHeadingIds } from "../hooks";

interface LinkProps {
  active?: boolean;
}

const ActiveLink = styled.a<LinkProps>`
  text-decoration: none;
  color: ${({ active }) =>
    active ? "var(--text-title);" : "var(--text-light);"};
  :hover {
    color: var(--text-title);
  }
`;

const SubHeaders = styled.div`
  font-size: 0.9rem;
  padding: 0.5rem 0 0 1rem;
  line-height: 1.5;
  font-weight: 300;

  a {
    display: block;
  }
`;

const TOCItem = styled.div`
  display: block;
  padding: 1rem 1rem;
  font-family: var(--font-family);
  line-height: 1.5;
  font-weight: 500;
  font-size: 1.1rem;
`;

const StyledTOC = styled.div`
  border-radius: 1rem;
  border: 1px solid var(--text-lightest); 
  color: var(--text-light);
  font-weight: 300;

  ${TOCItem} + ${TOCItem} {
    border-top: 1px solid var(--text-lightest);
  }

  h3 {
    color: var(--text-main);
  }
`;

interface Props {
  items: TOC[];
}

export const TableOfContents: React.FC<Props> = ({ items }) => {
  const activeHash = useActiveHash(getHeadingIds(items));
  return (
    <StyledTOC>
      {items.map(item => (
        <TOCItem key={item.url}>
          <ActiveLink href={item.url} active={item.url === activeHash}>
            {item.title}
          </ActiveLink>
          {item.items && (
            <SubHeaders>
              {item.items.map(subitem => (
                <ActiveLink
                  href={subitem.url}
                  key={subitem.url}
                  active={subitem.url === activeHash}
                >
                  {subitem.title}
                </ActiveLink>
              ))}
            </SubHeaders>
          )}
        </TOCItem>
      ))}
    </StyledTOC>
  );
};
