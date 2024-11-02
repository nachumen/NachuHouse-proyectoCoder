import './App.css'
import NavbarComponent from './components/NavbarComponent'
import ItemlistConteiner from './components/ItemlistContainer'

function App(){
  return (
    <div>
      <NavbarComponent/>
      <ItemlistConteiner greeting='Welcome to Nachu´s House'/>
    </div>
  )
  
}


export default App
