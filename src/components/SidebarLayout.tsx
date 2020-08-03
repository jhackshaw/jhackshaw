import styled from "styled-components";

interface Props {
  maxWidth?: string;
}

export const Sidebar = styled.div``;
export const SidebarTitle = styled.h3``;
export const SidebarContent = styled.div``;

export const SidebarLayout = styled.div<Props>`
  display: flex;
  flex-flow: row nowrap;
  position: relative;
  align-items: flex-start;
  max-width: ${({ maxWidth }) => maxWidth ?? '1000px' };
  margin: 0 auto;

  ${SidebarTitle} {
    color: var(--text-main);
    margin-top: 0;
  }

  ${SidebarContent} {
    flex: 1 1 100%;
    position: relative;
    overflow: hidden;
  }

  ${Sidebar} {
    flex: 0 0 30%;
    position: sticky;
    top: 2rem;
    display: none;
    margin-left: 5rem;

    @media screen and (min-width: 1280px) {
      margin-left: 6rem;
    }

    @media screen and (min-width: 760px) {
      display: block;
    }
  }
`;
