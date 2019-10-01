import React from 'react'
import ContentLayout from '../components/contentLayout'

import styled, {css, keyframes} from 'styled-components'

export default function Sample(props){
  
  return(
    <>
      <ContentLayout prefix={props.prefix}/>
      <ContentBox>
        123
      </ContentBox>
    </>
  )
}

const ContentBox = styled.div`
  position:absolute;
  display:flex;
  width:84vw;
  height:100%; 
  background:linear-gradient(301deg, #F6F6F6 0%, #FFFFFF 100%);
  z-index:3;
  top:0;
  left:8vw;
  right:8vw;
  bottom:0;
  box-shadow:0 10px 20px rgba(0,0,0,.3);
  align-items:center;
  justify-content:center;
`