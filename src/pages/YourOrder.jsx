import { useState } from "react";
export function YourOrder(){
    if(!JSON.parse(localStorage.getItem('order'))){
        localStorage.setItem('order',JSON.stringify([]));
    }
    let [orders , setOrder] = useState(JSON.parse(localStorage.getItem('order')));
    function removeFromCartHandler(index){
        let temp = [...orders];
        if (index > -1) { // only splice array when item is found
            temp.splice(index, 1); // 2nd parameter means remove one item only
            localStorage.setItem('order', JSON.stringify(temp));
            setOrder(temp);
        }
    }
    if(orders.length === 0 || !orders){
        return(
            <section className="no-items">
                <h2>
                    No Items have been ordered yet
                </h2>
            </section>
        );
    }else{
        return(
            <section className="your-order-page">
                <div className="all-products-in-my-cart-container">
                    {
                        orders.map((oneOrder,index)=>{
                            console.log(index);
                            console.log(orders);
                            console.log(oneOrder);
                            return(
                                <div className="order rounded my-3">
                                    {
                                        oneOrder.map((product)=>{
                                            return(
                                                <div className="product-in-my-cart-container row row-cols-sm-2 row-cols-1 row-gap-3 justify-content-center" key={product.id}>
                                                    <div className="product-img-container col">
                                                        <img src={product.image} alt="" />
                                                    </div>
                                                    <div className="description-container col">
                                                        <div className="product-name">{product.name}</div>
                                                        <div className="product-price">
                                                            Price: ${(product.priceInCents / 100).toFixed(2)}
                                                        </div>
                                                        <div className="select-container">
                                                            <p>Quantity: {product.quantity}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })
                                    }
                                    <button 
                                        type="button" 
                                        className="btn btn-danger btn-lg my-3"
                                        onClick={() => removeFromCartHandler(index)}    
                                    >Cancel your order</button>
                                </div>
                            );
                        })
                    }
                </div>
            </section>
        );
    }
}