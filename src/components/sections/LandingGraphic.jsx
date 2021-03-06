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
    padding-top: 2em;
    margin-bottom: 7em;
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
        font-semibold
        text-designer-purple
        no-underline
        cursor-pointer
        px-2
        `
    };
    grid-area: topDes;
    justify-self: end;
    align-self: end;

    background: linear-gradient(to bottom, #5B2AC5, 0%, #5B2AC5);
    background-position: 0 100%;
    background-repeat: repeat-x;
    background-size: 2px 0px;
    transition: background-size .2s;

    &:hover {
        color: #fff;
        background-size: 2px 50px;
    }
`
const DeveloperContainer = styled.a`
    ${tw`
        text-lg
        sm:text-3xl
        font-sans
        font-semibold
        text-developer-blue
        no-underline
        cursor-pointer
        px-2
        `
    };
    grid-area: topDev;
    justify-self: start;
    align-self: end;

    background: linear-gradient(to bottom, #3370EE, 0%, #3370EE);
    background-position: 0 100%;
    background-repeat: repeat-x;
    background-size: 2px 0px;
    transition: background-size .2s;

    &:hover {
        color: #fff;
        background-size: 2px 50px;
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
    display: none;
    }
`

const ContactButtonContainer = styled.div`
    grid-area: bottomContact;
    justify-self: start;
    
    @media(max-width:${dimensions.maxwidthMobile}px) {
       justify-self: flex-end;
       align-self: flex-start;
    }
`

const MobileDisplayContainer = styled.div`
    display: none;
    
    @media(max-width:${dimensions.maxwidthMobile}px) {
        ${tw`
            flex
            flex-col
            justify-center
        `}
        min-height: 70vh;
        
        h1 {
            ${tw`
                my-0
            `}
            background: linear-gradient(to right, #5B2AC5 , #3370EE);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            line-height: 1.35em;
        }

        p {
            ${tw`
                text-base
                mt-6
                mb-8
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


const RegularDisplayFragment = ({ cvUrl, githubURL, behanceURL }) => {
    return (
        <RegularDisplayContainer>
            <DesignerContainer href={behanceURL}> Designer </DesignerContainer>
            <Seperator>|</Seperator>
            <DeveloperContainer href={githubURL}> Engineer </DeveloperContainer>
            <HeroContainer>
                <HeroTypography title="Arthur Lee" weight={800} type="one" />
            </HeroContainer>
            <CVButtonContainer>
                <RoundButton
                    onClick={() => window.location.href = cvUrl}
                    title="View my CV"
                    type="purple"
                />
            </CVButtonContainer>
            <ContactButtonContainer>
                <RoundButton
                    onClick={() => window.location.href = "mailto:ykarthurlee@gmail.com"}
                    title="Get In Touch"
                    type="blue"
                />
            </ContactButtonContainer>
        </RegularDisplayContainer>
    )
}

const MobileDisplayFragment = ({ githubURL, behanceURL, aboutText }) => {
    return (
        <MobileDisplayContainer>
            <h1>Design</h1>
            <h1>Technologist.</h1>
            <p>
                {"I’m Arthur, an aspiring "}<a href={behanceURL} id="designer">designer</a>/<a href={githubURL} id="developer">engineer</a> based in Singapore.
                <br />
                <br />
                {aboutText}
            </p>
            <ContactButtonContainer>
                <RoundButton
                    onClick={() => window.location.href = "mailto:ykarthurlee@gmail.com"}
                    title="Get In Touch"
                    type="blue"
                />
            </ContactButtonContainer>
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