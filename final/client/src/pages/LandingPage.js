import React from 'react'
import MainHero from "../components/MainHero/MainHero"
import CategoryDisplay from "../components/CategoryDisplay/CategoryDisplay"
import CardDisplay from "../components/CardDisplay/CardDisplay"
import { gql, useQuery } from "@apollo/client"

const ANIMAL_DATA = gql`
{
  animals {
    title
    price
    slug
    img
  }
}
`

function LandingPage() {

    const { data, loading, error } = useQuery(ANIMAL_DATA)

    return (
        <div>
            <MainHero />
            <CategoryDisplay />
            {data && <CardDisplay animals={data.animals}/>}
        </div>
    )
}

export default LandingPage
