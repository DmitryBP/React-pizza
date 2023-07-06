import React from 'react';

export default function Categories() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  const onClickCategory = (index) => {
    setActiveIndex(index)
  }
  
  return (
    <div className="categories">
      <ul>
        {categories.map((c, i) => {
          return <li key={i} onClick={()=>onClickCategory(i)} className={activeIndex === i ? 'active' : ''}>{c}</li>;
        })}
      </ul>
    </div>
  );
}
