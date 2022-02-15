import {useState} from 'react';
import './App.css';
import Display from './Display';
import Btn from './Button';

function App() {
  const [value, setValue] = useState(0);
  
  const onClick = () => {
    setValue(value + 1);
  };
  
  return (
    <div>
      <Display value={value} />
      <Btn onClick={onClick} />
    </div>
  );
}

export default App;
