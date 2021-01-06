import React from 'react';
import {Col} from 'reactstrap';
import '../App.css';

const Sidebar = (props) => {
  return(
    <Col sm="2" className="sidebar">
      <h2 className="backgroundGreen">Positive</h2>
      {props.companies.map((company,idx) => (
        company.isPositive && <h4 key={idx} className="backgroundGreen">{company.inputValue}</h4> 
      ))}
      <hr/>
      <h2 className="backgroundRed">Negative</h2>
      {props.companies.map((company,idx) => (
        company.isPositive === false && <h4 key={idx} className="backgroundRed">{company.inputValue}</h4> 
      ))}
    </Col>
  )
}

export default Sidebar;