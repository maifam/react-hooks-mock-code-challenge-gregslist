import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listings, setListings] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(r => r.json())
    .then(listingsArr => setListings(listingsArr))
  }, [])


  const filteredListings = listings.filter((listing) => listing.description.toLowerCase().includes(search.toLowerCase()));


  function handleDeleteListing(id) {
    const updatedListing = listings.filter(listing => listing.id !== id)
    setListings(updatedListing)
  }

  function addNewListing(newListing) {
    setListings([...listings, newListing])
  }

  return (
    <div className="app">
      <Header search={search} setSearch={setSearch} onAddNew={addNewListing} />
      <ListingsContainer listings={filteredListings} onDeleteListing={handleDeleteListing}/>
    </div>
  );
}

export default App;
