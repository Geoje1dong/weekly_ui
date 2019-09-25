import React,{useCallback} from 'react'
import styled from 'styled-components'
import { X, ChevronLeft, ChevronRight } from 'react-feather';
import Link from 'next/link'

export default function ContentLayout(props, {prevId, nextId}){
  return(
    
    <ContentBox>
      <Link href="/"><a className="close"><X color="rgba(255,255,255,1)" size={48}/></a></Link>
      {/* {prevId ? <Link href={`/weekly${prevId}`}><a className="left"><ChevronLeft color="rgba(255,255,255,1)" size={48}/></a></Link> : <button className="left"><ChevronLeft color="rgba(255,255,255,1)" size={48}/></button>}
      {nextId ? <Link href={`/weekly${nextId}`}><a className="right"><ChevronRight color="rgba(255,255,255,1)" size={48}/></a></Link> : <button className="right"><ChevronRight color="rgba(255,255,255,1)" size={48}/></button>} */}
    </ContentBox>
  )
}

const ContentBox = styled.div`
  background:rgba(0, 0, 0, 0.8);
  position:fixed;
  top:0;
  left:0;
  bottom:0;
  right:0;
  z-index:3;
  .close{
    position:absolute;
    top:30px;
    right:30px;
  }
  .left, .right{
    position:absolute;
    top:50%;
    transform:tarnsitionY(-50%);
  }
  .left{
    left:2%;
  }
  .right{
    right:2%;
  }
  >button{
    cursor:pointer;
    &:focus{
      outline:none;
    }
    &:hover{
      >svg{
        stroke:#000;
      }
      outline:none;
    }
  }
`