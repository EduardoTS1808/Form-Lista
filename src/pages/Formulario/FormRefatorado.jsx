import React, {Component} from 'react';
import './style.css'
import InputTxtNmb from '../../components/InputTxtNmb/InputTxtNmb'
import InputsRadio from '../../components/InputsR/InputsR'
import ButtonEnv from '../../components/ButtonEnv/ButtonEnv';
import ListaCandidatos from '../../components/ListaCandidatos/ListaCandidatos'
import MsgErro from '../../components/MensagemErro/MsgErro';


class Formulario extends Component{
    
    constructor(props){
       super(props);
       this.nextId = 0;
       this.state = {
            formDados:{
                id: '', nome: '',
                numero:'',
                genero: '',
                estado:'',
                validate: "OFF",
            },
            candidatos: []
        }
   }
   hendleOnChange = (event)=>{
    const dados =  this.state.formDados;
       const {name, value} = event.target;
       this.setState({formDados :{...dados, [name]: value}})
    }
    
    handleRadioChange = (event) => {
    const dados =  this.state.formDados;
    // const {genero, estado, value} = event.target;
       ( event.target.id < "04")? this.setState({formDados:{...dados,  genero: event.target.value }   }) :
        this.setState({formDados:{...dados, estado: event.target.value}});
       this.setState({formDados:{...dados, id: this.nextId++}})
       
   }
  
     
   
 
   render(){
      
       const handleOnSubmit=(event)=>{
           event.preventDefault()
           const dados = this.state.formDados;
          if(
           (dados.nome === '') ||
           (dados.numero === '') )
           { 
               this.setState({formDados:{...dados, validate: "OFF"}})
               return false
       } else{
           this.setState({formDados:{...dados, validate: "ON"}})
            this.setState({candidatos:{...[], dados}})
            //funciona, mas não salva os dados anteriores
            // this.setState({candidatos:[...]})
            return
          
        
       }
       }

       return(
<>

           <form onSubmit={handleOnSubmit} className='formulario'>
             
           <InputTxtNmb
            funcEv={this.hendleOnChange}
            estado={this.state.formDados}
            />
           
           <InputsRadio 
           opcao={this.handleRadioChange} 
           />
           <ButtonEnv texto={"enviar"} typeBotton={"submit"}/>
            {(this.state.formDados.validate === "OFF") ? <MsgErro />: <p>Enviado com Sucesso!</p> }
        

       
       </form>
          <div className='lista'>
                <h3>Lista de Candidatos</h3>

                <div>
                       <ListaCandidatos
                 ListaCandidatos={this.state.candidatos}
                 
                   />
             </div>
      </div>
    
</>
           )
       
   
   }

}


export default Formulario