import React from 'react'
import ContentLayout from '../components/contentLayout'

import styled, {css, keyframes} from 'styled-components'
import { Lock, Mail, Facebook, GitHub, Linkedin, User } from 'react-feather'

import Input from '../components/ui/input'
import Checkbox from '../components/ui/checkbox'
import Button from '../components/ui/button'

export default function Weekly1(props){
  const [change, setChange] = React.useState(false);
  const [animation, setAnimation] = React.useState('ready');
  const [dataWidth, setDataWidth] = React.useState();
  const [infomationWidth, setInfomationWidth] = React.useState();

  const contentWidth = React.useRef();

  const getChangeTimeout = () => {
    setTimeout(() => {
      setChange(prev => !prev);
    }, 200)
  }

  const onChang = React.useCallback(() => {
    const contentWidth1 = contentWidth.current.clientWidth;
    const dataWidthSize = contentWidth1 * 66 / 100 - 1;
    const widthSize2 = contentWidth1 * 34 / 100;
    setDataWidth(dataWidthSize);
    setInfomationWidth(widthSize2);
    if(animation === 'ready'){
      setAnimation('in');
    }else if(animation === 'in'){
      setAnimation('out');
    }else if(animation === 'out'){
      setAnimation('in');
    }
    
    getChangeTimeout();
  }, [change, dataWidth, infomationWidth])

  return(
    <>
      <ContentLayout prefix={props.prefix}/>
      <ContentBox>
        <SignUpBox ref={contentWidth}>
          <DataBox animation={animation} change={change} infomationWidth={infomationWidth}>
            {change ?
              <div>
                <h1>Create Account</h1>
                <LoginIcon>
                  <Button icon={<Facebook color='#fff' size={18} />} theme='ghost' shape='circle'/>
                  <Button icon={<Linkedin color='#fff' size={18} />} theme='ghost' shape='circle'/>
                  <Button icon={<GitHub color='#fff' size={18} />} theme='ghost' shape='circle'/>
                </LoginIcon>
                <P>or use your email for create account</P>
                <Input 
                  type="text" 
                  icon={<User color='rgba(255,255,255,0.5)' size={24}/>}
                  placeholder="Name"
                  theme='dark'
                  // value="123"
                />
                <Input 
                  type="text" 
                  icon={<Mail color='rgba(255,255,255,0.5)' size={24}/>}
                  placeholder="Email"
                  theme='dark'
                  // value="123"
                />
                <Input 
                  type="password" 
                  icon={<Lock color='rgba(255,255,255,0.5)' size={24}/>}
                  placeholder="Password"
                  theme='dark'
                  // value="123"
                />
                <TwoBox>
                  <Checkbox label='Remember me' theme='dark'/>
                  <p>Forgot Password?</p>
                </TwoBox>
                <Button theme="yellow" shape='round'>Sign In</Button>
              </div>
              : 
              <div>
                <h1>Sign in to Account</h1>
                <LoginIcon>
                  <Button icon={<Facebook color='#fff' size={18} />} theme='ghost' shape='circle'/>
                  <Button icon={<Linkedin color='#fff' size={18} />} theme='ghost' shape='circle'/>
                  <Button icon={<GitHub color='#fff' size={18} />} theme='ghost' shape='circle'/>
                </LoginIcon>
                <P>or use your email account</P>
                <Input 
                  type="text" 
                  icon={<Mail color='rgba(255,255,255,0.5)' size={24}/>}
                  placeholder="Email"
                  theme='dark'
                  // value="123"
                />
                <Input 
                  type="password" 
                  icon={<Lock color='rgba(255,255,255,0.5)' size={24}/>}
                  placeholder="Password"
                  theme='dark'
                  // value="123"
                />
                <TwoBox>
                  <Checkbox label='Remember me' theme='dark'/>
                  <p>Forgot Password?</p>
                </TwoBox>
                <Button theme="yellow" shape='round'>Sign In</Button>
              </div>
            }
          </DataBox>
          <InfomationBox animation={animation} change={change} dataWidth={dataWidth}>
            {change ? 
              <InfomationContent>
                <h1>Hello, Drinkerz</h1>
                <p>if you already have an accountsign <br />in We've missed you!</p>
                <Button onClick={onChang} theme="ghost" shape='round' margin='30px 0 0'>Sign In</Button>
              </InfomationContent>
            : 
              <InfomationContent>
                <h1>Hello, Drinkerz</h1>
                <p>fill up personal infomation and start<br />beer tour with us</p>
                <Button onClick={onChang} theme="ghost" shape='round' margin='30px 0 0'>Sign Up</Button>
              </InfomationContent>
            }
            
          </InfomationBox>
          <BeerImg>
            <img src="https://images.unsplash.com/photo-1513189737554-b1bbd839b9a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=100" />
          </BeerImg>
        </SignUpBox>
      </ContentBox>
    </>
  )
}

