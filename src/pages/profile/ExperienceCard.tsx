import Box from "src/components/common/box/Box";
import Spacer from "src/components/containers/Spacer";
import assets from "src/constants/assets";
import colors from "src/constants/colors";
import styled, { css } from "styled-components";

export interface ExperienceTag {
  name: string;
  fillColor: keyof typeof colors.tags;
  color?: React.CSSProperties["color"];
}

export interface Experience {
  title: string;
  term: string;
  tags: ExperienceTag[][];
  description?: React.ReactNode;
  frame?: keyof typeof assets.ui.frames;
}

const ExperienceCard = ({
  title,
  term,
  tags,
  description,
  frame,
}: Experience) => {
  return (
    <Wrapper frame={frame} $isFrameExists={!!frame} hasHoverEffect>
      <h3>{title}</h3>

      <Spacer height="5px" />

      <h6>{term}</h6>

      <Spacer height="20px" />

      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        {tags.map((tags, index) => (
          <div
            key={index}
            style={{
              width: "100%",
              display: "flex",
              gap: "15px",
              flexWrap: "wrap",
            }}
          >
            {tags.map((tag) => (
              <Tag
                key={tag.name}
                $fill={colors.tags[tag.fillColor].fill}
                $stroke={colors.tags[tag.fillColor].stroke}
                $color={tag.color}
              >
                {tag.name}
              </Tag>
            ))}
          </div>
        ))}
      </div>

      {description && (
        <>
          <Spacer height="20px" />

          <div style={{ padding: "10px 15px", backgroundColor: colors.darker }}>
            {description}
          </div>
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled(Box)<{ $isFrameExists?: boolean }>`
  width: 100%;
  padding: ${(props) => (props.$isFrameExists ? "25px" : "20px")};
  box-sizing: border-box;

  display: flex;
  flex-direction: column;

  color: ${colors.white};
`;

interface TagProps {
  $fill: React.CSSProperties["backgroundColor"];
  $stroke: React.CSSProperties["borderColor"];
  $color?: React.CSSProperties["color"];
}
const Tag = styled(Box)<TagProps>`
  ${({ $fill, $stroke, $color }) => css`
    background-color: ${$fill};
    color: ${$color ?? colors.white};
    border: 3px solid ${$stroke};
  `}
  margin: -3px;
  padding: 3px 10px;
`;

export default ExperienceCard;
