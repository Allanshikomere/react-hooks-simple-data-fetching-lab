// create your App component here
import React, { useState, useEffect } from "react";

function App() {
  const [dogImage, setDogImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetching data from the API
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        // Update state with the received dog image URL
        setDogImage(data.message);
        // Set loading to false after receiving the response
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching dog image:", error);
        // Set loading to false in case of an error
        setIsLoading(false);
      });
  }, []); // Empty dependencies array to run the effect only once on mount

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <img src={dogImage} alt="A Random Dog" />
      )}
    </div>
  );
}

export default App;
