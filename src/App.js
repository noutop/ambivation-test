import React, {Component} from 'react';
import './App.css';
import CompanyForm from './Components/CompanyForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Button,
  Card,
  CardTitle,
  CardBody,
  Row,
  Col
} from 'reactstrap';

class App extends Component{
  state = {
    companies: [],
    showCards: false,
    // positiveCompanies: [],
    // negativeCompanies: []
  }

  addCompany = (company) => {
    
    const newCompanies = [...this.state.companies,company];

    this.setState({
      companies: newCompanies
    })
  }

  changeToCardsHandler = () => {
    this.setState({
      showCards: true
    })
  }
  saveToPositive = (idx1) => {
    
    this.setState({
      companies: this.state.companies.map((company,idx) => {
        if(idx===idx1){ 
          return{
            ...company,
            isPositive: true
          }
        }else {
          return company;
        }
      })
    })
  }
  saveToNegative = (idx1) => {
    this.setState({
      companies: this.state.companies.map((company,idx) => {
        if(idx===idx1){ 
          return{
            ...company,
            isPositive: false
          }
        }else {
          return company;
        }
      })
    })  
  }

  render(){
    
    return (
      <div className="App">
      {!this.state.showCards ? 
        <div>
          <CompanyForm onSubmit={this.addCompany} />
          <ul>
          {this.state.companies.map((company,idx) => (
            <li key={idx}>{company.inputValue}</li>
          ))}  
          </ul>
          <Button onClick={this.changeToCardsHandler} color="success">Start Button</Button>
        </div> 
      : <div>
          <Row>
          <Col sm="2" className="sidebar">
            <h2>Positive</h2>
            {this.state.companies.map(company => (
              company.isPositive && <h4>{company.inputValue}</h4> 
            ))}
            <h2>Negative</h2>
            {this.state.companies.map(company => (
              company.isPositive == false && <h4>{company.inputValue}</h4> 
            ))}
          </Col>
          <Col  sm="10" md={{ size: 8}} className="companyCards">
          {this.state.companies.map((company,idx) => (
            <Card key={idx} className={company.isPositive ? "companyCardsPos" : (company.isPositive == false ? "companyCardsNeg" : "companyCards")}>
              <CardBody>
                <CardTitle tag="h3">{company.inputValue}</CardTitle>
                <Button onClick={() => this.saveToPositive(idx)} color="success" className="mr-2" >Positive</Button>
                <Button onClick={() => this.saveToNegative(idx)} color="danger">Negative</Button>
              </CardBody>
            </Card>     
          ))}
            </Col>
          </Row>  
        </div>} 
      </div>
    );
  } 
}

export default App;
