import { createAction, handleActions } from 'redux-actions';

// 액션 타입 정의
const CHANGE_INPUT = 'todos/CHANGE_INPUT'; // 인풋 값을 변경함
const INSERT = 'totods/INSERT'; // 새로운 todos 를 등록함
const TOGGLE = 'todos/TOGGLE'; // todos를 체크/체크 해제 함
const REMOVE = 'todos/REMOVE'; // todos 를 제거함

// 액션 생성 함수 만들기
// export const changeInput = (input) => ({
//     type: CHANGE_INPUT,
//     input,
// });
export const changeInput = createAction(CHANGE_INPUT, (input) => input);

let id = 3; // insert가 호출될 때 마다 1씩 더해집니다.
// export const insert = (text) => ({
//     type: INSERT,
//     todos: {
//         id: id++,
//         text,
//         done: false,
//     },
// });
export const insert = createAction(INSERT, (text) => ({
    id: id++,
    text,
    done: false,
}));

// export const toggle = (id) => ({
//     type: TOGGLE,
//     id,
// });

export const toggle = createAction(TOGGLE, (id) => id);

// export const remove = (id) => ({
//     type: REMOVE,
//     id,
// });

export const remove = createAction(REMOVE, (id) => id);

// todo 모듈의 초기 상태
const initialState = {
    input: '',
    todos: [
        {
            id: 1,
            text: '리덕스 기초 배우기',
            done: true,
        },
        {
            id: 2,
            text: '리액트와 리덕스 사용하기',
            done: false,
        },
    ],
};

// 리듀서 함수 생성
// function todos(state = initialState, action) {
//     switch (action.type) {
//         case CHANGE_INPUT:
//             return {
//                 ...state,
//                 input: action.input,
//             };
//         case INSERT:
//             return {
//                 ...state,
//                 todos: state.todos.concat(action.todos),
//             };
//         case TOGGLE:
//             return {
//                 ...state,
//                 todos: state.todos.map((todo) =>
//                     todo.id === action.id
//                         ? { ...todo, done: !todo.done }
//                         : todo,
//                 ),
//             };
//         case REMOVE:
//             return {
//                 ...state,
//                 todos: state.todos.filter((todo) => todo.id !== action.id),
//             };
//         default:
//             return state;
//     }
// }
const todos = handleActions(
    {
        [CHANGE_INPUT]: (state, { payload: input }) => ({
            ...state,
            input: input,
        }),
        [INSERT]: (state, {payload: todo}) => ({
            ...state,
            todos: state.todos.concat(todo),
        }),
        [TOGGLE]: (state, action) => ({
            ...state,
            todos: state.todos.map((todo) =>
                todo.id === action.payload
                    ? {
                          ...todo,
                          done: !todo.done,
                      }
                    : todo,
            ),
        }),
        [REMOVE]: (state, action) => ({
            ...state,
            todos: state.todos.filter((todo) => todo.id !== action.payload),
        }),
    },
    initialState,
);

export default todos;
