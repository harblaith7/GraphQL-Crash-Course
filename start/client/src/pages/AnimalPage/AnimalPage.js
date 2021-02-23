import React from 'react'
import { Container } from 'react-bootstrap'
import animals from "../../assets/images"
import star from "../../assets/svg/star.svg"
import "./AnimalPage.css"
import { useParams } from "react-router-dom"

function AnimalPage() {

    const { slug } = useParams();
    

    return (
        <div className="py-5">
            <Container>
                <div className="d-flex">
                    <img className="product-img"  style={{marginRight: "1rem"}}/>
                <div className="text-container">
                        <h1>{}</h1>
                        <div className="star-container">
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <div className="rating-stock-container">
                                <p>1402 rating</p>
                                <p>{} in stock</p>
                            </div>
                            
                        </div>
                        <div className="about-container">
                            <h4>About this Animal</h4>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                            <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                            <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</li>
                            <li>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
                        </div>
                    </div>
                    <div className="cart-container border">
                        <p className="price"><span>CAD$ {}</span></p>
                        <p className="delivery-time" >FREE delivery: Thursday, Feb 25 Details
                            <button className="buy-now-btn" style={{marginTop: "2rem"}}>
                                Add to Cart
                            </button>
                            <button>
                                Buy Now
                            </button>
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default AnimalPage
