import Spacer from "src/components/containers/Spacer";
import assets from "src/constants/assets";
import styled from "styled-components";

import ExperienceCard, { Experience } from "./ExperienceCard";

interface ExperiencesProps {
  title: string;
  experiences: Experience[];
  frame?: keyof typeof assets.ui.frames;
}

const Experiences = ({ title, experiences, frame }: ExperiencesProps) => {
  return (
    <>
      <h2>{title}</h2>

      <Spacer height="50px" />

      <ItemsWrapper>
        {experiences.map((contest) => (
          <ExperienceCard key={contest.title} {...contest} frame={frame} />
        ))}
      </ItemsWrapper>
    </>
  );
};

const ItemsWrapper = styled.section`
  width: 100%;
  max-width: 800px;

  display: flex;
  flex-direction: column;

  gap: 100px;
`;

export default Experiences;
