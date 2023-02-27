import ImgNewYear from '../src/imagem/fogos-ano-novo.jpg'
import { Outlet } from 'react-router-dom'
import './css/App.css'

function App() {

  return (
    <div className="App" style={{backgroundImage: `url(${ImgNewYear})`}}>
      <div className='container'>
        {/**<Title texto="Contagem regressiva para 2024"/>
          <div className='countdown-container'>
          <Counter title="Dias" number={day}/>
          <Counter title="Horas" number={hour}/>
          <Counter title="Minutos" number={minute}/>
          <Counter title="Segundos" number={second}/> 
         
        </div>*/}
        <Outlet/>
        
      </div>
     
    </div>
  )
}

export default App
