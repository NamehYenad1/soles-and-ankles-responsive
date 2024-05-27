import React, {useEffect} from 'react';
import styled from 'styled-components/macro';
import { COLORS, WEIGHTS, QUERIES } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";

const Header = () => {
    const [showMobileMenu, setShowMobileMenu] = React.useState(false);
    const handleMobileMenuToggle = () => {
        console.log('Toggling mobile menu:', !showMobileMenu);
        setShowMobileMenu(prevState => {
            console.log('Updating state to:', !prevState);
            return !prevState;
        });
    };

    return (
        <header>
            <SuperHeader />
            <MainHeader>
                <Side>
                    <Logo />
                </Side>
                <Nav>
                    <NavLink href="/sale">Sale</NavLink>
                    <NavLink href="/new">New&nbsp;Releases</NavLink>
                    <NavLink href="/men">Men</NavLink>
                    <NavLink href="/women">Women</NavLink>
                    <NavLink href="/kids">Kids</NavLink>
                    <NavLink href="/collections">Collections</NavLink>
                </Nav>
                <Side>
                    <MobileIcons>
                        <UnstyledButton>
                            <Icon id={'shopping-bag'} strokeWidth={2} />
                        </UnstyledButton>
                        <UnstyledButton>
                            <Icon id={'search'} strokeWidth={2} />
                        </UnstyledButton>
                        <MobileMenu
                            isOpen={showMobileMenu}
                            onChange={setShowMobileMenu}
                        >
                            <UnstyledButton >
                                <Icon id={showMobileMenu ? 'close' : 'menu'} strokeWidth={2} />
                            </UnstyledButton>
                        </MobileMenu>
                    </MobileIcons>
                </Side>
            </MainHeader>
        </header>
    );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;

  overflow: auto;
  border-bottom: 1px solid ${COLORS.gray[300]};
  @media (${QUERIES.tabletAndBelow}) {
    border-top: 8px solid ${COLORS.gray[900]};
    justify-content: space-between;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(0.938rem, 5vw - 2rem, 3rem);
  margin: 0px 48px;
  @media (${QUERIES.tabletAndBelow}) {
    display: none;
  }
`;

const Side = styled.div`
  flex: 1;
  @media (${QUERIES.tabletAndBelow}) {
    flex: 0;
  }
`;

const MobileIcons = styled.div`
  display: none;
  @media (${QUERIES.tabletAndBelow}) {
    display: flex;
    gap: clamp(0.75rem, 5vw - 1.25rem, 2rem);
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
