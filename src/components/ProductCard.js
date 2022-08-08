import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const ProductCard = () => {
	const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price } = product;
    return (
      <div className="four wide column" key={id} style={{width: '25%', padding: 20}}>
        <Link to={`/product/${id}`}>
          <div className="ui link cards">
            <div className="ui fluid card">
              <div className="image">
                <img src={image} alt={title} style={{
									  width: '100%',
										maxWidth: 400,
										height: 300,
								}}/>
              </div>
              <div className="content" style={{height: 180}}>
                <h4 style={{color: '#374147'}}>{title}</h4>
                <div className="meta price">$ {price}</div>
								<div style={{height: 100}}>
								<button className="ui button" style={{backgroundColor: '#f9dc12',color: '#454545', fontWeight: 'bold'}}>
  								<i className="icon plus"></i>
  									Add to cart
								</button>
								<button className="ui button" style={{backgroundColor: '#fc5110',color: '#fff', fontWeight: 'bold'}}>
  								<i className="icon trash"></i>
  									remove from cart
									</button>
								</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );

  });
  return <>{renderList}</>;
}

export default ProductCard;