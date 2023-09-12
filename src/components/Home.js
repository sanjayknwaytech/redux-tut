import React from 'react'

const Home=(props)=>{ 
    return(
        <div>
            <h2>Home Component</h2>             

            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://m.media-amazon.com/images/I/61bK6PMOC3L._AC_UF1000,1000_QL80_.jpg" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button 
                    onClick={
                        ()=>{props.addToCartHandler({pice:1000,name:'i phone 11'})}
                        }>
                        Add To Cart</button>
                </div>
            </div>

        </div>
    )
}

export default Home;