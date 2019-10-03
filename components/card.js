import React from 'react'
import styled, {css, keyframes} from 'styled-components'


function getPrintNumber(number){
  let nextNumber = number
  let maxLength = 16;

  while (nextNumber.length < maxLength) {
    nextNumber += '•';
  }

  for (let i = 1; i < (maxLength / 4); i++) {
    const space_index = (i * 4) + (i - 1);
    nextNumber = `${nextNumber.slice(0, space_index)} ${nextNumber.slice(space_index)}`;
  }

  return nextNumber;
}

function getPrintExpiry(expiry){

  let month = '';
  let year = '';

  if (expiry.includes('/')) {
    [month, year] = expiry.split('/');
  }
  else if (expiry.length) {
    month = expiry.substr(0, 2);
    year = expiry.substr(2, 6);
  }

  while (month.length < 2) {
    month += '•';
  }

  while (year.length < 2) {
    year += '•';
  }

  return `${month}/${year}`;
}

function getPrintSpace(value, lengthType){
  while(value.length < lengthType){
    value += '•';
  }
  return value
}

function getPrintCompany(comapny){
  if(comapny === 'bc'){
    return <img src="https://i.ibb.co/8g8cfNG/bc.png" alt="bc" border="0"></img>
  }
  else if(comapny === 'hyundai'){
    return <img src="https://i.ibb.co/XJS4PRS/hyundai.png" alt="hyundai" border="0"></img>
  }
  else if(comapny === 'kb'){
    return <img src="https://i.ibb.co/KxTKkpZ/kb.png" alt="kb" border="0"></img>
  }
  else if(comapny === 'lottecard'){
    return <img src="https://i.ibb.co/DL1SLPn/lottecard.png" alt="lottecard" border="0"></img>
  }
  else if(comapny === 'samsung'){
    return <img src="https://i.ibb.co/t3WhvdM/samsung.png" alt="samsung" border="0"></img>
  }
  else if(comapny === 'shinhan'){
    return <img src="https://i.ibb.co/PtyVMcS/shinhan.png" alt="shinhan" border="0"></img>
  }
}

export default function Card({number, focus, name, cvc, expiry, password, cardCompany}){

  const cardNumber = getPrintNumber(number);
  const cardExpiry = getPrintExpiry(expiry);
  const cardCvc = getPrintSpace(cvc, 3);
  const cardPassword = getPrintSpace(password, 2);
  const Company = getPrintCompany(cardCompany)

  return(
    <>
    <CardStyle focus={focus}>
      <CardFront focus={focus}>
        <CardBackground company={cardCompany}/>
        <CardCompany focus={focus} company={cardCompany}>
          {Company}
        </CardCompany>
        <Npay>
          <img src="https://i.ibb.co/gTxQVLQ/npay.png" alt="npay" border="0"></img>
        </Npay>
        <CardNumber focus={focus}>
          {cardNumber}
        </CardNumber>
        <CardName focus={focus}>
          {name ? name : 'Your Name Here'}
        </CardName>
        <Cardexpiry focus={focus}>
          {cardExpiry}
        </Cardexpiry>
      </CardFront>
      <CardBack focus={focus}>
        <CardBackground company={cardCompany}/>
        <Magnetic />
        <Bar />
        <Cardcvc focus={focus}>
          <span>cvc</span>
          <p>{cardCvc}</p>
        </Cardcvc>
        <CardPassword focus={focus}>
          <span>카드 비밀번호 앞 두자리</span>
          <p>{cardPassword}••</p>
        </CardPassword>
      </CardBack>
    </CardStyle>
    </>
  )
}

const CardBackground = styled.div`
    ${props => {
      switch(props.company){
        case('hyundai') : return 'background:linear-gradient(135deg, rgb(30, 136, 229) 0%, rgb(42, 159, 253) 43%, rgb(30, 136, 229) 100%);'
        case('kb') : return 'background:linear-gradient(to right,#FCDF00,#FBBA00);'
        case('bc') : return 'background:linear-gradient(to right,#ef4651,#e0367d);'
        case('samsung') : return 'background:linear-gradient(to right,#0080FF,#00C2FF);'
        case('lottecard') : return 'background:linear-gradient(to right,#6D45C2,#F134B7);'
        case('shinhan') : return 'background:linear-gradient(to right, #0096d6, #5b3eb3);'
        default : return ''
      }
    }}  
  position:absolute;
  left:${props => props.company ? '-22%' : '-170%'};
  top:-60%;
  transform:rotate(25deg);
  transition: all 0.5s ease-out;
  height:200%;
  width:150%;
  
`

