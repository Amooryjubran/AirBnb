import React from "react";
import SearchInformation from "./SearchInformation";

function SearchInfo() {
  return (
    <div>
      <SearchInformation
        name="Le Vacancier"
        stars="4.56"
        reviews="6"
        location="Saint-Tite, Québec, Canada"
        degree="36"
        food="Free Food"
        img="https://randomuser.me/api/portraits/women/1.jpg"
        host="Nancy"
        guest="4"
        bedroom="1"
        bed="1"
        bath="1"
      />
    </div>
  );
}

export default SearchInfo;
