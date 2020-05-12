import React from 'react';
import PropTypes from 'prop-types';
import RoundButton from "components/_ui/RoundButton";
import HeroTypography from "components/_ui/HeroTypography";
import styled from "@emotion/styled";
import tw from "tailwind.macro";
import colors from "styles/colors";
import dimensions from "styles/dimensions";


LandingGraphic.propTypes = {
    cvUrl: PropTypes.string.isRequired,
    githubURL: PropTypes.string.isRequired,
    behanceURL: PropTypes.string.isRequired
};

const OverallContainer = styled("div")`
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
       padding-top: 0em;
       margin-bottom: 3em;
       grid-template: 
        "topDes topSep topDev" 22%
        "middle middle middle" 44%
        "bottomCV bottomCV bottomCV" 22% 
        "bottomContact bottomContact bottomContact" 22% 
        / 47% 6% 47%;
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
        `
        };
    grid-area: topDes;
    justify-self: end;
    align-self: end;
`
const DeveloperContainer = styled.a`
    ${tw`
        text-lg
        sm:text-3xl
        font-sans
        font-bold
        text-developer-blue
        no-underline
        `
        };
    grid-area: topDev;
    justify-self: start;
    align-self: end;
    
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
    }
`

const ContactButtonContainer = styled.div`
    grid-area: bottomContact;
    justify-self: start;
    
    @media(max-width:${dimensions.maxwidthMobile}px) {
       justify-self: center;
    }
`

function LandingGraphic(props) {
    const { cvUrl, githubURL, behanceURL } = props;
    return (
        <OverallContainer>
            <DesignerContainer href={behanceURL}> Designer </DesignerContainer>
            <Seperator>|</Seperator>
            <DeveloperContainer href={githubURL}> Developer</DeveloperContainer>
            <HeroContainer>
                <HeroTypography title="Arthur Lee." weight={800}/>
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
        </OverallContainer>
    );
}

export default LandingGraphic;