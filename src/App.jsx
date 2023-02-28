import ImgNewYear from '../src/imagem/fogos-ano-novo.jpg'
import './css/App.css'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className="App" style={{backgroundImage: `url(${ImgNewYear})`}}>
      <div className='container'>
        <Outlet/>
      </div>
    </div>
  )
}

export default App
