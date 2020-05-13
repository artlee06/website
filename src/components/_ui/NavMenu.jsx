import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import styled from "@emotion/styled";
import tw from "tailwind.macro";
import { Link } from "gatsby";
import HamburgerMenu from "react-hamburger-menu";

import dimensions from "styles/dimensions";


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
        z-10


        bg-white
    `}

    @media(max-width: ${dimensions.maxwidthMobile}px) {
        ${tw`
            flex-col
            items-start
        `}
    }

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

        @media(max-width: ${dimensions.maxwidthMobile}px) {
            ${tw`
                text-5xl
                text-left
                ml-4
            `}
        }

        .active {
            a {
                background: linear-gradient(to right, #5B2AC5, 40%, #3370EE);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
            color: blue;
        }
    }

    @media(max-width: ${dimensions.maxwidthMobile}px) {
            ${tw`
                pr-0
                ml-4
                mb-4
            `}
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

        @media(max-width: ${dimensions.maxwidthMobile}px) {
            ${tw`
                text-md
                text-left
                my-0
            `}
        }

    }

    @media(max-width: ${dimensions.maxwidthMobile}px) {
        ${tw`
            pl-0
            ml-8
            mt-8
        `}
    }
`

const ButtonWrapper = styled.div`
    ${tw`
        cursor-pointer
        bg-white
        z-40
        p-4
        rounded-full
        fixed
    `}
    top: 2.5em;
    right: 2em;


    @media(max-width:${dimensions.maxwidthMobile}px) {
        top: 1em;
        right: 1em;  
    }

`

const activeStyle = {
    background: "linear-gradient(to right, #5B2AC5, 40%, #3370EE)",
    webkitBackgroundClip: "text",
    webkitTextFillColor: "transparent"
}

const MenuDisplay = ({cvUrl, isSectionInView}) => {
    
    const {home, skillsets, experience, projects, contact} = isSectionInView;

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
                    <Link to="/" style={home ? activeStyle : null}>Home</Link>
                    <Link to="#skillsets" style={skillsets ? activeStyle : null}>Skillsets</Link>
                    <Link to="#experience" style={experience ? activeStyle : null}>Experience</Link>
                    <Link to="#projects" style={projects ? activeStyle : null}>Projects</Link>
                    <Link to="#contact" style={contact ? activeStyle : null}>Contact</Link>
                </NavContainer>
        </OverallContainer>
    );
}

const notableElementIds = ["home", "skillsets", "experience", "projects", "contact"];

const isInView = (element) => {
    if (element === null) {
        return false;
    } else {
        const rect = element.getBoundingClientRect(); // gets the element's bounding area including padding
        return rect.top >= 0 && rect.bottom <= window.innerHeight;  
    }
}

const getElement = (id) => {
    return document.getElementById(id);
}

const allElements = notableElementIds.map((id) => {
    return {
        id: id, 
        element: getElement(id)
    };
});

const handleScroll = (setState) => {
    allElements.forEach((object) => {
        const id = object.id;
        const element = object.element;
        setState((inViewState) => {  
            const newState = {
                ...inViewState
            };
            newState[id] = isInView(element);
            console.log(newState);
            return newState;
        });
        console.log(id + " " + isInView(element));
    });
}

const initialState = {
    home: true,
    skillsets: false,
    experience: false,
    projects: false,
    contact: false,
}


function NavMenu(props) {
    const {isOpen, handleClick, cvUrl} = props;

    const [isSectionInView, setInView] = useState(initialState);

    useEffect(() => {
        window.addEventListener("scroll", () => handleScroll(setInView));
    }, []);

    return (
        <div>
            {isOpen && 
                <MenuDisplay cvUrl={cvUrl} isSectionInView={isSectionInView} /> 
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
                    borderRadius={20}
                    animationDuration={0.5}
                />
            </ButtonWrapper>
        </div>
    );
}

export default NavMenu;