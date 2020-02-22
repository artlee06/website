import React from "react";
import styled from "@emotion/styled";
// import colors from "styles/colors";
import Figma from '../svgs/figma.svg';
import Illustrator from '../svgs/illustrator.svg';
import Photoshop from '../svgs/photoshop.svg';
import ReactNative from '../svgs/reactNative.svg';
import XD from '../svgs/xd.svg';
import Jest from '../svgs/jest.svg';

//can consider having an expand to see more such that it reveals the proficiency level and stuff
const IconInfo = (props) => {
    const { svg, text } = props;
    const IconContainer = styled("div")`
        margin-top: 1.5em;
        display: flex;
        flex-direction: column;
        justify-content: center;
    `;
    const IconText = styled("a")`
        margin-top: 0.25em;
        margin-bottom: 1em;
        font-weight: 450;
        font-size: small;
        line-height: 1.9;
        text-decoration: none;
        color: black;
        align-self: center;
    `;
    return (
      <IconContainer>
        {/* <Icon>  */}
            {svg}
        {/* </Icon> */}
        <IconText> 
            {text}
        </IconText>    
      </IconContainer>
    );
  };

const SkillsContainer = styled.div`
    width: auto;
    height: auto;
    background-color: whitesmoke;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
`;

const Container = styled.div`
    background-color: white;
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.06);
`;

const Title = styled("h3")`
    font-weight: bold;
    text-decoration: none;
    color: black;
    align-self: center;
    margin-bottom: 1em;
`;

export default function Skillsets() {
  return (
    <React.Fragment>
        <Container> 
            <Title> 
                My Skillsets
            </Title>
            <SkillsContainer>
                <IconInfo svg={<ReactNative />} text="React / React Native" />
                <IconInfo svg={<Jest />} text="Jest + Enzyme" />
                <IconInfo svg={<XD />} text="Adobe XD" />
                <IconInfo svg={<Figma />} text="Figma" />
                <IconInfo svg={<Illustrator />} text="Adobe Illustrator" />
                <IconInfo svg={<Photoshop />} text="Adobe Photoshop" />
            </SkillsContainer>
        </Container>
    </React.Fragment>
  );
}

