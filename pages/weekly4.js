import React from 'react'
import ContentLayout from '../components/contentLayout'

import styled, {css, keyframes} from 'styled-components'

const buttonsData = [
  {
    text : 'c',
    theme : 'gray',
    grid : '1',
    value: 'c'
  },
  {
    text : 'ce',
    theme : 'gray',
    grid : '1',
    value: 'ce'
  },
  {
    text : '%',
    theme : 'gray',
    grid : '1',
    value: '%'
  },
  {
    text : '×',
    theme : 'gray',
    grid : '1',
    value : '*'
  },
  {
    text : '7',
    theme : 'white',
    grid : '1',
    value:'7'
  },
  {
    text : '8',
    theme : 'white',
    grid : '1',
    value : '8'
  },
  {
    text : '9',
    theme : 'white',
    grid : '1',
    value:'9'
  },
  {
    text : '÷',
    theme : 'gray',
    grid : '1',
    value: '/',
  },
  {
    text : '4',
    theme : 'white',
    grid : '1',
    value:'4'
  },
  {
    text : '5',
    theme : 'white',
    grid : '1',
    value : '5'
  },
  {
    text : '6',
    theme : 'white',
    grid : '1',
    value:'6'
  },
  {
    text : '－',
    theme : 'gray',
    grid : '1',
    value: '-',
  },
  {
    text : '1',
    theme : 'white',
    grid : '1',
    value:'1'
  },
  {
    text : '2',
    theme : 'white',
    grid : '1',
    value : '2'
  },
  {
    text : '3',
    theme : 'white',
    grid : '1',
    value:'3'
  },
  {
    text : '＋',
    theme : 'gray',
    grid : '1',
    value: '+',
  },
  {
    text : '0',
    theme : 'white',
    grid : '1',
    value : '0'
  },
  {
    text : '.',
    theme : 'white',
    grid : '1',
    value:'.'
  },
  {
    text : '=',
    theme : 'orange',
    grid : '2',
    value: '=',
  },
]

export default function Weekly4(props){
  const [number, setNumber] = React.useState('')
  const handleClick = e => {
    const value = e.currentTarget.value;
    console.log(number);
    if(value === '='){
      try{
        setNumber(eval(number));
      }catch(e){
        setNumber('ERROR');
      }
    }
    else if(value === 'c'){
      setNumber('');
    }
    else if(value === 'ce'){
      const newNumber = number.slice(0, -1);
      setNumber(newNumber);
    }
    else if(value === '%'){
      try{
        setNumber(eval(`${number} * 1 /100`));
      }catch(e){
        setNumber('ERROR')  
      }
    }
    else{
      setNumber(number + value);
    }
    

  }
  console.log(number);
  return(
    <>
      <ContentLayout prefix={props.prefix}/>
      <ContentBox>
        <CalculatorCase>
        <Calculator>
          <Calc>
            <Screen length={number.length}>
              <p>{number}</p>
            </Screen>
            <Calcbutton>
              <div>
              {buttonsData.map((button, index) => (
                <ButtonStyle key={index} type='button' value={button.value} theme={button.theme} grid={button.grid} onClick={handleClick}><div>{button.text}</div></ButtonStyle>
              ))}
              </div>
            </Calcbutton>
          </Calc>
        </Calculator>
        </CalculatorCase>
        <CalculatorBg />
      </ContentBox>
    </>
  )
}

const CalculatorBg = styled.div`
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  z-index:-1;
  filter:blur(17px);
  background-image:url('https://images.unsplash.com/photo-1544761634-dc512f2238a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1800&q=80');
`

const ButtonStyle = styled.button`
  margin:2px;
  width:${props => props.grid === '2' ? '136px' : '66px'};
  height:66px;
  ${props => {
    switch(props.theme){
      case 'gray': return 'background:linear-gradient(90deg, #191B16 0%, #6B7069 100%); >div{background:linear-gradient(90deg, #777D73 0%, #3A3F38 100%); color:#D8DCE0;}'
      case 'orange' : return 'background:linear-gradient(270deg, #E48F2D 0%, #884504 100%); >div{background:linear-gradient(270deg, #B54C0A 0%, #EA8C41 100%); color:#D8DCE0;}'
      default : return 'background:linear-gradient(270deg, #FFFFF5 0%, #CCC6B2 100%); >div{background: linear-gradient(270deg, #FFFFF5 0%, #C8C3AD 0.01%, #FFFEF7 100%); color:#5c5c5c;}'
    }
  }}
  &:active{
    box-shadow:inset rgba(0,0,0,0.5) 0px 2px 8px;
    outline:none;
    >div{
      box-shadow:inset rgba(0,0,0,0.2) 0px 2px 8px;
    }
  }
  &:focus{
    outline:none;
  }
  >div{
    width:${props => props.grid === '2' ? '130px' : '60px'};
    height:60px;
    // box-shadow:0 5px 5px rgba(0, 0, 0, 0.75), inset 0 0 3px rgba(0, 0, 0, 0.3), inset 0 1px 3px rgba(255, 255, 255, 0.3);
    margin: 3px;
    line-height: 64px;
    border-radius:12px;
    // color:#5c5c5c;
    font-weight:bold;
    font-size:30px;
  }
`

const Logo = styled.div`
  position:absolute;
  top:87px;
  right:0;
  color:#fff;
  font-size:0.8rem;
`

const Calcbutton = styled.div`
  position:absolute;
  top:100px;
  left:0;
  right:0;
  bottom:0;
  background: linear-gradient(304.68deg, #79796D 0%, #E4E6DA 100%);
  padding:10px;
  border-radius:8px;
  >div:first-child{
    background:#151314;
  }
  
`

const Calc = styled.div`
  width:100%;
  height:100%;
  position:relative;
`

const Screen = styled.div`
  position:absolute;
  top:0;
  left:0;
  right:0;
  width:100%;
  height:80px;
  background:#050505;
  >p{
    margin:0 auto;
    width:288px;
    text-align:right;
    padding:0;
    color:#B85709;
    line-height:80px;
    font-size:${props => props.length > 12 ? '22px' : '40px;'}
  }
`

const CalculatorCase = styled.div`
  border-radius:12px;
  padding:10px;
  background:linear-gradient(90deg, #010005 0%, #151C22 100%);
`

const Calculator = styled.div`
  
  width:300px;
  height:470px;
  background:linear-gradient(304.68deg, #BDBEAC 0%, #BEBFAD 100%);
  border-radius:12px;
  overflow:hidden;
  padding:20px;
`

const ContentBox = styled.div`
  position:absolute;
  display:flex;
  width:84vw;
  height:100%; 
  
  z-index:3;
  top:0;
  left:8vw;
  right:8vw;
  bottom:0;
  box-shadow:0 10px 20px rgba(0,0,0,.3);
  align-items:center;
  justify-content:center;
  overflow:hidden;
`