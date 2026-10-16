export function Shop({filteredProducts}){
    function addToCartHandeler(product , quantityInp , id){
        let flag = false;
        let myCart;
        let oldQuantity;
        let newQuantity;
        let finalQuantity;
        myCart = JSON.parse(localStorage.getItem("myCart"));
        if(localStorage.getItem("myCart")){
            for(let i = 0 ; i < myCart.length ; i++ ){
                if(myCart[i].id === id){
                    oldQuantity = Number(product.quantity);
                    newQuantity = Number(quantityInp);
                    finalQuantity = oldQuantity + newQuantity;
                    product.quantity = `${finalQuantity}`;
                    myCart[i] = product;
                    localStorage.setItem("myCart", JSON.stringify(myCart));
                    flag = true
                    break;
                }
            }
            if(!flag){
                product.quantity = quantityInp;
                myCart.push(product);
                localStorage.setItem("myCart", JSON.stringify(myCart));
            }
            
        }else{
            localStorage.setItem("myCart",JSON.stringify([]));
            myCart = JSON.parse(localStorage.getItem("myCart"));
            product.quantity = quantityInp;
            myCart.push(product);
            localStorage.setItem("myCart", JSON.stringify(myCart));
        }
    }
    
    return(
        
        <section className="shop-page">
            <div className="all-products-container">
                <div className="row row-cols-xxl-5 row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 row-gap-3">
                    {
                        filteredProducts.map((product)=>{
                            let quantity = "1";
                            return(
                                <div className="col" key={product.id}>
                                    <div className="product-container">
                                        <div className="product-img">
                                            <img src={product.image} alt="" />
                                        </div>
                                        <div className="product-name">{product.name}</div>
                                        <div className="product-price">
                                        Price: ${(product.priceInCents / 100).toFixed(2)}
                                        </div>
                                        <div className="select-container">
                                            <label htmlFor="quantity">Choose the quantity:</label>
                                            <select 
                                                className="form-select" 
                                                name="quantity" 
                                                id="quantity" 
                                                aria-label="Default select example"
                                                onChange={(e)=>{
                                                    quantity = e.target.value;
                                                }}
                                                >
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                                <option value="10">10</option>
                                            </select>
                                        </div>
                                        <button type="button" className="btn btn-success"
                                            onClick={() =>addToCartHandeler(product , quantity ,product.id)}
                                        >add to cart</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>  
            </div>
        </section>
    );
}