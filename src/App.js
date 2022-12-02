import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import { Card } from './components/Card';
import { isDisabled } from '@testing-library/user-event/dist/utils';

function App() {
  const [data, setData] = useState("");
  const [page, setPage] = useState(42);
  console.log(data);
  
  useEffect(() => {
  fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
    .then((response) => response.json())
    .then((response) => setData(response));
}, [page]);

function handlePrev() {
  //*setPage(page - 1);
  page === 1 ? (
    handlePrev(isDisabled)
  ) : (
    setPage(page - 1)
  );
}

function handleNext() {
  //*setPage(page + 1);
  page === 42 ? (
    setPage(1)
  ) : (
    setPage(page + 1)
  );
}

  return data ? (
    <>
    <div>
      <button onClick={handlePrev}>Prev</button>
      <button onClick={handleNext}>Next</button>
    </div>
    <div className = "App">

      {data.results.map((element,index) => (
        <Card key={index} element={element} />
      ))}
    </div>
    </>
  ) : null;
}

export default App;
