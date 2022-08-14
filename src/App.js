import './App.scss';
import { useState } from 'react';
import { Forms } from './components/form/form';

function App() {
  const [formValues, setFormValues] = useState([]);

  const addValues = (val) => {
    let values = [...formValues, val];
    setFormValues(values);
  };

  return (
    <div className="app">
      <Forms addValues={addValues} />
    </div>
  );
}

export default App;
