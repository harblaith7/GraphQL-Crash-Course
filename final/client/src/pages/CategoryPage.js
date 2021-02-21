import React from 'react'
import { gql, useQuery } from "@apollo/client"
import { useParams } from "react-router-dom"
import { Container } from 'react-bootstrap'
import CardDisplay from '../components/CardDisplay/CardDisplay'

const FETCH_CATEGORY_ANIMALS =  gql`
query($slug: String!){
  category(slug: $slug) {
    id
    category
    slug
    animals {
      id
      title
      price
      img
    }
  }
}
`

function CategoryPage() {
    
    const { slug } = useParams()
    const { data, loading, error } = useQuery(FETCH_CATEGORY_ANIMALS, {
        variables: {
            slug
        }
    })

    if(loading || error ) return <div>loading...</div>;

    return (
        <div className="py-5">
            <Container>
                <h1 className="text-capitalize">
                    {data.category.category}
                    <CardDisplay 
                        animals={data.category.animals}
                    />
                </h1>
            </Container>
        </div>
    )
}

export default CategoryPage
