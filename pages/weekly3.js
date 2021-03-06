import React from 'react'
import ContentLayout from '../components/contentLayout'

import styled, {css, keyframes} from 'styled-components'
import ScaleSlide from '../components/scaleSlide'

import {ShoppingBag, Link, Youtube} from 'react-feather'

const mainSlidesData = [
  {
    first: 0,
    headline:'LEGIT GOONS [ROCKSTAR GAMES]',
    description:'게임 속 가상현실, 모든 게 합법화 되는 곳, 동경의 Thug life',
    img:'http://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/081/193/351/81193351_1556072456234_1_600x600.JPG',
    shop: 'https://smartstore.naver.com/legitgoons/products/4518806026'
  },
  {
    headline:'최우수 랩&힙합 음반 뱃사공 [탕아]',
    description:'[탕아]는 그동안 뱃사공이 리짓군즈 안에서 보였던 매력과는 또 다른 매력을 한껏 느낄 수 있는 앨범이다. 그는 일상으로부터 온 가사를 그루브한 베이스라인과 락 적인 요소가 가미된 기타 리프 안에서 유려한 랩 실력으로 풀어냈다. 동시에 각 곡마다 확실한 개성을 부여하는데도 성공했다. ‘로데오’에서는 사이키델릭 사운드를, ‘외롭지만 괜찮아’에서는 진득한 기타 솔로와 코러스 라인으로, ‘우리집’에서는 밴드 사운드 위에 덤덤하지만, 애정이 느껴지는 ‘집’에 대한 이야기를 얹었다. 비슷한 스타일로 찍어 낸듯한 많은 힙합 앨범처럼 자극적이지는 않지만, 2018년 많은 이들에게 확실히 각인된 작품이다.',
    img:'http://koreanmusicawards.com/2019/kma20198263/wp-content/uploads/2019/01/20190123_021824.jpg',
    shop: 'http://www.hiphopplayastore.com/shop/goods/goods_view.php?goodsno=64683&category=013001'
  },
  {
    headline:'뱃사공 [출항사] 재입고',
    description:'[출항사] 앨범은 뱃사공 자신을 가장 자연스럽게 담고 있는 앨범이며, 차붐과 딥플로우 넉살 외 리짓군즈 어센틱, 블랭타임, 코드쿤스트, 빅라이트, 호림. 아발란채 크루의 ARwwae가 참여하였다.',
    img:'https://shop-phinf.pstatic.net/20190625_188/500274815_1561449021910gX1cH_JPEG/519784.jpg',
    shop: 'https://smartstore.naver.com/legitgoons/products/4568951697'
  }, 
  {
    headline:'2019 "BADTHANGS" 1st Collection',
    description:'리짓군즈 3집 [Junk, Drunk, Love] 수록곡 ‘Bad thangs’를 테마로 전개되는 리짓군즈의 굿즈 브랜드',
    img:'https://static.wixstatic.com/media/eee193_0b541fcf66594ca9aaf7d5d78e6b2542~mv2_d_3000_3000_s_4_2.jpg/v1/fill/w_1070,h_655,al_c,q_85,usm_0.66_1.00_0.01/eee193_0b541fcf66594ca9aaf7d5d78e6b2542~mv2_d_3000_3000_s_4_2.webp',
    shop: 'https://smartstore.naver.com/legitgoons/products/4112006476'
  },
  {
    headline:'2019 "BADTHANGS" 1st Collection',
    description:'리짓군즈 3집 [Junk, Drunk, Love] 수록곡 ‘Bad thangs’를 테마로 전개되는 리짓군즈의 굿즈 브랜드',
    img:'https://static.wixstatic.com/media/eee193_f70a25e1df9e455abcb57f1b317be660~mv2_d_2800_3675_s_4_2.jpg/v1/fill/w_1070,h_655,al_c,q_85,usm_0.66_1.00_0.01/eee193_f70a25e1df9e455abcb57f1b317be660~mv2_d_2800_3675_s_4_2.webp',
    shop: 'https://smartstore.naver.com/legitgoons/products/4111853981'
  },
  {
    headline:'2019 "BADTHANGS" 1st Collection',
    description:'리짓군즈 3집 [Junk, Drunk, Love] 수록곡 ‘Bad thangs’를 테마로 전개되는 리짓군즈의 굿즈 브랜드',
    img:'https://static.wixstatic.com/media/eee193_7594b027344a4a7eb273f059d7e22e60~mv2_d_3150_2400_s_4_2.jpg/v1/fill/w_1070,h_655,al_c,q_85,usm_0.66_1.00_0.01/eee193_7594b027344a4a7eb273f059d7e22e60~mv2_d_3150_2400_s_4_2.webp',
    shop: 'https://smartstore.naver.com/legitgoons/products/4111811631'
  },
  {
    headline:'3집 Junk Drunk Love',
    description:'늦여름 다시 찾아온 리짓군즈의 세 번째 컴필레이션 [Junk, Drunk, Love]는 리짓군즈 크루의 단출한 일상과 언더그라운드 뮤지션들의 희망을 오롯이 담아낸 앨범이다.인스턴트 식품으로 끼니를 해결한지 오래, 무명 뮤지션의 삶은 자극적인 정크푸드와 다를 바 없는 삶이지만, 리짓군즈는 그런 삶에 대한 자긍심으로 뭉친 인간들이다.',
    img:'https://i1.sndcdn.com/artworks-000278083472-4r9w62-t500x500.jpg',
    shop: 'https://www.legitgoons.com/music/'
  },  
]

