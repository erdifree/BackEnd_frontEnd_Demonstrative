const searchBreeds = async (term) => {
  let url = "http://localhost:8080/api/breeds";
  if (term !== null && term !== undefined && term !== "") {
    url += "?keyword=" + term;
  }
  try {
    const response = await fetch(url);
    const data = await response.json();
    //console.log(data);
    return data; // render in base ai dati
  } catch (error) {
    console.log(error);
  }
};

export { searchBreeds };
