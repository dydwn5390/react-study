import Counter from './components/Counter';
import Todos from './components/Todo';
import CounterContainer from './containers/CounterContainer';
import TodosContainer from './containers/TodosContainer';

const App = () => {
    return (
        <div>
          <CounterContainer />
          <hr />
          <TodosContainer />
        </div>
    );
};

export default App;
