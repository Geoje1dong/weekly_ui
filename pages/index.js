import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux';
import Link from 'next/link'
import { ArrowRight } from 'react-feather'

const Home = (props) => {
  const {mainPost} = useSelector(state => state.post)
  const homelink = process.env.NODE_ENV === 'production' ? '/weekly_ui' : '/';

  return(
    <>
      <HeaderBox>
        <HeaderContent>
          <Link href={homelink}><a><Logo><strong>Weekly UI</strong><br />challenge,</Logo></a></Link>
          <Intro>
            Weekly UI 챌린지를 시작하였습니다.<br />
            그 이유는 UI 디자인을 연습하고 개발하며 실험 및 많은 시행착오를 통해 경험을 쌓기 위해서입니다.<br />
            저는 기술을 향상하는 가장 빠른 방법이 많은 것을 만들고 경험해 보는 것이라고 생각합니다.<br />
            이 운동은 저의 시각적인 디자인 기술 및 UI 개발을 향상하며 패턴을 만들며 왜 그런 패턴이 사용되고 있는지를 이해하는 것에도 많은 도움을 줄 것이라고 믿고 있습니다.
            {/* <img src='/static/img/thumb/flower.jpg' alt='꽃 그림'/> */}
          </Intro>
          {/* <Input placeholder='search' /> */}
        </HeaderContent>    
      </HeaderBox>
      <ContentBox>
        <ul>
          {mainPost.map((abc) => (
            <li key={abc.id}>
              <Link href={`${homelink}${abc.page}`}><a>
                <LinkArrow>
                  <ArrowRight color='#fff' size={26} />
                </LinkArrow>
                <Label>
                  {abc.title}
                </Label>
                <img src={`${props.prefix}${abc.coverImg}`} alt={abc.title}/>
              </a></Link>
            </li>
          ))}
        </ul>
      </ContentBox>
    </>
  )
}

const Label = styled.div`
  padding:20px;
  position:absolute;
  bottom:20px;
  left:20px;
  background:rgba(0,0,0,0.6);
  border-radius:100px;
  box-shadow: 0px 4px 20px 0px rgba(61,68,78,0.1);
  z-index:1;
`

const LinkArrow = styled.div`
  position:absolute;
  top:20px;
  right:20px;
  width:40px;
  height:40px;
  display:flex;
  background:rgba(0,0,0,0.6);
  border-radius:50%;
  align-items:center;
  justify-content:center;
  box-shadow: 0px 4px 20px 0px rgba(61,68,78,0.1);
  z-index:1;
`

const Intro = styled.p`
  position:relative;
  font-size:14px;
  line-height:2.2em;
  margin-top:50px;
  color:rgba(255,255,255,0.8);
  >img{
    position:absolute;
    top:-200px;
    right:0;
    z-index:-1;
    width:400px;
  }
`

const ContentBox = styled.div`
  // max-width:1100px;
  z-index:1;
  box-sizing:border-box;
  padding:100px;
  width:100%;
  margin:0 auto;
  position:relative;
  ul{
    // position:absolute;
    width:100%;
    // top:-160px;
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap:40px;
  }
  li{
    line-height:0;
    color:#fff;
    border-radius:10px;
    position:relative;
    overflow:hidden;
    box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1), 0px 10px 10px rgba(0, 0, 0, 0.04);
    display:grid;
    position:relative;
    img{
      transition:all .5s;
      width:100%;
      height:auto;
      transform:scale(1);
    }
    >p{
      color:#333;
    }
    &:hover{
      img{
        transform:scale(1.02);
      }
    }
  }
`

const Input = styled.input`
  background:rgba(255,255,255,0.8);
  box-shadow: 0px 10px 16px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.06);
  border-radius: 4px;
  border:none;
  width:100%;
  padding:14px 24px;
  font-size:16px;
  transition:all 0.4s;
  box-sizing:border-box;
  &:focus{
    outline:none;
  }
`

const Logo = styled.h1`
  display:inline-block;
  color:rgba(255,255,255,1);
  font-size:66px;
  padding:0;
  margin:0;
  font-weight:300;
  >strong{
    font-weight:700;
  }
`

const HeaderContent = styled.div`
  box-sizing:border-box;
  padding:100px;
  // max-width:1100px;
  width:100%;
  margin:0 auto;
  position:relative;
  z-index:1;
`

const HeaderBox = styled.div`
  box-sizing:border-box;
  position:relative;
  width:100%;
  height:420px;
  &:after{
    content:'';
    width:200vw;
    height:150vh;
    background: radial-gradient(50.15% 32.48% at 50% 59.49%, rgba(255, 255, 255, 0.13) 0%, rgba(255, 255, 255, 0) 100%), #297FFA;
    box-shadow: 0px 4px 67px 20px rgba(61, 68, 78, 0.57);
    border-radius:50%;
    position:absolute;
    left: 50vw;
    top: -5vh;
    transform: translate(-50%, -50%);
  }
`


export default Home
