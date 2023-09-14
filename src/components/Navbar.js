import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
 const Navbar = (props)=>{
    //console.log(props.addedItems)
    return(
            <nav className="nav-wrapper">
                <div className="container">
                    <Link to="/" className="brand-logo">Shopping</Link>
                    
                    <ul className="right">
                        <li><Link to="/">Shop</Link></li>
                        <li><Link to="/cart">My cart</Link></li>
                        <li><Link to="/cart"><span className='cart-count'>{props.addedItems.length}</span><i className="material-icons">shopping_cart</i></Link></li>
                    </ul>
                </div>
            </nav>
    )
}
const mapStateToProps = (state)=>{
    return {
        addedItems: state.addedItems,
    }
}
const mapDispatchToProps= (dispatch)=>{
    return{        
    } 
}  
export default connect(mapStateToProps,mapDispatchToProps)(Navbar);