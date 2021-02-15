import React from 'react'
import "./MainHero.css"
import rhino from "../../assets/image/rhino.png"
import tiger from "../../assets/image/tiger.png"
import lion from "../../assets/image/lion.png"
import lion2 from "../../assets/image/lion2.jpg"
import pengiun from "../../assets/image/penguin.png"
import pengiun2 from "../../assets/image/penguin2.jpg"
import cat from "../../assets/image/cat.jpg"
import {Container} from "react-bootstrap"

function MainHero() {
    return (
        <div className="MainHero">
            <Container>
                <div>
                    <div className="header-container">
                        <h2>Find your <br/> new four-legged <br/> best friend</h2>
                        <img src={rhino} />
                    </div>
                    <div className="cards-container">
                        <div className="card">
                            <h3>Hi, Laith</h3>
                            <p>Top animals for you</p>
                            <div className="boxs-container">
                                <div className="box-container">
                                    <img src={tiger} />
                                </div>
                                <div className="box-container">
                                    <img src={rhino} style={{marginTop: "0.5rem"}}/>
                                </div>
                                <div className="box-container">
                                    <img src={pengiun} />
                                </div>
                                <div className="box-container">
                                    <img src={lion} style={{marginTop: "1rem"}}/>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <h3>Recently Viewed</h3>
                            <img src={lion2} style={{width: "100%"}}/>
                        </div>
                        <div className="card">
                            <h3>Looking for a Gift?</h3>
                            <img src={pengiun2} />
                        </div>
                        <div className="card">
                            <h3>Best Behaved</h3>
                            <img src={cat} />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default MainHero
