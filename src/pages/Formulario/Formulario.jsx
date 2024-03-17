 import React, {Component} from 'react';
 import './style.css'
 import InputTxtNmb from '../../components/InputTxtNmb/InputTxtNmb'
 import InputsRadio from '../../components/InputsR/InputsR'
 import ButtonEnv from '../../components/ButtonEnv/ButtonEnv';
 import Lista from '../../components/Lista/Lista';
 import MsgErro from '../../components/MensagemErro/MsgErro';

 
 class Formulario extends Component{
     
     constructor(props){
        super(props);
        this.dados = [];
        this.nextId = 0;
        this.state = {
            id: '',
            name: '',
            number:'',
            genero: '',
            estatus:'',
            validate: "OFF"
        }
    }

    hendleOnChange = (event)=>{
        this.changerField(event.target.name, event.target.value)
    }
 
    changerField(field, value){
        this.setState({[field]:value})

    }
    handleRadioChange = (event) => {
        ( event.target.id < "04")? this.setState({
            genero: event.target.value
        }) : this.setState({estatus: event.target.value});
        this.setState({id: this.nextId++})
        
    }
    
  
    render(){
       
        const handleOnSubmit=(event)=>{
            event.preventDefault()
           if( (this.state.genero === '') ||
            (this.state.name === '') ||
            (this.state.number === '') ||
            (this.state.estatus === '') )
            { 
                this.setState({validate: "OFF"})
        } else{
            this.setState({validate: "ON"})
            this.dados.push(...[],  this.state)
           
         
        }
        }

        return(
<>
            <form onSubmit={handleOnSubmit} className='formulario'>
              
            <InputTxtNmb
             funcEv={this.hendleOnChange}
             />
            
            <InputsRadio 
            opcao={this.handleRadioChange} 
            />
            <ButtonEnv/>
             {(this.state.validate === "OFF") ? <MsgErro />: <p>Enviado com Sucesso!</p> }
         

          
        </form>
           <div className='lista'>
                 <h3>Lista de Candidatos</h3>

                 <div>
                        <Lista
                    candidatos={this.dados}
                    />
              </div>
       </div>
     
</>
            )
        
    
    }

 }


 export default Formulario
