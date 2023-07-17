import React, { useContext } from 'react';
import { searchContext } from '../App';

export default function Search() {
  const {searchValue, setSearchValue} = useContext(searchContext)
  return (
    <div className="search__wrp">
      <div className="icon searchIcon"></div>
      <input
        type="text"
        className="serchInput"
        placeholder="Найти пиццу ... "
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />
      {searchValue && <div onClick={()=>setSearchValue('')} className="icon closeIcon"></div>}
    </div>
  );
}
