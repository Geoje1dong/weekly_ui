import React from 'react'
import ContentLayout from '../components/contentLayout'

const Weekly2 = ({prevId, nextId}) => {
  return(
    <>
      <ContentLayout prevId={prevId} nextId={nextId}/>
    </>
  )
}

Weekly2.getInitialProps = async (context) => {
  const state = context.store.getState();
  let id = context.pathname.split('/weekly');
  id = parseInt(id[1]);
  const lastId = state.post.mainPost.length;
  let prevId = id-1 === 0 ? null : id - 1;
  let nextId = id+1 === lastId ? null : id + 1;
  return {prevId, nextId}
}

export default Weekly2