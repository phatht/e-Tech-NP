import React from 'react';
import ReactDOM from 'react-dom/client';


class App extends React.Component {
    render() {
      return <h1>Hello item!</h1>;
    }
  }


  document.addEventListener('DOMContentLoaded', function () {
    const rootElement = document.getElementById('item-dnn-app');
    const root = ReactDOM.createRoot(rootElement);
    root.render(<App />);
  });
 

// const container = document.getElementById("item-dnn-app") 
// ReactDOM.render(<h1>Xin chào item page</h1>, container);