import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


let a = {
    name: "Egor",
    age: 10,
    address: {
        city: "Minsk",
        country: "Belarus"
    }
};

let users = [
    {
        name: "Egor",
        age: 10,
        address: {
            city: "Minsk",
            country: "Belarus"
        }
    },
    {
        name: "Dima",
        age: 20,
        address: {
            city: "Moscow",
            country: "Russia"
        }
    }
]

let b: Array<string | number>; //any, boolean, number
b = ["yo", "eese", "wewewe"]
b = [1, 23, 434, 344]
b = true

console.log(users[0].address.country)