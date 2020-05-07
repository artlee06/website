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

const Hero = styled("div")`
    padding-top: 5em;
    padding-bottom: 6em;
    margin-bottom: 6em;
    max-width: 100%;

    @media(max-width:${dimensions.maxwidthMobile}px) {
       margin-bottom: 3em;
    }

    h1 {
        margin-bottom: 1em;
    }
`

const DesignerContainer = styled.a`
    ${tw`
        text-3xl
        text-center
        font-sans
        font-bold
        text-designer-purple
        no-underline
        `
        };
`
const DeveloperContainer = styled.a`
    ${tw`
        text-3xl
        text-center
        font-sans
        font-bold
        text-developer-blue
        no-underline
        `
        };
`
const Seperator = styled.div`
    ${tw`
        text-3xl
        font-sans
        font-bold
        text-gray-400
        `
        };
`

function LandingGraphic(props) {
    const { cvUrl, githubURL, behanceURL } = props;
    return (
        <Hero>
            <DesignerContainer href={behanceURL}> Designer </DesignerContainer>
            <Seperator>|</Seperator>
            <DeveloperContainer href={githubURL}> Developer</DeveloperContainer>
            <HeroTypography title="Arthur Lee." weight={800}/>
            <RoundButton 
                onClick={() => window.location.href=cvUrl} 
                title="View my CV" 
                type="purple"
            />
            <RoundButton 
                onClick={() => window.location.href=cvUrl} 
                title="Contact Me" 
                type="blue"
            />
        </Hero>
    );
}

export default LandingGraphic;