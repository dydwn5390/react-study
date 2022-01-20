// 함수형 컴포넌트
import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';

function App() {
  return <MyComponent name="React" favoriteNumber={1}>리액트</MyComponent>;
}

export default App;

// 클래스형 컴포넌트 
// import { Component } from 'react';

// class App extends Component {
//   render() {
//     const name = 'react class component';
//     return <div className ="react">{name}</div>;
//   }
// }

// export default App;