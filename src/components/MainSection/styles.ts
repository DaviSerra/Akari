import styled from "styled-components";

export const MainSectionWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 2rem;
  padding: 0;
  background-color: #fff;
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;

  .japanese-title {
    position: relative;
    left: -38%;
    font-family: "Sawarabi Mincho", serif;
    font-size: 10rem;
    color: ${(props) => props.theme["pink-400"]};
    opacity: 0.4;
  }

  .english-title {
    position: relative;
    right: 0.1rem;
    bottom: 1rem;
    display: flex;
    line-height: 1;
    justify-content: end;
    font-family: "Noto Sans", serif;
    font-weight: 400;
    font-size: 5rem;
    color: ${(props) => props.theme["pink-400"]};
  }
`;

export const CenterContent = styled.div`
  position: relative;
  display: flex;
  padding: 0;
  height: 100%;
  overflow: hidden;

  .main-image {
    position: fixed;
    bottom: 0;
    left: 48%;
    transform: translateX(-50%);
    max-width: 70%;
    max-height: 75vh;
    height: auto;
    width: auto;
    z-index: 1;
    object-fit: contain;
  }
`;

export const VerticalLine = styled.div`
  height: 35rem;
  width: 1px;
  bottom: 0;
  background-color: ${(props) => props.theme["pink-400"]};
  position: fixed;
  left: 65%;
  transform: translateX(-50%);
  z-index: 2;
`;

export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 2rem;

  .umbrella-phrase {
    position: relative;
    right: 15rem;
    bottom: 4rem;
    width: 90%;
    height: auto;
    max-width: 100%;
  }


  .japanese-title-2 {
    position: fixed;
    right: -3rem;
    bottom: 2rem;
    font-family: "Sawarabi Mincho", serif;
    font-size: 10rem;
    color: ${(props) => props.theme["pink-400"]};
    opacity: 0.4;
  }

`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: start;
  position: fixed;
  left: 5rem;
  bottom: 3rem;
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme["pink-400"]};
  padding: 10px 30px;
  cursor: pointer;
  font-size: 20px;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: white;
  border: none;
  border-radius: 20px;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme["pink-500"]};
  }
`;

export const LeftButton = styled(Button)`
  border-radius: 20px 0 0 20px;
  margin-right: 5px;

  svg {
    margin-right: 10px;
  }
`;

export const RightButton = styled(Button)`
  border-radius: 0 20px 20px 0;
  margin-left: 5px;

  svg {
    margin-left: 10px;
  }
`;
