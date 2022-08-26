import React from 'react'
import { foods } from './data'
import styled from 'styled-components'
import Card from './Card'

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
function Food() {
  foods.map((eachfood) => {
    return (
      <>
        <Section>
          <Card key={eachfood.id} eachFood={eachfood}></Card>
        </Section>
      </>
    )
  })
}

export default Food
