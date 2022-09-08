import styled from "styled-components";
const Father = styled.div`
  display: flex;
  flex-direction: column;
  header {
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin: 24px 24px 40px 24px;
  }
  h1 {
    font-family: "Raleway", sans-serif;
    font-weight: 700;
    font-size: 26px;
    color: var(--color-letters);
  }
  form {
    display: flex;
    flex-direction: column;
  }
  input {
    height: 58px;
    width: 90%;
    margin: auto auto 13px auto;
    border-radius: 5px;
    ::placeholder {
      font-family: "Raleway", sans-serif;
      font-weight: 400;
      font-size: 20px;
      color: var(--color-placeholder);
      opacity: 1;
    }
  }
  button {
    margin: auto;
    background-color: var(--color-button);
    width: 90%;
    height: 46px;
    border-radius: 5px;
    color: var(--color-letters);
    font-family: "Raleway", sans-serif;
    font-weight: 700;
    font-size: 20px;
    border: none;
    &:hover {
      cursor: pointer;
    }
    &:active {
      transform: scale(0.95);
    }
  }
`;

export {Father};