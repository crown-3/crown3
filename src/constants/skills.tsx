import Pixel from "src/components/common/Pixel";
import { Skill } from "src/types/skill";
import styled, { css } from "styled-components";

import assets from "./assets";
import colors from "./colors";

const PropertyIcon = styled(Pixel)`
  width: 24px;
  height: 24px;
`;

const PropertyDescription = styled.p<{
  $color: React.CSSProperties["color"];
}>`
  font-family: "Galmuri7", sans-serif;
  font-size: 16px;
  ${({ $color }) => css`
    color: ${$color};
  `}
`;

const skills = (icon: keyof typeof assets.icons) => {
  let skill: Skill = {
    name: "Error",
    properties: [],
    description: (
      <>
        <p>
          개발자가 게을러서 에러가 발생했습니다. 당장 버그이슈로 혼내주세요.
        </p>
      </>
    ),
  };

  switch (icon) {
    case "cPlusPlus":
      skill = {
        name: "C++",
        properties: [
          {
            icon: <PropertyIcon src={assets.propertyIcons.language} />,
            description: (
              <PropertyDescription $color={colors.property.white}>
                language
              </PropertyDescription>
            ),
          },
        ],
        description: (
          <>
            <p>교내에서 여러 과제와 프로젝트를 진행해 본 경험이 있다.</p>
            <p>C++ 만세!</p>
          </>
        ),
      };
      break;

    case "emotion":
      skill = {
        name: "Emotion",
        properties: [
          {
            icon: <PropertyIcon src={assets.propertyIcons.styling} />,
            description: (
              <PropertyDescription $color={colors.property.purple}>
                styling library
              </PropertyDescription>
            ),
          },
        ],
        description: (
          <>
            <p>나는 감정이 없다.</p>
          </>
        ),
      };
      break;

    case "nextjs":
      skill = {
        name: "NextJs",
        properties: [
          {
            icon: <PropertyIcon src={assets.propertyIcons.framework} />,
            description: (
              <PropertyDescription $color={colors.property.green}>
                frontend framework
              </PropertyDescription>
            ),
          },
        ],
        description: (
          <>
            <p>Vercel과 함께라면, 무엇이든지.</p>
          </>
        ),
      };
      break;

    case "python":
      skill = {
        name: "Python",
        properties: [
          {
            icon: <PropertyIcon src={assets.propertyIcons.language} />,
            description: (
              <PropertyDescription $color={colors.property.white}>
                language
              </PropertyDescription>
            ),
          },
        ],
        description: (
          <>
            <p>
              이 비단뱀은 참으로 안타깝게도 타입과 브라켓을 제공하지 않는다.
            </p>
            <p>학교에서 과제를 항상 이걸로만 내줘서 어느 정도 잘 알고 있다.</p>
          </>
        ),
      };
      break;

    case "react":
      skill = {
        name: "React",
        properties: [
          {
            icon: <PropertyIcon src={assets.propertyIcons.framework} />,
            description: (
              <PropertyDescription $color={colors.property.green}>
                frontend framework
              </PropertyDescription>
            ),
          },
        ],
        description: (
          <>
            <p>
              프론트엔드 개발자의 심장 속에는, 아마 원자가 이런 보어 원자
              모형으로 존재할지도 모른다.
            </p>
          </>
        ),
      };
      break;

    case "reactQuery":
      skill = {
        name: "React Query",
        properties: [
          {
            icon: <PropertyIcon src={assets.propertyIcons.api} />,
            description: (
              <PropertyDescription $color={colors.property.yellow}>
                fetching library
              </PropertyDescription>
            ),
          },
        ],
        description: (
          <>
            <p>신버전인 @tanstack/react-query를 사용하는 편이다.</p>
            <p>코드가 깔-쌈해지는 마법!</p>
          </>
        ),
      };
      break;

    case "styledComponents":
      skill = {
        name: "Styled Components",
        properties: [
          {
            icon: <PropertyIcon src={assets.propertyIcons.styling} />,
            description: (
              <PropertyDescription $color={colors.property.purple}>
                styling library
              </PropertyDescription>
            ),
          },
        ],
        description: (
          <>
            <p>JS로 CSS를 마구 흔들어보자.</p>
          </>
        ),
      };
      break;

    case "svelte":
      skill = {
        name: "SvelteKit",
        properties: [
          {
            icon: <PropertyIcon src={assets.propertyIcons.framework} />,
            description: (
              <PropertyDescription $color={colors.property.green}>
                frontend framework
              </PropertyDescription>
            ),
          },
        ],
        description: (
          <>
            <p>너무 가벼워서 날아갈 것 같아.</p>
          </>
        ),
      };
      break;

    case "tailwind":
      skill = {
        name: "Tailwind CSS",
        properties: [
          {
            icon: <PropertyIcon src={assets.propertyIcons.styling} />,
            description: (
              <PropertyDescription $color={colors.property.purple}>
                styling library
              </PropertyDescription>
            ),
          },
        ],
        description: (
          <>
            <p>바람을 타고 날아가면서 CSS를 빠르게 구축해보자.</p>
          </>
        ),
      };
      break;

    case "typescript":
      skill = {
        name: "Typescript",
        properties: [
          {
            icon: <PropertyIcon src={assets.propertyIcons.language} />,
            description: (
              <PropertyDescription $color={colors.property.white}>
                language
              </PropertyDescription>
            ),
          },
          {
            icon: <PropertyIcon src={assets.propertyIcons.heart} />,
            description: (
              <PropertyDescription $color={colors.property.red}>
                main language
              </PropertyDescription>
            ),
          },
        ],
        description: (
          <>
            <p>내 인생 언...어?</p>
          </>
        ),
      };
      break;

    case "jotai":
      skill = {
        name: "Jotai",
        properties: [
          {
            icon: <PropertyIcon src={assets.propertyIcons.state} />,
            description: (
              <PropertyDescription $color={colors.property.blue}>
                state library
              </PropertyDescription>
            ),
          },
        ],
        description: (
          <>
            <p>
              애용하는 전역 상태 라이브러리. Atomic 계열 라이브러리들 중에서도
              사용성 측면에서 우수하다고 느낀다.
            </p>
            <p>유령이라 그런가?</p>
          </>
        ),
      };
      break;
  }

  return skill;
};

export default skills;
