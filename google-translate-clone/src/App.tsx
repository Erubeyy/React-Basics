import 'bootstrap/dist/css/bootstrap.min.css';
import { useStore } from './hooks/useStore';
import { Container, Row, Col, Form } from 'react-bootstrap'
import './App.css'
import { AUTO_LANGUAGE } from './constants';
import { LanguageSelector } from './components/LanguageSelector';
import { TextArea } from './components/TextArea';


function App() {
  const { fromLanguage, toLanguage, swapLanguages, setFromLanguage, setToLanguage, fromText, result, setFromText, setResult } = useStore();

  return (
    <Container fluid>
      <h1>Google Translate Clone</h1>
      <Row className="mt-5">
        <Col className='d-flex flex-column gap-2'>
          <LanguageSelector
            type='from'
            value={fromLanguage}
            onChange={setFromLanguage}
          />
          <TextArea
            placeholder='Type something...'
            autoFocus
            value={fromText}
            onChange={setFromText}
          />
        </Col>
        <Col xs='auto'>
          <button disabled={fromLanguage === AUTO_LANGUAGE} onClick={swapLanguages}>
            Swap
          </button>
        </Col>
        <Col className='d-flex flex-column gap-2'>
          <LanguageSelector
            type='to'
            value={toLanguage}
            onChange={setToLanguage}
          />
          <TextArea
            placeholder='Translation'
            value={result}
            onChange={setResult}
          />
        </Col>
      </Row>
    </Container >
  )
}

export default App;
