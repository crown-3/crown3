import Pixel from "src/components/common/Pixel";
import { Skill } from "src/types/skill";
import styled, { css } from "styled-components";

import assets from "./assets";
import colors from "./colors";

const PropertyIcon = styled(Pixel)`
  width: 24px;
  height: 24px;
`;

const PropertyDescription = styled.span<{
  $color: React.CSSProperties["color"];
}>`
  font-family: "Galmuri7", sans-serif;
  font-size: 16px;
  ${({ $color }) => css`
    color: ${$color};
  `}
`;

const skills = (icon: keyof typeof assets.skilltree.icons) => {
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
            icon: (
              <PropertyIcon src={assets.skilltree.propertyIcons.language} />
            ),
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
            icon: <PropertyIcon src={assets.skilltree.propertyIcons.styling} />,
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
            icon: (
              <PropertyIcon src={assets.skilltree.propertyIcons.framework} />
            ),
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
            icon: (
              <PropertyIcon src={assets.skilltree.propertyIcons.language} />
            ),
            description: (
              <PropertyDescription $color={colors.property.white}>
                language
              </PropertyDescription>
            ),
          },
        ],
        description: (
          <>
            <p>학교에서 과제를 항상 이걸로만 내줘서 어느 정도 잘 알고 있다.</p>
            <p>파이썬에서도 타입 체킹... 해야겠지?</p>
          </>
        ),
      };
      break;

    case "react":
      skill = {
        name: "React",
        properties: [
          {
            icon: (
              <PropertyIcon src={assets.skilltree.propertyIcons.framework} />
            ),
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
            icon: <PropertyIcon src={assets.skilltree.propertyIcons.api} />,
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
            <p>API 코드가 깔-쌈해지는 마법!</p>
          </>
        ),
      };
      break;

    case "styledComponents":
      skill = {
        name: "Styled Components",
        properties: [
          {
            icon: <PropertyIcon src={assets.skilltree.propertyIcons.styling} />,
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
            icon: (
              <PropertyIcon src={assets.skilltree.propertyIcons.framework} />
            ),
            description: (
              <PropertyDescription $color={colors.property.green}>
                frontend framework
              </PropertyDescription>
            ),
          },
        ],
        description: (
          <>
            <p>가벼운 사이트 만드는데에는 최고</p>
          </>
        ),
      };
      break;

    case "tailwind":
      skill = {
        name: "Tailwind CSS",
        properties: [
          {
            icon: <PropertyIcon src={assets.skilltree.propertyIcons.styling} />,
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
            icon: (
              <PropertyIcon src={assets.skilltree.propertyIcons.language} />
            ),
            description: (
              <PropertyDescription $color={colors.property.white}>
                language
              </PropertyDescription>
            ),
          },
          {
            icon: <PropertyIcon src={assets.skilltree.propertyIcons.heart} />,
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
            icon: <PropertyIcon src={assets.skilltree.propertyIcons.state} />,
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

    case "lottie":
      skill = {
        name: "LottieFiles",
        properties: [
          {
            icon: (
              <PropertyIcon src={assets.skilltree.propertyIcons.animation} />
            ),
            description: (
              <PropertyDescription $color={colors.property.orange}>
                animation
              </PropertyDescription>
            ),
          },
        ],
        description: (
          <>
            <p>JSON만으로 애니메이션을 만들어주는 고품격 라이브러리.</p>
            <p>
              애니메이션을 통한 UX 개선을 좋아하는 나로서는 안 쓸 이유가 없다.
            </p>
          </>
        ),
      };
      break;

    case "figma":
      skill = {
        name: "Figma",
        properties: [
          {
            icon: <PropertyIcon src={assets.skilltree.propertyIcons.tool} />,
            description: (
              <PropertyDescription $color={colors.property.silver}>
                design tool
              </PropertyDescription>
            ),
          },
        ],
        description: (
          <>
            <p>나는 산업디자인학과를 가야 했을지도 모른다.</p>
          </>
        ),
      };
      break;

    case "phase":
      skill = {
        name: "Phase",
        properties: [
          {
            icon: <PropertyIcon src={assets.skilltree.propertyIcons.tool} />,
            description: (
              <PropertyDescription $color={colors.property.silver}>
                design tool
              </PropertyDescription>
            ),
          },
          {
            icon: (
              <PropertyIcon src={assets.skilltree.propertyIcons.animation} />
            ),
            description: (
              <PropertyDescription $color={colors.property.orange}>
                animation
              </PropertyDescription>
            ),
          },
        ],
        description: (
          <>
            <p>로띠 에니메이션을 제작하기에 최적인 최신툴</p>
            <p>나는 매우 찬양. 부드러운 애니메이션.</p>
          </>
        ),
      };
      break;

    case "aseprite":
      skill = {
        name: "Aseprite",
        properties: [
          {
            icon: <PropertyIcon src={assets.skilltree.propertyIcons.tool} />,
            description: (
              <PropertyDescription $color={colors.property.silver}>
                design tool
              </PropertyDescription>
            ),
          },
        ],
        description: (
          <>
            <p>
              사실 이 사이트에 있는 도트 그래픽 에셋들은 모두 제가 이걸로
              만든겁니다
            </p>
            <p>(거의 대부분이요)</p>
          </>
        ),
      };
      break;

    case "powerpoint":
      skill = {
        name: "MS Powerpoint",
        properties: [
          {
            icon: <PropertyIcon src={assets.skilltree.propertyIcons.tool} />,
            description: (
              <PropertyDescription $color={colors.property.silver}>
                design tool
              </PropertyDescription>
            ),
          },
        ],
        description: (
          <>
            <p>사실상 제가 디자인을 입문한 툴..?입니다.</p>
            <p>PPT 잘 만듭니다. ^^</p>
          </>
        ),
      };
      break;
  }

  return skill;
};

export default skills;
