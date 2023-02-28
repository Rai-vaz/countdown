import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/Form.css'
import { createContext } from "react"

const CounterContext = createContext()



const Form = () => {
    const [title, setTitle] = useState()
    const [date, setDate] = useState()
    const [image, setImage] = useState()

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate('/counter')
    }


  return (
    <form className="form-event" onSubmit={handleSubmit}>
        <div className='form-wrapper'>
            <h2>Monte a sua contagem regressiva</h2>
            <div className="container-input">
                <label htmlFor="text">Título:</label>
                <input 
                    type='text' 
                    id="text" 
                    placeholder="Digite o título do evento" 
                    autoComplete='off'
                    required
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="container-input">
                <label htmlFor="date">Data do evento:</label>
                <input 
                    type='datetime-local' 
                    id="date" 
                    placeholder="mm/dd/yyyy"
                    required
                    onChange={(e) => setDate(e.target.value)}
                />
            </div>
            <div className="container-input">
                <label htmlFor="img">Imagem:</label>
                <input 
                    type='Text' 
                    id="img" 
                    placeholder="Insira a URL da imagem"
                    required
                    onChange={(e) => setImage(e.target.value)}
                />
            </div>
            <div className="container-input">
                <input type='submit' value="Criar"/>
            </div>
        </div>
    </form>
)
}

export default Form

