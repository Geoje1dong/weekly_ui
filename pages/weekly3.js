import React from 'react'
import ContentLayout from '../components/contentLayout'

import styled, {css, keyframes} from 'styled-components'


const mainSlidesData = [
  {
    id:0,
    headline:'2019 "BADTHANGS" 1st Collection',
    description:'리짓군즈 3집 [Junk, Drunk, Love] 수록곡 ‘Bad thangs’를 테마로 전개되는 리짓군즈의 굿즈 브랜드',
    img:'https://static.wixstatic.com/media/eee193_f70a25e1df9e455abcb57f1b317be660~mv2_d_2800_3675_s_4_2.jpg/v1/fill/w_1070,h_655,al_c,q_85,usm_0.66_1.00_0.01/eee193_f70a25e1df9e455abcb57f1b317be660~mv2_d_2800_3675_s_4_2.webp',
  },
  {
    id:1,
    headline:'2019 "BADTHANGS" 1st Collection',
    description:'123213',
    img:'https://static.wixstatic.com/media/eee193_0b541fcf66594ca9aaf7d5d78e6b2542~mv2_d_3000_3000_s_4_2.jpg/v1/fill/w_1070,h_655,al_c,q_85,usm_0.66_1.00_0.01/eee193_0b541fcf66594ca9aaf7d5d78e6b2542~mv2_d_3000_3000_s_4_2.webp',
  },
  {
    id:2,
    headline:'2019 "BADTHANGS" 1st Collection',
    description:'123213',
    img:'https://static.wixstatic.com/media/eee193_7594b027344a4a7eb273f059d7e22e60~mv2_d_3150_2400_s_4_2.jpg/v1/fill/w_1070,h_655,al_c,q_85,usm_0.66_1.00_0.01/eee193_7594b027344a4a7eb273f059d7e22e60~mv2_d_3150_2400_s_4_2.webp',
  },
  {
    id:3,
    headline:'3집 Junk Drunk Love',
    description:'늦여름 다시 찾아온 리짓군즈의 세 번째 컴필레이션 [Junk, Drunk, Love]는 리짓군즈 크루의 단출한 일상과 언더그라운드 뮤지션들의 희망을 오롯이 담아낸 앨범이다.\n인스턴트 식품으로 끼니를 해결한지 오래, 무명 뮤지션의 삶은 자극적인 정크푸드와 다를 바 없는 삶이지만, 리짓군즈는 그런 삶에 대한 자긍심으로 뭉친 인간들이다. 2017년 여름, 이번 앨범 역시 치즈버거와 감자튀김을 먹으며 그렇게 출발했다. 건강을 갉아먹는 정크푸드(Junk)와 짓누르는 숙취(Drunk)로 얼룩진 일상, 하지만 그럼에도 별 볼 일없는 삶을 향해 보내는 끊임없는 찬가와 열정(Love)은 [Junk, Drunk, Love]를 관통하는 테마이자 리짓군즈가 삶을 관철하는 태도이다.\n냉혹한 인디펜던트 환경에선 매 순간 작품의 완성도만이 다음 작품을 이어갈 수 있는 유일한 원동력이듯이 [Junk, Drunk, Love] 역시 리짓군즈의 지난 작품들 위에 쌓아 올린 결과물이다. 15곡의 풀랭스로 채워진 이번 앨범은 프로듀싱과 아트워크, 뮤직비디오까지 앨범제작에 필요한 모든 리소스들을 자급자족했으며, 최소한의 제작비 또한 리짓군즈 자체 MD판매를 통한 수익금으로 조달했다. 우리는 앞으로 나올 리짓군즈의 모든 것들을 리짓군즈만의 독립적인 방식으로 이루어내는 걸 볼 수 있을 것이다.',
    img:'https://i1.sndcdn.com/artworks-000278083472-4r9w62-t500x500.jpg',
  },
  {
    id:4,
    headline:'최우수 랩&힙합 음반 뱃사공 [탕아]',
    description:'[탕아]는 그동안 뱃사공이 리짓군즈 안에서 보였던 매력과는 또 다른 매력을 한껏 느낄 수 있는 앨범이다. 그는 일상으로부터 온 가사를 그루브한 베이스라인과 락 적인 요소가 가미된 기타 리프 안에서 유려한 랩 실력으로 풀어냈다. 동시에 각 곡마다 확실한 개성을 부여하는데도 성공했다. ‘로데오’에서는 사이키델릭 사운드를, ‘외롭지만 괜찮아’에서는 진득한 기타 솔로와 코러스 라인으로, ‘우리집’에서는 밴드 사운드 위에 덤덤하지만, 애정이 느껴지는 ‘집’에 대한 이야기를 얹었다. 비슷한 스타일로 찍어 낸듯한 많은 힙합 앨범처럼 자극적이지는 않지만, 2018년 많은 이들에게 확실히 각인된 작품이다.',
    img:'http://koreanmusicawards.com/2019/kma20198263/wp-content/uploads/2019/01/20190123_021824.jpg',
  },
  
]



