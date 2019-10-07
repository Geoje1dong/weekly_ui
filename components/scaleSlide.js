import React,{useCallback} from 'react'
import styled, {css, keyframes} from 'styled-components'

import { ShoppingCart } from 'react-feather'

function getSubslideData(slideData){
  const firstData = slideData[0];
  let subSlidesData = slideData;
  subSlidesData = subSlidesData.filter(data => data.first !== 0);
  subSlidesData = subSlidesData.concat(firstData);

  return subSlidesData;
}

function getNextPrev(type, currentSlide, slideData){
  let number
  if(type === 'next'){
    if(currentSlide < slideData.length-1){
      number = currentSlide + 1;
    }else{
      number = 0
    }
  }else if(type === 'prev'){
    if(currentSlide > 0){
      number = currentSlide - 1;
    }else{
      number = slideData.length - 1;
    }
  }

  return number;
}

export default function ScaleSlide({slideData}){
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [mouseOver, setMouseOver] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const subSlideData = getSubslideData(slideData);
  const nextSlide = getNextPrev('next', currentSlide, slideData);
  const prevSlide = getNextPrev('prev', currentSlide, slideData);

  const handleClick = () => {
    setOpen(!open);
    
  }

  const handleMouseOver = () => {
    setMouseOver(!mouseOver);
  }

  const nextSlideClick = React.useCallback((e) => {
    if(currentSlide < slideData.length-1){
      setCurrentSlide(currentSlide + 1);
    }else{
      setCurrentSlide(0);
    }
  }, [currentSlide])

  const onWheel = React.useCallback((e) => {
    const delta = e.wheelDelta/120;
    if(delta < 0){
      setTimeout(() => {
        if(currentSlide < slideData.length-1){
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
          setCurrentSlide(slideData.length - 1);
        }
      }, 300);
    }
  }, [currentSlide])

  React.useEffect(() => {
    window.addEventListener('mousewheel', onWheel);
    return () => {
      window.removeEventListener('mousewheel', onWheel);
    }
  })

  return(
    <>
    <div>
      <ul>
        {slideData.map((slide, index) => (
          <SlidetextStyle key={index} current={currentSlide} index={index} next={nextSlide} prev={prevSlide} mouseOver={mouseOver}>
            <div>
              <h3>{slide.headline}</h3>
              <span>{slide.headline}</span>
            </div>
          </SlidetextStyle>
        ))}
      </ul>
    </div>
    <Slide open={open}>
      <ul>
        {slideData.map((slide, index) => (
          <SlideStyle background={slide.img} key={index} current={currentSlide} index={index} next={nextSlide} prev={prevSlide} onMouseOver={handleMouseOver} onMouseOut={handleMouseOver} onClick={handleClick}>
            <div>
              <div />
            </div>
          </SlideStyle>
        ))}
        <ShowBackground delay='0.6s' />
      </ul>
      <ul>
        {subSlideData.map((slide, index) => (
          <SlideStyle background={slide.img} key={index} current={currentSlide} index={index} next={nextSlide} prev={prevSlide} onClick={nextSlideClick}>
            <div>
              <div>
                {slide.id}
                </div>
            </div>
          </SlideStyle>
        ))}
        <ShowBackground delay='1.3s' open={open}>
          {open&&
            <OpenBox open={open}>
              <dl>
                <dt>headline</dt>
                <dd>{slideData[currentSlide].headline}</dd>
              </dl>
              <dl>
                <dt>description</dt>
                <dd>{slideData[currentSlide].description}</dd>
              </dl>
              {/* {slideData[currentSlide].shop} */}
              {slideData[currentSlide].shop &&
                <dl>
                  <dt>shop</dt>
                  <dd>
                    <ALink target='_blank' href={slideData[currentSlide].shop}>
                      <ShoppingCart size={14} color='#fff'/>
                      Add to Cart
                    </ALink>
                  </dd>
                </dl>
              }
              
            </OpenBox>
          }
        </ShowBackground>
      </ul>
    </Slide>
    </>
    
  )
}

const TextPadeIn = keyframes`
  to {
    opacity:1;
    transform:translateY(0px);
  }
`

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
    transform:scale(1.3);
  }
  100%{
    transform:scale(1);
  }
