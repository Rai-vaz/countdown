import Title from "./Title"
import Counter from "./Counter"
import useCountdown from '../hooks/useCountdown'

const CounterRun = () => {
  const [day, hour, minute, second] = useCountdown('Jul 4, 2023 00:00:00')
  return (
    <div>
      <Title texto="Contagem regressiva para 2024"/>
        <div className='countdown-container'>
          <Counter title="Dias" number={day}/>
          <Counter title="Horas" number={hour}/>
          <Counter title="Minutos" number={minute}/>
          <Counter title="Segundos" number={second}/> 
        </div>
    </div>
  )
}

export default CounterRun

 
