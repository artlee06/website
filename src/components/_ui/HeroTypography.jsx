import React from 'react';
import PropTypes from 'prop-types';
import styled from "@emotion/styled";
import tw from "tailwind.macro";
import { css } from '@emotion/core';


const TwoLineContainer = styled.div`
    ${tw`
        flex
        flex-col
    `}
`
const LineOneContainer = styled.h1`
    ${tw`
        self-start
    `}

`
const LineTwoContainer = styled.h1`
    ${tw`
        self-end
    `}
`

const TwoLineFragment = ({lineOne, lineTwo}) => {
    return (
        <TwoLineContainer>
            <LineOneContainer>{lineOne}</LineOneContainer>
            <LineTwoContainer>{lineTwo}</LineTwoContainer>
        </TwoLineContainer>
    );
}

function HeroTypography(props) {
    const { title, weight, type, lineOne, lineTwo } = props;
    const isTypeOneLine = type === "one";

    const HeroType = styled.div`
        h1 {
            font-weight: ${weight};
            background: linear-gradient(to right, #5B2AC5 , #3370EE);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin: 0;
        }
        ${tw`
            text-lg
            xs:text-2xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
            text-center
            font-sans
        `
        };
    `
    
    return (
        <HeroType>
            {isTypeOneLine 
                ? <h1>{title}</h1>
                : <TwoLineFragment lineOne={lineOne} lineTwo={lineTwo}/>
            }
        </HeroType>
    )
}

HeroTypography.defaultProps = {
    lineOne: "",
    lineTwo: ""
}

HeroTypography.propTypes = {
    title: PropTypes.string.isRequired,
    weight: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    lineOne: PropTypes.string,
    lineTwo:PropTypes.string,
}



export default HeroTypography

