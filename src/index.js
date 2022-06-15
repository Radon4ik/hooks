import React from "react";
import ReactDOM from "react-dom/client";
import Application from "./Application";


import './index.scss';



document.addEventListener('DOMContentLoaded', ()=> {
    ReactDOM.createRoot(document.querySelector('.root')).render(<Application/>)
});