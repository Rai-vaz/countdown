const Form = () => {
  return (
    <form>
        <div className="container-input">
            <label htmlFor="text">Título:</label>
            <input type='text' id="text" placeholder="Digite o título do evento"/>
        </div>
        <div className="container-input">
            <label htmlFor="date">Data do evento:</label>
            <input type='date' id="date" placeholder="mm/dd/yyyy"/>
        </div>
        <div className="container-input">
            <label htmlFor="img">Imagem:</label>
            <input type='Text' id="img" placeholder="Insira a URL da imagem"/>
        </div>
        <div className="container-input">
            <input type='submit' value="Criar"/>
        </div>
    </form>
  )
}

export default Form