import colors from "src/constants/colors";
import styled, { keyframes } from "styled-components";

// Define the wave animation
const waveAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

// Create a styled span for each character with animation
const AnimatedChar = styled.span<{
  $animationDelay: React.CSSProperties["animationDelay"];
}>`
  display: inline-block;
  animation: ${waveAnimation} 2s infinite ease-in-out;
  animation-delay: ${(props) => props.$animationDelay};
`;

const Crown3 = () => {
  const text = "crown3";

  return (
    <div style={{ position: "relative" }}>
      <h1>crown3</h1>
      <h1
        style={{
          position: "absolute",
          top: "0px",
          WebkitTextStroke: `1.5px ${colors.dark}`,
          color: colors.white,
        }}
      >
        {text.split("").map((char, index) => (
          <AnimatedChar as="h1" key={index} $animationDelay={`${index * 0.1}s`}>
            {char}
          </AnimatedChar>
        ))}
      </h1>
    </div>
  );
};

export default Crown3;
