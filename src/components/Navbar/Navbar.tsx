import { useState } from "react";
import { Link } from "react-router-dom";
import Icons from "src/assets/Icons";
import colors from "src/constants/colors";
import styled, { css } from "styled-components";

interface MenuProps {
  to: string;
  name: string;
  isPreparing?: boolean;
}

const Menu = ({ to, name, isPreparing }: MenuProps) => {
  return (
    <MenuWrapper $isPreparing={isPreparing}>
      <Link to={to} style={{ color: "inherit" }}>
        {name} {isPreparing && "(preparing)"}
      </Link>
    </MenuWrapper>
  );
};

const MenuWrapper = styled.ul<{ $isPreparing?: boolean }>`
  width: 100%;
  background-color: ${colors.dark};
  display: flex;
  justify-content: center;
  padding: 15px 0;

  color: ${colors.white};
  ${({ $isPreparing }) =>
    $isPreparing &&
    css`
      color: ${colors.grey};
    `}
`;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenuOpen = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <Wrapper $isHidden={!isMenuOpen}>
      <HiddenNav>
        <Menu to="/" name="blogs" isPreparing />
        <Menu to="/" name="about me" />
      </HiddenNav>
      <LogoWrapper>
        {isMenuOpen ? (
          <Icons.CrownOutlined style={LogoStyle} onClick={toggleMenuOpen} />
        ) : (
          <Icons.CrownFilled style={LogoStyle} onClick={toggleMenuOpen} />
        )}
      </LogoWrapper>
    </Wrapper>
  );
};

const HiddenNav = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${colors.dark};
`;

const Wrapper = styled.nav<{ $isHidden: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: ${colors.background};

  ${({ $isHidden }) =>
    $isHidden &&
    css`
      transform: translateY(-106px);
    `}

  transition: 0.2s;
  position: fixed;
  z-index: 100;
`;

const LogoStyle = {
  cursor: "pointer",
};

const LogoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 15px 0;
`;

export default Navbar;
