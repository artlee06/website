import React from 'react';
import PropTypes from 'prop-types';
import styled from "@emotion/styled";
import tw from "tailwind.macro";
import { Link } from "gatsby";
import HamburgerMenu from "react-hamburger-menu";

import dimensions from "styles/dimensions";

import {Animated} from "react-animated-css";


NavMenu.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    handleClick: PropTypes.func.isRequired,
    cvUrl: PropTypes.string.isRequired,
};

const OverallContainer = styled("div")`
    ${tw`
        fixed
        top-0
        left-0
        h-full
        w-full
        flex
        flex-row
        justify-between


        bg-white

    `}
`

const NavContainer = styled.div`
    ${tw`
        flex
        flex-col
        justify-center
        pr-12
    `}

    a {
        ${tw`
            no-underline
            text-6xl
            font-bold
            text-gray-400
            text-right
        `}

        &:hover, &:active {
            background: linear-gradient(to right, #5B2AC5, 40%, #3370EE);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }

`

const LinksContainer = styled.div`
    ${tw`
        flex
        flex-col
        justify-center
        pl-12
    `}

    a {
        ${tw`
            no-underline
            text-xl
            font-semibold
            text-black
            my-4
        `}

    }
`

const MenuDisplay = ({cvUrl}) => {
    return (
        <OverallContainer>
            <LinksContainer>
                <a href="https://github.com/artlee06">Github</a>
                <a href="https://www.behance.net/ArthurLeeYingKiu">Behance</a>
                <a href="https://www.linkedin.com/in/arthur-lee-ying-kiu/">LinkedIn</a>
                <a href="mailto:ykarthurlee@gmail.com">Email</a>
                <a href={cvUrl}>CV</a>
            </LinksContainer>
            <NavContainer>
                <Link to="/">Home</Link>
                <Link to="#about">About Me</Link>
                <Link to="#experience">Experience</Link>
                <Link to="#projects">Projects</Link>
                <Link to="#contact">Contact</Link>
            </NavContainer>

        </OverallContainer>
    );
}


const ButtonWrapper = styled.div`
    ${tw`
        cursor-pointer
        fixed
        w-full
        bg-white
        z-10
        pl-4
    `}

    @media(max-width:${dimensions.maxwidthMobile}px) {
        ${tw`
            cursor-pointer
            fixed
            w-full
            bg-white
            z-10
            pl-0
            sm:pl-4
        `}  
    }

`

function NavMenu(props) {
    const {isOpen, handleClick, cvUrl} = props;
    return (
        <div>
            {isOpen && 
                <MenuDisplay cvUrl={cvUrl} /> 
            }
            <ButtonWrapper>
                <HamburgerMenu 
                    isOpen={isOpen}
                    menuClicked={handleClick}
                    width={18}
                    height={15}
                    strokeWidth={2}
                    rotate={0}
                    color='black'
                    borderRadius={0}
                    animationDuration={0.5}
                />
            </ButtonWrapper>
        </div>
    );
}

export default NavMenu;