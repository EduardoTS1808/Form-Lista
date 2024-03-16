import React from "react";
import Candidatos from "./Candidatos";

function Lista(props){
    const candidatos = props.candidatos;

    return(
        <div>
        <Candidatos itens={candidatos}/>
        </div>
    )
}



export default Lista