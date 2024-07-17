import Area from "src/components/containers/Area";
import Content from "src/components/containers/Content";
import Spacer from "src/components/containers/Spacer";

import Profile from "./Profile";
import Skill from "./Skill";

const ProfilePage = () => {
  return (
    <Area>
      <Content $isCenter>
        <Profile />

        <Spacer height="100px" />

        <Skill />
      </Content>
    </Area>
  );
};

export default ProfilePage;
