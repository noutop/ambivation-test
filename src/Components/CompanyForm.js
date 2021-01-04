import React from 'react';

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
    inputValue:"",
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

  render(){
    return (
      <Container>
      <Form>
        <Row form>
          <Col>
            <FormGroup onSubmit={this.handleSubmit}>
                  <Input 
                  name="inputValue"
                  value = {this.state.inputValue}
                  onChange = {this.handleChange}
                  placeholder = "Enter company name"/>
            </FormGroup>
          </Col>
          <Col xs={2}>
            <Button type="submit" onClick={this.handleSubmit}>Add Company</Button>
          </Col>  
        </Row>
      </Form>   
      </Container>
    );
  }
}

export default CompanyFrom;