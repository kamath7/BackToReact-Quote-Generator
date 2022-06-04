import { useEffect, useState } from "react";
import { generateRandomQuote } from './utils/quotes'
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Card } from 'react-bootstrap';


function App() {

  const [quote, setQuote] = useState('');

  useEffect(() => {
    setQuote("Eyy go yaa!")
  }, [])

  const newQuote = (e) => {

    setQuote(generateRandomQuote)
  }

  return (
    <div className="text-center" style={{paddingTop: "10rem"}}>

      <h2 >Accamma Quote Generator</h2><br />

      <Card className="text-center">
        <Card.Header>Quote of the Day</Card.Header>
        <Card.Body>
        <blockquote className="blockquote mb-0">
          <Card.Text>
          {"'"}{quote}{"'"}
          </Card.Text>
          <Button onClick={newQuote} variant="primary">Another One!</Button>
          </blockquote>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
