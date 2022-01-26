import { useState } from 'react';
import Counter from './Counter';
import Info from './info';

const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button onClick={()=>{setVisible(!visible);}}>
        {visible? '보이기' : '숨기기'}
      </button>
      <hr />
      {visible && <Info/>}
    </div>
  )
}

export default App;
