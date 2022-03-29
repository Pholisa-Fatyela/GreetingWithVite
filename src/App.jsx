import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from './components/MyNavBar';
import MyForm from './components/MyForm';
import { Col, Container, Row } from 'reactstrap';
// import MyCounter from './components/MyCounter';


function App() {


  return (
    <div className="App">
    
    <MyNavBar/>
    <br />

    <h4>Greetings</h4>
    <Container>
      <Row>
        <Col></Col>
        <Col>
          <MyForm />
        </Col>
        <Col>
          {/* <MyCounter /> */}
        </Col>
      </Row>
    </Container>

    </div>
  )
}

export default App
