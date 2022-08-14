import './App.scss';
import { useState } from 'react';
import { Form } from './components/form/form';

function App() {
  const [formValues, setFormValues] = useState([]);

  const addValues = (val) => {
    let values = [...formValues, val];
    setFormValues(values);
  };

  return (
    <div className="app">
      <Form addValues={addValues} />
    </div>
  );
}

export default App;
