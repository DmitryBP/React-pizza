import React, { useState } from 'react';
import MenuM from './MenuM';

export default function Categories({selectCat}) {
  const [activ, setActiv] = useState(false);

  return (
    <div className="categories">
      <button className="btn" onClick={() => setActiv(!activ)}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 7H21M3 12H21M3 17H21" stroke="black" stroke-idth="1.5" strokeLinecap="round" />
        </svg>
      </button>
      <MenuM activ={activ} select={selectCat}/>
    </div>
  );
}
