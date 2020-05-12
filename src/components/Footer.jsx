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

     &:hover {
         color: ${colors.blue900};

        .FooterSpooch {
            animation-name: rotate;
            animation-duration: 1.5s;
            animation-iteration-count: infinite;
            animation-timing-function: linear;
        }
    }

    @keyframes rotate {
        from {transform: rotate(0deg);}
        to {transform: rotate(360deg);}
    }
`

// const Footer = () => (
//     <FooterContainer>
//         <Link to="/">
//             <Logo />
//         </Link>
//         <FooterAuthor href="mailto:ykarthurlee@gmail.com">
//             © 2020 - Arthur Lee
//         </FooterAuthor>
//     </FooterContainer>
// )

const ContactFragment = () => {
    const message = "Like what you see? I'd love to get in touch to discuss potential collaboration and opportunities! Contact me via the following sites or email.";
    const OverallContainer = styled.div`
        max-width: ${dimensions.maxwidthDesktop}px;
        padding-left: ${dimensions.paddingHorizontalDesktop}em;
        padding-right: ${dimensions.paddingHorizontalDesktop}em;
        margin: 0 auto;

        @media(max-width: ${dimensions.maxwidthTablet}px) {
            padding-left: ${dimensions.paddingHorizontalTablet}em;
            padding-right: ${dimensions.paddingHorizontalTablet}em;
        }

        @media(max-width: ${dimensions.maxwidthMobile}px) {
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
            text-white
            font-semibold
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
            padding: 0 2rem 0 2rem;

            &:hover {
                text-decoration: underline;
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
            <RoundButton type="transparent" title="View my CV" onClick />
        </OverallContainer>
    )
}

function Footer(props){
    const {type} = props;
    const showContact = type === "contact";

    return (
        <FooterContainer>
            {showContact && <ContactFragment />}
            <FooterAuthor href="#top">
                © Arthur Lee 2020 
            </FooterAuthor>
        </FooterContainer>    
    )
}

Footer.propTypes = {
    type: PropTypes.string.isRequired,
}

export default Footer;
