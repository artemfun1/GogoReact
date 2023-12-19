import React from 'react';
import ReactDOM from 'react-dom/client';


import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'));

let count =0
let countId=0

let USERS = {
	1: { id: 1, name: "Alex", age: 35 },
	2: { id: 2, name: "John", age: 20 },
	3: { id: 3, name: "Anna", age: 18 },
};

// for (let i =0;i<10000;i++){

//   let key = count;
// 	let value = { id: `${countId}`, name: "Alex", age: 35 }
	
// 	USERS[key] = value;
  
// count++
// countId++
  
// }




root.render(
  // <React.StrictMode>
  
  <App users={USERS} />
   
  // </React.StrictMode>
); 



