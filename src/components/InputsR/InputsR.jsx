import React from "react";
import './style.css'

function InputsRadio (props){
    
    
    return(
        <div onChange={props.opcao}>
         {/* onChange={(event)=>console.log(event.target.value)} */}
        <div  className="container">
           <h5>Genero: </h5>
          <div className="opction">
             <label >Masculino</label>
              <input 
              type="radio"
               id="01"
                name="genero" 
                value="masculino"
                />
         </div>
          <div className="opction">
             <label >Feminino</label>
            <input 
            type="radio"
             id="02"
              name="genero" 
              value="feminino"
              />
         </div>
          <div className="opction">
             <label >Outro</label>
              <input 
              type="radio"
               id="03"
                name="genero" 
                value="outro" 
                />
         </div>
        </div>
        <div className="container" >
           <h5>Estado Civil:</h5>
          <div className="opction">
             <label >Solteiro(a)</label>
              <input 
              type="radio"
               id="04"
                name="estado"
                 value="solteiro"
                 />
         </div>
          <div className="opction">
             <label >Casado(a)</label>
            <input 
            type="radio"
             id="05"
              name="estado"
               value="casado"
               />
         </div>
          <div className="opction">
             <label >Separado(a)</label>
            <input 
            type="radio"
             id="06"
              name="estado"
               value="separado"
               />
         </div>
          <div className="opction">
             <label >Divorciado(a)</label>
              <input 
              type="radio"
               id="07"
                name="estado"
                 value="divorcial" 
                 />
         </div>
          <div className="opction">
             <label >Viúvo(a)</label>
              <input 
              type="radio"
               id="08"
                name="estado"
                 value="viuvo" 
                 />
         </div>
        </div>
        
     
        </div>
        )
    }
    
    export default InputsRadio