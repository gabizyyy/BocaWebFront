export const Lista = ({odas}) => {
    return (
        <>
        {odas.map((oda)=>{
        return(
            <div key={oda._id} className="listainteira">
                <p className= "nomedoODA">{oda.nome}</p>
                <p className= "palavrachaveODA">{oda.palavras_chave} </p>
                <p className= "descricaodoODA">{oda.descricao}</p>
                <p className= "nomedousuario">{oda.usuario}</p>
                <p className= "datadoODA">{oda.data_inclusao} </p>
                
            </div>
        )
    })}
        </>
    
    )
}