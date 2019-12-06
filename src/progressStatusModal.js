import React, { useState } from "react";
import {
  Modal,
  Header,
  Image,
  Step,
  TransitionablePortal,
  Segment
} from "semantic-ui-react";

// import "./editHarbour.css";
import CloseIcon from "./img/close.svg";
// import "./harbourDetail.css";
import Agent from "./img/agent.svg";
import Warehouse from "./img/warehouse.svg";
import "./progress.css";

export default function StatusReport(props) {
  const [openDemand, setOpenDemand] = useState(false);
  const [openPurchase, setOpenPurchase] = useState(false);
  const [openShipment, setOpenShipment] = useState(false);
  const Agents = [
    {
      name: "Manimaran",
      volume: "250"
    },
    {
      name: "Nandhu Raj",
      volume: "200"
    }
  ];

  const Warehouses = [
    {
      name: "Kozhikode",
      volume: "200"
    },
    {
      name: "Alapuzha",
      volume: "200"
    }
  ];
  const handleClickDemand = () => {
    setOpenDemand(!openDemand);
    setOpenShipment(false);
    setOpenPurchase(false);
  };
  const handleCloseDemand = () => setOpenDemand(false);
  const handleClickPurchase = () => {
    setOpenPurchase(!openPurchase);
    setOpenShipment(false);
    setOpenDemand(false);
  };
  const handleClosePurchase = () => setOpenPurchase(false);
  const handleClickShipment = () => {
    setOpenShipment(!openShipment);
    setOpenDemand(false);
    setOpenPurchase(false);
  };
  const handleCloseShipment = () => setOpenShipment(false);
  const confirmClick = (event, data) => {
    this.props.handleClose();
  };
  return (
    <div>
      <Modal
        open={props.statusModalOpen}
        size="large"
        closeOnEscape={true}
        closeOnRootNodeClick={true}
        style={{
          width: "auto",
          height: "auto",
          padding: "0px",
          margin: "auto",
          borderRadius: "50px"
        }}
      >
        <Image
          src={CloseIcon}
          floated="right"
          style={{
            width: "2%",
            height: "5%",
            margin: "20px",
            cursor: "grab"
          }}
          onClick={props.handleClose}
        ></Image>
        <Header className="status_modal_top">
          <h3>Status report of Fish_Name</h3>
        </Header>

        <Modal.Content className="status_modal_bottom">
          <Modal.Description>
            <div className="status_report">
              <div className="indudalstatus">
                <Step.Group ordered>
                  <Step completed onClick={handleClickDemand}>
                    <Step.Content>
                      <Step.Title>Demand</Step.Title>
                      <Step.Description>Required Volume 500kg</Step.Description>
                    </Step.Content>
                  </Step>

                  <Step active onClick={handleClickPurchase}>
                    <Step.Content>
                      <Step.Title>Purchase</Step.Title>
                      <Step.Description>250kg to be purchased</Step.Description>
                    </Step.Content>
                  </Step>

                  <Step active onClick={handleClickShipment}>
                    <Step.Content>
                      <Step.Title>Shippment</Step.Title>
                      <Step.Description>100kg to be shipped</Step.Description>
                    </Step.Content>
                  </Step>
                </Step.Group>
              </div>
              <div>
                {/* //Demand status// */}

                <TransitionablePortal
                  onClose={handleCloseDemand}
                  open={openDemand}
                >
                  <Segment
                    style={{
                      left: "23%",
                      position: "fixed",
                      top: "55%",
                      zIndex: 1000
                    }}
                  >
                    <h4>500kg FIsh_name is required</h4>
                  </Segment>
                </TransitionablePortal>

                {/* //Purchased status// */}

                <TransitionablePortal
                  onClose={handleClosePurchase}
                  open={openPurchase}
                >
                  <Segment
                    style={{
                      left: "40%",
                      position: "fixed",
                      top: "55%",
                      zIndex: 1000
                    }}
                  >
                    {/* <Header>Manimaran 250 killo mathi vanghi</Header> */}
                    <div
                      className="ui card"
                      style={{ webkitBoxShadow: "none", boxShadow: "none" }}
                    >
                      <div className="content">
                        <div className="header">Purchases status</div>
                      </div>
                      {Agents.map(agent => {
                        return (
                          <div className="content">
                            <div className="ui feed">
                              <div className="event">
                                <div className="label">
                                  <img src={Agent} />
                                </div>
                                <div className="content">
                                  <div className="summary">
                                    <a>{agent.name}</a> Purchased
                                  </div>
                                  <div className="volume">
                                    {agent.volume}kg out of 500kg
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}

                      <div className="content">
                        <div className="header" style={{ color: "grey" }}>
                          250kg more Required{" "}
                        </div>
                      </div>
                    </div>
                  </Segment>
                </TransitionablePortal>

                {/* //Shipment status// */}

                <TransitionablePortal
                  onClose={handleCloseShipment}
                  open={openShipment}
                >
                  <Segment
                    style={{
                      left: "57%",
                      position: "fixed",
                      top: "55%",
                      zIndex: 1000
                    }}
                  >
                    {/* <Header>Manimaran 250 killo mathi vanghi</Header> */}
                    <div
                      class="ui card"
                      style={{ webkitBoxShadow: "none", boxShadow: "none" }}
                    >
                      <div class="content">
                        <div class="header">Shipment status</div>
                      </div>
                      {Warehouses.map(warehouse => {
                        return (
                          <div class="content">
                            <div class="ui feed">
                              <div class="event">
                                <div class="label">
                                  <img src={Warehouse} />
                                </div>
                                <div class="content">
                                  <div class="volume_shippment">
                                    <a>{warehouse.volume}kg</a> out of 500kg
                                  </div>
                                  <div class="summary_shipment">
                                    Shipped to <a> {warehouse.name} </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}

                      <div class="content">
                        <div class="header" style={{ color: "grey" }}>
                          250kg more to be shipped{" "}
                        </div>
                      </div>
                    </div>
                  </Segment>
                </TransitionablePortal>
              </div>
            </div>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </div>
  );
}
