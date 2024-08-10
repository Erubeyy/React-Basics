import 'bootstrap/dist/css/bootstrap.min.css';
import { useStore } from './hooks/useStore';
import { Container, Row, Col } from 'react-bootstrap'
import './App.css'


function App() {
  const { fromLanguage, toLanguage, swapLanguages } = useStore();

  return (
    <Container fluid>
      <h1>Google Translate Clone</h1>
      <Row className='d-flex flex-row'  >
        <Col>
          <h2>From</h2>
          {fromLanguage}
        </Col>
        <Col>
          <button onClick={swapLanguages}>
            Swap
          </button>
        </Col>
        <Col>
          <h2>To</h2>
          {toLanguage}
        </Col>
      </Row>
    </Container>
  )
}

export default App;
