import React from 'react'
import ContentLayout from '../components/contentLayout'

import styled, {css, keyframes} from 'styled-components'
import { CreditCard } from 'react-feather'

import Card from '../components/card'
import Input from '../components/ui/input'
import Button from '../components/ui/button'

function clearNumber(value){
  return value.replace(/\D+/g, "");
}

function getPrintCompany(number){
  const companyNumber = number.slice(0, 2);
  let cardCompany = '';
  if(companyNumber === '55'){
    cardCompany = 'hyundai'
  }else if(companyNumber === '64'){
    cardCompany = 'bc'
  }else if(companyNumber === '44'){
    cardCompany = 'shinhan'
  }else if(companyNumber === '35'){
    cardCompany = 'kb'
  }else if(companyNumber === '37'){
    cardCompany = 'lottecard'
  }else if(companyNumber === '94'){
    cardCompany = 'samsung'
  }

  return cardCompany;
}

export default function Weekly2(props){
  const [cardNumber, setCardNumber] = React.useState('');
  const [cardName, setCardName] = React.useState('');
  const [cardCvc, setCardCvc] = React.useState('');
  const [cardExpiry, setCardExpiry] = React.useState('');
  const [cardFocus, setCardFocus] = React.useState('');
  const [cardPassword, setCardPassword] = React.useState('');
  const [buttonName, setButtonName] = React.useState('Number Random');
  const cardCompany = getPrintCompany(cardNumber);

  const handleClick = e => {
    e.preventDefault();
    if(cardNumber){
      setButtonName('Number Random')
      setCardNumber('');  
    }else{
      setButtonName('Number Reset')
      const cardNumber = ['5523123456780000', '6451123456780000', '4473123456780000', '3569123456780000', '3762123456780000', '9410123456780000'];
      const random = Math.floor(Math.random()*5)+1;
      setCardNumber(cardNumber[random]);
    }

  }

  const handleInputFocus = e => {
    setCardFocus(e.target.name);
  }

  const handleInputChange = e => {
    if(e.target.name=== 'cardNumber'){
      const newValue = clearNumber(e.target.value);
      setCardNumber(newValue);
    }else if(e.target.name=== 'cardName'){
      setCardName(e.target.value.toUpperCase());
    }else if(e.target.name=== 'cardExpiry'){
      let newValue = clearNumber(e.target.value);
      if(newValue.length >=3 ){
        newValue = `${newValue.slice(0, 2)}/${newValue.slice(2,4)}`;
      }
      setCardExpiry(newValue);
    }else if(e.target.name=== 'cardCvc'){
      const newValue = clearNumber(e.target.value);
      setCardCvc(newValue);
    }else if(e.target.name=== 'cardPassword'){
      const newValue = clearNumber(e.target.value);
      setCardPassword(newValue);
    }
  }

  return(
    <>
      <ContentLayout prefix={props.prefix}/>
      <ContentBox>
        <Box>
          <div>
            <CreditCard color='#fff' size={28}/>
          </div>
          <div>
            <Card 
              number={cardNumber}
              name={cardName}
              cvc={cardCvc}
              expiry={cardExpiry}
              focus={cardFocus}
              password={cardPassword}
              cardCompany={cardCompany}
            />            
            <Form>
              <Grid3>
                <RandomBox>
                  <Button theme="dark" size='xs' onClick={handleClick}>{buttonName}</Button>
                  <em>55., 44., 64., 35., 37., 94.</em>
                  <Input
                    theme='dark'
                    type='tel'
                    name='cardNumber'
                    value={cardNumber}
                    placeholder="Card Number"
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    maxlength="16"
                    label='Card Number'
                    margin='0 0 24px 0'
                  />
                  <CardCompany company={cardCompany}>
                    { cardCompany &&
                      <img src={`static/img/card/${cardCompany}.png`} alt={`${cardCompany} logo`}/>
                    }
                  </CardCompany>
                </RandomBox>
                
                <Input 
                  theme='dark'
                  type='text'
                  name='cardName'
                  value={cardName}
                  placeholder="Card Name"
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  label='Card Name'
                  margin='0 0 24px 0'
                />
              </Grid3>
              <Grid3>
                <Input 
                  theme='dark'
                  type='tel'
                  name='cardExpiry' 
                  value={cardExpiry}
                  placeholder="Month/Year"
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  maxlength="5"
                  label='Expiration (mm/yy)'
                />
                <Input 
                  theme='dark'
                  type='tel'
                  name='cardCvc' 
                  value={cardCvc}
                  placeholder="CVC"
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  maxlength="3"
                  label='cvc'
                />
                <Input 
                  theme='dark'
                  type='tel' 
                  name='cardPassword'
                  value={cardPassword}
                  placeholder="앞 두자리"
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  maxlength="2"
                  label='패스워드'
                />
              </Grid3>
            </Form>
          </div>
        </Box>
      </ContentBox>
    </>
  )
}

const CardCompany = styled.div`
  position:absolute;
  bottom:35px;
  right:10px;
  >img{
    height:30px;
  }
`

const RandomBox = styled.span`
  position:relative;
  width:100%;
  >button{
    position:absolute;
    right:10px;
    top:-4px;
    z-index:2;
  }
  >em{
    font-size:0.7em;
    position:absolute;
    right:106px;
    top:3px;
    opacity:0.8;
  }
`

const Grid3 = styled.div`
  display:flex;
  margin:0 -8px;
  >span{
    padding:0 8px;
  }
`

const Form = styled.form`
  margin-top:70px;
`

const Box = styled.div`
  position:relative;
  display:flex;
  width: 758px;
  height: 586px;
  border-radius: 24px;
  box-shadow:0 0 8px rgba(0,0,0,.6);
  overflow:hidden;
  >div:first-child{
    width:10%;
    display:flex;
    justify-content:center;
    background:#19212E;
    >svg{
      margin-top:40px;
    }
  }
  >div:last-child{
    width:90%;
    background:#fff;
    padding:40px;
    >div{
      margin-top:40px;
    }
  }
`

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