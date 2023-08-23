import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.softblue.compact.css';
import React from 'react';
import * as ReactDOM from "react-dom/client";
import Hello from './components/Hello.jsx';
import MyComponent from './components/myComponent.jsx'

document.addEventListener('DOMContentLoaded', function () {
    const rootElement = document.getElementById("react-dnn-app")
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <div className="row">
            <div className="col-xs-12">
                <Hello name="I am a react module edit page!" />
            </div>
            
            <div className="col-xs-6"><MyComponent></MyComponent></div>
        </div>);
});
// import React from 'react';
// import ReactDOM from 'react-dom/client';

// // const container = document.getElementById("react-dnn-app") 
// // ReactDOM.render(<h1>Xin chào react page</h1>, container);




 
// document.addEventListener('DOMContentLoaded', function () {
//     const rootElement = document.getElementById('react-dnn-app');
//     const root = ReactDOM.createRoot(rootElement);
    
//     root.render(<h1>Xin chào react page</h1>,)
//   });