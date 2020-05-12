import React from 'react';
import PropTypes from 'prop-types';
import styled from "@emotion/styled";
import dimensions from "styles/dimensions";


function AboutSection(props) {
    const { imageURL, text } = props;
    const OverallContainer = styled("div")`
        padding-top: 5em;
        margin-bottom: 5em;
        max-width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        @media(max-width:${dimensions.maxwidthMobile}px) {
            padding-top: 0em;
            margin-bottom: 3em;
            flex-direction: column;
        }

        span.helloText, h2 {
            background: linear-gradient(to right, #5B2AC5 , #3370EE);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        h2 {
            font-weight: 600;
        }

        h1 {
            margin: initial;
        }

        span.helloText {
            font-weight: 800;
        }

    `

    const TextContainer = styled("div")`
        display: flex;
        flex-direction: column;
        padding-left: 2rem;
        padding-right: 2rem;
    `

    return (
        <OverallContainer>
            <img src={imageURL} width="50%" height="50%"></img>
            <TextContainer>
                <h1><span className="helloText">Hello</span> 👋</h1>
                <h2> {text} </h2>
            </TextContainer>
        </OverallContainer>
    )
}

AboutSection.propTypes = {
    imageURL: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default AboutSection

