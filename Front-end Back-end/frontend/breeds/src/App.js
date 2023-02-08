import { useState, useEffect } from "react";
import { searchBreeds } from "./Api";
import CardList from "./components/CardList";
import Frame from "./components/Frame";
import SearchBar from "./components/SearchBar";

const App = () => {
  //const [inputValue, setInputValue] = useState('');
  const [data, setData] = useState([]);

  const updateData = async (term) => {
    const responseData = await searchBreeds(term);
    setData(responseData);
  };

  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();
  //   console.log(inputValue);
  //   // const responseData = await searchBreeds(inputValue);
  //   // setData(responseData);
  //   updateData(inputValue);
  // };

  const handleSeachBarSubmit = async (term) => {
    updateData(term);
  };

  // questo effect viene eseguito solo al mount del componente
  // se voglio eseguire la ricerca ogni volta che viene modificato l'input
  // aggiungo inputValue all'array di dipendenze e lo passo ad updateData
  // useEffect(() => {
  //   updateData(inputValue);
  // }, [inputValue]);

  useEffect(() => {
    updateData();
  }, []);

  return (
    <div className="container">
      <h1>Search Dog Breeds</h1>
      <Frame color="info" shadow>
        <SearchBar callWhenSubmit={handleSeachBarSubmit} />
      </Frame>
      <Frame color="info" shadow>
        <CardList data={data} />
      </Frame>
    </div>
  );
};

export default App;