const subSlidesData = [
  {
    index:0,
    img:'https://static.wixstatic.com/media/eee193_0b541fcf66594ca9aaf7d5d78e6b2542~mv2_d_3000_3000_s_4_2.jpg/v1/fill/w_1070,h_655,al_c,q_85,usm_0.66_1.00_0.01/eee193_0b541fcf66594ca9aaf7d5d78e6b2542~mv2_d_3000_3000_s_4_2.webp',
  },
  {
    index:1,
    img:'https://static.wixstatic.com/media/eee193_7594b027344a4a7eb273f059d7e22e60~mv2_d_3150_2400_s_4_2.jpg/v1/fill/w_1070,h_655,al_c,q_85,usm_0.66_1.00_0.01/eee193_7594b027344a4a7eb273f059d7e22e60~mv2_d_3150_2400_s_4_2.webp',
  },
  {
    index:2,
    img:'https://i1.sndcdn.com/artworks-000278083472-4r9w62-t500x500.jpg'
  },
  {
    index:3,
    img:'http://thumb.mtstarnews.com/06/2018/07/2018071818155211457_1.jpg',
  },
  {
    index:4,
    img:'http://koreanmusicawards.com/2019/kma20198263/wp-content/uploads/2019/01/20190123_021824.jpg',
  },
]

// function getprint(){
//   const firstData = mainSlidesData[0];
//   let subSlidesData = mainSlidesData;
//   subSlidesData = subSlidesData.filter(data => data.id !== 0);
//   subSlidesData = subSlidesData.concat(firstData);
//   // console.log(firstData);
//   console.log(subSlidesData);
//   // return subSlidesData;
//   return subSlidesData;
// }


function getNextPrev(type, currentSlide){
  let number
  if(type === 'next'){
    if(currentSlide < mainSlidesData.length-1){
      number = currentSlide + 1;
    }else{
      number = 0
    }
  }else if(type === 'prev'){
    if(currentSlide > 0){
      number = currentSlide - 1;
    }else{
      number = mainSlidesData.length - 1;
    }
  }

  return number;
}


export default function Weekly3(props){
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const nextSlide = getNextPrev('next', currentSlide);
  const prevSlide = getNextPrev('prev', currentSlide);
  const onWheel = React.useCallback((e) => {
    const delta = e.wheelDelta/120;
    if(delta < 0){
      setTimeout(() => {
        if(currentSlide < mainSlidesData.length-1){
          setCurrentSlide(currentSlide + 1);
        }else{
          setCurrentSlide(0);
        }
      }, 300);
    }else if(delta > 0){
      setTimeout(() => {
        if(currentSlide > 0){
          setCurrentSlide(currentSlide - 1);
        }else{
          setCurrentSlide(mainSlidesData.length - 1);
        }
      }, 300);
    }
    
  }, [currentSlide])

  React.useEffect(() => {
    window.addEventListener('mousewheel', onWheel);
    return () => {
      window.removeEventListener('mousewheel', onWheel);
    }
    let hohoho = getprint();
  })

  return(
    <>
      <ContentLayout prefix={props.prefix}/>
      <ContentBox>
        <Box>
          <HeaderBox>
            {/* {hohoho} */}
            {/* {mainSlidesData} */}
            <Logo><img src='/static/img/landing/unnamed.jpg' alt='리짓군즈 로고'/></Logo>
            {/* <Intro>
              <p>
                <strong>RAPPER</strong>
                BLNKTIME<br />
                BASSAGONG<br />
                JAYHO<br />
                JAEDAL
              </p>
              <p>
                <strong>DIRECTOR</strong>
                KWON OJUN<br />
                COCKY
              </p>
              <p>
                <strong>A&R</strong>
                CHA YEJUN<br />
                BOOROO
              </p>
              <p>
                <strong>PRODUCER</strong> 
                IDEALBEATZ<br />
                BIGLIGHTBEATZ<br />
                AUTHENTIC<br />
                CODE KUNST<br />
                YOSI
              </p>
              <p>
                <strong>PHOTOGRAPHER</strong>
                LEE DONGGUN
              </p>
              <p>
                <strong>GAME</strong>
                HAEPARTY
              </p>
            </Intro> */}
          </HeaderBox>
          <TextSlide>
            <ul>
              {mainSlidesData.map(slide => (
                <SlidetextStyle key={slide.id} current={currentSlide} index={slide.id} next={nextSlide} prev={prevSlide}>
                  <div>
                    <div>{slide.headline}</div>
                  </div>
                </SlidetextStyle>
              ))}
            </ul>
          </TextSlide>
          <Slide>
            <ul>
              {mainSlidesData.map(slide => (
                <SlideStyle background={slide.img} key={slide.id} current={currentSlide} index={slide.id} next={nextSlide} prev={prevSlide}>
                  <div>
                    <div />
                  </div>
                </SlideStyle>
              ))}
              <ShowBackground delay='0.6s'/>
            </ul>
            <ul>
              {subSlidesData.map((slide, index) => (
                <SlideStyle background={slide.img} key={slide.index} current={currentSlide} index={slide.index} next={nextSlide} prev={prevSlide} >
                  <div>
                    <div>
                      {slide.id}
                      </div>
                  </div>
                </SlideStyle>
              ))}
              <ShowBackground delay='1.3s'/>
            </ul>
          </Slide>
          <SoundBar>
            <iframe width="100%" height="20px" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/328531073&auto_play=true&amp;color=ff5500"></iframe>
            {/* <iframe width="100%" height="20px" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/882127774&color=%23ff5500&auto_play=true&amp;color=ff5500"></iframe> */}
            
          </SoundBar>
        </Box>
      </ContentBox>
    </>
  )
}

