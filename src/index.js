////////////////// 1) Import React and ReactDOM libraries ////////////////////////////////////////////////////////////////////////

import React from 'react'; // defines components and how they work together
import ReactDOM from 'react-dom/client'; // set of componets to HTML and show on screen
import App from './App';

////////////////// 2) Get a reference to the div with ID root ////////////////////////////////////////////////////////////////////////

const el = document.getElementById('root');

////////////////// 3) Tell React to take control of that element ////////////////////////////////////////////////////////////////////////

const root = ReactDOM.createRoot(el);

////////////////// 4) Create a component ////////////////////////////////////////////////////////////////////////

// function App() {
//     <h4>This is an element that doesn't show up!</h4>
    
//     // let message = 'Bye there!';
//     // if (Math.random() > .5) {
//     //     message = 'Hello World!';
//     // }

//     // const message = {}; // error here
//     // const message = true; // nothing here
//     // return <h1>{message}</h1>

//     // const date = new Date();
//     // return <h1>{new Date().toLocaleTimeString()}</h1>;

//     // const inputType = 'number'
//     // const minValue = 5;
//     // return <input
//     //     style={{border: '3px solid red'}}
//     //     type={inputType}
//     //     min={5}
//     //     max={9969}
//     // />;

//     return <textarea spellCheck="false" autoFocus={true} style={{border: '3px solid red', width: '100%', height: '500px'}}/>;
// }

////////////////// 5) Show the component on the screen ////////////////////////////////////////////////////////////////////////

root.render(<App/>)