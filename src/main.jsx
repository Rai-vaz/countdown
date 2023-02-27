import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Form from './components/Form'
import CounterRun from './components/CounterRun'
import './css/index.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'

const routers = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Form/>
      },
      {
        path: '/counter',
        element: <CounterRun/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routers}/>   
  </React.StrictMode>,
)
