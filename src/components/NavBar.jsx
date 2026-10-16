import { useState , useRef , useEffect} from "react";
import { Link } from "react-router-dom";
export function NavBar({setText}){
    window.location.pathname
    let [clicked , setClicked] = useState(false);
    const navRef = useRef(null);
    useEffect(()=>{
        const links = navRef.current.querySelectorAll(".nav-link");
        links.forEach(link => {
            if(link.pathname === window.location.pathname){
                link.classList.add('active');  
            }else{
                link.classList.remove('active');
            }
        });
    },[])
    function toggleActivate(element){
        const links = navRef.current.querySelectorAll(".nav-link");
        links.forEach(link => {
            link.classList.remove('active');
        });
        element.classList.add('active');
    }
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#">Pencil Go</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0" ref={navRef}>
                        <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/" id="1" onClick={(e) => {
                            toggleActivate(e.currentTarget)
                            setClicked(!clicked);
                        }} >Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="Shop" id="2" onClick={(e) => {
                            toggleActivate(e.currentTarget)
                            setClicked(!clicked);
                        }} >Shop</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="MyCart" id="2" onClick={(e) => {
                            toggleActivate(e.currentTarget)
                            setClicked(!clicked);
                        }} >My Cart</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="YourOrder" id="2" onClick={(e) => {
                            toggleActivate(e.currentTarget)
                            setClicked(!clicked);
                        }} >Your order</Link>
                        </li>
                    </ul>
                    <div className="d-flex search-bar" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"
                            onChange={(e)=>{
                                setText(e.target.value);
                            }}
                        />
                    </div>
                    <div className="img-container">
                        <img src="orange-logo.png" alt="" />
                    </div>
                    </div>
                </div>
            </nav>
    )
}