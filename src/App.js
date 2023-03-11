import Navbar  from "./components/Navbar";
import SearchResult from "./components/SearchResult";
import Searchbar from "./components/Searchform";

const DrugImageurl ="https://picsum.photos/id/1/200/300";



function App() {
  
  return (
    <>
    <Navbar/>
    <Searchbar/>
    <SearchResult medicinepicture = {DrugImageurl} /> 
    
    </>
    
  );
}

export default App;
