import React from "react";

export default function BtnClose(props) {
  const modal = {
    position: 'relative',
    top: '-100px',
    background: '#f1f1f1',
    boxShadow: '1px 1px 10px #222',
    borderRadius: '10px',
    margin: '10px 0',
    padding: '5px'


   


  }
  const item = {
    margin: '5px',
    padding: '5px',
    fontSize: '10px',
    color: '#232323',
    borderBottom: '2px solid #222'
}
    return (
      <div style={modal}>
        <div >
         
                <div  >
                <p style={item} >Telefone: {props.userInfo.number}</p>
                <p style={item} >Genero: {props.userInfo.genero}</p>
                <p style={item} >Estatus Civil: {props.userInfo.estatus}</p>
             </div>
                
                
         </div>
        <button onClick={props.onClose}>Close</button>
      </div>
    );
  }