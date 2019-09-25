import React from 'react'
import styled from 'styled-components'
export default function Button(props, {theme, shape, icon, onClick, margin}){
  return(
    <>
    {props.icon ? 
      <IconButton shape={props.shape} theme={props.theme} onClick={props.onClick} margin={props.margin}>
        {props.icon}
        {props.children}
      </IconButton>
    :
      <TextButton shape={props.shape} theme={props.theme} onClick={props.onClick} margin={props.margin}>
        {props.children}
      </TextButton>
    }
    </>
  )
}

const IconButton = styled.button`
  ${props => {
    switch(props.shape){
      case 'circle' : return 'border-radius:50%; width:40px; height:40px; display:flex; align-items:center; justify-content:center;'
      case 'round' : return 'border-radius:100px; min-width:220px; padding: 20px 24px 20px 60px;'
      case 'square' : return  'border-radius:0; padding: 20px 24px 20px 60px;'
      default : return 'border-radius:4px; padding: 20px 24px 20px 60px;'
    }
  }}
  ${props => {
    switch(props.theme){
      case 'dark' : return 'background:#000; color:rgba(255,255,255, 0.8);'
      case 'yellow' : return 'background:#F2B918; color:#322B1B; &:hover{background:#fdca39;} &:focus{background:#fdca39;}'
      case 'ghost' : return 'background:none; color:#fff; border:1px solid #fff; &:hover{background:rgba(255,255,255, 0.9); color:#000;}'
      default : return 'background:#1890ff; color:rgba(255,255,255,0.8);'
    }
  }}
  margin: ${props => props.margin ? props.margin : '0px'};
  box-shadow:0 2px 0 rgba(0,0,0,0.045);
  text-shadow:0 -1px 0 rgba(0,0,0,0.12);
  transition: all .3s;
  cursor:pointer;
  font-weight:600;
  &:hover{
    outline:none;
  }
`

const TextButton = styled.button`
  ${props => {
    switch(props.shape){
      case 'circle' : return 'border-radius:50%;'
      case 'round' : return 'border-radius:100px; min-width:220px;'
      case 'square' : return  'border-radius:0;'
      default : return 'border-radius:4px;'
    }
  }}
  ${props => {
    switch(props.theme){
      case 'dark' : return 'background:#000; color:rgba(255,255,255, 0.8);'
      case 'yellow' : return 'background:#F2B918; color:#322B1B; &:hover{background:#fdca39;} &:focus{background:#fdca39;}'
      case 'ghost' : return 'background:none; color:#fff; border:1px solid #fff; &:hover{background:rgba(255,255,255, 0.9); color:#000;}'
      default : return 'background:#1890ff; color:rgba(255,255,255,0.8);'
    }
  }}
  margin: ${props => props.margin ? props.margin : '0px'};
  font-weight:600;
  padding:20px;
  box-shadow:0 2px 0 rgba(0,0,0,0.045);
  text-shadow:0 -1px 0 rgba(0,0,0,0.12);
  transition: all .3s;
  cursor:pointer;
  &:hover, &:focus{
    outline:none;
  }
`