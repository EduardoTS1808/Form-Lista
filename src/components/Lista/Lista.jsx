import React from "react";
import Candidatos from "./Candidatos";


function Lista(props){
    const candidatos = props.candidatos;

    return(
        <div>
        <Candidatos key={candidatos.id} itens={candidatos}/>
        {/* {console.log(candidatos)}/ç  */}
        </div>
    )
}



export default Lista