import React from 'react';
import PropTypes from 'prop-types';
import styled from "@emotion/styled";
import tw from "tailwind.macro";
import { css } from '@emotion/core';


function RoundButton(props) {
    const { onClick, title, type } = props;

    const TypeStyling = props => {
        switch (props.type) {
            case 'purple':
                return css`
                ${tw`bg-designer-purple`}    
                `;
                break;
            case 'blue': 
                return css`
                ${tw`bg-developer-blue`}    
                `;
                break;
            case 'transparent': 
                return css`
                ${tw`
                    bg-transparent
                    border-white
                    border-2
                `}    
                `;
                break;
        }
    }
    const ButtonContainer = styled.button`
    ${tw`
        text-white
        text-base
        font-sans
        font-semibold
        rounded-full
        px-16
        sm:px-12
        py-3
        `
        };
    ${TypeStyling};

`
    
    return (
        <ButtonContainer
            onClick={onClick}
            type={type}
        >
            {title}
        </ButtonContainer>
    )
}

RoundButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
}

export default RoundButton

