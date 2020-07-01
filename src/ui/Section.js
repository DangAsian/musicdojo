import styled, {
  css
} from "styled-components";

const colors = {
  purple: css `
    background-color: rgb(166, 29, 85, 0.8);
  `,
  red: css `
    background-color: #c76465;
    color: #fff;
  `,
  gradient: css `
    background-image: linear-gradient(#c76465, rgb(166, 29, 85, 0.8));
    color: #fff;
  `
};

export const SectionTest = styled.section(
  ({
    bgColor
  }) => `
    padding-top: 50px;
    margin-bottom: 0px;
    background-color: ${bgColor};
    & > div {
        margin: 20px 0px;
    }
    & > img {
        margin-bottom: -9px;
    }
`
);

export const SectionBlock = styled.section(
  ({
    bgColor
  }) => `
    margin-bottom: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    color: #474747;
    text-align: center;
    ${colors[bgColor]};
    & > div {
        margin: 100px 0px;
    }
    & > img {
        margin-bottom: -9px;
    }
    
`
);

export const HeroSectionBlock = styled.section(
  ({
    bgColor
  }) => `
    margin-bottom: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    color: #474747;
    text-align: center;
    height: 100vh;
    ${colors[bgColor]};
    & > div {
        margin: 100px 0px;
    }
    & > img {
        margin-bottom: -9px;
    }
    
`
);

export const SectionItem = styled.div `
  max-width: 300px;
  padding: 0px 80px;
  img {
    height: 80px;
    margin-bottom: 30px;
  }
`;