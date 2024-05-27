/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { COLORS } from "../../constants";
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';

const MobileMenu = ({ isOpen, onChange, children }) => {
    return (


        <Dialog.Root open={isOpen} onOpenChange={onChange}>
            <Dialog.Trigger asChild>
                {children}
            </Dialog.Trigger>
            <Dialog.Portal>
                <StyledDialogOverlay>

                    <StyledDialogContent>
                        <StyledDialogClose asChild>
                            <UnstyledButton aria-label="Close">
                                <Cross2Icon />
                            </UnstyledButton>
                        </StyledDialogClose>
                        <Wrapper>
                        <Nav>
                            <a href="/sale">Sale</a>
                            <a href="/new">New&nbsp;Releases</a>
                            <a href="/men">Men</a>
                            <a href="/women">Women</a>
                            <a href="/kids">Kids</a>
                            <a href="/collections">Collections</a>
                        </Nav>
                        <Footer>
                            <a href="/terms">Terms and Conditions</a>
                            <a href="/privacy">Privacy Policy</a>
                            <a href="/contact">Contact Us</a>
                        </Footer>
                        </Wrapper>

                    </StyledDialogContent>
                </StyledDialogOverlay>
            </Dialog.Portal>
        </Dialog.Root>

    );
};

const Footer = styled.footer`
  display:flex;
  gap: 10px;
`

const Wrapper = styled.div`
display:flex;
flex-direction:column; 
gap:20px;
  width:fit-content;
  margin: 0 auto;
`
const Nav = styled.nav`
display:flex;
  flex-direction:column;
  align-items: center;
  & a{
    text-decoration:none;
    color: inherit;
  }
`

const StyledDialogClose = styled(Dialog.Close)`
  width:fit-content; 
  align-self: flex-end;
`
const StyledDialogOverlay = styled(Dialog.Overlay)`

  background-color:hsl(0, 0%,0%,0.4);
  position: fixed;
  inset: 0;
  animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);

  @keyframes overlayShow {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const StyledDialogContent = styled(Dialog.Content)`
  display:flex;
  flex-direction:column;
  background-color: white;
  border-radius: 6px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 450px;
  max-height: 85vh;
  padding: 25px;
  animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);

  &:focus {
    outline: none;
  }
`;

export default MobileMenu;
