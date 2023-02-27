import Title from './components/Title'
import Counter from './components/Counter'
import ImgNewYear from '../src/imagem/fogos-ano-novo.jpg'
import useCountdown from './hooks/useCountdown'
import { Outlet } from 'react-router-dom'
import './css/App.css'

function App() {
  const [day, hour, minute, second] = useCountdown('Jul 4, 2023 00:00:00')
  

  return (
    <div className="App" style={{backgroundImage: `url(${ImgNewYear})`}}>
      <div className='container'>
        <Title texto="Contagem regressiva para 2024"/>
        <div className='countdown-container'>
          <Counter title="Dias" number={day}/>
          <Counter title="Horas" number={hour}/>
          <Counter title="Minutos" number={minute}/>
          <Counter title="Segundos" number={second}/>
        </div>
        <Outlet/>
      </div>
    </div>
  )
}

export default App
