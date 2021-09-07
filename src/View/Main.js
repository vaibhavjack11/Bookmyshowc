// Imports from preDefined package
import React, { useState } from "react";
import { Route, Link, BrowserRouter } from 'react-router-dom'
import "antd/dist/antd.css";
import {
  Layout,
  Menu,
  Row,
  Col,
  Divider,
  Drawer,
  Button,
  Select,
  Input,
  List,
} from "antd";
import { cyan } from "@ant-design/colors";
import {
  SearchOutlined,
  CaretDownOutlined,
  MenuUnfoldOutlined,
  FlagFilled,
} from "@ant-design/icons";

// Imports from useDefined package
import Slider from "../View/assets/Packages/Carousal";
import Banner from "../View/assets/Packages/Banner";
import CardSlider from "../View/assets/Packages/Card";
import CitySelect from "../View/assets/Packages/CitySelect";
import SignIn from "../View/assets/Packages/SignIn"
import Store from "../Store/store"

//package assignments
const { Header, Content, Footer } = Layout;
const { Option } = Select;

//Start of function
console.log(Store.getState());
const Main = (props) => {

// Store.dispatch({
//   type:"dataAdded",
//   payload:{
//     discription:"first bug"
//   }

// })



  //variables
  const [drawer, setDrawer] = useState(false);

  //functions
  const showDrawer = () => {
    setDrawer(true);
  };

  const onClose = () => {
    setDrawer(false);
  };

const listData = [
  '',
  '',
  'Booking History',
  'Help & Support',
  'Settings',
];





  //Actual DOM return
  return (
    <>
      <Header style={{ backgroundColor: "#595959" }}>
        <Row align="middle">
          <Col span={3}>
            <Divider orientation="right">
              <div className="logo">
                BookmyShow
              </div>
            </Divider>
          </Col>
          <Col span={8}>
            <Input
              size="large"
              placeholder="Search for Movies, Events, Plays, Sports and Activities"
              prefix={<SearchOutlined />}
              style={{ borderRadius: "5px" }}
            />
          </Col>
          <Col span={10}>
            <Divider orientation="right">
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
                <Menu.Item key={1} style={{ backgroundColor: "#595959" }}>
                  <CitySelect></CitySelect>
                </Menu.Item>
                <Menu.Item key={2} style={{ backgroundColor: "#2900ff" }}>
                  
                  
                  <SignIn></SignIn>
                  
                </Menu.Item>
              </Menu>
            </Divider>
          </Col>
          <Col span={1} offset={2}>
            <Button type="gray" onClick={showDrawer}>
              <MenuUnfoldOutlined />
            </Button>
            <Drawer
              title="Hey"
              width={200}
              onClose={onClose}
              visible={drawer}
              bodyStyle={{ paddingBottom: 80 }}
              footer={
                <div
                  style={{
                    textAlign: "right",
                  }}
                >
                  <Button onClick={onClose} style={{ marginRight: 8 }}>
                    Cancel
                  </Button>
                  <Button onClick={onClose} type="primary">
                    Submit
                  </Button>
                </div>
              }
            >
              <div>
                <List
                  header={<div>Header</div>}
                  footer={<div>Footer</div>}
                  
                  renderItem={(item) => (<>
                    <List.Item key={1}>
                      asda
                    </List.Item>
                    <List.Item key={2}>
                      asda
                    </List.Item>
                    </>
                  )}
                />
              </div>
            </Drawer>
          </Col>
        </Row>
      </Header>

      <Header style={{ backgroundColor: "#262626" }}>
        <Row>
          <Col span={12} style={{ backgroundColor: "#262626" }}>
            <Menu
              theme="dark"
              mode="horizontal"
              style={{ backgroundColor: "#262626" }}
            >
              <Menu.Item key={1} style={{ backgroundColor: "#262626" }}>
                Movies
              </Menu.Item>
              <Menu.Item key={2} style={{ backgroundColor: "#262626" }}>
                Strems
              </Menu.Item>
              <Menu.Item key={3} style={{ backgroundColor: "#262626" }}>
                Plays
              </Menu.Item>
              <Menu.Item key={4} style={{ backgroundColor: "#262626" }}>
                Sports
              </Menu.Item>
              <Menu.Item key={5} style={{ backgroundColor: "#262626" }}>
                Activities
              </Menu.Item>
              <Menu.Item key={6} style={{ backgroundColor: "#262626" }}>
                Buss
              </Menu.Item>
              <Menu.Item
                key={7}
                style={{ backgroundColor: "#262626" }}
              ></Menu.Item>
            </Menu>
          </Col>

          <Col span={8} offset={4}>
            <Menu
              theme="dark"
              mode="horizontal"
              style={{ backgroundColor: "#262626" }}
            >
              <Menu.Item key={1} style={{ backgroundColor: "#262626" }}>
                ListYourShow
              </Menu.Item>
              <Menu.Item key={2} style={{ backgroundColor: "#262626" }}>
                Corporates
              </Menu.Item>
              <Menu.Item key={3} style={{ backgroundColor: "#262626" }}>
                Offers
              </Menu.Item>
              <Menu.Item key={4} style={{ backgroundColor: "#262626" }}>
                GridCards
              </Menu.Item>
            </Menu>
          </Col>
        </Row>
      </Header>

      <Layout style={{ minHeight: "100vh" }}>
        <Layout className="site-layout">




          <Content style={{ margin: "0 0px" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360, backgroundColor: "#5555" }}
            >
              <Slider></Slider>
            </div>
          </Content>

          <Content style={{ margin: "0 0px" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360, backgroundColor: "#5555" }}
            >
              <Banner></Banner>
            </div>

            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360, backgroundColor: "#5555" }}
            >
              <CardSlider></CardSlider>
            </div>
          </Content>








          <Footer style={{ backgroundColor: cyan[7] }}>
            <div class="">
              <h3>Privacy Note</h3>
              By using www.bookmyshow.com(our website), you are fully accepting
              the Privacy Policy available at
              <a href="/">https://bookmyshow.com/privacy</a>
              governing your access to Bookmyshow and provision of services by
              Bookmyshow to you. If you do not accept terms mentioned in the
              <a href="/">Privacy Policy</a>, you must not share any of your
              personal information and immediately exit Bookmyshow.
            </div>
          </Footer>
          <Footer style={{ backgroundColor: cyan[8] }}>
            <Row>
              <Col span={18}>
                <h3>
                  {" "}
                  <FlagFilled /> List your Show Got a show, event, activity or a
                  great experience? Partner with us & get listed on BookMyShow
                </h3>
              </Col>
              <Col span={2} offset={3}>
                <a type="primary" danger>
                  {" "}
                  Contact Today!
                </a>
              </Col>
            </Row>
          </Footer>
          <Footer style={{ textAlign: "center", backgroundColor: cyan[9] }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </>
  );
}

//exported Contents
export default Main;
