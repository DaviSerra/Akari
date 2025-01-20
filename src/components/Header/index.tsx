import { MagnifyingGlass, ShoppingBag } from "@phosphor-icons/react";
import {
  HeaderWrapper,
  LogoContainer,
  Logo,
  Nav,
  RotatedNumber,
  IconsWrapper,
} from "./styles";
import akariLogo from "../../assets/akira-logo.png";

const Header = () => {
  return (
    <HeaderWrapper>
      <LogoContainer>
        <Logo src={akariLogo} alt="AKARI Logo" />
      </LogoContainer>
      <Nav>
        <ul>
          <li>Kōkei</li>
          <li>Fūga</li>
          <li>Musubi</li>
          <li>Tabiji</li>
        </ul>
      </Nav>
      <RotatedNumber>2025</RotatedNumber>
      <IconsWrapper>
        <ShoppingBag />
        <MagnifyingGlass />
      </IconsWrapper>
    </HeaderWrapper>
  );
};

export default Header;
