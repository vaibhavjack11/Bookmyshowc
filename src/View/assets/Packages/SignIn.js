import React, {useState} from 'react'
import {

    Row,
    Col,
    Modal,
    Input,
    Card,
    Button
    
  } from "antd";
  import {
    FacebookFilled,
    GoogleCircleFilled,
    MailOutlined,
    AppleFilled
  } from "@ant-design/icons";


  const { Meta } = Card;
const SignIn = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isCountinue, setIsCountinue] = useState("");

const handleCountinue = (index) =>{

    setIsCountinue(index);

}
const handleCountinueNot = () =>{

    setIsCountinue(false);

}

    
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
        <div onClick={showModal}>Sign in</div>
        <Modal
                width={600}
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                style={{textAlign:"center"}}
                closable={true}
            
              >
        <div onClick={handleCountinueNot}>
              
              <h2>Get Started</h2>

              <div >
        <Card hoverable    cover={<></>} bordered={false}>
              <Meta title="Continue with Facebook" description="" avatar={<FacebookFilled style={{color:"#0000ff"}}/>}/>
        </Card>
              </div>
              <div >
        <Card hoverable    cover={<></>} bordered={false}>
              <Meta title="Continue with Google" description="" avatar={<GoogleCircleFilled style={{color:"#ff0000"}}/>}/>
        </Card>
              </div>
              <div >
        <Card hoverable    cover={<></>} bordered={false}>
              <Meta title="Continue with Email" description="" avatar={<MailOutlined  style={{color:"#000000"}}/>}/>
        </Card>
              </div>
              <div >
        <Card hoverable    cover={<></>} bordered={false}>
              <Meta title="Continue with Apple" description="" avatar={<AppleFilled style={{color:"#000000"}}/>}/>
        </Card>
              </div>

              <div>
            <h3>OR</h3>
              </div>
              <div>
              <Input size="large" placeholder="Mobile number" prefix={<>+91</>} style={{marginBottom:"25px"}} onChange={handleCountinue}/>
                {isCountinue?
                <>I agree to the <a href="/">Terms and Conditions</a> & <a href="/">Privcay Policy</a> </>
                :
                    <><Button></Button></>
                }
              
                </div>
            </div>
              </Modal>
  </>
);
}

export default SignIn;