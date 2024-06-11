import React from "react";

function WindowComponent() {

    const qtdNumOperador = document.getElementById('qtdNumOperador').innerText

    return (
        <div className="App">
            <h2>Teste window</h2>
            <p>{qtdNumOperador}</p>
        </div>
    )
}

export default WindowComponent