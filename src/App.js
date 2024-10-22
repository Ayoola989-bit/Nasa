import React, { useState } from 'react'
import './App.css';
import axios from 'axios';
import ImageGrid from './ImageGrid';


const SearchImage = () => {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const checkSearch = async () => {
    if (!query) return
    setLoading(true);
    setError(null);
    setQuery('');

    try {
      const response = await axios.get(`https://images-api.nasa.gov/search?q=${query}`);
      // Template literals

      const items = response.data.collection.items
      console.log(response);

      //Map through items and return all valid links for images
      const imageArr = items.flatMap((item) => item.links ? item.links.filter((link) => link.render === 'image').map((link) => link.href) : []).filter(Boolean);
       console.log(imageArr)
       
     setImages(imageArr);
  }
    catch (err) {
      console.log(err);
      setError("Service is currently unavailable");
      setImages([]);
    }
    finally {
      setLoading(false);
    }
  
  }

  //  console.log(images)
return (
  <div>
    <h1>NASA Image Search</h1>
    <input type="text"  placeholder='Enter Details (e.g., moon)'
    value={query} onChange={(e) => setQuery(e.target.value)} />

    <button onClick={checkSearch}>Search</button>
    {loading && <div>loading...</div>}

    <div>{loading && !(images.length > 0 || error) && <p>Loading images</p>}</div>
    {error && <p>{error}</p>}
    {images.length > 0 && <ImageGrid images={images}/>}
  </div>
);
};

export default SearchImage;
