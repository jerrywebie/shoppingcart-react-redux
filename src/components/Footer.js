import React from 'react'

const Footer = () => {
  return (
  <div className="ui raised container" style={{backgroundColor: '#000', borderWidth: 1, borderColor: '#414342' , width: '100%',paddingTop: 60, color: '#f9dc12'}}>
  <div className='ui container center'>
	<div className="ui three column vertically padded grid">
  <div className="row">
    <div className="column">
			<div className="ui list">
				<h3>Home</h3>
  			<div className="item">Sitemap</div>
  			<div className="item">Contact us</div>
  			<div className="item">FAQ</div>
			</div>
    </div>
    <div className="column">
			<div className="ui list">
				<h3>Services</h3>
  			<div className="item">Cutomer Services</div>
  			<div className="item">Sales Return</div>
  			<div className="item">Products</div>
			</div>
    </div>
    <div className="column">
			<div className="ui list">
				<h3>Useful links</h3>
  			<div className="item">facebook</div>
  			<div className="item">twitter</div>
  			<div className="item">google</div>
			</div>
    </div>
  </div>
	<div className="row" style={{paddingTop: 60}}>
		<p className="ui container center" style={{textAlign: 'center'}}>&copy;copyright by J shop 2022.</p>
	</div>
	</div>
	</div>
</div>
  )
}

export default Footer;