import React from 'react';
import PropTypes from 'prop-types';
import RoundButton from "components/_ui/RoundButton";
import HeroTypography from "components/_ui/HeroTypography";
import styled from "@emotion/styled";
import tw from "tailwind.macro";
import dimensions from "styles/dimensions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowAltCircleDown } from "@fortawesome/free-solid-svg-icons"


LandingGraphic.propTypes = {
    cvUrl: PropTypes.string.isRequired,
    githubURL: PropTypes.string.isRequired,
    behanceURL: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired,
};

const RegularDisplayContainer = styled("div")`
    padding-top: 5em;
    margin-bottom: 5em;
    max-width: 100%;
    display: grid;
    grid-template: 
        "topDes topSep topDev" 20%
        "middle middle middle" 60%
        "bottomCV . bottomContact" 20% 
        / 47% 6% 47%;     
    justify-items: center;

    @media(max-width:${dimensions.maxwidthMobile}px) {
        display: none;
    }

    h1 {
        margin-bottom: 1em;
    }
`
const HeroContainer = styled.div`
    grid-area: middle;
    align-self: center;
    margin: 1em 0 4em 0;

`


const DesignerContainer = styled.a`
    ${tw`
        text-lg
        sm:text-3xl
        font-sans
        font-bold
        text-designer-purple
        no-underline
        cursor-pointer
        `
        };
    grid-area: topDes;
    justify-self: end;
    align-self: end;

    &:hover {
        color: #9f78f5;
    }
`
const DeveloperContainer = styled.a`
    ${tw`
        text-lg
        sm:text-3xl
        font-sans
        font-bold
        text-developer-blue
        no-underline
        cursor-pointer
        `
        };
    grid-area: topDev;
    justify-self: start;
    align-self: end;

    &:hover {
        color: #67A2FF;
    }
    
`
const Seperator = styled.div`
    ${tw`
        text-lg
        sm:text-3xl
        text-center
        font-sans
        font-bold
        text-gray-400
        `
        };
    grid-area: topSep;
    justify-self: center;
    align-self: end;
`

const CVButtonContainer = styled.div`
    grid-area: bottomCV;
    justify-self: end;

    @media(max-width:${dimensions.maxwidthMobile}px) {
       justify-self: center;
       align-self: center;
    }
`

const ContactButtonContainer = styled.div`
    grid-area: bottomContact;
    justify-self: start;
    
    @media(max-width:${dimensions.maxwidthMobile}px) {
       justify-self: center;
       display: none;
    }
`

const MobileDisplayContainer = styled.div`
    display: none;
    
    @media(max-width:${dimensions.maxwidthMobile}px) {
        ${tw`
            flex
            flex-col
        `}
        
        h1 {
            ${tw`
                my-0
                leading-tight

            `}
            background: linear-gradient(to right, #5B2AC5 , #3370EE);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        p {
            ${tw`
                text-base
            `}   
            
            a#designer {
                ${tw`
                    font-semibold
                    no-underline
                    text-designer-purple
                `}
                
            }

            a#developer {
                ${tw`
                    font-semibold
                    no-underline
                    text-developer-blue
                `}
            }         
        }
    }   
`

const FindOutMore = styled.a`
    ${tw`
        flex
        flex-row
        self-end
        mt-6
        items-center
        no-underline
        text-black
    `}
    
    p {
        padding-right: 0.5em;
    }
`


const RegularDisplayFragment = ({cvUrl, githubURL, behanceURL}) => {
    return (
        <RegularDisplayContainer>
            <DesignerContainer href={behanceURL}> Designer </DesignerContainer>
            <Seperator>|</Seperator>
            <DeveloperContainer href={githubURL}> Developer</DeveloperContainer>
            <HeroContainer>
                <HeroTypography title="Arthur Lee." weight={800} type="one"/>
            </HeroContainer>
            <CVButtonContainer>
                <RoundButton 
                    onClick={() => window.location.href=cvUrl} 
                    title="View my CV" 
                    type="purple"
                />
            </CVButtonContainer>
            <ContactButtonContainer>
                <RoundButton 
                    onClick={() => window.location.href="#contact"} 
                    title="Contact Me" 
                    type="blue"
                />
            </ContactButtonContainer>
        </RegularDisplayContainer>
    )
}

const MobileDisplayFragment = ({cvUrl, githubURL, behanceURL, aboutText}) => {
    return (
        <MobileDisplayContainer>
            <h1>Design</h1>
            <h1>Technologist</h1>
            <p>
                I’m Arthur, an aspiring <a href={behanceURL} id="designer">designer</a> / <a href={githubURL} id="developer">developer</a>. I am schooling in NUS as a Computer Science major with a minor in Interactive Media Development. I am currently a Software Engineer Intern at StaffAny.
            </p>
            <CVButtonContainer>
                <RoundButton 
                    onClick={() => window.location.href=cvUrl} 
                    title="View my CV" 
                    type="purple"
                />
            </CVButtonContainer>
            <FindOutMore href="#skillsets"> 
                <p>or, find out more </p>
                <FontAwesomeIcon icon={faArrowAltCircleDown} />
            </FindOutMore>

        </MobileDisplayContainer>
    )
}


function LandingGraphic(props) {
    const { cvUrl, githubURL, behanceURL, aboutText } = props;
    return (
        <div>
            <RegularDisplayFragment 
                cvUrl={cvUrl} 
                githubURL={githubURL} 
                behanceURL={behanceURL} 
            />
            <MobileDisplayFragment 
                cvUrl={cvUrl} 
                githubURL={githubURL} 
                behanceURL={behanceURL} 
                aboutText={aboutText} 
            />
        </div>

    );
}

export default LandingGraphic;