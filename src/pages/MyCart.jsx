import { useState} from "react";
export function MyCart(){
    if(!JSON.parse(localStorage.getItem('myCart'))){
        localStorage.setItem('myCart',JSON.stringify([]));
    }
    let [myCart , setMyCart] = useState(JSON.parse(localStorage.getItem("myCart")));
    let totalPrice = 0;
    let numberOfItems = 0;
    if(myCart){
        myCart.forEach(product => {
            totalPrice += Number(product.quantity) * (product.priceInCents / 100);
        });
    }
    function removeFromCartHandler(product){
        let index = myCart.indexOf(product);
        let temp = [...myCart];
        if (index > -1) { // only splice array when item is found
            temp.splice(index, 1); // 2nd parameter means remove one item only
            localStorage.setItem('myCart', JSON.stringify(temp));
            setMyCart(temp);
        }
    }
    function numberOfItemsFun(){
        myCart.forEach(product => {
            numberOfItems += Number(product.quantity);
        });
        return numberOfItems;
    }
    function placeYourOrderBtn(){
        if(!JSON.parse(localStorage.getItem('order'))){
            localStorage.setItem("order",JSON.stringify([]));
        }
        let temp = JSON.parse(localStorage.getItem('order'));
        temp.push(myCart);
        console.log(temp);
        //temp = myCart.concat([...JSON.parse(localStorage.getItem("order"))]); 
        localStorage.setItem("order",JSON.stringify(temp));
        localStorage.setItem("myCart",JSON.stringify([]));
        setMyCart(JSON.parse(localStorage.getItem("myCart")));
    }
    if(myCart.length === 0 || !myCart){
        return(
            <section className="no-items">
                <h2>
                    No Items in the cart yet
                </h2>
            </section>
        )
    }else{
        return(
            <section className="mycart-page">
                <div className="container row row-cols-xl-2 row-cols-lg-1">
                    <div className="all-products-in-my-cart-container">
                            {
                                myCart.map((product)=>{
                                    return(
                                        <div className="product-in-my-cart-container" key={product.id}>
                                            <div className="product-img-container">
                                                <img src={product.image} alt="" />
                                            </div>
                                            <div className="description-container">
                                                <div className="product-name">{product.name}</div>
                                                <div className="product-price">
                                                    Price: ${(product.priceInCents / 100).toFixed(2)}
                                                </div>
                                                <div className="select-container">
                                                    <p>Quantity: {product.quantity}</p>
                                                </div>
                                                <button type="button" className="btn btn-danger btn-lg"
                                                    onClick={() => removeFromCartHandler(product)}
                                                >Remove from cart</button>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                    </div>
                    <div className="payment-summary">
                        <div className="text-container">
                            <h2 >
                                Payment Summary
                            </h2>
                            <h4>
                                Item(s): {numberOfItemsFun()}
                            </h4>
                            <h4>
                                <span className="text-success">Total Price: $ {totalPrice.toFixed(2)}</span>
                            </h4>
                        </div>
                        <button 
                            type="button" className="btn btn-success"
                            onClick={placeYourOrderBtn}
                        >Place your order</button>
                    </div>
                </div>
            </section>
        )
    }
}