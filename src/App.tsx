import {Routes,Route} from "react-router-dom"
import {Container} from "react-bootstrap"
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import {Navbar} from "./components/Navbar"
function App (){
  return(
  <> 
  <Navbar/>
  <Container>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    </Container>
    </>
  )
}
export default App;