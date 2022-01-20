// 함수형 컴포넌트
import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';
import Counter from './Counter';
import Say from './Say';

function App() {
  return <Say />;
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