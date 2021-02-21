import React, { useState } from 'react'
import "./CategoryDisplay.css"
import { Container } from 'react-bootstrap'
import animals from '../../assets/images'
import { gql, useQuery } from "@apollo/client"
import { Link } from "react-router-dom"

const FETCH_CATEGORY_CARDS = gql`
{
    categories {
        id
        category
        img
        slug
    }
}
`

function CategoryDisplay() {

    const { data, error, loading } = useQuery(FETCH_CATEGORY_CARDS)

    if(error || loading) return <div>loading or error...</div>

    return (
        <div className="CategoryDisplay">
            <Container className="CategoryDisplay-container">
                {data.categories.map(category => {
                    return (
                        <Link to={`/products/${category.slug}`} className="CategoryDisplay-card-container">
                            <div className="CategoryDisplay-card">
                                <img src={animals[category.img]} /> 
                            </div>
                            <h3>{category.category}</h3>
                        </Link>
                    )
                })}
            </Container>
        </div>
    )
}

export default CategoryDisplay
