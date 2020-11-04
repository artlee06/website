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
                    ${tw`
                        hover:bg-designer-purple
                        hover:text-white
                        hover:border-transparent
                        border-designer-purple
                        text-designer-purple
                    `}    
                `;
            case 'blue':
                return css`
                    ${tw`
                        hover:bg-cover
                        hover:bg-developer-blue
                        hover:text-white
                        hover:border-transparent
                        border-developer-blue
                        text-developer-blue
                    `}    
                `;
            default:
            case 'transparent':
                return css`
                    ${tw`
                        hover:text-developer-blue
                        hover:bg-white
                        border-white
                        text-white                    
                    `}    
                `;
        }
    }
    const ButtonContainer = styled.button`
        ${tw`
            bg-transparent
            text-base
            font-sans
            font-semibold
            rounded-md
            px-16
            sm:px-12
            py-3
            border-2
            cursor-pointer
            `
        };
        ${TypeStyling};

        transition: background-color 0.3s;
        transition-timing-function: cubic-bezier(0.250, 0.460, 0.450, 0.940);

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
    type: PropTypes.string.isRequired
}

export default RoundButton

