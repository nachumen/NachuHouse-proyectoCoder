import './App.css'
import NavbarComponent from './components/NavbarComponent'
import ItemlistConteiner from './components/ItemlistContainer'

function App(){
  return (
    <div>
      <NavbarComponent/>
      <ItemlistConteiner greeting='Welcome to Nachu House'/>
    </div>
  )
  
}


export default App