const SlideOut = keyframes`
  to {
    top:-100%;
    
  }
`

const ScaleKeyprame = keyframes`
  0%{
    transform:scale(1);
  }
  40%{
    transform:scale(1.2);
  }
  100%{
    transform:scale(1);
  }
`

const ShowBackground = styled.div`
  position:absolute;
  top:0;
  left:0;
  right:0;
  height:100%;
  background:#1a1a1a;
  z-index:3;
  animation:${SlideOut} 0.5s cubic-bezier(0, 0, 0.2, 1) forwards;
  animation-delay: ${props => props.delay};
`

const SlideStyle = styled.li`
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  height:100%;
  display:none;
  ${props => props.prev === props.index && 'z-index:0; display:block;'} 
  ${props => props.current === props.index && 'z-index:2; display:block;'}
  ${props => props.next === props.index && 'z-index:0; display:block;'} 
  
  overflow:hidden;
  
  >div{
    position:relative;
    height:inherit;
    ${props => props.prev === props.index && 'transform:translate(-100%, 0%) matrix(1, 0, 0, 1, 0, 0); opacity:0.5;'} 
    ${props => props.current === props.index && 'transform:matrix(1, 0, 0, 1, 0, 0); opacity:1;'} 
    ${props => props.next === props.index && 'transform:translate(100%, 0%) matrix(1, 0, 0, 1, 0, 0); opacity:0.5;'} 
    transition:all 0.5s cubic-bezier(0, 0, 0.2, 1);
    >div{
      background-image:url(${props => props.background});
      background-size:cover;
      background-repeat:no-repeat;
      background-position:center;
      height:inherit;

      ${props => {
        if(props.current === props.index){
          return css`
            animation:${ScaleKeyprame} 0.6s cubic-bezier(0, 0, 0.2, 1);
          `
        }
      }}
      transition:all 0.5s cubic-bezier(0, 0, 0.2, 1);
    }
  }
`

const Slide = styled.div`
  margin:0 2rem;
  height:67%;
  display:flex;
  overflow:hidden;
  >ul{
    height:100%;
    background:#000;
    position:relative;
    flex:0 0 60%;
    margin-right:6%;
    height:100%;
    &:first-child{
      margin-left:12%;
    }
    &:last-child{
      >li>div>div{
        opacity:0.5 !important;
      }
    }
  }
`

const TextSlide = styled.div`
  width:inherit;
  position:absolute;
  bottom:28%;
  left:2rem;
  z-index:4;
  height: 100px;
  width: 600px;
  overflow: hidden;
`

const SlidetextStyle = styled.li`
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  height:100%;
  
  display:none;
  ${props => props.prev === props.index && 'z-index:0; display:block;'} 
  ${props => props.current === props.index && 'z-index:2; display:block;'}
  ${props => props.next === props.index && 'z-index:0; display:block;'} 
  >div{
    font-size:2rem;
    font-weight:700;
    color:#fff;
    position:relative;
    height:inherit;
    ${props => props.prev === props.index && 'transform:translate(-100%, 0%) matrix(1, 0, 0, 1, 0, 0); opacity:0.5;'} 
    ${props => props.current === props.index && 'transform:matrix(1, 0, 0, 1, 0, 0); opacity:1;'} 
    ${props => props.next === props.index && 'transform:translate(100%, 0%) matrix(1, 0, 0, 1, 0, 0); opacity:0.5;'} 
    transition:all 0.5s cubic-bezier(0, 0, 0.2, 1);
    >div{
      transform:matrix(1, 0, 0, 1, 0, 0);
      text-shadow:0px 4px 5px rgba(0,0,0,0.6);
    }
  }
`

const Intro = styled.div`
display:flex;
>p{
  font-size:0.8rem;
  line-height:2em;
  padding:0 2rem;
  color:rgba(255,255,255,1);
  font-weight:300;
  margin:0;
  &:last-child{
    padding-right:0;
  }
  >strong{
    display:block;
    font-weight:300;
    color:rgba(229,34,32,0.9);
  }
}
`

const Logo = styled.div`
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

const SoundBar = styled.div`
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
`

const HeaderBox = styled.div`
  font-size:3rem;
  color:rgba(255,255,255,1);
  padding:2rem;
  line-height:1em;
  display:flex;
`

const Box = styled.div`
  width:1280px;
  height:720px;
  background:rgba(0,0,0,0.9);
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
`