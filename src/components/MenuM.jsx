import React, { useState } from 'react';
const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

export default function MenuM({activ, select}) {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const onClickCategory = (index) => {
    setActiveIndex(index);
    select(index)
  };
  return (
    <ul className={activ?'menu active':'menu'}>
      {categories.map((c, i) => {
        return (
          <li key={i} onClick={() => onClickCategory(i)} className={activeIndex === i ? 'active' : ''}>
            {c}
          </li>
        );
      })}
    </ul>
  );
}
