import { useEffect, useState } from "react";
import { generateRandomQuote } from './utils/quotes'

function App() {

  const [quote, setQuote] = useState('');

  useEffect(() => {
    setQuote("Eyy go yaa!")
  }, [])

  const newQuote = (e) => {

    setQuote(generateRandomQuote)
  }

  return (
    <div>
      <h2>Accamma Quote Generator</h2>

      <h3> Quote of the Day </h3>

      <p>{quote}</p>

      <button onClick={newQuote}>Give me a new one!</button>
    </div>
  );
}

export default App;
