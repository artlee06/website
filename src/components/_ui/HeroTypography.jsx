import React from 'react';
import PropTypes from 'prop-types';
import styled from "@emotion/styled";
import tw from "tailwind.macro";
import { css } from '@emotion/core';


function HeroTypography(props) {
    const { title, weight } = props;

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
            md:text-5xl
            lg:text-6xl
            text-center
            font-sans
        `
        };
    `
    
    return (
        <HeroType>
            <h1>{title}</h1>
        </HeroType>
    )
}

HeroTypography.propTypes = {
    title: PropTypes.string.isRequired,
    weight: PropTypes.string.isRequired,
}

export default HeroTypography

