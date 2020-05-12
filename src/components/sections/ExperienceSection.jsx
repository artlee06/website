import React from 'react';
import PropTypes from 'prop-types';
import styled from "@emotion/styled";
import tw from "tailwind.macro";
import dimensions from "styles/dimensions";
import { RichText } from "prismic-reactjs";

function ExperienceSection(props) {
    const {experienceDescription, educationDescription} = props;

    const OverallContainer = styled("div")`
        max-width: 100%;
        margin-top: 4em;


        @media(max-width:${dimensions.maxwidthMobile}px) {
            padding-top: 0em;
            margin-top: 2em;
        }

        h2, h4 {
            background: linear-gradient(to right, #5B2AC5, 20%, #3370EE);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        h4 {
            margin: 0;
        }

        hr {
            border-color: transparent; 
        }

        em {
            color: gray;
        }
    `

    return (
        <OverallContainer>
            <h2>Work Experience</h2>
            {RichText.render(experienceDescription)}
            <hr />
            <hr />
            <h2>Educational Background</h2>
            {RichText.render(educationDescription)}
        </OverallContainer>
    )
}

ExperienceSection.propTypes = {
    experienceDescription: PropTypes.object.isRequired,
    educationDescription: PropTypes.object.isRequired,

}

export default ExperienceSection

