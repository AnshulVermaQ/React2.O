import React, { useEffect, useState } from "react";
import Card from "./Card";
import Skeleton from "./Skeleton";
import useSingleproduct from "../hooks/useSingleproduct";

const Items = () => {

  useSingleproduct();
  
  const topRatedProducts = () => {
    const filteredData = data.filter((item) => item.rating.rate >= 4);
    setData(filteredData);
  };

  const searchProducts = () => {
    const filteredData = data.filter((item) =>
      item.title.toLowerCase().includes(searchD.toLowerCase())
    );
    setData(filteredData); 
  };

  return data.length === 0 ? (
    <Skeleton />
  ) : (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search products..."
          value={searchD}
          onChange={(e) => setSearch(e.target.value)} 
        />
        <button onClick={searchProducts}>Search</button>
      </div>
      <button onClick={topRatedProducts}>Top Rated Products</button>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {data.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            image={item.image}
            rating={item.rating.rate} 
          />
        ))}
      </div>
    </div>
  );
};

export default Items;
