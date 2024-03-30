import React from "react";
import ButtonEnv from "../ButtonEnv/ButtonEnv";
import MyModal from '../Modal/Modal'
import Candidatos from "../Lista/Candidatos";


 function ListaCandidatos (props){
    const candidatos = props.ListaCandidatos

    return (
        <div  listaCand={candidatos} >
            <div >
            <Candidatos  itens={candidatos} />
            <div><ButtonEnv  typeBotton={"button"}texto={"Delete"}/></div>
             <div><MyModal  /></div>
            </div>

        </div>
    )
   
}

export default ListaCandidatos