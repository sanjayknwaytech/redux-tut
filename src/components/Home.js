import React from 'react'

const Home=(props)=>{
  //  console.log(props)
    return(
        <div>
            <h2>Home Component</h2>             

            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="./mobile.jpg" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone 15
                    </span>
                    <span>
                        Price: $999.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button    onClick={ ()=>{props.addToCartHandler({pice:999,name:'i phone 15'})} }>  Add To Cart</button>

                    <button style={{marginTop: 6}}   onClick={ ()=>{props.removeToCartHandler({})} }>  Remove To Cart</button>
                </div>
            </div>

        </div>
    )
}

export default Home;