// Imports from preDefined package
import React, { useState } from "react";
// import ReactDOM from 'react-dom';
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
  Modal  
  } from "antd";
import { 
  
  
  
 } from "@ant-design/colors";
import {
  SearchOutlined,
  CaretDownOutlined,
  MenuUnfoldOutlined
} from "@ant-design/icons";

// Imports from useDefined package
import Slider from '../View/assets/Packages/Carousal'
import Banner from '../View/assets/Packages/Banner'
import CardSlider from '../View/assets/Packages/Card'



//package assignments
const { Header, Content, Footer, } = Layout;
const { Option } = Select;

//Start of function

function Main(props) {
  //variables
  const [drawer,setDrawer] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);


  //functions
  const showDrawer = () => {
    setDrawer(
      true
    );
  };

  const onClose = () => {
    setDrawer(
      false
    );
  };

 

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };


  //Actual DOM return
  return (
    <>
      <Header style={{backgroundColor:"#595959"}}>
        <Row align="middle">
          <Col span={3}>
          <Divider orientation="right">
            <div className="logo" style={{ color: "white" }} >
              BookmyShow
            </div>
            </Divider>
          </Col>
          <Col span={5} >
            <div style={{ backgroundColor: "white",height:"30px",borderRadius:"5px" }}>
            <SearchOutlined style={{transform:"translate(2px,-15px)"}}></SearchOutlined>
            
              
            </div>
          </Col>
          <Col span={15}>
            <Divider orientation="right">
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
                <Menu.Item key={1} style={{backgroundColor:"#595959"}} onClick={showModal}>
                City name
                <CaretDownOutlined /></Menu.Item>
                <Menu.Item key={2} style={{backgroundColor:"#2900ff"}}>Sign in</Menu.Item>
              </Menu>
              <Modal width={1000} title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>

              </Modal>
            </Divider>
          </Col>
          <Col span={1}>
          <Button type="gray" onClick={showDrawer}>
          <MenuUnfoldOutlined />
        </Button>
        <Drawer
          title="Hey"
          width={360}
          onClose={onClose}
          visible={drawer}
          bodyStyle={{ paddingBottom: 80 }}
          footer={
            <div
              style={{
                textAlign: 'right',
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
      
        <div>write here </div>
        </Drawer>
          </Col>
        </Row>

        
      </Header>

      <Header style={{backgroundColor:"#262626"}}>
        <Row >
        <Col span={12} style={{backgroundColor:"#262626"}}>
        
        <Menu theme="dark" mode="horizontal" style={{backgroundColor:"#262626"}}>
          <Menu.Item key={1} style={{backgroundColor:"#262626"}}>Movies</Menu.Item>
          <Menu.Item key={2} style={{backgroundColor:"#262626"}}>Strems</Menu.Item>
          <Menu.Item key={3} style={{backgroundColor:"#262626"}}>Plays</Menu.Item>
          <Menu.Item key={4} style={{backgroundColor:"#262626"}}>Sports</Menu.Item>
          <Menu.Item key={5} style={{backgroundColor:"#262626"}}>Activities</Menu.Item>
          <Menu.Item key={6} style={{backgroundColor:"#262626"}}>Buss</Menu.Item>
          <Menu.Item key={7} style={{backgroundColor:"#262626"}}></Menu.Item>

        </Menu>
        
        </Col>
        
        <Col span={8} offset={4}>
        
        <Menu theme="dark" mode="horizontal" style={{backgroundColor:"#262626"}}>
        
          <Menu.Item key={1} style={{backgroundColor:"#262626"}}>ListYourShow</Menu.Item>
          <Menu.Item key={2} style={{backgroundColor:"#262626"}}>Corporates</Menu.Item>
          <Menu.Item key={3} style={{backgroundColor:"#262626"}}>Offers</Menu.Item>
          <Menu.Item key={4} style={{backgroundColor:"#262626"}}>GridCards</Menu.Item>


        </Menu>
        
        </Col>
        </Row>
      </Header>

      <Layout style={{ minHeight: "100vh" }}>

        <Layout className="site-layout">
          <Content style={{ margin: "0 0px" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360,backgroundColor:"#5555" }}
            > 

          <Slider>
          </Slider>
            </div>
          </Content>


          <Content style={{ margin: "0 0px" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360,backgroundColor:"#5555" }}
            > 

          <Banner>
          </Banner>


            </div>


            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360,backgroundColor:"#5555" }}
            >
            <CardSlider>

            </CardSlider>
            </div>
          </Content>


          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </>
  );
}

//exported Contents
export default Main;
