import React, { Component } from 'react';
import './App.css';
import CompanyForm from './Components/CompanyForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'reactstrap';
import Sidebar from './Components/Sidebar';
import CompanyCards from './Components/CompanyCards';

class App extends Component {
  state = {
    companies: [],
    showCards: false,
    // positiveCompanies: [],
    // negativeCompanies: []
  }

  addCompany = (company) => {
    const newCompanies = [...this.state.companies, company];

    if (company.inputValue !== "") {
      this.setState({
        companies: newCompanies
      })
    }

  }

  changeToCardsHandler = () => {
    this.setState({
      showCards: !this.state.showCards
    })
  }
  saveToPositive = (id) => {
    this.setState({
      companies: this.state.companies.map((company, idx) => {
        if (idx === id) {
          return {
            ...company,
            isPositive: true
          }
        } else {
          return company;
        }
      })
    })
  }
  saveToNegative = (id) => {
    this.setState({
      companies: this.state.companies.map((company, idx) => {
        if (idx === id) {
          return {
            ...company,
            isPositive: false
          }
        } else {
          return company;
        }
      })
    })
  }

  render() {
    return (
      <div className="App">
        {!this.state.showCards ?
          <Container>
            <CompanyForm
              onSubmit={this.addCompany}
              companies={this.state.companies}
              changeToCardsHandler={this.changeToCardsHandler}
            />
          </Container>
          : <div>
            <Row>
              <Sidebar companies={this.state.companies} />
              <CompanyCards
                changeToCardsHandler={this.changeToCardsHandler}
                companies={this.state.companies}
                saveToPositive={this.saveToPositive}
                saveToNegative={this.saveToNegative}
              />
            </Row>
          </div>}
      </div>
    );
  }
}

export default App;
