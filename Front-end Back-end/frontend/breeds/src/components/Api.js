const searchBreeds = async (term) => {
  try {
    const response = await fetch(
      "http://localhost:8080/api/breeds?keyword=" + term
    );
    const data = await response.json();
    //console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { searchBreeds };