export default function Weekly3(props){
  return(
    <>
      <ContentLayout prefix={props.prefix}/>
      <ContentBox>
          <Box>          
            <Logo><img src='https://i.ibb.co/1RtXb71/unnamed.jpg' alt='리짓군즈 로고'/></Logo>
            <ScaleSlide slideData={mainSlidesData}/>
            
            <Footer>
              <iframe width="900px" height="20px" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/328531073&auto_play=true&amp;color=ff5500"></iframe>
              {/* <iframe width="100%" height="20px" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/882127774&color=%23ff5500&auto_play=true&amp;color=ff5500"></iframe> */}
              <ALink target='_blank' href='https://smartstore.naver.com/legitgoons'>
                <ShoppingBag size={14} color='#fff'/>
                Shop
              </ALink>
              <ALink target='_blank' href='https://www.youtube.com/channel/UCPxyfoXtMyqYdKeTMOjgK0Q'>
                <Youtube size={14} color='#fff'/>
                Youtube
              </ALink>
              <ALink target='_blank' href='https://www.legitgoons.com/'>
                <Link size={14} color='#fff'/>
                LEGIT GOONS
              </ALink>
            </Footer>
          </Box>
          <Background background='https://i.ibb.co/1RtXb71/unnamed.jpg'/>
      </ContentBox>
    </>
  )
}

const ALink = styled.a`
  margin-left:12px;
  position:relative;
  background:none; 
  color:#rgba(255,255,255,0.6); 
  // border:1px solid rgba(255,255,255,0.6); 
  box-shadow:0 2px 0 rgba(0,0,0,0.045);
  text-shadow:0 -1px 0 rgba(0,0,0,0.12);
  transition: all .3s;
  cursor:pointer;
  font-weight:inherit;
  display:inline-block;
  padding:2px 8px 2px 24px;
  font-size:0.6rem;
  border-radius:4px;
  >svg{
    position:absolute;
    top:3px;
    left:5px
  }
  &:hover{
    outline:none;
    background:rgba(255,255,255, 0.9); 
    color:#000;
    >svg{
      stroke:rgba(0,0,0, 0.9);
    }
  }
`

const Background = styled.div`
  background-image: url(${props => props.background});
  background-repeat: repeat;
  height: 200%;
  width: 200%;
  position: absolute;
  z-index: -1;
  transform: rotate(-35deg);
`

const Logo = styled.div`
  position:absolute;
  top:2rem;
  left:2rem;
  display: flex;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  transform: rotate(45deg);
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  margin:5px auto 5px 5px;
  // margin-right:auto;
  >img{
    height: 50px;
    width: auto;
    transform: rotate(-45deg);
  }
`

const Footer = styled.div`
  background:#000;
  position:absolute;
  bottom:2rem;
  left:2rem;
  right:2rem;
  padding:14px;
  font-size:0.7rem;
  font-weight:200;
  .sc-link-dark > span{
    color:#fff;
  }
  display:flex;
  >iframe{
    margin-right:auto;
  }
`

const Box = styled.div`
  width:1280px;
  height:720px;
  // background:rgba(0,0,0,0.9);
  background:#1a1a1a;
  color:rgba(255,255,255,0.8);
  position:relative;
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
  overflow:hidden;
` 