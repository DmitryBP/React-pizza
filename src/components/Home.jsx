import React, { useEffect, useState } from 'react';
import Categories from './Categories';
import Sort from './Sort';
import PizzaBlock from './PizzaBlock';
import Skeleton from './Skeleton';

export default function Home() {
  const [items, setItems] = useState([]);
  const [load, setLoad] = useState(false);
  const [categoryId, setCategoryId] = useState(0);
  const [sortValue, setSortValue] = useState('rating');

  useEffect(() => {
    const endUrl = categoryId > 0 ? `?sortby=${sortValue}&category=${categoryId}` : '';
    console.log(endUrl);
    fetch('https://64a7020d096b3f0fcc80f78c.mockapi.io/items' + endUrl)
      .then((res) => res.json())
      .then((res) => {
        setItems(res);
        setLoad(true);
      });
  }, [categoryId, sortValue]);
  const selectCat = (i) => {
    setCategoryId(i);
  };
  const selectSort = (SelectObj) => {
    setSortValue(SelectObj.value);
  };

  return (
    <>
      <div className="content__top">
        <Categories selectCat={selectCat} />
        <Sort selectSort={selectSort} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items.map((p) => {
          return load ? (
            <PizzaBlock key={p.id} title={p.name} img={p.imageUrl} price={p.price} sizes={p.sizes} types={p.types} />
          ) : (
            <Skeleton />
          );
        })}
      </div>
    </>
  );
}
