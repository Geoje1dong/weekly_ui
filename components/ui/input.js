import React from 'react'
import styled from 'styled-components'

export default function Input(props) {
  return(
    <>
    {props.icon ?
      <Icon margin={props.margin} theme={props.theme} size={props.size}>
        <input type={props.type} name={props.name} placeholder={props.placeholder} value={props.value} onChange={props.onChange} onFocus={props.onFocus} pattern={props.pattern} maxLength={props.maxlength}/>
        <span>
          {props.icon}
        </span>
      </Icon> 
      :
      <BasicInput margin={props.margin} theme={props.theme} size={props.size}>
        <label>{props.label}</label>
        <input type={props.type} name={props.name} placeholder={props.placeholder} value={props.value} onChange={props.onChange} onFocus={props.onFocus} pattern={props.pattern} maxLength={props.maxlength}/>
      </BasicInput>
    }
    </>
  )
}

const Icon  = styled.span`
  width:100%;
  position:relative;
  display:table;
  margin:${props => props.margin ? props.margin : '0'};
  >span{
    position:absolute;
    top:17px;
    left:20px;
    >svg{
      transition: all .5s;
    }
  }
  >input{
    ${props => {
      switch(props.theme){
        case 'dark' : 
          return 'background:rgba(0,0,0,0.4); color:rgba(255,255,255,1); &::placeholder{color:rgba(255,255,255,0.5);};'
        default :
          return 'background:rgba(255,255,255,1); color:#000; &::placeholder{color:rgba(0,0,0,0.5);};'
      }
    }}
    ${props => {
      switch(props.size){
        default : 
          return 'padding:20px 24px 20px 60px; font-size:16px;'
      }
    }}
    border-radius: 4px;
    border:none;
    width:100%;
    transition:all 0.4s;
    box-sizing:border-box;
    font-weight:300;
    &:focus{
      outline:none;
    }
    &:focus, &:hover {
      +span > svg{
        // stroke:rgba(255,255,255,1);
      }
    }
  } 
`

const BasicInput = styled.span`
  width:100%;
  position:relative;
  display:table;
  margin:${props => props.margin ? props.margin : '0'};
  >label{
    padding-bottom:4px;
    font-size:0.9rem;
  }
  >input{
    ${props => {
      switch(props.theme){
        case 'dark' : 
          return 'background:rgba(0,0,0,0.4); color:rgba(255,255,255,1); &::placeholder{color:rgba(255,255,255,0.5);};'
        default :
          return 'background:rgba(255,255,255,1); color:#000; &::placeholder{color:rgba(0,0,0,0.5);};'
      }
    }}
    ${props => {
      switch(props.size){
        case 's' :
          return 'padding: 16px 18px; font-size:14px;'
        default : 
          return 'padding:20px 24px; font-size:16px;'
      }
    }}
    border-radius: 4px;
    border:none;
    width:100%;
    
    transition:all 0.4s;
    box-sizing:border-box;
    font-weight:300;
    &:focus{
      outline:none;
    }
  }
`