const InfomationContent = styled.div`
  position:relative;
  z-index:2;
  text-align:center;
  color:rgba(255,255,255,0.8);
  >h1{
    color:#fff;
  }
  >button{
    &:hover{
      background:#F2B918 !important;
      border-color:#F2B918 !important;
    }
    
  }
`

const BeerImg = styled.div`
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  width:100%;
  height:100%;
  background: linear-gradient(0deg, rgba(33, 33, 33, 0.25), rgba(33, 33, 33, 0.25));
  overflow:hidden;
  background-size: cover;
  z-index:-1;
  >img{
    position:relative; 
  }
  &:after{
    position:absolute;
    content:'';
    top:0;
    left:0;
    bottom:0;
    right:0;
    // background:rgba(28, 28, 28, 0.7);
  }
`

const P = styled.p`
  margin: 30px 0 20px;
`

const LoginIcon = styled.div`
  display:flex;
  justify-content:center;
  >p{display:block;}
  >button{
    margin: 0 10px;
    transition: all .3s;
    >svg{
      fill:#fff;
    }
    &:hover{
      >svg{
        fill:#1c1c1c;
        stroke:#1c1c1c;
      }
    }
  }
`

const TwoBox = styled.div`
  display:flex;
  margin:2rem 0;
  >p{

    margin:0 0 0 auto;
  }
`

const fadeInOutRight = keyframes`
  0%{
   opacity:1;
   transform:translateX(0px);
  }
  50%{
    opacity:0;
    transform:translateX(100px);
  }
  100%{
    opacity:1;
    transform:translateX(0px);
  }
`

const fadeInOutLeft = keyframes`
  0%{
    opacity:1;
    transform:translateX(0px);
  }
  50%{
    opacity:0;
    transform:translateX(-100px);
  }
  100%{
    opacity:1;
    transform:translateX(0px);
  }
`
// ${props => props.animation &&`
//     animation: ${fadeInOut} 2s 1s infinite linear alternate;
//     `}

const DataBox = styled.div`
  ${props => {
    if(props.animation === 'in'){
      return css `
        transform:translateX(${props.infomationWidth}px);
        >div{
          animation:${fadeInOutLeft} 0.4s linear;
        }
      `
    }else if(props.animation === 'out'){
      return css `
        transform:translateX(0%);
        >div{
          animation:${fadeInOutRight} 0.4s linear;
        }
      `
    }
  }}
  transition:all 0.8s;
  width:66%;
  position:absolute;
  background:#3a3a3c;
  top:0;
  left:0;
  bottom:0;
  display:flex;
  align-items:center;
  justify-content:center;
  >div{
    transition:all 0.5s;
    color:#fff;
    text-align:center;
    width:50%;
    >span{
      margin-top:2rem;
    }
  }
`

const InfomationBox = styled.div`
  ${props => {
    if(props.animation === 'in'){
      return css `
        transform:translateX(-${props.dataWidth}px);
        >div{
          animation:${fadeInOutRight} 0.4s linear;
        }
      `
    }else if(props.animation === 'out'){
      return css `
        transform:translateX(0%);
        >div{
          animation:${fadeInOutLeft} 0.4s linear;
        }
      `
    }
  }}
  display:flex;
  align-items:center;
  justify-content:center;
  transition:all 0.8s;
  background:rgba(28, 28, 28, 0.7);
  width:34%;
  position:absolute;
  right:0;
  top:0;
  bottom:0;
`

const SignUpBox = styled.div`
  transition:all 0.5s;
  width:1290px;
  height:684px;
  border-radius:8px;
  display:block;
  position:relative;
  overflow:hidden;
`

const ContentBox = styled.div`
  position:absolute;
  display:flex;
  width:84vw;
  height:100%; 
  min-height:740px;
  background:linear-gradient(180deg, #ffd04c 0%, #F29B18 100%), #F2B918;
  z-index:3;
  top:0;
  left:8vw;
  right:8vw;
  bottom:0;
  box-shadow:0 0 8px rgba(0,0,0,.6);
  align-items:center;
  justify-content:center;
`