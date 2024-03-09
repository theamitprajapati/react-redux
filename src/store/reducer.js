const initialState = {
    blogs: [
      { id: 1, title: "post 1", description: "I am first blog",time:'10:50',date:'date' },
      { id: 2, title: "post 2", description: "I am second blog",time:'10:55',date:'date' },
    ],
    addForm: { id: 1, title: "demo 1", description: "demo description",time:'00:00',date:'date' },
  }
  
  const reducer = (state = initialState, action) => {
    if(action.type == 'ADDBLOG'){
        state.blogs.push(action.blogsData)
        console.log('.......................')
    }
    return state
  }
  export default reducer