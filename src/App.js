/*global chrome*/
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  InboxOutlined,
  UserOutlined,
  ProfileOutlined,
  FullscreenOutlined,
  HeartOutlined,
  ExperimentOutlined,
  SettingOutlined,
  SmileOutlined,
  ControlOutlined,
  BookOutlined,
  QuestionCircleOutlined,
  TrophyOutlined,
} from "@ant-design/icons";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Layout, Menu, theme, Button } from "antd";
import React, { useState } from "react";
import "./App.css";

import TutorialSettings from "./pages/settingsTutorial.tsx";
import ItemPageSettings from "./pages/settingsItemPage.tsx";
import ProfileSettings from "./pages/settingsProfile.tsx";
import InventorySettings from "./pages/settingsInventory.tsx";
import GiveawaySettings from "./pages/settingsGiveways.tsx";
import EnhancerSettings from "./pages/settingsEnhancer.tsx";

import UpdatelogsPage from "./pages/pageUpdateLogs.tsx";
import BooksMarkPage from "./pages/pageBooksMark.tsx";
import FeaturesPage from "./pages/pageFeatures.tsx";
import FAQpage from "./pages/pageFAQ.tsx";
import DonatePage from "./pages/pageDonate.tsx";

import iconFront from "./images/iconFront.png";
import iconBack from "./images/iconBack.png";

const { Header, Sider, Content } = Layout;

function openConfigPage() {
  if (typeof chrome !== "undefined" && chrome.runtime) {
    chrome.tabs.create({ url: "index.html" });
  } else {
    console.error("Chrome runtime is not available");
  }
}

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const hideSidebar = () => {
    setShowSidebar(false);
    document.querySelector(".holdSidebar > button").style.display = "none";
  };

  const allowSidebar = () => {
    setShowSidebar(true);
    setCollapsed(false);
    document.querySelector(".holdSidebar > button").style.display = "block";
  };

  return (
    <Router>
      <Layout className="backgroundClass">
        <Header
          className="secondary-color"
          style={{
            position: "sticky",
            top: 0,
            zIndex: 1,
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0",
          }}
        >
          <div className="holdSidebar">
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={toggleSidebar}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
                color: "white",
              }}
            />
          </div>
          <div className="secondary-color holdMenu">
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["1"]}
              className="secondary-color"
              style={{ width: "100%", justifyContent: "center" }}
            >
              <Menu.Item
                key="1"
                onClick={allowSidebar}
                icon={<SettingOutlined />}
              >
                <Link to="/settings">Settings</Link>
              </Menu.Item>
              <Menu.Item
                key="2"
                onClick={hideSidebar}
                icon={<ExperimentOutlined />}
              >
                <Link to="/update-logs">Update Logs</Link>
              </Menu.Item>
              <Menu.Item key="3" onClick={hideSidebar} icon={<BookOutlined />}>
                <Link to="/booksmark">Booksmark</Link>
              </Menu.Item>
              <Menu.Item
                key="4"
                onClick={hideSidebar}
                icon={<QuestionCircleOutlined />}
              >
                <Link to="/faq">FAQ</Link>
              </Menu.Item>
              <Menu.Item
                key="5"
                onClick={hideSidebar}
                icon={<TrophyOutlined />}
              >
                <Link to="/features">Features</Link>
              </Menu.Item>
              <Menu.Item key="6" onClick={hideSidebar} icon={<HeartOutlined />}>
                <Link to="/donate">Donate</Link>
              </Menu.Item>
            </Menu>
          </div>
          <div className="fullScreen">
            <Button
              type="text"
              icon={<FullscreenOutlined />}
              onClick={openConfigPage}
              style={{
                fontSize: "16px",
                color: "white",
                width: 64,
                height: 64,
              }}
            />
          </div>
        </Header>
        <Layout className="secondary-color">
          {showSidebar && (
            <Sider
              trigger={null}
              collapsible
              collapsed={collapsed}
              width={200}
              className="secondary-color"
              style={{ minHeight: "100%" }}
            >
              <div className="imgsHolder">
                <img
                  src={iconFront}
                  className="vertical-logo main"
                  style={{ position: "absolute" }}
                  alt="Icon Front"
                />
                <img src={iconBack} className="vertical-logo" alt="Icon Back" />
              </div>
              <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={["1"]}
                className="secondary-color"
              >
                <Menu.Item key="1" icon={<SmileOutlined />}>
                  <Link to="/settings">Tutorial</Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<ProfileOutlined />}>
                  <Link to="/settings/itemPage">Item Page Enhancer</Link>
                </Menu.Item>
                <Menu.Item key="3" icon={<UserOutlined />}>
                  <Link to="/settings/profile">Profile Enhancer</Link>
                </Menu.Item>
                <Menu.Item key="4" icon={<InboxOutlined />}>
                  <Link to="/settings/inventory">Inventory Enhancer</Link>
                </Menu.Item>
                <Menu.Item key="5" icon={<UserOutlined />}>
                  <Link to="/settings/giveways">Giveways Settings</Link>
                </Menu.Item>
                <Menu.Item key="6" icon={<ControlOutlined />}>
                  <Link to="/settings/enhancer">Enhancer Settings</Link>
                </Menu.Item>
              </Menu>
            </Sider>
          )}
          <Layout className="backgroundClass">
            <Content
              className="container tertiary-color alignSelf-center borderRadius1"
              style={{
                height: "100%",
                margin: "24px 16px",
                padding: 24,
                minHeight: 280,
                color: "white",
                background: theme.useToken().token.colorBgContainer,
              }}
            >
              <div
                className="tertiary-color"
                style={{
                  padding: 24,
                  minHeight: 380,
                  background: theme.useToken().token.colorBgContainer,
                }}
              >
                <Routes>
                  <Route path="index.html" element={<TutorialSettings />} />
                  <Route path="/settings" element={<TutorialSettings />} />
                  <Route
                    path="/settings/itemPage"
                    element={<ItemPageSettings />}
                  />
                  <Route
                    path="/settings/profile"
                    element={<ProfileSettings />}
                  />
                  <Route
                    path="/settings/inventory"
                    element={<InventorySettings />}
                  />
                  <Route
                    path="/settings/enhancer"
                    element={<EnhancerSettings />}
                  />
                  <Route
                    path="/settings/giveways"
                    element={<GiveawaySettings />}
                  />

                  <Route path="/booksmark" element={<BooksMarkPage />} />
                  <Route path="/update-logs" element={<UpdatelogsPage />} />
                  <Route path="/booksmark" element={<BooksMarkPage />} />
                  <Route path="/features" element={<FeaturesPage />} />
                  <Route path="/faq" element={<FAQpage />} />
                  <Route path="/donate" element={<DonatePage />} />
                </Routes>
              </div>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
