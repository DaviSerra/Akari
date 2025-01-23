import styled from "styled-components";

export const MainSectionWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 2rem;
  padding: 0;
  background-color: ${(props) => props.theme["white"]};
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 1rem;
  }
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

    @media (max-width: 768px) {
      white-space: nowrap;
      bottom: 4rem;
      left: -13rem;
      position: relative;
      font-size: 5rem;
    }
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

    @media (max-width: 768px) {
      font-size: 3rem;
      justify-content: center;
      display: none;
    }
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

    @media (max-width: 768px) {
      max-width: 65%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: fixed;
      bottom: 0;
    }
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

  @media (max-width: 1600px) {
    height: 30rem;
  }

  @media (max-width: 1400px) {
    height: 25rem;
  }

  @media (max-width: 1300px) {
    height: 25rem;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const RightContent = styled.div`
  .umbrella-phrase {
    position: relative;
    right: 15rem;
    bottom: 9rem;
    width: 80%;

    @media (max-width: 1600px) {
      position: relative;
      right: 15rem;
      bottom: 14rem;
      width: 80%;
    }

    @media (max-width: 1400px) {
      position: relative;
      right: 12rem;
      bottom: 20rem;
      max-width: 70%;
      margin: 0 auto;
    }

    @media (max-width: 576px) {
      display: none;
    }
  }

  .japanese-title-2 {
    position: fixed;
    right: -3rem;
    bottom: 2rem;
    font-family: "Sawarabi Mincho", serif;
    font-size: 9rem;
    color: ${(props) => props.theme["pink-400"]};
    opacity: 0.4;

    @media (max-width: 1600px) {
      font-size: 8rem;
    }

    @media (max-width: 1400px) {
      font-size: 6rem;
    }

    @media (max-width: 1300px) {
      font-size: 7rem;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: start;
  position: fixed;
  left: 5rem;
  bottom: 3rem;

  @media (max-width: 768px) {
    left: auto;
    justify-content: space-between;
    width: 100%;
    padding: 1rem 1rem 0 1rem;
  }
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

  @media (max-width: 768px) {
    padding: 8px 20px;
    font-size: 16px;
  }

  @media (max-width: 1300px) {
    padding: 8px 20px;
    font-size: 16px;
  }

  @media (max-width: 1400px) {
    padding: 8px 20px;
    font-size: 16px;
  }

  @media (max-width: 1600px) {
    padding: 8px 20px;
    font-size: 16px;
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
