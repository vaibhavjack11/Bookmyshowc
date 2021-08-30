import React from 'react'
import { Carousel, Col, Row, Card } from 'antd';
import {
  HeartFilled
} from "@ant-design/icons";

const { Meta } = Card;
const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
function Slider(){


return (
  <>
  <Carousel autoplay style={{borderRadius:"5px"}}>
    <div>
    <div className="site-card-wrapper">
    <Row gutter={16}>
      <Col span={6}>
        <Card hoverable    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />} bordered={false}>
              <Meta title="Liked by" description="Movie Name" avatar={<HeartFilled />}/>
        </Card>
      </Col>
      <Col span={6}>
        <Card hoverable    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />} bordered={false}>
              <Meta title="Liked by" description="Movie Name" avatar={<HeartFilled />}/>
        </Card>
      </Col>
      <Col span={6}>
        <Card hoverable    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />} bordered={false}>
              <Meta title="Liked by" description="Movie Name" avatar={<HeartFilled />}/>
        </Card>
      </Col>
      <Col span={6}>
        <Card hoverable    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />} bordered={false}>
              <Meta title="Liked by" description="Movie Name" avatar={<HeartFilled />}/>
        </Card>
      </Col>
    </Row>
  </div>
    </div>
    <div>
          <div className="site-card-wrapper">
    <Row gutter={16}>
      <Col span={6}>
        <Card hoverable    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />} bordered={false}>
              <Meta title="Liked by" description="Movie Name" avatar={<HeartFilled />}/>
        </Card>
      </Col>
      <Col span={6}>
        <Card hoverable    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />} bordered={false}>
              <Meta title="Liked by" description="Movie Name" avatar={<HeartFilled />}/>
        </Card>
      </Col>
      <Col span={6}>
        <Card hoverable    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />} bordered={false}>
              <Meta title="Liked by" description="Movie Name" avatar={<HeartFilled />}/>
        </Card>
      </Col>
      <Col span={6}>
        <Card hoverable    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />} bordered={false}>
              <Meta title="Liked by" description="Movie Name" avatar={<HeartFilled />}/>
        </Card>
      </Col>
    </Row>
  </div>
    </div>
    <div>
          <div className="site-card-wrapper">
    <Row gutter={16}>
      <Col span={6}>
        <Card hoverable    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />} bordered={false}>
              <Meta title="Liked by" description="Movie Name" avatar={<HeartFilled />}/>
        </Card>
      </Col>
      <Col span={6}>
        <Card hoverable    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />} bordered={false}>
              <Meta title="Liked by" description="Movie Name" avatar={<HeartFilled />}/>
        </Card>
      </Col>
      <Col span={6}>
        <Card hoverable    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />} bordered={false}>
              <Meta title="Liked by" description="Movie Name" avatar={<HeartFilled />}/>
        </Card>
      </Col>
      <Col span={6}>
        <Card hoverable    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />} bordered={false}>
              <Meta title="Liked by" description="Movie Name" avatar={<HeartFilled />}/>
        </Card>
      </Col>
    </Row>
  </div>
    </div>
    <div>
          <div className="site-card-wrapper">
    <Row gutter={16}>
      <Col span={6}>
        <Card hoverable    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />} bordered={false}>
              <Meta title="Liked by" description="Movie Name" avatar={<HeartFilled />}/>
        </Card>
      </Col>
      <Col span={6}>
        <Card hoverable    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />} bordered={false}>
              <Meta title="Liked by" description="Movie Name" avatar={<HeartFilled />}/>
        </Card>
      </Col>
      <Col span={6}>
        <Card hoverable    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />} bordered={false}>
              <Meta title="Liked by" description="Movie Name" avatar={<HeartFilled />}/>
        </Card>
      </Col>
      <Col span={6}>
        <Card hoverable    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />} bordered={false}>
              <Meta title="Liked by" description="Movie Name" avatar={<HeartFilled />}/>
        </Card>
      </Col>
    </Row>
  </div>
    </div>
  </Carousel>,
  </>
);
}

export default Slider;