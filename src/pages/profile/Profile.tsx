import { Link } from "react-router-dom";
import Icons from "src/assets/Icons";
import Spacer from "src/components/containers/Spacer";
import colors from "src/constants/colors";
import styled from "styled-components";

interface ProfileInfo {
  key: string;
  icon: React.ReactNode;
  name: string;
  link: string;
}

const PROFILE_INFOS: ProfileInfo[] = [
  {
    key: "mail",
    icon: <Icons.Mail />,
    name: "crowntheking@gm.gist.ac.kr",
    link: "mailto:crowntheking@gm.gist.ac.kr",
  },
  {
    key: "github",
    icon: <Icons.Github />,
    name: "MiRoro2",
    link: "https://github.com/MiRoro2",
  },
  {
    key: "velog",
    icon: <Icons.Velog />,
    name: "Crown3",
    link: "https://velog.io/@262dldljdl/posts",
  },
];

const Profile = () => {
  return (
    <>
      <Spacer height="120px" />

      <h1>crown3</h1>

      <Spacer height="20px" />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <h4>이정우</h4>

        <div
          style={{
            width: "2px",
            height: "20px",
            backgroundColor: colors.dark,
          }}
        />

        <h4>Lee Jeongwoo</h4>
      </div>

      <Spacer height="40px" />

      <p style={{ wordBreak: "keep-all", textAlign: "center" }}>
        프론트엔드 개발자이긴 한데 디자인도 만집니다
      </p>

      <Spacer height="40px" />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "14px",
        }}
      >
        {PROFILE_INFOS.map((profile) => (
          <a href={profile.link} key={profile.key}>
            <ProfileInfoWrapper>
              {profile.icon}
              <span>{profile.name}</span>
            </ProfileInfoWrapper>
          </a>
        ))}
      </div>
    </>
  );
};

const ProfileInfoWrapper = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  color: ${colors.dark};

  &:hover {
    span {
      text-decoration: underline;
    }
  }
`;

export default Profile;
