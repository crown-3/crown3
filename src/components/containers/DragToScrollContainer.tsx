import { MouseEvent, useRef, useState } from "react";
import styled, { CSSProp } from "styled-components";

const Container = styled.div<{ $style?: CSSProp }>`
  width: 100%;
  height: 100%;

  overflow: auto;
  cursor: grab;
  &:active {
    cursor: grabbing;
  }

  padding: 20px;
  box-sizing: border-box;

  ${({ $style }) => $style};
`;

const Content = styled.div`
  width: 1000px; // 컨텐츠의 너비, 컨테이너보다 넓게 설정
  height: 1000px; // 컨텐츠의 높이, 컨테이너보다 높게 설정
`;

interface Position {
  x: number;
  y: number;
}

interface DragToScrollContainerProps {
  children: React.ReactNode;
  $style?: CSSProp;
}

const DragToScrollContainer = ({
  children,
  $style,
}: DragToScrollContainerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState<Position>({ x: 0, y: 0 });
  const [scrollPosition, setScrollPosition] = useState<Position>({
    x: 0,
    y: 0,
  });

  const SCROLL_SPEED_COEF = 1;

  const handleMouseDown = (e: MouseEvent) => {
    setIsDragging(true);
    setStartPosition({
      x: e.pageX - (containerRef.current?.offsetLeft || 0),
      y: e.pageY - (containerRef.current?.offsetTop || 0),
    });
    setScrollPosition({
      x: containerRef.current?.scrollLeft || 0,
      y: containerRef.current?.scrollTop || 0,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (containerRef.current?.offsetLeft || 0);
    const y = e.pageY - (containerRef.current?.offsetTop || 0);
    const walkX = (x - startPosition.x) * SCROLL_SPEED_COEF;
    const walkY = (y - startPosition.y) * SCROLL_SPEED_COEF;
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollPosition.x - walkX;
      containerRef.current.scrollTop = scrollPosition.y - walkY;
    }
  };

  return (
    <Container
      $style={$style}
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseUp}
    >
      {children}
    </Container>
  );
};

export default DragToScrollContainer;
