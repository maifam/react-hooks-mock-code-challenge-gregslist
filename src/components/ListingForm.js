import React, {useState} from "react";


function ListingForm({onAddNew}) {

  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [location, setLocation] = useState('')

  function handleAddNewListing(){
    
    const newListing = {
      description, 
      image, 
      location
    }

    fetch('http://localhost:6001/listings', {
      method: 'POST', 
      headers: {
        'Content-Type': "application/json"
      }, 
      body: JSON.stringify(newListing)
    })
    .then(r=> r.json())
    .then(newListing => onAddNew(newListing))

  }

  return (
    <form onSubmit={handleAddNewListing}>
      <input
        type="text"
        id="description"
        placeholder="description..."
        value={description}
        onChange={(e) =>setDescription(e.target.value)}
      />
       <input
        type="text"
        id="image"
        placeholder="image..."
        value={image}
        onChange={(e) =>setImage(e.target.value)}
      />
       <input
        type="text"
        id="location"
        placeholder="location..."
        value={location}
        onChange={(e) =>setLocation(e.target.value)}
      />
      <button type="submit">➕ New Item </button>
    </form>
  );
}

export default ListingForm;
