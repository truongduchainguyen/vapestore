import { Layout } from "antd";
import { FC, ReactNode } from "react";
import Footer from "./Footer";
import HeaderLayout from "./Header";

interface Props {
  children: ReactNode;
}

const { Content } = Layout;

const MainLayout: FC<Props> = ({ children }) => (
  <Layout style={{ width: "100%", height: "100vh", display: "flex", flexDirection: "column" }}>
    <HeaderLayout />
    <Content>{children}</Content>
    <Footer />
  </Layout>
);

export default MainLayout;
