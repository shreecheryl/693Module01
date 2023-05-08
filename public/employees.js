let sally = 'Sally Smith';
let mark = 'Mark Martin';
let holly = 'Holly Unlikely';
let amol = 'Amol Shookup';
let cheryl = 'Cheryl Davis';
let sarah = 'Sarah Letts';
const element = /*#__PURE__*/React.createElement("ul", {
  style: {
    'color': 'blue',
    'fontSize': '24px'
  }
}, /*#__PURE__*/React.createElement("li", null, sally), /*#__PURE__*/React.createElement("li", null, mark), /*#__PURE__*/React.createElement("li", null, holly), /*#__PURE__*/React.createElement("li", null, amol), /*#__PURE__*/React.createElement("li", null, cheryl), /*#__PURE__*/React.createElement("li", null, sarah));
ReactDOM.render(element, document.getElementById('content'));