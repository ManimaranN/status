import React, { useState } from "react";
import {
  Step,
  Button,
  Header,
  Segment,
  TransitionablePortal,
  Card
} from "semantic-ui-react";
import "./progress.css";
import { Timeline, Bookmark, Marker } from "react-vertical-timeline";
import Agent from "./img/agent.svg";
import Warehouse from "./img/warehouse.svg";
import StatusReport from "./progressStatusModal";

const StepExampleOrdered = () => {
  const [progress, setProgress] = useState(50);
  const [openDemand, setOpenDemand] = useState(false);
  const [openPurchase, setOpenPurchase] = useState(false);
  const [openShipment, setOpenShipment] = useState(false);
  const [statusModalOpen, setStatusModalopen] = useState(false);
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
  const handleOpenStatus = event => {
    event.stopPropagation();
    setStatusModalopen(true);
  };
  return (
    <div className="status_report">
      <Button onClick={event => handleOpenStatus(event)}>View Status</Button>
      <div className="indudalstatus">
        <Step.Group ordered>
          <Step completed>
            <Step.Content onClick={handleClickDemand}>
              <Step.Title>Demand</Step.Title>
              <Step.Description>5oo kg mathi avashyam onde</Step.Description>
            </Step.Content>
          </Step>

          <Step active>
            <Step.Content onClick={handleClickPurchase}>
              <Step.Title>Purchases</Step.Title>
              <Step.Description>250 kg mathi set ane</Step.Description>
            </Step.Content>
          </Step>

          <Step active>
            <Step.Content onClick={handleClickShipment}>
              <Step.Title>Shippment</Step.Title>
              <Step.Description>
                250 kg mathi ship cheythittunde
              </Step.Description>
            </Step.Content>
          </Step>
        </Step.Group>
      </div>
      <div>
        {/* //Demand status// */}

        <TransitionablePortal onClose={handleCloseDemand} open={openDemand}>
          <Segment
            style={{
              left: "1.5%",
              position: "fixed",
              top: "12%",
              zIndex: 1000
            }}
          >
            <Header>Total 500kg mathi avashyam onde</Header>
          </Segment>
        </TransitionablePortal>

        {/* //Purchased status// */}

        <TransitionablePortal onClose={handleClosePurchase} open={openPurchase}>
          <Segment
            style={{
              left: "20%",
              position: "fixed",
              top: "12%",
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

        <TransitionablePortal onClose={handleCloseShipment} open={openShipment}>
          <Segment
            style={{
              left: "35%",
              position: "fixed",
              top: "13%",
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
      <StatusReport
        key="statusModal"
        statusModalOpen={statusModalOpen}
        handleClose={() => setStatusModalopen(false)}
      />
    </div>
  );
};

export default StepExampleOrdered;
