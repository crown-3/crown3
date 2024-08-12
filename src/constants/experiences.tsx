import { Experience, ExperienceTag } from "src/pages/profile/ExperienceCard";

import colors from "./colors";

const FirstPrizeTag: ExperienceTag = {
  name: "🥇 First Prize",
  fillColor: "gold",
  color: colors.dark,
};

const ThirdPrizeTag: ExperienceTag = {
  name: "🥉 Third Prize",
  fillColor: "bronze",
  color: colors.dark,
};

const PMTag: ExperienceTag = {
  name: "PM",
  fillColor: "green",
};

const FrontendTag: ExperienceTag = {
  name: "Frontend",
  fillColor: "blue",
};

const DesignTag: ExperienceTag = {
  name: "Design",
  fillColor: "orange",
};

const LeaderTag: ExperienceTag = {
  name: "Team Leader",
  fillColor: "red",
};

export const CONTESTS: Experience[] = [
  {
    title: "SPARCS AI Startup Hackathon",
    term: "2024.7.29 ~ 2024.8.01",
    tags: [[FrontendTag]],
    description: (
      <>
        <p>- 하루에 한 번 패밀리타임, 우리 가족이 돈독해지는 시간</p>
      </>
    ),
  },
  {
    title: "GIST AI4GOOD Hackathon",
    term: "2024.3.23 ~ 2024.3.24",
    tags: [[FirstPrizeTag], [PMTag, FrontendTag, DesignTag]],
    description: (
      <>
        <p>
          -{" "}
          <a href="https://drive.google.com/file/d/1mEKoTK8mGonlp6ZG6YH1Wbz9ePiIpyLd/view?usp=sharing">
            DEMO
          </a>
          ,{" "}
          <a href="https://github.com/Gist-Cactus/cactus-fe?tab=readme-ov-file">
            FE Repo
          </a>
        </p>

        <p>- 시각장애인의 그래픽 접근성을 높이는 학습 보조 도구</p>
      </>
    ),
  },
  {
    title: "Net Challange Camp Season 10",
    term: "2023.07.06 ~ 2023.10.31",
    tags: [[ThirdPrizeTag], [FrontendTag, DesignTag]],
    description: (
      <>
        <p>- CCTV 영상 분석을 통한 스모크 프리 솔루션</p>
      </>
    ),
  },
  {
    title: "JUNCTION ASIA 2023",
    term: "2023.8.18 ~ 2023.8.20",
    tags: [[FrontendTag]],
    description: (
      <>
        <p>- 로봇 팔을 이용한 커스텀 자동화 병원 식단</p>
      </>
    ),
  },
  {
    title: "GIST 창의융합경진대회 탁구로봇 트랙",
    term: "2023.5.24 ~ 2023.8.18",
    tags: [[ThirdPrizeTag]],
    description: (
      <>
        <p>- 카메라로 공의 궤적을 분석하고 탁구공을 치는 로봇</p>
      </>
    ),
  },
  {
    title: "GDSCxGIST Hackathon",
    term: "2023.04.29 ~ 2023.04.30",
    tags: [[FirstPrizeTag], [PMTag, FrontendTag, DesignTag]],
    description: (
      <>
        <p>
          -{" "}
          <a href="https://www.veritas-a.com/news/articleView.html?idxno=455499">
            Article
          </a>
          ,{" "}
          <a href="https://github.com/Shimsuyeon/gdsc-2023-hackathon">
            FE Repo
          </a>
        </p>
        <p>
          - 우울과 외로움을 해결하기 위한 연쇄 반응형 기록장, &quot;오라기&quot;
        </p>
      </>
    ),
  },
];

export const ACTIVITIES: Experience[] = [
  {
    title: "GSA Infoteam",
    term: "2022.03 ~ Present",
    tags: [[LeaderTag, PMTag, DesignTag, FrontendTag]],
    description: (
      <>
        <p>
          - <a href="https://introduce.gistory.me">Introduction</a>
        </p>
        <p>
          - Services:&nbsp;
          <a href="https://ziggle.gistory.me">Ziggle</a>,&nbsp;
          <a href="https://gistalk.gistory.me">Gistalk</a>
        </p>
        <p>
          - 지스트 교내 학생들을 위한 서비스를 개발하고 운영하는 학생회 단체
        </p>
        <p>- 2023 Team Leader</p>
      </>
    ),
  },
  {
    title: "XFashion",
    term: "2023.08 ~ 2023.02",
    tags: [[DesignTag, FrontendTag]],
    description: (
      <>
        <p>- 스타트업</p>
        <p>- 가상피팅을 지원하는 의류 쇼핑몰 개발 경험</p>
      </>
    ),
  },
  {
    title: "2023 GIST DevNight 준비위원회",
    term: "2023.06 ~ 2023.09",
    tags: [[LeaderTag, DesignTag]],
    description: (
      <>
        <p>
          -{" "}
          <a href="https://www.newsis.com/view/NISX20230915_0002451587">
            Article
          </a>
        </p>
        <p>
          - 지스트에서 개발을 하는 모든 사람들을 위한 행사, GIST Developers’
          Night
        </p>
        <p>- 행사 준비위원장 및 홍보물 디자인 총괄 담당</p>
      </>
    ),
  },
  {
    title: "WING",
    term: "2022.03 ~ 2022.12",
    tags: [[PMTag, DesignTag]],
    description: (
      <>
        <p>- GIST 프로그래밍 및 개발 동아리</p>
        <p>- 게임 기획 및 디자인에 참여 - 도트 및 복셀 그래픽 디자인</p>
      </>
    ),
  },
];
