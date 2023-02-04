import { Row, Col, Avatar } from "antd";
import { AntDesignOutlined } from "@ant-design/icons";
import { blue } from "@ant-design/colors";

const Footer = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "16px",
      padding: "8px 0 24px 0",
      backgroundColor: "#bfbfbf",
    }}
  >
    <div style={{ display: "flex", gap: "30px", justifyContent: "center", alignItems: "center" }}>
      <Avatar icon={<AntDesignOutlined />} />
      <h2>Chung cư 8x Đầm Sen, quận Tân Phú, TP.Hồ Chí Minh</h2>
    </div>
    <Row style={{ textAlign: "center" }}>
      <Col span={4} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <text>lorem ipsum dolor sit amet</text>
        <text>lorem ipsum dolor sit amet</text>
        <text>lorem ipsum dolor sit amet</text>
        <text>lorem ipsum dolor sit amet</text>
        <text>lorem ipsum dolor sit amet</text>
        <text>lorem ipsum dolor sit amet</text>
      </Col>
      <Col span={4} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <text>lorem ipsum dolor sit amet</text>
        <text>lorem ipsum dolor sit amet</text>
        <text>lorem ipsum dolor sit amet</text>
        <text>lorem ipsum dolor sit amet</text>
      </Col>
      <Col span={6} />
      <Col span={10} style={{ display: "flex", flexDirection: "column", gap: "16px" }}></Col>
    </Row>
  </div>
);

export default Footer;
