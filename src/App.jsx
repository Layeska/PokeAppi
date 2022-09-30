import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import './styles/IsLoading.css'

import UserInput from './components/UserInput'
import PokemonList from './components/PokemonList'
import PokemonDetails from './components/PokemonDetails'
import ProtectedRoute from './components/ProtectedRoute'

import { useSelector } from 'react-redux'


function App() {
  const loading = useSelector(state => state.loading)

  return (
    <HashRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={<UserInput/>}/>
          <Route element={<ProtectedRoute/>}>
            <Route path='/pokemon' element={<PokemonList/>}/>
            <Route path='/pokemon/:id' element={<PokemonDetails/>}/>
          </Route>
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App
