import React from "react";

function Candidatos (props){
    const lista = {
        display: 'flex',
        background: '#e9e9e9',
        margin:'10px'
    }
    const itemStyle = {
        margin: '15px',
        padding: '15px',
        fontSize: '16px',
        fontWeight: '600',
        color: '#232323',
        borderBottom: '2px solid #222222'
    }


    return(
        <div  >{props.itens.map(item=>(<div style={lista} key={item.id}>
            <p style={itemStyle}>Nome: {item.name}</p>
            <p style={itemStyle}>Telefone: {item.number}</p>
            <p style={itemStyle}>Genero: {item.genero}</p>
            <p style={itemStyle}>Estatus Civil: {item.estatus}</p>
            </div>))}</div>
    )
}

export default Candidatos