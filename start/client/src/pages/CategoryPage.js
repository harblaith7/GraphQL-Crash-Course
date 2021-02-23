import React from 'react'
import { useParams } from "react-router-dom"
import { Container } from 'react-bootstrap'
import CardDisplay from '../components/CardDisplay/CardDisplay'

function CategoryPage() {
    
    const { slug } = useParams()

    return (
        <div className="py-5">
            <Container>
                <h1 className="text-capitalize">
                    {}
                    <CardDisplay 
                        animals={[]}
                    />
                </h1>
            </Container>
        </div>
    )
}

export default CategoryPage
