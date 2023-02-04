import { Avatar, Button, Input, Layout, Menu } from "antd";
import {
  AntDesignOutlined,
  SettingOutlined,
  ShoppingCartOutlined,
  LoginOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import Head from "next/head";
import { FC, useState } from "react";

interface Props {
  title?: string;
  keywords?: string;
  description?: string;
}

const { Header } = Layout;
const { Search } = Input;

const items: MenuProps["items"] = [
  {
    label: "Navigation Three - Submenu",
    key: "1",
    icon: <SettingOutlined />,
    children: [
      {
        type: "group",
        label: "Item 1",
        children: [
          {
            label: "Option 1",
            key: "setting:1",
          },
          {
            label: "Option 2",
            key: "setting:2",
          },
        ],
      },
      {
        type: "group",
        label: "Item 2",
        children: [
          {
            label: "Option 3",
            key: "setting:3",
          },
          {
            label: "Option 4",
            key: "setting:4",
          },
        ],
      },
    ],
  },
  {
    label: "Navigation Three - Submenu",
    key: "2",
    icon: <SettingOutlined />,
    children: [
      {
        type: "group",
        label: "Item 1",
        children: [
          {
            label: "Option 1",
            key: "setting:1",
          },
          {
            label: "Option 2",
            key: "setting:2",
          },
        ],
      },
      {
        type: "group",
        label: "Item 2",
        children: [
          {
            label: "Option 3",
            key: "setting:3",
          },
          {
            label: "Option 4",
            key: "setting:4",
          },
        ],
      },
    ],
  },
  {
    label: "Navigation Three - Submenu",
    key: "3",
    icon: <SettingOutlined />,
    children: [
      {
        type: "group",
        label: "Item 1",
        children: [
          {
            label: "Option 1",
            key: "setting:1",
          },
          {
            label: "Option 2",
            key: "setting:2",
          },
        ],
      },
      {
        type: "group",
        label: "Item 2",
        children: [
          {
            label: "Option 3",
            key: "setting:3",
          },
          {
            label: "Option 4",
            key: "setting:4",
          },
        ],
      },
    ],
  },
  {
    label: "Navigation Three - Submenu",
    key: "4",
    icon: <SettingOutlined />,
    children: [
      {
        type: "group",
        label: "Item 1",
        children: [
          {
            label: "Option 1",
            key: "setting:1",
          },
          {
            label: "Option 2",
            key: "setting:2",
          },
        ],
      },
      {
        type: "group",
        label: "Item 2",
        children: [
          {
            label: "Option 3",
            key: "setting:3",
          },
          {
            label: "Option 4",
            key: "setting:4",
          },
        ],
      },
    ],
  },
];

const HeaderLayout: FC<Props> = ({ description, keywords, title }) => {
  const [current, setCurrent] = useState("0");
  const handleChangeTab: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };

  const onSearch = (value: string) => console.log(value);

  return (
    <Header style={{ position: "sticky", top: 0, zIndex: 1, width: "100%", height: "auto", padding: "16px" }}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "24px", alignItems: "center" }}>
        <div
          style={{ width: "100%", justifyContent: "space-between", display: "flex", alignItems: "center", gap: "16px" }}
        >
          <Avatar size={60} icon={<AntDesignOutlined />} />
          <Search placeholder="input search text" onSearch={onSearch} enterButton style={{ maxWidth: 450 }} />
          <div style={{ display: "flex", gap: "16px" }}>
            <Avatar size={32} icon={<ShoppingCartOutlined />} />
            <Button type="primary" icon={false ? <LoginOutlined /> : <LogoutOutlined />} />
          </div>
        </div>
        <Menu
          onClick={handleChangeTab}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
          style={{ width: "100%", borderRadius: "5px", justifyContent: "center" }}
        />
      </div>
    </Header>
  );
};

export default HeaderLayout;
