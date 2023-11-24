import React, { useState } from "react";
import { Avatar, Layout, Menu, Switch } from "antd";
import { BiSolidDashboard, BiGift } from "react-icons/bi";
import {
  FaPuzzlePiece,
  FaQuestionCircle,
  FaHeadset,
  FaSignOutAlt,
} from "react-icons/fa";
import Card1 from "./Card";
import Card2 from "./Card2";
import { Header } from "antd/es/layout/layout";
import Image1 from "./Image/PLOgo.jpeg";
import { Dropdown, SplitButton } from "react-bootstrap";
import "./SideNav.css";

const { Sider, Content } = Layout;
const SideNav = () => {
  const objectArray = [
    {
      plan: "Basic",
      actualPrize: "$ 89.99/mo",
      offerPrize: "$ 9.99/mo",
      users: 25,
      gb: 25,
      support: "Email Support",
      btnColor: "#ffe7a9",
    },
    {
      plan: "Standard",
      actualPrize: "$ 189.99/mo",
      offerPrize: "$ 99.99/mo",
      users: 50,
      gb: 60,
      support: "Email+Chat Support",
      btnColor: "#ff9494",
    },
    {
      plan: "Premium",
      actualPrize: "$ 389.99/mo",
      offerPrize: "$ 19.99/mo",
      users: 25,
      gb: 25,
      support: "Email+Chat+Whatsapp Support",
      btnColor: "#e7a2ff",
    },
  ];
  const objectArray2 = [
    {
      plan: "Free Starter",
      para: "The quickest and easiest way totry protocols with basic functionalities",
      btnColor: "#c6ff8e",

      users: "Upto 8 Users",
      gb: 3,
      support: "Email Support",
      about:
        "Basic of Documents,Task Flow Voting,Accountig,Banking,Notes ,Investor,Director and Team Managemnet included",
    },
    {
      plan: "Enterprize Plan",
      para: "Effortlessly customize and fine-tune services as your needs shift,ensuring the perfect tools for success",
      btnColor: "#8ab9fe",

      users: "More than 75 Users",

      about: "Customization of all other features",
    },
  ];
  return (
    <div>
      <header style={{ backgroundColor: "#e3f1fe", display: "flex" }}>
        <img src={Image1} alt="" width={"110px"} height={"110px"} />
        <div style={{ marginLeft: "auto" }}>
          <SplitButton
            variant="light"
            title="XYZ Enterprises Pvt Ltd"
            className="custom-split-button"
          >
            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
            <Dropdown.Item eventKey="3" active>
              Active Item
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
          </SplitButton>
        </div>
      </header>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider trigger={null} theme="light">
          <div className=" align-items-center justify-content-center p-3 text-center">
            <Avatar
              src="https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/Vd3bj2jPe/videoblocks-smiling-businessman-working-on-laptop-computer-at-home-office-male-professional-typing-on-laptop-keyboard-at-office-workplace-portrait-of-positive-business-man-looking-at-laptop-screen-indoors_bfhjr_5md_thumbnail-1080_01.png"
              size={80}
            />
            <h4 style={{ margin: 0, fontSize: "16px" }}>Muhammed Mithilaj</h4>
            <h4 style={{ margin: 0, fontSize: "12px" }}>mithilaj@gmail.com</h4>
          </div>
          <div className="logo" />
          <Menu theme="light" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" icon={<BiSolidDashboard />}>
              Dashboard
            </Menu.Item>
            <Menu.Item key="2" icon={<BiGift />}>
              Perks
            </Menu.Item>
            <Menu.Item key="3" icon={<FaPuzzlePiece />}>
              Addon
            </Menu.Item>
            <Menu.Item key="4" icon={<FaQuestionCircle />}>
              FAQ
            </Menu.Item>
            <Menu.Item key="5" icon={<FaHeadset />}>
              Support
            </Menu.Item>
          </Menu>
          <Menu
            theme="light"
            mode="inline"
            style={{ position: "absolute", bottom: 0 }}
          >
            <Menu.Item key="logout" icon={<FaSignOutAlt />}>
              Logout
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h4>Choose a plan that's just right for you !</h4>
              <div style={{ display: "flex", alignItems: "center" }}>
                <span style={{ marginRight: 5 }}>Monthly</span>
                <Switch style={{ marginRight: 5 }} />
                <span>Annually</span>
              </div>
            </div>
            <Card1 objectArray={objectArray} />
            <Card2 objectArray={objectArray2} />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default SideNav;
