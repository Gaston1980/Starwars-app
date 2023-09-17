import {Routes,Route} from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Cards from "./components/Cards";
import CardDetails from "./components/CardDetails";
import Filmscards from "./components/Filmscards";
import Planetscards from "./components/Planetscards";
import Filmcarddetails from "./components/Filmcarddetails";
import Planetcarddetails from "./components/Planetcarddetails";


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/characters" element={(<> <NavBar/> <Cards/> </>)}/>
        <Route path="/characters/:id" element={<CardDetails/>}/>
        <Route path="/films" element={(<> <NavBar/> <Filmscards/> </>)}/>
        <Route path="/films/:id" element={<Filmcarddetails/>}/>
        <Route path="/planets" element={(<> <NavBar/> <Planetscards/> </>)}/>
        <Route path="/planets/:id" element={<Planetcarddetails/>}/>
      </Routes>
   </div>  
    )
}
export default App
