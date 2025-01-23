import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  padding: 1.5rem;
  position: relative;

  @media (max-width: 768px) {
    padding: 1rem;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const LogoContainer = styled.div`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10rem;

  @media (max-width: 768px) {
    width: 8rem;
    display: flex;
    justify-content: center;
    align-self: center;
  }
`;

export const Logo = styled.img`
  height: auto;
  object-fit: contain;

  @media (max-width: 768px) {
    width: 60%;
  }
`;

export const Nav = styled.nav`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: start;
  margin-top: 2rem;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;

    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }
  }

  ul {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      font-family: "Sawarabi Gothic", serif;
      font-size: 1.4rem;
      position: relative;
      cursor: pointer;
      color: ${(props) => props.theme["dark-900"]};
      transition: color 0.3s ease;

      &:hover {
        color: ${(props) => props.theme["red-500"]};
      }

      &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -0.2rem;
        width: 0;
        height: 2px;
        background-color: ${(props) => props.theme["red-500"]};
        transition: width 0.4s ease;
      }

      &:hover::after {
        width: 100%;
      }
    }
  }
`;

export const IconsWrapper = styled.div`
  display: flex;
  gap: 0.8rem;

  svg {
    cursor: pointer;
    margin-top: 2rem;
    color: ${(props) => props.theme["red-500"]};
    width: 1.8rem;
    height: 1.8rem;
    transition: color 0.3s ease;

    &:hover {
      color: ${(props) => props.theme["pink-500"]};
    }
  }

  @media (max-width: 768px) {
    position: absolute;
    right: 1rem;
    svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;

export const RotatedNumber = styled.div`
  position: absolute;
  right: 15rem;
  top: -9rem;
  font-size: 16.25rem;
  font-family: "Sawarabi Mincho", serif;
  color: ${(props) => props.theme["red-500"]};
  writing-mode: vertical-rl;
  z-index: 1;


  @media (max-width: 1600px) {
    font-size: 14rem;
  }

  @media (max-width: 1400px) {
    font-size: 12rem;
  }

  @media (max-width: 1300px) {
    position: absolute;
    font-size: 10rem;
    right: 14rem;
    top: -5rem;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
