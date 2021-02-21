import React from 'react'
import "./MainHero.css"
import animals from "../../assets/images"
import {Container} from "reactstrap"
import {gql, useQuery} from "@apollo/client"

const FETCH_CARDS = gql`
{
  cards {
    id
    title
    img
    msg
  }
}
`

function MainHero() {

    const { data, loading, error } = useQuery(FETCH_CARDS)

    if(loading || error ) return <div>Loading...</div>

    return (
        <div className="MainHero">
            <Container>
                    <div className="header-container">
                        <h2>Find your <br/> new four-legged <br/> best friend</h2>
                        <img src={animals.rhino} />
                    </div>
                    <div className="cards-container">
                        {data.cards.map(card => {
                            return (
                                <div className="card">
                                    <h3>{card.title}</h3>
                                    <img src={animals[card.img]} style={{width: "100%"}}/>
                                </div>
                            )
                        })}
                    </div>
            </Container>
        </div>
    )
}

export default MainHero
