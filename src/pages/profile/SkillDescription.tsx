import Layer from "src/components/common/Layer";
import Pixel from "src/components/common/Pixel";
import Spacer from "src/components/containers/Spacer";
import assets from "src/constants/assets";
import colors from "src/constants/colors";
import skills from "src/constants/skills";
import { TileInfo } from "src/types/tile";
import styled from "styled-components";

interface SkillDescriptionProps {
  tileInfo: TileInfo;
}

const SkillDescription = ({ tileInfo }: SkillDescriptionProps) => {
  if (!tileInfo.frame || !tileInfo.icon) return;

  const skill = skills(tileInfo.icon);

  return (
    <Wrapper>
      <Layer
        width="150px"
        height="150px"
        layers={[
          <Pixel
            width="150px"
            height="150px"
            key="frame"
            src={assets.frames[tileInfo.frame].default}
          />,
          <Pixel
            width="75px"
            height="75px"
            key="icon"
            src={assets.icons[tileInfo.icon]}
          />,
        ]}
      />

      <SkillProfileWrapper>
        <Title>{skill.name}</Title>

        <Spacer height="10px" />

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {skill.properties.map((property, index) => (
            <div
              key={index}
              style={{ display: "flex", gap: "10px", alignItems: "center" }}
            >
              {property.icon}
              {property.description}
            </div>
          ))}
        </div>

        <Spacer height="20px" />

        <div
          style={{
            width: "65px",
            height: "5px",
            backgroundColor: colors.white,
          }}
        />
      </SkillProfileWrapper>

      <Description>{skill.description}</Description>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  gap: 10px 0;
`;

const SkillProfileWrapper = styled.div`
  width: 100%;

  padding: 0 10px 10px 10px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-family: "Galmuri11", sans-serif;
  font-weight: bold;
  font-size: 28px;
  margin: 0;
  color: ${colors.white};
`;

const Description = styled.section`
  width: 100%;

  background-color: ${colors.darker};

  padding: 10px 15px;
  box-sizing: border-box;

  p {
    color: ${colors.white};
    font-weight: normal;
    line-height: 1.5;
  }
`;

export default SkillDescription;
