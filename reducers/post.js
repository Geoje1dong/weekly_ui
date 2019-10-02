import produce from 'immer'

export const initialState = {
  mainPost: [
    {
      id:1,
      title:'Sign Up, Sign In',
      tag:'',
      page:'weekly1',
      coverImg:'/static/img/thumb/weekly01.png',
    },
    {
      id:2,
      title:'Credit Card Checkout',
      tag:'',
      page:'weekly2',
      coverImg:'/static/img/thumb/weekly02.png',
    },
    {
      id:3,
      title:'Landing Page',
      tag:'',
      page:'weekly3',
      coverImg:'/static/img/thumb/weekly03.png',
    }
  ]
}

export const LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';   // 포스터 1개 불러오기
export const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
export const LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch(action.type){
      default: {
        break;
      }
    }
  })
}

export default reducer;