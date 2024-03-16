import React from "react";
import './style.css'
function Inputs (props){
    return(
        <div className="campo-inputs">
            <div className="inputs">
                <label >Nome</label>
                <input 
                type="text"
                name="name"
                placeholder="digite seu nome"
                onChange={props.funcEv} 
                />
            </div>
            <div className="inputs">
                <label >Telefone</label>
                <input
                type="number"
                name="number"
                placeholder="(85) 987654321" 
                onChange={props.funcEv}
                />
            </div>
        </div>
    )
}

export default Inputs