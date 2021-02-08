import React, {useState} from "react";

function ListingCard({listingObj, onDeleteListing}) {

  const {id, description, image, location} = listingObj

  const [isFavorited, setIsFavorited] = useState(false)

  function handleFavoriteClick(){
    setIsFavorited(isFavorited => !isFavorited)
  }

  
  function handleDeleteClick() {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: 'DELETE',
    })
    onDeleteListing(id)
  }

 
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isFavorited ? (
          <button onClick={handleFavoriteClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleFavoriteClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDeleteClick} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
