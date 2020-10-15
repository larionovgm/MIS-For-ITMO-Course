import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import NavBar from './components/Navbar';
import Dashboard from './components/Dashboard';
import MyCalendar from './components/Calendar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Calendar, Views, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

const localizer = momentLocalizer(moment)

function App() {
  return (
    <div className="App">
      <Container style={{maxWidth: '100%'}}>
        <Row>
          <Col>
              <NavBar />
            </Col>
          </Row>
          <Row >
            <Col style={{height: '900px'}} sm={9}>
              <MyCalendar localizer={localizer}/>
            </Col>
            <Col sm={3}>
              <Dashboard />
            </Col>
          </Row>
        </Container>
    </div>
  );
}

export default App;
