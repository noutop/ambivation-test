import React, {Component} from 'react';
import './App.css';
import CompanyForm from './Components/CompanyForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Button, Card, CardTitle, CardBody, Row, Col} from 'reactstrap';

class App extends Component{
  state = {
    companies: [],
    showCards: false,
    // positiveCompanies: [],
    // negativeCompanies: []
  }

  addCompany = (company) => {
    const newCompanies = [...this.state.companies,company];

    if(company.inputValue !== ""){
      this.setState({
        companies: newCompanies
      })
    } 
    
    // let newCompanies;
    
    // if(this.state.companies.length !==0){
    //   this.state.companies.map(companyName => {
    //     if((companyName.inputValue).localeCompare(company.inputValue) === 1){
    //       newCompanies = [...this.state.companies,company];
    //     }
    //   })
    // }
    
    // this.setState({
    //       companies: newCompanies
    // })
    
    
     
  }

  changeToCardsHandler = () => {
    this.setState({
      showCards: !this.state.showCards
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
        <Container>
          <CompanyForm onSubmit={this.addCompany} companies={this.state.companies}/>
          <Button onClick={this.changeToCardsHandler} color="success">Start Button</Button>
          <hr/>
          <ul>
          {this.state.companies.map((company,idx) => (
            <li key={idx}>{company.inputValue}</li>
          ))}  
          </ul>
        </Container> 
      : <div>
          <Row>
          <Col sm="2" className="sidebar">
            <h2 className="backgroundGreen">Positive</h2>
            {this.state.companies.map((company,idx) => (
              company.isPositive && <h4 key={idx} className="backgroundGreen">{company.inputValue}</h4> 
            ))}
            <hr/>
            <h2 className="backgroundRed">Negative</h2>
            {this.state.companies.map((company,idx) => (
              company.isPositive === false && <h4 key={idx} className="backgroundRed">{company.inputValue}</h4> 
            ))}
          </Col>
          <Col  sm="10" md={{ size: 8}} className="companyCards">
          <Button onClick={this.changeToCardsHandler}>Back to list</Button>
          <hr/>
          {this.state.companies.map((company,idx) => (
            <Card key={idx} className={company.isPositive ? "companyCardsPos" : (company.isPositive === false ? "companyCardsNeg" : "companyCards")}>
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
