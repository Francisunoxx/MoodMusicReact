import React, { Component } from "react";
import style from "../css/App.css";
import Routes from "./Routes";


export default class App extends Component {
    render() {
        return (
            <div className={style.place}>
                <Routes />
            </div>
        )
    }
}