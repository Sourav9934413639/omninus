

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [items, setItems] = useState([]);
  const [image, setImage] = useState(null);

  useEffect(() => {

    axios.get('http://localhost:3000/api/v1/')
      .then(response =>{ setItems(response.data)
      console.log(response.data)
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleImageUpload = async () => {
    if (!image) return;

    const formData = new FormData();
    formData.append('data', image);

    try {
      const response = await axios.post('http://localhost:3001/api/upload', formData);
      console.log('Image uploaded:', response.data);
      // Refresh the items after successful upload
      axios.get('http://localhost:3001/api/items')
        .then(response => setItems(response.data))
        .catch(error => console.error('Error fetching data:', error));
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div>
      <h1>Items</h1>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleImageUpload}>Upload Image</button>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <img src={item.imageUrl} alt={item.name} style={{ maxWidth: '300px' }} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
