import React from "react";
import { TOC } from "../queries";
import { NoFussLink } from "../components";
import styled from "styled-components";

const SubHeaders = styled.div`
  font-size: 0.8rem;
  padding: 0.5rem 0 0 1rem;
  line-height: 1.2;
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

  a:hover {
    color: var(--text-title);
  }

  color: var(--text-light);
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
  console.log(items);
  return (
    <StyledTOC>
      {items.map(item => (
        <TOCItem key={item.url}>
          <NoFussLink to={item.url}>{item.title}</NoFussLink>
          {item.items && (
            <SubHeaders>
              {item.items.map(subitem => (
                <NoFussLink to={subitem.url} key={subitem.url}>
                  {subitem.title}
                </NoFussLink>
              ))}
            </SubHeaders>
          )}
        </TOCItem>
      ))}
    </StyledTOC>
  );
};
