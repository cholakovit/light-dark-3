import { Grid } from '@mui/material'
import data from '../data/data.json'
import DescriptionCard from './DescriptionCard'
import Company from './Company'
import { Container, CardContainer } from '../Helper/styles'
import { useState, useEffect } from 'react'

const Home = () => {
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(true)
        }, 500)
    
      }, [isLoading])

    return (
        <CardContainer>
            <Container container>
                    <DescriptionCard />
                    {data.companies.map((company, index) =>
                        <Company company={company} isLoading={isLoading} key={index} />
                    )}
            </Container>
        </CardContainer>
    )
}

export default Home