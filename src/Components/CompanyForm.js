import React from 'react';
import { BsX } from "react-icons/bs";

import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Input
} from 'reactstrap';

class CompanyFrom extends React.Component {
  state = {
    inputValue: "",
    // isPositive: null
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit({
      inputValue: this.state.inputValue,
      isPositive: null
    })
    this.setState({
      inputValue: ""
    })
  }

  render() {
    return (
      <Container>
        <Form>
          <Row form>
            <Col>
              <FormGroup onSubmit={this.handleSubmit}>
                <Input
                  name="inputValue"
                  value={this.state.inputValue}
                  onChange={this.handleChange}
                  placeholder="Enter company name" />
              </FormGroup>
            </Col>
            <Col xs={2}>
              <Button type="submit" onClick={this.handleSubmit}>Add Company</Button>
            </Col>
          </Row>
        </Form>
        <Button onClick={this.props.changeToCardsHandler} color="success">Start Button</Button>
        <hr />
        <ul>
          {this.props.companies.map((company, idx) => (
            <li key={idx} className={company.isPositive === null ? "textBlack" :
              (company.isPositive === false ? "textNeg" : "textPos")}>{company.inputValue }
            <Button className="ml-2" size="sm" color="danger" onClick={() => this.props.deleteHandler(idx)}> <BsX/></Button>
            </li>
          ))}
        </ul>
      </Container>
    );
  }
}

export default CompanyFrom;