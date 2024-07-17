import { Outlet } from "react-router-dom";
import Spacer from "src/components/containers/Spacer";
import Navbar from "src/components/Navbar/Navbar";
import styled from "styled-components";

const Layout = () => {
  return (
    <Page>
      <Navbar />
      <Outlet />

      <Spacer height="300px" />
    </Page>
  );
};

const Page = styled.div`
  width: 100%;
`;

export default Layout;
