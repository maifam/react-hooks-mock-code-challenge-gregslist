import React from "react";
import Search from "./Search";
import ListingForm from "./ListingForm";


function Header({search, setSearch, onAddNew}) {

  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search search={search} setSearch={setSearch}/>
      <br/>
        <ListingForm onAddNew={onAddNew}/>
    
    </header>
  );
}

export default Header;
