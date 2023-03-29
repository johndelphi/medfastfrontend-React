import React, { useState } from 'react';

function Searchbar() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = event => {
    setSearchQuery(event.target.value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();

    // Make a GET request to the API endpoint with the search query
    fetch(`https://localhost:7070/api/medicines/Search?name=${searchQuery}`)
      .then(response => response.json())
      .then(data => {
        // Handle the search results
        console.log(data);
      })
      .catch(error => {
        // Handle the error
        console.error(error);
      });
  };

  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-center">
        <form className="form-inline my-2 my-lg-0" onSubmit={handleFormSubmit}>
          <div className="input-group">
            <input
              className="form-control mr-sm-2 w-90"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchQuery}
              onChange={handleInputChange}
            />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Searchbar;