const Npay = styled.div`
  position:absolute;
  top:10%;
  left:10%;
  filter:drop-shadow(rgba(0, 0, 0, 0.23) 0.8px -0.7px 4px);
  transform:translateZ(30px);
`

const Cardexpiry = styled.div`
  opacity:${props => props.focus === 'cardExpiry' ? '1' : '0.5'};
  position:absolute;
  right:10%;
  bottom:10%;
  transform:translateZ(40px);
  text-shadow:rgba(0, 0, 0, 0.23) 0.8px -0.7px 4px;
`

const CardCompany = styled.div`
  transform:translateZ(40px);
  text-shadow:rgba(0, 0, 0, 0.23) 0.8px -0.7px 4px;
  position:absolute;
  top:10%;
  right:${props => props.company === 'shinhan' ? '5%' : '10%'};
  filter:${props => props.company === 'kb' ? 'none' : 'drop-shadow(rgba(0, 0, 0, 0.23) 0.8px -0.7px 4px)'};
  >img{
    height:34px;
    width:auto;
  }
`

const Cardcvc = styled.div`
  position:absolute;
  top:48%;
  left:70%;
  height:30px;
  opacity:${props => props.focus === 'cardCvc' ? '1' : '0.5'};
  transform:translateZ(40px);
  text-shadow:rgba(0, 0, 0, 0.23) 0.8px -0.7px 4px;
  display:flex;
  align-items:center;
  >span{
    font-weight:200;
    font-size:11px;
    color:rgba(255,255,255,0.6);
    margin-right:4px;
    line-height:1em;
  }
  >p{
    margin:0;
    padding:0;
    line-height:1em;
  }
`

const CardPassword = styled.div`
  opacity:${props => props.focus === 'cardPassword' ? '1' : '0.5'};
  transform:translateZ(40px);
  text-shadow:rgba(0, 0, 0, 0.23) 0.8px -0.7px 4px;
  display:flex;
  align-items:center;
  position:absolute;
  top:67%;
  left:5%;
  >span{
    font-weight:200;
    font-size:11px;
    color:rgba(255,255,255,0.6);
    margin-right:4px;
    line-height:1em;
  }
  >p{
    margin:0;
    padding:0;
    line-height:1em;
  }
`

const CardName = styled.div`
  opacity:${props => props.focus === 'cardName' ? '1' : '0.5'};
  position:absolute;
  bottom:10%;
  left:10%;
  transform:translateZ(40px);
  text-shadow:rgba(0, 0, 0, 0.23) 0.8px -0.7px 4px;
  width:190px;
  text-overflow:ellipsis;
  overflow:hidden;
`

const CardNumber = styled.div`
  transform:translateZ(40px);
  text-shadow:rgba(0, 0, 0, 0.23) 0.8px -0.7px 4px;
  position:absolute;
  left:0;
  right:0;
  text-align:center;
  top:45%;
  letter-spacing: 0.06em;
  text-size-adjust:100%;
  
  font-size:20px;
  opacity:${props => props.focus === 'cardNumber' ? '1' : '0.5'};
`

const CardFront = styled.div`
  background:linear-gradient(301deg, #828282 0%, #cecccc 100%);
  position:absolute;
  width:100%;
  height:100%;
  z-index:1;
  backface-visibility:hidden;
  border-radius:24px;
  overflow:hidden;
`

const CardBack = styled.div`
  background:linear-gradient(301deg, #828282 0%, #cecccc 100%);
  position:absolute;
  width:100%;
  height:100%;
  transform:rotateY(180deg);
  border-radius:24px;
  overflow:hidden;
`

const Magnetic = styled.div`
  position:absolute;
  top:10%;
  width:100%;
  height:50px;
  background:rgba(0,0,0,0.8);
`

const Bar = styled.div`
  position:absolute;
  width:60%;
  height:30px;
  top:48%;
  background:rgba(255,255,255,0.8);
  left:5%;
`

const CardStyle = styled.div`
  font-family:Consolas, Courier, monospace;
  font-wegiht:bold;
  position:relative;
  font-size:16px;
  width:320px;
  height:200px;
  box-shadow:0px 4px 20px 0px rgba(0,0,0,0.2);
  margin:0 auto;
  border-radius:24px;
  box-sizing:border-box;
  color:#fff;
  transform-style:preserve-3d;
  perspective:1000;
  transition:all 0.4s linear;
  transform:${props => props.focus === 'cardCvc' || props.focus === 'cardPassword' ? 'rotateY(180deg)' : 'rotateY(0deg);'}
`