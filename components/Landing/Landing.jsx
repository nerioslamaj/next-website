import React from 'react'
import AboutText from '../AboutText/AboutText'
import Shader from '../Shader/Shader'
import { Grid, Container } from '@material-ui/core'
import './Landing.scss'

export const Landing = () => {
  return (
    <Container style={{paddingTop: '320px'}}>
      <Grid container spacing={3} className='Intro-Block'>
        <Grid item xs={8}>
          <h1 className='Name-Surname name'>
            <span>N</span><span>e</span><span>r</span><span>i</span><span>o</span><span>s </span>
            <span>L</span><span>a</span><span>m</span><span>a</span><span>j</span>
          </h1>
          <AboutText />
        </Grid>
        <Grid item xs={4}>
          {/* <Shader dimensions={[320, 320]} /> */}
        </Grid>
      </Grid>
    </Container>
  )
}

export default Landing
