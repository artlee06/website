import React from 'react'
import PropTypes from 'prop-types'
import styled from "@emotion/styled";
import tw from "tailwind.macro";
import dimensions from "styles/dimensions";
import { RichText } from "prismic-reactjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode, faPencilRuler  } from "@fortawesome/free-solid-svg-icons"

function ExperienceSection(props) {

    const { designerDescription, skillsDescription, toolsDescription, devDescription, frameworksDes, langDescription} = props;

    const OverallContainer = styled("div")`
        max-width: 100%;
        ${tw`
            flex
            flex-row
        `};

        @media(max-width:${dimensions.maxwidthMobile}px) {
            padding-top: 0em;
            ${tw`
                flex-col
            `};
        }

        h3 {
            margin: 0; 
        }
    `

    const DesignerContainer = styled("div")`
        ${tw`
            flex
            flex-col
            flex-1
            border-solid
            border
            border-designer-purple
            text-designer-purple
            px-6
            pb-6
        `};
    `
    
    const DeveloperContainer = styled("div")`
        ${tw`
            flex
            flex-col
            flex-1
            border-solid
            border
            border-developer-blue
            text-developer-blue
            px-6
            pb-6
        `};
    `
    const TextContainer = styled("div")`
        ${tw`
            text-black
        `}
    `
    const TitleContainer = styled("h1")`
        ${tw`
            text-center
        `}
    `
    const PurpleLine = styled("hr")`
        ${tw`
            border-designer-purple
            border-l-8
            border-r-8
            border-solid
        `}
    `

    const BlueLine = styled("hr")`
        ${tw`
            border-developer-blue
            border-l-8
            border-r-8
            border-solid
        `}
    `

    return (
        <OverallContainer>
            
            <DesignerContainer>
                <TitleContainer>
                    <FontAwesomeIcon icon={faPencilRuler} />
                    {" "}
                    Designer
                </TitleContainer>
                <TextContainer>
                    {RichText.render(designerDescription)}
                </TextContainer>
                <PurpleLine />
                <h3>Skills</h3>
                <TextContainer>
                    {RichText.render(skillsDescription)}
                </TextContainer>
                <PurpleLine />
                <h3>Tools</h3>
                <TextContainer>
                    {RichText.render(toolsDescription)}
                </TextContainer>
            </DesignerContainer>
            

            <DeveloperContainer>
                <TitleContainer>
                    <FontAwesomeIcon icon={faCode} />
                    {" "}
                    Developer
                </TitleContainer>
                <TextContainer>
                    {RichText.render(devDescription)}
                </TextContainer>
                <BlueLine />
                <h3>Frameworks</h3>
                <TextContainer>
                    {RichText.render(frameworksDes)}
                </TextContainer>
                <BlueLine />
                <h3>Languages</h3>
                <TextContainer>
                    {RichText.render(langDescription)}
                </TextContainer>
            </DeveloperContainer>

        </OverallContainer>
    )
}

ExperienceSection.propTypes = {
    designerDescription: PropTypes.object.isRequired,
    skillsDescription: PropTypes.object.isRequired,
    toolsDescription: PropTypes.object.isRequired,
    devDescription: PropTypes.object.isRequired,
    frameworksDes: PropTypes.object.isRequired,
    langDescription: PropTypes.object.isRequired,
}

export default ExperienceSection

