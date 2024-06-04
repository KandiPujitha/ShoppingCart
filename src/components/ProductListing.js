import React, { useState } from 'react';
import './ProductListing.css';

const products = [
  { id: 1, name: 'Mobile', price: 1100, image: 'https://www.samsungmobilepress.com/file/03C1955BFB8C96849456AC14646F12057B3B68A48EE539D59FD75526AC197BD690C1B3368E87DF53B4EA15F55546873BFD23E0055FCBE868BCD8B542EAAD296E6F934CFED3D8552958E79916F019E09FC94594F757F7BF36D5C9547B12230B2ACA5AA3AFCF8EE68A723E1D72CDB76FB7E429A4E1FE4D543CD24482D65B88D049' },
  { id: 2, name: 'Bag', price: 200, image: 'https://www.shutterstock.com/image-photo/blue-female-bag-on-white-260nw-1051595801.jpg' },
  { id: 3, name: 'Laptop', price: 5000, image: 'https://cdn.punchng.com/wp-content/uploads/2016/05/19164236/A-laptop.jpg'},
  {id: 1, name: 'Television', price: 100, image: 'https://img.freepik.com/premium-photo/4k-monitor-isolated-white_93200-1487.jpg' },
  { id: 2, name: 'Chocolates', price: 140, image: 'https://i.pinimg.com/originals/ae/79/5d/ae795de1ea589c4ec415d60f4c74d09e.png' },
  { id: 3, name: 'earBuds', price: 50, image: 'https://cdn.road.cc/sites/default/files/styles/main_width/public/2022-beats-fit-pro-true-wireless-noise-cancelling-earbuds.jpg'},
  {id: 1, name: 'Dresses', price: 10, image: 'https://freepngimg.com/thumb/dress/33229-5-floral-dress-picture-thumb.png' },
  { id: 2, name: 'Headphones', price: 20, image: 'https://img.freepik.com/free-photo/levitating-music-headphones-display_23-2149817607.jpg' },
  { id: 3, name: 'Shoes', price: 50, image: 'https://www.freepnglogos.com/uploads/shoes-png/dance-shoes-png-transparent-dance-shoes-images-5.png'},
  {id: 1, name: 'Watch', price: 10, image: 'https://www.pngitem.com/pimgs/m/115-1156789_watches-png-image-watch-images-png-transparent-png.png' },
  { id: 2, name: 'camera', price: 20, image: 'https://www.shutterstock.com/image-photo/camera-260nw-610909205.jpg' },
  { id: 3, name: 'MensJacket', price: 50, image: 'https://4.imimg.com/data4/RU/VC/MY-11853389/men-s-jackets.jpg'},
  
  
  
  // Add more products as needed
];

const ProductListing = ({ addToCart }) => {
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (id, value) => {
    setQuantities({
      ...quantities,
      [id]: parseInt(value, 10)
    });
  };

  return (
    <div className="product-listing">
        <h1 className='procart'>Online Shopping website</h1>
      <h2>Product Lists</h2>
      <div className="product-cards">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <input
              type="number"
              value={quantities[product.id] || ''}
              onChange={(e) => handleQuantityChange(product.id, e.target.value)}
              min="1"
            />
            <button onClick={() => addToCart(product, quantities[product.id] || 1)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
