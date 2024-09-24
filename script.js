const listItem = document.getElementById("suggestions-list");
const inputVal = document.getElementById("typeahead");

const getData = async (query) => {
  const resp = await fetch(
    `https://api.frontendexpert.io/api/fe/glossary-suggestions?text=${query}`
  );
  const data = await resp.json();
  return data; // Return the fetched data
};

inputVal.addEventListener("input", async (e) => {
  const query = e.target.value;

  if (query.length > 0) {
    const data = await getData(query); // Fetch data based on user input
    // Clear previous suggestions
    listItem.innerHTML = ""; 

    // Display new suggestions
    data.forEach(item => {
      const suggestion = document.createElement("li");
      suggestion.textContent = item; // Assuming item is the suggestion text
      listItem.appendChild(suggestion);
    });
  } else {
    // Clear suggestions if input is empty
    listItem.innerHTML = "";
  }
});
