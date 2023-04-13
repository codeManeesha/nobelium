import { createContext } from 'react';
import { useReducer, useEffect, useContext } from 'react';
import './App.css';

export const AppContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return { ...state, posts: action.payload };
    case 'SELECT_POST':
      return { ...state, selectedPost: action.payload };
    default:
      return state;
  }
};

const PostList = () => {
  const { state, dispatch } = useContext(AppContext);

  const handlePostClick = (post) => {
    dispatch({ type: 'SELECT_POST', payload: post });
  };

  return (
    <div className='list'>
      <h1>List of Posts</h1>
      <ul>
        {state.posts.map((post) => (
          <li key={post.id} onClick={() => handlePostClick(post)}>
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

const PostDetails = () => {
  const { state } = useContext(AppContext);
  const selectedPost = state.selectedPost;

  return (
    <div>
      {selectedPost ? (
        <div>
          <h2>Title:{selectedPost.title}</h2>
          <h3>Id:{selectedPost.id}</h3>
          <h3>userId:{selectedPost.userId}</h3>
          <p>About: {selectedPost.body}</p>
        </div>
      ) : (
        <h1>Please select a post from the list</h1>
      )}
    </div>
  );
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, {
    posts: [],
    selectedPost: null,
  });

  const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    dispatch({ type: 'FETCH_POSTS', payload: data });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className='post'>
        <div className='post-list'>
        <PostList />
        </div>
        <div className='post-details'>
        <PostDetails />
        </div>
      </div>
    </AppContext.Provider>
  );
};

export default App;


