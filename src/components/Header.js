import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className='ui fixed raised menu' style={{backgroundColor: '#f9dc12', border: 'none', padding: 10}}>
			<div className='ui container center'>
				<h1 className="ui left floated black header">J Shop</h1>
				<div className="ui secondary menu">
					<NavLink  key="home" to="/" className='item'  style={({ isActive }) => {
              return {
								fontWeight: 'bold',
								fontSize: isActive ? '1.2em' : '1em',
                backgroundColor: '#f9dc12',
                color: isActive ? "#454545" : "#374147"
              };
            }}>Home</NavLink>
					<NavLink  key="store" to="store" className='item' style={({ isActive }) => {
						return {
							fontWeight: 'bold',
							fontSize: isActive ? '1.2em' : '1em',
							backgroundColor: '#f9dc12',
							color: isActive ? "#454545" : "#374147"
						};
					}}>Store</NavLink>
					<NavLink  key="about" to="about" className='item' style={({ isActive }) => {
						return {
							fontWeight: 'bold',
							fontSize: isActive ? '1.2em' : '1em',
							backgroundColor: '#f9dc12',
							color: isActive ? "#454545" : "#374147"
						};
					}}>About</NavLink>
					<NavLink  key="shoppingcart" to="shoppingcart" className='item' style={({ isActive }) => {
						return {
							fontWeight: 'bold',
							fontSize: isActive ? '1.2em' : '1em',
							backgroundColor: '#f9dc12',
							color: isActive ? "#454545" : "#374147",
							position: 'absolute', 
							right: 60
						};
					}}>
						<div className="ui icon">
        			<i className="cart link icon"></i>
      			</div>
					</NavLink>
				</div>
			</div>
		</div>
  )
}

export default Header;