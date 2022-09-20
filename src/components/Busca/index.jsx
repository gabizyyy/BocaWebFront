export const Busca = ({busca, buscaODA}) =>{
    return (
       
        <div className = 'busca'>
            <input className="inputcaixa"
            name='busca'
            type ='text'
            value = {busca}
            placeholder = 'Pesquisar'
            onChange = {buscaODA}
            />
        </div>
   
    )
}