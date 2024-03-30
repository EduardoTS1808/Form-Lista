import React from "react";

function Candidatos (props){
  
   
    const lista = {
       
        display: 'flex',
        maxHeight: '205px',
        background: '#e9e9e9',
        margin:'10px'
    }
    const itemStyle = {
        margin: '15px',
        padding: '15px',
        fontSize: '16px',
        color: '#232323',
        borderBottom: '2px solid #222222'
    }

 
    
    

    return(
        <div style={lista}>

               
                <div key={props.itens} style={{display: 'block',background: '#e9e9e9', margin:'10px' }} >
                    <p style={itemStyle}> {props.name}</p>
                   
                </div>
              
                
        </div>
    )
}

export default Candidatos