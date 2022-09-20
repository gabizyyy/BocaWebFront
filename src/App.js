import './App.css';
import logobocaweb from './logobocaweb.png';
import {Component} from 'react';
import { Busca } from './components/Busca';
import { Cabecalho } from './components/Cabecalho';
import { Rodape } from './components/Rodape';
import { Lista } from './components/Lista';

class App extends Component{


  state = {
    busca: '',
    odas: []
  }

  componentDidMount(){
    this.carregaODAs();
  }

  carregaODAs(){
    const {busca} = this.state;
    fetch('https://www.bocaweb.com.br/apibocaweb?nome='+busca)
    .then(response => response.json())
    .then(odas=>this.setState({odas}))
  }

  buscaODA = (evento) => {
    this.setState({busca:evento.target.value});
    this.carregaODAs()
  }
            
  render(){
    const { odas} = this.state;
    return (
      <section className = "container">

            <div className = "cabecalho">
            <Cabecalho/>
            </div>

            <div className = "logobocaweb">
            <img src={logobocaweb} className="App-logobocaweb" alt="Logo do BocaWeb" width="1000" height="550"/>
            </div>

            <div className = "buscachamada">
            <Busca
            busca={this.state.busca}
            buscaODA={this.buscaODA}
            />
            </div>

            <div className = "listachamada">
            <Lista 
            odas={odas}/>
            </div>

            <div className = "rodape">
            <Rodape/>
            </div>

      </section>
    )
  }
}

export default App;
