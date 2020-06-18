import styled from "styled-components";

export const Sidebar = styled.div``;

export const SidebarLayout = styled.div`
  display: flex;
  flex-flow: row nowrap;
  position: relative;
  align-items: flex-start;
  max-width: 900px;
  margin: 0 auto;

  h3 {
    color: ${({ theme }) => theme.text.main};
    margin-top: 0;
  }

  ${Sidebar} {
    flex: 0 0 30%;
    position: sticky;
    top: 1rem;
    display: none;
    margin-left: 3rem;

    @media screen and (min-width: 1280px) {
      margin-left: 4rem;
    }

    @media screen and (min-width: 760px) {
      display: block;
    }
  }
`;
