import React from 'react';
import { Container, Row, Col, Button, Stack } from 'react-bootstrap';
import main1 from '../../../assets/main1.jpg'
import process1 from '../../../assets/ic-process1.png'
import logo from '../../../assets/ardaworks.svg';

export default function TopMenu() {
  return (
    <div className="rootMain1">
      <Container fluid>
        <div>
          <center><img className="logo" src={logo} alt="" /></center>
          {/* <h1 className="titleMain1" >Ardaworks</h1> */}
          <h5 className="descTitleMain1">Our landing page template works on all devices</h5>
          <h5 className="desc2TitleMain1">so you only have to set it up once, and get beautiful results forever.</h5>
        </div>
        <Stack gap={2} className="col-md-5 mx-auto">
          <Button variant="dark">About Us</Button>
        </Stack>
        <Stack gap={2} className="col-md-8 mx-auto WrapPicMain1">
          <img className="main1Pic" src={main1} alt="" />
        </Stack>
        <div>
          <h1 className="titleMain1 Main1Part2" >Built exclusively for you</h1>
          <h5 className="descTitleMain1">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</h5>
          <h5 className="desc2TitleMain1">mollit laborum — semper quis lectus nulla.</h5>
        </div>
        <Row className="col-md-8 mx-auto Main1Part2-1">
          <Col>
            <center><img className="processMain1 Main1Part2-1" src={process1} alt="" /></center>
            <h1 className="titleMain1-2 Main1Part2-1" >Built exclusively for you</h1>
            <h5 className="descTitleMain1-2">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</h5>
          </Col>
          <Col>
            <center><img className="processMain1 Main1Part2-1" src={process1} alt="" /></center>
            <h1 className="titleMain1-2 Main1Part2-1" >Built exclusively for you</h1>
            <h5 className="descTitleMain1-2">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</h5>
          </Col>
          <Col>
            <center><img className="processMain1 Main1Part2-1" src={process1} alt="" /></center>
            <h1 className="titleMain1-2 Main1Part2-1" >Built exclusively for you</h1>
            <h5 className="descTitleMain1-2">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</h5>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
