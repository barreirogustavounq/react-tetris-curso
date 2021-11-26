import styled from "styled-components";

export const StyledTetrisWrapper = styled.div`
  width: 100 vw;
  height: 100vh;
  background-size: cover;
  overflow: hidden;
`;

export const StyledTetris = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 40px 40px 40px 0px;
  margin: 0px auto;
  max-width: 900px;

  aside {
    width: 100%;
    max-width: 200px;
    display: block;
    padding: 0 20px;
  }
`;
