import { useState,useEffect } from "react";
import { searchBreeds } from "./components/Api";
import CardList from "./components/CardList";
import Frame from "./components/Frame";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);//dati dove   ottengo da API

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(inputValue);
    const responseData = await searchBreeds(inputValue);
    setData(responseData);
  };

  useEffect(() => {
    console.log ("Invoce API solo al mount")
    const updateData=async()=>{
      const responseData = await searchBreeds('');
      setData(responseData);
    }
    updateData();
  },[]);//con array vuoto  carico 1 volta quello che arriva dal Back-end

  return (
    <div className="container">
      <nav className="navbar bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand text-light">
            <i className="fa-sharp fa-solid fa-bone"></i>Dog Breed
          </a>
          <form className="w-50" onSubmit={handleFormSubmit}>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="search"
                onChange={handleInputChange}
                value={inputValue}
              ></input>
              <button type="submit" className="btn btn-primary">
                Send
              </button>
            </div>
          </form>
        </div>
      </nav>
      <h1>Search Dog Breeds</h1>
      <Frame color="info" shadow>
        <CardList data={data} />
      </Frame>
    </div>
  );
};

export default App;


 
