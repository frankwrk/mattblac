/* eslint-disable prettier/prettier */
import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'

const Index = () => (
  <>
    <Layout />
    <Parallax pages={1}>
      <Hero>
        <BigTitle>
          Matt Black <br/> Studio.
        </BigTitle>
        <Subtitle>Coming soon</Subtitle>

          <Inner>
            <Title>Get in<a href="mailto:admin@webwrk.ie"> touch</a></Title>
          </Inner>
      </Hero>
    </Parallax>
  </>
)

export default Index
