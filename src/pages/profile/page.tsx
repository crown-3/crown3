import Area from "src/components/containers/Area";
import Content from "src/components/containers/Content";
import Spacer from "src/components/containers/Spacer";
import { ACTIVITIES, CONTESTS } from "src/constants/experiences.tsx";

import Experiences from "./Experiences";
import Profile from "./profileSection/Profile";
import Skill from "./Skill";

const ProfilePage = () => {
  return (
    <Area>
      <Content $isCenter>
        <Profile />

        <Spacer height="150px" />

        <Skill />

        <Spacer height="150px" />

        <Experiences
          title="🤟 Contests"
          experiences={CONTESTS}
          frame="contests"
        />

        <Spacer height="150px" />

        <Experiences title="💎 Activities" experiences={ACTIVITIES} />
      </Content>
    </Area>
  );
};

export default ProfilePage;
