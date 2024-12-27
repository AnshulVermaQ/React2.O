import React, { useEffect, useState } from "react";
import Card from "./Card";
import Skeleton from "./Skeleton";

const Items = () => {
  const [data, setData] = useState([]); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products/"); 
        const result = await response.json();
        setData(result); 
        setLoading(false); 
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []); 

  return loading ? (
    <Skeleton />
  ) : (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
      {data.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          image={item.image}
          rating={item.rating.rate}
          item =  {item}
        />
      ))}
    </div>
  );
};

export default Items;