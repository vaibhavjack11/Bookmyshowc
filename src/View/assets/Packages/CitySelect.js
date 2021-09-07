import React, { useState } from "react";
import "../css/citySelect.css";
import { CityNames } from "../JsonObjects/cityNames";
import { Row, Col, Modal, Input } from "antd";
import { SearchOutlined, CaretDownOutlined } from "@ant-design/icons";

const CitySelect = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isCityVisible, setCityVisible] = useState(true);
  const [isSelected, setSeleted] = useState("pune-selected");
  const [isCityName, setCityName] = useState("Pune");
  let imageURL = "//in.bmscdn.com/m6/images/common-modules/regions/";
  let extension = ".png";
  let mum = "mumbai";
  let ncr = "ncr";
  let ban = "bang";
  let hyd = "hyd";
  let ahd = "ahd";
  let chd = "chd";
  let che = "chen";
  let pun = "pune";
  let kol = "kolk";
  let koc = "koch";

  const handleCitySelect = (city,name) =>{
    setSeleted(city+"-selected");
    setCityName(name);
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

  const handleCityName = () => {
    {
      isCityVisible ? setCityVisible(false) : setCityVisible(true);
    }
  };

  return (
    <>
      <div onClick={showModal}>
        {isCityName}
        <CaretDownOutlined />
      </div>
      <Modal
        width={1200}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        style={{ textAlign: "center" }}
        closable={false}
      >
        <Row>
          <Col span={24}>
            <Input
              size="large"
              placeholder="search"
              prefix={<SearchOutlined />}
            />
          </Col>
        </Row>

        <h3>Popular cities</h3>
        <Row>
          <Col span={2} offset={2}>
            <img src={isSelected==="mumbai-selected"?imageURL + isSelected +extension :imageURL + mum +extension } onClick={(e) => {
                                e.preventDefault();
                                handleCitySelect(mum,"Mumbai");
                                handleCancel();
                              }} className="large-city" alt="mumbai"/>
            <div>
              <h4>
                <b>Mumbai</b>
              </h4>
            </div>
          </Col>
          <Col span={2}>
          <img src={isSelected==="ncr-selected"?imageURL + isSelected +extension :imageURL + ncr +extension } onClick={(e) => {
                                e.preventDefault();
                                handleCitySelect(ncr,"NCR");
                                handleCancel();
                              }} className="small-city" alt="ncr"/>
            <div>
              <h4>
                <b>NCR</b>
              </h4>
            </div>
          </Col>
          <Col span={2}>
          <img src={isSelected==="bang-selected"?imageURL + isSelected +extension :imageURL + ban +extension } onClick={(e) => {
                                e.preventDefault();
                                handleCitySelect(ban,"Bangaluru");
                                handleCancel();
                              }} className="large-city" alt="ban"/>
            <div>
              <h4>
                <b>Bangaluru</b>
              </h4>
            </div>
          </Col>
          <Col span={2}>
          <img src={isSelected==="hyd-selected"?imageURL + isSelected +extension :imageURL + hyd +extension } onClick={(e) => {
                                e.preventDefault();
                                handleCitySelect(hyd,"Hyderabad");
                                handleCancel();
                              }} className="small-city" alt="hyd"/>
            <div>
              <h4>
                <b>Hyderabad</b>
              </h4>
            </div>
          </Col>
          <Col span={2}>
          <img src={isSelected==="ahd-selected"?imageURL + isSelected +extension :imageURL + ahd +extension } onClick={(e) => {
                                e.preventDefault();
                                handleCitySelect(ahd,"Ahemdabad");
                                handleCancel();
                              }} className="large-city" alt="ahd"/>
            <div>
              <h4>
                <b>Ahemdabad</b>
              </h4>
            </div>
          </Col>
          <Col span={2}>
          <img src={isSelected==="chd-selected"?imageURL + isSelected +extension :imageURL + chd +extension } onClick={(e) => {
                                e.preventDefault();
                                handleCitySelect(chd,"Chandigarh");
                                handleCancel();
                              }} className="small-city" alt="chd"/>
            <div>
              <h4>
                <b>Chandigarh</b>
              </h4>
            </div>
          </Col>
          <Col span={2}>
          <img src={isSelected==="chen-selected"?imageURL + isSelected +extension :imageURL + che +extension } onClick={(e) => {
                                e.preventDefault();
                                handleCitySelect(che,"Chennai");
                                handleCancel();
                              }} className="small-city" alt="che"/>
            <div>
              <h4>
                <b>Chennai</b>
              </h4>
            </div>
          </Col>
          <Col span={2}>
          <img src={isSelected==="pune-selected"?imageURL + isSelected +extension :imageURL + pun +extension } onClick={(e) => {
                                e.preventDefault();
                                handleCitySelect(pun,"Pune");
                                handleCancel();
                              }} className="large-city" alt="pun"/>
            <div>
              <h4>
                <b>Pune</b>
              </h4>
            </div>
          </Col>
          <Col span={2}>
          <img src={isSelected==="kolk-selected"?imageURL + isSelected +extension :imageURL + kol +extension } onClick={(e) => {
                                e.preventDefault();
                                handleCitySelect(kol,"Kolkata");
                                handleCancel();
                              }} className="large-city" alt="kol"/>
            <div>
              <h4>
                <b>Kolkata</b>
              </h4>
            </div>
          </Col>
          <Col span={2}>
          <img src={isSelected==="koch-selected"?imageURL + isSelected +extension :imageURL + koc +extension } onClick={(e) => {
                                e.preventDefault();
                                handleCitySelect(koc,"Kochi");
                                handleCancel();
                              }} className="large-city" alt="koc"/>
            <div>
              <h4>
                <b>Kochi</b>
              </h4>
            </div>
          </Col>
        </Row>
        <div>
          {isCityVisible ? (
            <div onClick={handleCityName} className="text-orange">View All Cities</div>
          ) : (
            <div className="text-dark">Other Cities</div>
          )}

          {isCityVisible ? (
            <></>
          ) : (
            <div>
              <ul class="view-all-cities">
                {CityNames.map((data, index) => (
                  <li key={index} class="list-values">
                    <div class="list-text">{data.cityname}</div>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {isCityVisible ? (
            <div></div>
          ) : (
            <div onClick={handleCityName} className="text-orange">Hide Cities</div>
          )}
        </div>
      </Modal>
    </>
  );
};

export default CitySelect;
