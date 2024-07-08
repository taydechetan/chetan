import React, { useEffect, useState } from "react";
import Serch from "./components/serch"; // Make sure this is correctly imported if needed
import Pagignation from "./components/pagignation"; // Make sure this is correctly imported if needed

export default function App() {
  // Define isLoading state
  const [isLoading, setIsLoading] = useState(true);

  const api = "http://hn.algolia.com/api/v1/search?query=html";

  const fetchApiData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json(); // Await the JSON parsing
      console.log(data);
      setIsLoading(false); // Update isLoading state
    } catch (error) {
      console.log(error);
      setIsLoading(false); // Handle error and update isLoading state
    }
  };

  useEffect(() => {
    fetchApiData(api);  
  }, []);

  // Render loading message if isLoading is true
  if (isLoading) {
    return (
      <>
        <h3>Loading...</h3>
      </>
    );
  }

  // Render main content once isLoading is false
  return (
    <>
      <h3>Tech News Portal</h3>
      {/* You can include other components or content here */}
    </>
  );
}
