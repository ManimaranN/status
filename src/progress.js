import React, { useState } from "react";
import {
  Step,
  Button,
  Header,
  Segment,
  TransitionablePortal
} from "semantic-ui-react";
import "./progress.css";
import { Timeline, Bookmark, Marker } from "react-vertical-timeline";

const StepExampleOrdered = () => {
  const [progress, setProgress] = useState(50);
  const [openDemand, setOpenDemand] = useState(false);
  const [openPurchase, setOpenPurchase] = useState(false);

  const handleClickDemand = () => setOpenDemand(!openDemand);
  const handleClose = () => setOpenDemand(false);
  return (
    <div className="status_report">
      <div className="indudalstatus">
        <Step.Group ordered>
          <Step completed>
            <Step.Content onClick={handleClickDemand}>
              <Step.Title>Demand</Step.Title>
              <Step.Description>5oo kg mathi avashyam onde</Step.Description>
            </Step.Content>
          </Step>

          <Step active>
            <Step.Content>
              <Step.Title>Purchases</Step.Title>
              <Step.Description>250 kg mathi set ane</Step.Description>
            </Step.Content>
          </Step>

          <Step active>
            <Step.Content>
              <Step.Title>Shipped</Step.Title>
              <Step.Description>
                250 kg mathi ship cheythittunde
              </Step.Description>
            </Step.Content>
          </Step>
        </Step.Group>
      </div>
      <div>
        {/* <Button
          content={open ? "Close Portal" : "Open Portal"}
          negative={open}
          positive={!open}
          onClick={handleClick}
        /> */}

        <TransitionablePortal onClose={handleClose} open={openDemand}>
          <Segment
            style={{ left: "8%", position: "fixed", top: "37%", zIndex: 1000 }}
          >
            <Header>Manimaran 250 killo mathi vanghi</Header>
          </Segment>
        </TransitionablePortal>
        <TransitionablePortal onClose={handleClose} open={openDemand}>
          <Segment
            style={{ left: "8%", position: "fixed", top: "37%", zIndex: 1000 }}
          >
            <Header>Manimaran 250 killo mathi vanghi</Header>
          </Segment>
        </TransitionablePortal>
      </div>
    </div>
  );
};

export default StepExampleOrdered;
