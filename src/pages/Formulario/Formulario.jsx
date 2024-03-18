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
        this.itemSelecionado = '';
        this.nextId = 0;
this.dados = [];
        this.state = {
            id: '',
            name: '',
            number:'',
            genero: '',
            estatus:'',
            validate: "OFF",
            dados:[],
        }
        // ,
        // dados = [];


    
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
    removeDados = ()=>{
        const newList = this.state.dados.filter(item=> item.id !== this.itemSelecionado)
        this.setState({dados: newList})

        
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
         

        {/* {console.log(this.itemSelecionado)}   */}
        {/* {console.log(this.state.dados)}   */}
        </form>
           <div className='lista'>
                 <h3>Lista de Candidatos</h3>

                 <div>
                        <Lista
                    candidatos={this.dados}
                    limpaList={this.removeDados}
                    />
              </div>
       </div>
     
</>
            )
        
    
    }

 }


 export default Formulario
