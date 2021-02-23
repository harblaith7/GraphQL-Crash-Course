import React from 'react'
import MainHero from "../components/MainHero/MainHero"
import CategoryDisplay from "../components/CategoryDisplay/CategoryDisplay"
import CardDisplay from "../components/CardDisplay/CardDisplay"

function LandingPage() {

    return (
        <div>
            <MainHero />
            <CategoryDisplay />
            <CardDisplay animals={[]}/>
        </div>
    )
}

export default LandingPage
