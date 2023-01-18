import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroller";
import "./InfiniteScroll.css";

function Infinite() {
  const [items, setItems] = useState([]);
  const [hasMoreItems, setHasMoreItems] = useState(true);
  const [page, setPage] = useState(0);

  useEffect(() => {
    loadData();
   
  }, []);

  const loadData = async () => {
    try {
      
      const res = await fetch(`https://jsonplaceholder.typicode.com/comments?_start=${page}&_limit=10`);
      const data = await res.json();
      
      setItems([...items, ...data]);
      
      if (data.length === 10) {
        setPage(page + 10);
      } else {
        setHasMoreItems(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const loadMoreData = () => {
    loadData();
  };

  return (
    <div className="items ">
      <InfiniteScroll
      className="p-3 bg-secondary border-none"
        pageStart={0}
        loadMore={loadMoreData}
        hasMore={hasMoreItems}
        loader={<div className="loader">Loading ...</div>}
      >
        {items.map((item, index) => (
          <div className="card p-5 mb-5" key={item.id}>
             <div class="card-header fw-bold text-uppercase">
             {item.name}
  </div>
  <div class="card-body">
    <h5 class="card-title">Website : {item.email}</h5>
    <p class="card-text">{item.body}</p>
  </div>
           
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
}

export default Infinite;
