import React from 'react'
import styled from 'styled-components'

export default function Checkbox({label, theme}){
  return(
    <CheckBox theme={theme}>
      <span>
        <input type='checkbox'/>
        <span />
      </span>
      <span>{label}</span>
    </CheckBox>
  )
}

const CheckBox = styled.label`
  margin:0;
  padding:0;
  color:rgba(0,0,0,0.65);
  font-size:1rem;
  line-height:1rem;
  cursor:pointer;
  >span:first-child{
    display:inline-block;
    position:relative;
    vertical-align:middle;
    >span{
      display:inline-block;
      width:16px;
      height:16px;
      top:0;
      left:0;
      position:relative;
      border:${props => {
        switch(props.theme){
          case 'dark' : return '1px solid rgba(0,0,0,0.4)';
          default : return '1px solid #d9d9d9';
        }
      }};
      transition:all .3s;
      border-radius:2px;
      &:after{
        position: absolute;
        top: 50%;
        left: 21%;
        display: table;
        width: 5.71428571px;
        height: 9.14285714px;
        border: 2px solid #fff;
        border-top: 0;
        border-left: 0;
        transform: rotate(45deg) scale(0) translate(-50%, -50%);
        opacity: 0;
        transition: all .1s cubic-bezier(.71, -0.46, .88, .6),opacity .1s;
        content: ' ';
      }
    }
    >input{
      position:absolute;
      top:0;
      right:0;
      bottom:0;
      left:0;
      opacity:0;
      width:0px;
      height:0px;
      &[type='checkbox']{
        box-sizing:border-box;
        padding:0;
      }
      &:checked + span{
        background:${props => {
          switch(props.theme){
            case 'dark' : return 'rgba(0,0,0,0.4)';
            default : return '#1890ff;';
          }
        }};
        border-color:${props => {
          switch(props.theme){
            case 'dark' : return 'rgba(0,0,0,0.4)';
            default : return '#1890ff;';
          }
        }};
        &:after{
          position: absolute;
          display: table;
          border: ${props => {
            switch(props.theme){
              case 'dark' : return '2px solid #fff';
              default : return '2px solid #fff;';
            }
          }};
          border-top: 0;
          border-left: 0;
          -webkit-transform: rotate(45deg) scale(1) translate(-50%, -50%);
          -ms-transform: rotate(45deg) scale(1) translate(-50%, -50%);
          transform: rotate(45deg) scale(1) translate(-50%, -50%);
          opacity: 1;
          -webkit-transition: all .2s cubic-bezier(.12, .4, .29, 1.46) .1s;
          transition: all .2s cubic-bezier(.12, .4, .29, 1.46) .1s;
          content: ' ';
        }
      }
    }
  }
  >span:last-child{
    font-weight:400;
    padding:0 8px;
    color:rgba(255,255,255,1);
  }
`