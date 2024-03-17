import React,{useState} from "react";
import MyModal from "../Modal/Modal";

function Candidatos (props){
    // const [itemSelecionado, setItemSelecionado] = useState([])
  
   
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
              {props.itens.map(item=> 
               
                <div key={item.id} style={{display: 'block',background: '#e9e9e9', margin:'10px' }} >
                    <p style={itemStyle}>Nome: {item.name}</p>
                    <div> 
                        <button onClick={props.limparLista}
                        >selecionar</button>
                    </div>

                    <MyModal  esteItem={item}/>
                </div>
                )}
                
        </div>
    )
}

export default Candidatos