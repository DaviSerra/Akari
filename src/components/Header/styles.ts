import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  position: relative;
`;

export const LogoContainer = styled.div`
  flex: 0 0 auto;
  width: 10rem;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: contain;
`;

export const Nav = styled.nav`
  flex: 1;
  display: flex;
  justify-content: center;
  margin-right: 10rem;

  ul {
    display: flex;
    align-items: start;
    gap: 2rem;
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      font-family: "Sawarabi Gothic", serif;
      font-size: 1.6rem;
      position: relative;
      cursor: pointer;
      color: ${(props) => props.theme["dark-900"]};
      transition: color 0.3s ease;

      &:hover {
        color: ${(props) => props.theme["red-500"]};
      }

      &:hover::after {
        width: 100%;
      }

      &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 0;
        height: 2px;
        background-color: ${(props) => props.theme["red-500"]};
        transition: width 0.4s ease;
      }
    }
  }
`;

export const RotatedNumber = styled.div`
  position: absolute;
  right: 15rem;
  top: -8rem;
  font-size: 16.25rem;
  font-family: "Sawarabi Mincho", serif;
  color: ${(props) => props.theme["red-500"]};
  writing-mode: vertical-rl;
  z-index: 1;

  @media (max-width: 1600px) {
    font-size: 14.25rem;
    position: absolute;
    right: 10rem;
    top: -7rem;
  }

  @media (max-width: 1400px) {
    font-size: 12.25rem;
    position: absolute;
    right: 10rem;
    top: -6rem;
  }
`;

export const IconsWrapper = styled.div`
  display: flex;
  gap: 1rem;

  svg {
    cursor: pointer;
    color: ${(props) => props.theme["red-500"]};
    width: 2rem;
    height: 2rem;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      color: ${(props) => props.theme["pink-500"]};
    }
  }
`;
