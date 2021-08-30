import React, {useState} from 'react'
import {

    Row,
    Col,
    Modal,
    Input
  } from "antd";
  import {
    SearchOutlined,
    CaretDownOutlined
  } from "@ant-design/icons";

function CitySelect(){
    const [isModalVisible, setIsModalVisible] = useState(false);




    
  const showModal = () => {
    setIsModalVisible(true);
  };



    const handleOk = () => {
        setIsModalVisible(false);
      };
    
      const handleCancel = () => {
        setIsModalVisible(false);
      };

return (
  <>
        <div onClick={showModal}>City name<CaretDownOutlined /></div>
        <Modal
                width={1200}
                visible={isModalVisible}
                onOk={handleOk}
                // onCancel={handleCancel}
                style={{textAlign:"center"}}
                closable={false}
              >
              <Row>
                <Col span={24}>
                <Input size="large" placeholder="search" prefix={<SearchOutlined />} />
                </Col>
              </Row>
              
              <h3>Popular cities</h3>
              <Row>
                <Col span={2} offset={2}>
                City's 
                </Col>
                <Col span={2}>
                City's 
                </Col>
                <Col span={2}>
                City's 
                </Col>
                <Col span={2}>
                City's 
                </Col>
                <Col span={2}>
                City's 
                </Col>
                <Col span={2}>
                City's 
                </Col>
                <Col span={2}>
                City's 
                </Col>
                <Col span={2}>
                City's 
                </Col>
                <Col span={2}>
                City's 
                </Col>
                <Col span={2}>
                City's 
                </Col>
              </Row>
              </Modal>
  </>
);
}

export default CitySelect;