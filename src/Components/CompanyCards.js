import React from 'react';
import '../App.css';
import {Col, Button, Card, CardBody, CardTitle} from 'reactstrap';
import { BsCheck, BsX } from "react-icons/bs";

const CompanyCards = (props) => {
  return(
    <Col sm="10" md={{ size: 8}} className="companyCards">
      <Button onClick={props.changeToCardsHandler}>Back to list</Button>
      <hr/>
      {props.companies.map((company,idx) => (
        <Card key={idx} className={company.isPositive ? "companyCardsPos" : (company.isPositive === false ? "companyCardsNeg" : "companyCards")}>
          <CardBody>
            <CardTitle tag="h3">{company.inputValue}</CardTitle>
            <Button onClick={() => props.saveToPositive(idx)} color="success" className="mr-2" ><BsCheck/></Button>
            <Button onClick={() => props.saveToNegative(idx)} color="danger"><BsX/></Button>
          </CardBody>
        </Card>     
      ))}
        
    </Col>
  )
}

export default CompanyCards;