import React from 'react'
import Card from '../Card/Card'
import {Container} from "react-bootstrap"
import animal from "../../assets/images"

import { gql, useQuery } from "@apollo/client"

const ANIMAL_DATA = gql`
{
  animals {
    title
    price
    img
  }
}
`

const animals = [
    {
        img: animal.lion,
        title: "7-year Male Lion with Large Well Kept Main with a Beautiful Yellow/Brownish Color",
        price: "23,322"
    },
    {
        img: animal.cham,
        title: "Beautiful Highly Specialized Clade Lizard with 202 Different Color Combinations",
        price: "1,522"
    },
    {
        img: animal.dolphin,
        title: "Fast and Swift Aquatic Dolphin with Great Accordatic Skills in the Air",
        price: "101,432"
    },
    {
        img: animal.gorilla,
        title: "Black Haired Gorilla with Broad Chest and Shoulder. Would be an Excellent Spot at the Gym",
        price: "47,775"
    },
    {
        img: animal.horse,
        title: "17-year Female Horse with a Luxury Brown Exterior and a Beautiful Red Interior",
        price: "13,432"
    },
    {
        img: animal.kang,
        title: "Large Kangaroo with Muscular Leg and Tail and Pointly Teeth and Ears",
        price: "42,453"
    },
    {
        img: animal.ele,
        title: "Grey Male 17 year Elephant with 12 Meter Truck and 5 Meter Tusk",
        price: "101,432"
    },
    {
        img: animal.donkey,
        title: "This is the Voice Actor from the Dockey for Shrek.",
        price: "179,731"
    }
]

function CardDisplay() {

    const { data, loading, error } = useQuery(ANIMAL_DATA)

    console.log(data)
    if(loading) return <div>loading...</div>

    return (
        <div className="card-display">
            <Container className="card-display-container">
                {data.animals.map(animal => {
                    return <Card animal={animal} />
                })}
            </Container>
        </div>
    )
}

export default CardDisplay
