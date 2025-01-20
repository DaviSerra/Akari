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
    font-size: 8rem;
    color: ${(props) => props.theme["pink-400"]};
    opacity: 0.4;
  }

  .english-title {
    position: relative;
    left: 9rem;
    margin-top: 1rem;
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

  .vertical-text {
    font-family: "Sans-serif";
    font-size: 1rem;
    color: #8b0000;
    writing-mode: vertical-rl;
    text-align: center;
    margin-bottom: 2rem;
  }

  .decorative-icon {
    width: 3rem;
    height: 3rem;
    background-color: #8b0000;
    border-radius: 50%;
  }
`;
