import 'bootstrap/dist/css/bootstrap.min.css';
import { useStore } from './hooks/useStore';
import { Container, Row, Col } from 'react-bootstrap'
import './App.css'
import { AUTO_LANGUAGE } from './constants';
import { LanguageSelector } from './components/LanguageSelector';


function App() {
  const { fromLanguage, toLanguage, swapLanguages, setFromLanguage, setToLanguage } = useStore();

  return (
    <Container fluid>
      <h1>Google Translate Clone</h1>
      <Row className="mt-5">
        <Col>
          <LanguageSelector
            type='from'
            value={fromLanguage}
            onChange={setFromLanguage}
          />
        </Col>
        <Col>
          <button disabled={fromLanguage === AUTO_LANGUAGE} onClick={swapLanguages}>
            Swap
          </button>
        </Col>
        <Col>
          <LanguageSelector
            type='to'
            value={toLanguage}
            onChange={setToLanguage}
          />
        </Col>
      </Row>
    </Container>
  )
}

export default App;
