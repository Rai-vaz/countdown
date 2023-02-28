import ImgNewYear from '../src/imagem/fogos-ano-novo.jpg'
import Form from './components/Form'
import CounterRun from './components/CounterRun'
import {Routes, Route} from 'react-router-dom'
import './css/App.css'

function App() {

  return (
    <div className="App" style={{backgroundImage: `url(${ImgNewYear})`}}>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Form/>}/>
          <Route path='/counter' element={<CounterRun/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
