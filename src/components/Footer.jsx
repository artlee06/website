import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import colors from "styles/colors";
import Logo from "components/_ui/Logo";
import PropTypes from 'prop-types';
import RoundButton from "components/_ui/RoundButton";
import tw from "tailwind.macro";
import dimensions from "styles/dimensions";


const FooterContainer = styled("div")`
    padding-top: 2em;
    padding-bottom: 3em;
    display: flex;
    flex-direction: column;
    background: linear-gradient(to right, #5B2AC5 , #3370EE);
    align-items: center;

    svg {
        max-width: 50px;
    }
`

const FooterAuthor = styled("a")`
    font-size: 0.75em;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    margin-top: 1em;
    transition: background-size 0.2s;
    background: linear-gradient(to bottom, #fff, 0%, #fff);
    background-position: 0 100%;
    background-repeat: repeat-x;
    background-size: 2px 0px;
    transition: background-size .2s;

     &:hover {
        color: #5B2AC5;
        background-size: 2px 50px;
    }

`


const ContactFragment = ({cvUrl}) => {
    const message = "Like what you see? I'd love to get in touch to discuss potential collaborations and opportunities! Contact me via the following sites or email.";
    const OverallContainer = styled.div`
        max-width: ${dimensions.maxwidthDesktop}px;
        padding-left: ${dimensions.paddingHorizontalDesktop}em;
        padding-right: ${dimensions.paddingHorizontalDesktop}em;
        margin: 0 auto;

        @media(max-width: ${dimensions.maxwidthTablet}px) {
            max-width: 100%;
            padding-left: ${dimensions.paddingHorizontalTablet}em;
            padding-right: ${dimensions.paddingHorizontalTablet}em;
        }

        @media(max-width: ${dimensions.maxwidthMobile}px) {
            max-width: 100%;
            padding-left: ${dimensions.paddingHorizontalMobile}em;
            padding-right: ${dimensions.paddingHorizontalMobile}em;
        }
        ${tw`
            flex
            flex-col
            items-center
        `}
    `
    const MessageContainer = styled.h2`
        ${tw`
            font-semibold
            text-white
            text-center
            text-xl
            sm:text-3xl
        `}
    `

    const LinksContainer = styled.div`
        ${tw`
            flex
            flex-row
            justify-between
            pb-6
        `}

        a {
            color: white;
            text-decoration: none;
            padding: 0 0.25em 0 0.25em;
            margin:  0 0.5em 0 0.5em;
            background: linear-gradient(to bottom, #fff, 0%, #fff);
            background-position: 0 100%;
            background-repeat: repeat-x;
            background-size: 2px 0px;
            transition: background-size .2s;

            &:hover {
                text-decoration: none;
                font-weight: 600;
                color: #5B2AC5;
                background-size: 2px 50px;
            }

            @media(max-width: ${dimensions.maxwidthMobile}px) {
                padding: 0 0.25em 0 0.25em;
                margin:  0 0.25em 0 0.25em;
            }
        }
    `

    return (
        <OverallContainer>
            <MessageContainer>
                {message}
            </MessageContainer>
            <LinksContainer>
                <a href="https://github.com/artlee06">Github</a>
                <a href="https://www.behance.net/ArthurLeeYingKiu">Behance</a>
                <a href="https://www.linkedin.com/in/arthur-lee-ying-kiu/">LinkedIn</a>
                <a href="mailto:ykarthurlee@gmail.com">Email</a>
            </LinksContainer>
            <RoundButton type="transparent" title="View my CV" onClick={() => window.location.href=cvUrl} />
        </OverallContainer>
    )
}

function Footer(props){
    const { type, cvUrl } = props;
    const showContact = type === "contact";

    return (
        <FooterContainer id="contact">
            {showContact && <ContactFragment cvUrl={cvUrl} />}
            <FooterAuthor href="#top">
                © Arthur Lee 2020 
            </FooterAuthor>
        </FooterContainer>    
    )
}

Footer.propTypes = {
    type: PropTypes.string.isRequired,
    cvUrl: PropTypes.string.isRequired,
}

export default Footer;
