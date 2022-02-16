import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';


// 하나의 애플리케이션에는 하나의 스토어만 가질 수 있고, 하나의 스토어는 하나의 리듀서만 가질 수 있다.
// 여러개인 리듀서를 하나로 합쳐주기 위해 작성
const rootReducer = combineReducers({
    counter,
    todos,
});

export default rootReducer;