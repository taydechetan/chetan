import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./dailydeal.css";
import { CartContext } from "./CartContext";

const ITEMS_PER_PAGE = 6;

const Dailyd = () => {
  const [deals, setDeals] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);   
  const [error, setError] = useState(null);
  const { cart, setCart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDeals = async () => {
      setLoading(true);
      try {
        const response = await axios.post(
          `https://atozbay.com/adminatoz/public/api/shop-products-list?page=${page}&limit=${ITEMS_PER_PAGE}`
        );
        const newDeals = response.data.result;

        if (newDeals.length < ITEMS_PER_PAGE) {
          setHasMore(false);
        }

        const existingDealIds = new Set(deals.map((deal) => deal.id));
        const uniqueNewDeals = newDeals.filter(
          (deal) => !existingDealIds.has(deal.id)
        );

        setDeals((prevDeals) => [...prevDeals, ...uniqueNewDeals]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDeals();
  }, [page]);

  const loadMore = () => {
    if (!loading && hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handleCardClick = (deal) => {
    navigate("/cart", { state: { deal } });

    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === deal.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === deal.id ? { ...item, amount: item.amount + 1 } : item
        );
      } else {
        return [...prevCart, { ...deal, amount: 1 }];
      }
    });
  };

  // const handleAddToCart = (deal) => {
  //   setCart((prevCart) => {
  //     const itemInCart = prevCart.find((item) => item.id === deal.id);
  //     if (itemInCart) {
  //       return prevCart.map((item) =>
  //         item.id === deal.id ? { ...item, amount: item.amount + 1 } : item
  //       );
  //     } else {
  //       return [...prevCart, { ...deal, amount: 1 }];
  //     }
  //   });
  //   navigate("/cart", { state: { deal } });
  // };

  if (loading && page === 1) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="daily-deals">
      <h1 className="text-center">Daily Deals</h1>
      <div className="deals-list">
        {deals.map((deal) => {
          const firstImage = deal.product_images?.[0];

          return (
            <div
              key={deal.id}
              className="deal-card border"
              onClick={() => handleCardClick(deal)}
            >
              {/* <div className="product-images">
                {firstImage && (
                  <img
                    src={firstImage.product_image}
                    alt={`Product ${deal.id}`}
                    style={{ width: "100%", height: "300px", margin: "5px" }}
                  />
                )}
              </div> */}
              <div className="product-images">
                {firstImage ? (
                  <img
                    src={firstImage.product_image}
                    alt={`Product ${deal.id}`}
                    style={{ width: "100%", height: "300px", margin: "5px" }}
                  />
                ) : (
                  <div>No Image Available</div>
                )}
              </div>

              <h2>{deal.name}</h2>
              <p>{deal.short_desc}</p>
              <p>${deal.product_prices?.price}</p>
            </div>
          );
        })}
      </div>
      {hasMore && !loading && (
        <button className="load-more" onClick={loadMore}>
          Load More
        </button>
      )}
      {loading && <div>Loading more deals...</div>}
    </div>
  );
};


export default Dailyd;
