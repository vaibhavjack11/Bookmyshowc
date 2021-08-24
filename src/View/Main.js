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
  Form, 
  Button, 
  Input, 
  Select, 
  DatePicker  
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



//package assignments
const { Header, Content, Footer, } = Layout;
const { Option } = Select;

//Start of function

function Main(props) {
  //variables
  const [drawer,setDrawer] = useState(false);

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
          <Col span={14}>
            <Divider orientation="right">
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
                <Menu.Item key={1} style={{backgroundColor:"#595959"}}>City name<CaretDownOutlined /></Menu.Item>
                <Menu.Item key={2} style={{backgroundColor:"#2900ff"}}>Sign in</Menu.Item>
              </Menu>
            </Divider>
          </Col>
          <Col span={2}>
          <Button type="gray" onClick={showDrawer}>
          <MenuUnfoldOutlined />
        </Button>
        <Drawer
          title="Create a new account"
          width={720}
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
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="name"
                  label="Name"
                  rules={[{ required: true, message: 'Please enter user name' }]}
                >
                  <Input placeholder="Please enter user name" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="url"
                  label="Url"
                  rules={[{ required: true, message: 'Please enter url' }]}
                >
                  <Input
                    style={{ width: '100%' }}
                    addonBefore="http://"
                    addonAfter=".com"
                    placeholder="Please enter url"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="owner"
                  label="Owner"
                  rules={[{ required: true, message: 'Please select an owner' }]}
                >
                  <Select placeholder="Please select an owner">
                    <Option value="xiao">Xiaoxiao Fu</Option>
                    <Option value="mao">Maomao Zhou</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="type"
                  label="Type"
                  rules={[{ required: true, message: 'Please choose the type' }]}
                >
                  <Select placeholder="Please choose the type">
                    <Option value="private">Private</Option>
                    <Option value="public">Public</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="approver"
                  label="Approver"
                  rules={[{ required: true, message: 'Please choose the approver' }]}
                >
                  <Select placeholder="Please choose the approver">
                    <Option value="jack">Jack Ma</Option>
                    <Option value="tom">Tom Liu</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="dateTime"
                  label="DateTime"
                  rules={[{ required: true, message: 'Please choose the dateTime' }]}
                >
                  <DatePicker.RangePicker
                    style={{ width: '100%' }}
                    getPopupContainer={trigger => trigger.parentElement}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  name="description"
                  label="Description"
                  rules={[
                    {
                      required: true,
                      message: 'please enter url description',
                    },
                  ]}
                >
                  <Input.TextArea rows={4} placeholder="please enter url description" />
                </Form.Item>
              </Col>
            </Row>
          </Form>
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
