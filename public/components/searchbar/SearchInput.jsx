'use client';
import React from "react";
import "./searchInput.css";

function SearchInput({setSearchTerm}) {

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="">
      <input className="w-full input" name="text" placeholder="Search..." type="search" onChange={handleChange} />
    </div>
  );
}

export default SearchInput;
