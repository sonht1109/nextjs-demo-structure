import styled from "styled-components";

const SHeader = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #e3e3e3;
  padding: 0 10px;
  .menu {
    span {
      display: inline-block;
      margin: 0 5px;
    }
  }
  .logo {
    img {
      width: 110px;
      height: auto;
    }
  }
`;

export default SHeader;
