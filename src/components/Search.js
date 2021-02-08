import React, {useState} from "react";

function Search({search, setSearch}) {

  const [description, setDescription] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    setSearch(description)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
