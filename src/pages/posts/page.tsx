import Content from "src/components/containers/Content";
import Spacer from "src/components/containers/Spacer";
import Tile from "src/components/tilemap/Tile";
import colors from "src/constants/colors";
import styled from "styled-components";

const PostsPage = () => {
  return (
    <>
      <Content>
        <Spacer height="100px" />

        <Writing>
          <h2>Here goes the title</h2>
          <Spacer height="10px" />
          <h4>here goes the subtitle</h4>

          <Spacer height="60px" />

          <StacksTitleWrapper>
            <h3>What I used</h3>
            <div
              style={{
                height: "2px",
                flexGrow: 1,
                backgroundColor: colors.dark,
              }}
            />
          </StacksTitleWrapper>

          <Spacer height="10px" />
          <StacksWrapper>
            <div>
              <Tile
                tileSize="120px"
                tileInfo={{
                  row: 0,
                  column: 0,
                  frame: "hexagon",
                  icon: "react",
                }}
              />
              <div style={{ display: "flex" }}>
                <Tile
                  tileSize="50px"
                  tileInfo={{
                    row: 0,
                    column: 0,
                    frame: "square",
                    icon: "styledComponents",
                  }}
                />
                <Tile
                  tileSize="50px"
                  tileInfo={{
                    row: 0,
                    column: 0,
                    frame: "square",
                    icon: "reactQuery",
                  }}
                />
                <Tile
                  tileSize="50px"
                  tileInfo={{
                    row: 0,
                    column: 0,
                    frame: "square",
                    icon: "jotai",
                  }}
                />
              </div>
            </div>

            <Tile
              tileSize="120px"
              tileInfo={{
                row: 0,
                column: 0,
                frame: "circle",
                icon: "figma",
              }}
            />
          </StacksWrapper>

          <Spacer height="20px" />
          <div
            style={{
              height: "2px",
              flexGrow: 1,
              backgroundColor: colors.dark,
            }}
          />
        </Writing>
      </Content>
    </>
  );
};

const Writing = styled.main`
  max-width: 700px;
`;

const StacksTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 15px;
`;

const StacksWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: 0 10px;
  gap: 20px;
`;

export default PostsPage;
