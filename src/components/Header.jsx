import React, { useState } from "react";
import { Link } from "gatsby";
import tw from "tailwind.macro";
import styled from "@emotion/styled";
import colors from "styles/colors";
import dimensions from "styles/dimensions";
import Logo from "components/_ui/Logo";
import NavMenu from "components/_ui/NavMenu";

const HeaderContainer = styled("div")`
    padding-top: 3em;
    padding-bottom: 3em;
    @media(max-width: ${dimensions.maxwidthMobile}px) {
        padding-top: 1em;
        padding-bottom: 1em;
    }

`

const HeaderContent = styled("div")`
    display: flex;
    justify-content: space-between;
    @media(max-width: ${dimensions.maxwidthMobile}px) {
        svg {
            width: 50px;
        }
    }
    ${tw`
        items-center
    `}
`

const HeaderLinks = styled("div")`
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-gap: 7em;
    justify-content: flex-end;
    width: 100%;
    max-width: 200px;

    @media(max-width: ${dimensions.maxwidthTablet}px) {
        grid-gap: 5.5em;
    }

    @media(max-width: ${dimensions.maxwidthMobile}px) {
        grid-gap: 2.5em;
        svg {
            width: 40px;
        }
    }

    a {
        color: currentColor;
        text-decoration: none;
        border-bottom: 3px solid transparent;
        font-weight: 600;
        font-size: 0.95em;
        height: 100%;
        padding-bottom: 1.5em;
        padding-top: 0.5em;
        display: block;
        position: relative;

        

        &:after {
            position: absolute;
            content: "";
            bottom: 0;
            width: 18px;
            height: 3px;
            background: transparent;
            bottom: -3px;
            right: 50%;
            margin-right: -9px;
            transition: 100ms ease-in-out background;
        }

        &:hover {
            &:after {
                background: ${colors.blue500};
                transition: 100ms ease-in-out background;
            }
        }

        &.Link--is-active {
            &:after {
                background: ${colors.blue500};
                transition: 100ms ease-in-out background;
            }
        }
    }
`

const initialState = {
    isMenuOpen: false
};

const Header = ({cvUrl}) => {
    const [menuState, setMenu] = useState(initialState);
    const { isMenuOpen } = menuState;

    const handleClick = () => (
        setMenu((menuState) => {
            const copy = {...menuState};
            const newState = {
                isMenuOpen: !copy.isMenuOpen
            }
            return newState;
        })
    );


    return (
        <HeaderContainer>
            <HeaderContent>
                <Link to="/">
                    <Logo/>
                </Link>
                <NavMenu isOpen={isMenuOpen} handleClick={handleClick} cvUrl={cvUrl}/>
            </HeaderContent>
        </HeaderContainer>
    )
    
}


export default Header;