`

const ALink = styled.a`
  background:none; 
  color:#rgba(255,255,255,0.6); 
  border:1px solid rgba(255,255,255,0.6); 
  box-shadow:0 2px 0 rgba(0,0,0,0.045);
  text-shadow:0 -1px 0 rgba(0,0,0,0.12);
  transition: all .3s;
  cursor:pointer;
  font-weight:inherit;
  display:inline-block;
  padding:4px 8px;
  font-size:inherit;
  border-radius:4px;
  >svg{
    margin-right:8px;
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

const OpenBox = styled.div`
  width:360px;
  position: absolute;
  bottom: 0;
  left: 0;
  >dl{
    margin-top:20px;
    opacity:0;
    transform:translateY(20px);
    animation:${TextPadeIn} 0.4s cubic-bezier(0, 0, 0.2, 1) forwards;
    animation-delay: 0.7s;
    >dt{
      font-size:0.6rem;
      font-weight:200;
      color:rgba(255,255,255,0.2);
      padding:0;
      margin:0;
    }
    >dd{
      font-size:0.82rem;
      font-weight:400;
      padding-top:8px;
      margin:0;
      word-break:keep-all;
    }
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
  ${props => props.open && 
    'transform:translateY(100%);'
  }
  transition:all 0.4s cubic-bezier(0, 0, 0.2, 1);
`

const SlideStyle = styled.li`
  cursor:pointer;
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  height:100%;
  display:none;
  ${props => props.prev === props.index && 'z-index:0; display:block;'} 
  ${props => props.current === props.index && 'z-index:2; display:block;'}
  ${props => props.next === props.index && 'z-index:3; display:block;'} 
  z-index:3;
  overflow:hidden;
  
  >div{
    position:relative;
    height:inherit;
    ${props => props.prev === props.index && 'transform:translate(-100%, 0%) matrix(1, 0, 0, 1, 0, 0); opacity:0.5;'} 
    ${props => props.current === props.index && 'transform:matrix(1, 0, 0, 1, 0, 0); opacity:1;'} 
    ${props => props.next === props.index && 'transform:translate(100%, 0%) matrix(1, 0, 0, 1, 0, 0); opacity:0.5;'} 

    transition:all 0.6s cubic-bezier(0, 0, 0.2, 1);
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
    }
  }
`

const Slide = styled.div`
  margin:0 2rem;
  height: calc(100% - 120px);
  display:flex;
  overflow:hidden;
  position:relative;
  z-index:0;
  align-items:flex-end;
  >ul{
    // height:100%;
    height:500px;
    background:#000;
    position:relative;
    flex:0 0 55%;
    margin-right:4%;
    &:first-child{
      margin-left:12%;
      ${props => props.open && 'height:600px; '}
      transition:height 0.5s cubic-bezier(0, 0, 0.2, 1);
      transition-delay: 0.4s;
    }
    &:last-child{
      >li>div>div{
        opacity:0.4 !important;
      }
    }
  }
`

const SlidetextStyle = styled.li`
  width:inherit;
  position:absolute;
  bottom:28%;
  left:2rem;
  z-index:4;
  overflow: hidden;  
  display:none;
  ${props => props.prev === props.index && 'z-index:0; display:block;'} 
  ${props => props.current === props.index && 'z-index:2; display:block;'}
  ${props => props.next === props.index && 'z-index:0; display:block;'} 
  >div{
    position:relative;
    height:inherit;
    text-shadow:0px 4px 5px rgba(0,0,0,0.6);
    padding-right:10px;
    >h3, >span{
      font-size:2.4rem;
      font-weight:700;
      color:#fff;
      line-height:1em;
      padding:0;
      margin:0;
      transition:all 0.5s cubic-bezier(0, 0, 0.2, 1);
    }
    >h3{
      clip-path:polygon(0 50%,100% 50%,100% 100%,0 100%);
      transform:translate(-100%, 0%) matrix(1, 0, 0, 1, 0, 0); 
      ${props => props.prev === props.index && 'transform:translate(100%, 0%) matrix(1, 0, 0, 1, 0, 0); opacity:0.5;'}  
      ${props => props.current === props.index && 'transform:matrix(1, 0, 0, 1, 0, 0); opacity:1;'} 
      ${props => props.next === props.index && 'transform:translate(-100%, 0%) matrix(1, 0, 0, 1, 0, 0); opacity:0.5;'} 
    }
    >span{
      position:absolute;
      top:-1px;
      left:0;
      color:#fff;
      clip-path:polygon(0 0,100% 0,100% 50%,0 50%);
      transform:translate(100%, 0%) matrix(1, 0, 0, 1, 0, 0); 
      ${props => props.prev === props.index && 'transform:translate(-100%, 0%) matrix(1, 0, 0, 1, 0, 0) !important; opacity:0;'}
      ${props => props.current === props.index && props.mouseOver ? 'transform:translate3d(0,0,0); opacity:1;' : 'transform:translate3d(3px,0,0); opacity:1;'} 
      ${props => props.next === props.index && 'transform:translate(100%, 0%) matrix(1, 0, 0, 1, 0, 0) !important; opacity:0;'} 
    }
  }
`