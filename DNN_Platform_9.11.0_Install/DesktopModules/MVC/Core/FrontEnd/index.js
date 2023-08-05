import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './pages/Layout';

// Load on Ready
document.onreadystatechange = function () {
  var state = document.readyState
  if (state == 'complete') {
      var els = document.getElementsByClassName("react-app");
      Array.prototype.forEach.call(els, function(el) {
        var moduleId = el.id.replace("module-", ""); 
        ReactDOM.render(<Layout />, el);
      });
  }
}