import Spacer from "src/components/containers/Spacer";
import styled from "styled-components";

import ExperienceCard, { Experience } from "./ExperienceCard";

interface ExperiencesProps {
  title: string;
  experiences: Experience[];
}

const Experiences = ({ title, experiences }: ExperiencesProps) => {
  return (
    <>
      <h2>{title}</h2>

      <Spacer height="50px" />

      <ItemsWrapper>
        {experiences.map((contest) => (
          <ExperienceCard key={contest.title} {...contest} />
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

  gap: 30px;
`;

export default Experiences;
