import React from "react";
import Header from "./Header"
import Body from "./Body"
export default function Main () {
    return (
        <main className="main">
            <div  className="main-container">
            <Header/>
            <Body/>
            </div>

        </main>
    )
}