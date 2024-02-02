import Nav from './component/navbar'
import { BrowserRouter , Route, Routes } from 'react-router-dom'
import Pokedex from './component/pokedex'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Pokedex />}/>
          </Route>
        </Routes> 
      </BrowserRouter>
    </>
  )
}

export default App
