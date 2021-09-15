import React, { Component } from 'react';
import { Container } from '@material-ui/core';
import ChampionsRouterComponent from './ChampionsRouterComponent';
class About extends Component {
  
  render(){
    return (
      <Container>
          <div style={{display:"flex",alignContent:"flex-end"}}>
            <div style={{border:"1px solid black",width:"80%",height:"100%"}}>
              <ChampionsRouterComponent />
             
            </div>
            <div style={{width:"20%"}}>
              검색한 챔피언 stack
            </div>
          </div>
      </Container>
    )
  }
}

export default About