import { useState } from 'react';
import axios from 'axios';

const App = () => {
    const [data, setData] = useState(null);
    const onClick = () => {
        axios
            .get('https://jsonplaceholder.typicode.com/todos/1')
            .then((response) => {
                setData(response.data);
            });
    };

    const onClickAsnc = async () => {
      try {
        const response = await axios.get(
          'https://newsapi.org/v2/top-headlines?country=kr&apiKey=4f6f519db55148dd87f7107473e15ca6',
        );
        setData(response.data);
      } catch (e){
        console.log(e);
      }
    };

    return (
        <div>
            <div>
                <button onClick={onClickAsnc}>불러오기</button>
            </div>
            {data && (
                <textarea
                    rows={7}
                    value={JSON.stringify(data, null, 2)}
                    readOnly={true}
                />
            )}
        </div>
    );
};

export default App;