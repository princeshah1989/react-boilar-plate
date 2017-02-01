var redux = require('redux');


var nextMovieId = 1;
var nextHobbyId = 1;
/*

var defaultState = {
  name: 'Harpreet',
  movies : [],
  hobbies : []
}
//reducer is a pure function it doesnt mutate its state
var reducer = (state = defaultState, action) => {
  // initially state is empty so I give default State
  // state = state || defaultState;

  switch(action.type){
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      };
    case 'ADD_MOVIE':
      return {
        ...state,
        movies: [
          ...state.movies,
          {
            title: action.title,
            genre: action.genre,
            id: nextMovieId++
          }
        ]
      };
    case 'REMOVE_MOVIE':
      return {
        ...state,
        movies: state.movies.filter(function (movie) {
          return movie.id !== action.id;
        })
      };
    case 'ADD_HOBBY':
      return {
        ...state,
        hobbies: [
          ...state.hobbies,
          {
            hobby: action.hobby,
            id: nextHobbyId++
          }
        ]
      };
      case 'REMOVE_HOBBY':
        return {
          ...state,
          hobbies: state.hobbies.filter(function (hobby) {
            return hobby.id !== action.id;
          })
        };
    default:
      return state;
  }

};
*/

// name reducer and it's action generators

var nameReducer = (state = 'Harpreet', action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return action.name;
    default:
      return state;
  }
};

// hobbiesReducer and it's action generators
var hobbiesReducer = (state = [], action) => {
  // start switch here
  switch (action.type) {
    case 'ADD_HOBBY':
      return [
        ...state,
        {
          id: nextHobbyId++,
          hobby: action.hobby
        }
      ];
      case 'REMOVE_HOBBY':
        return state.filter((hobby) => hobby.id !== action.id);
      default:
        return state;
  }
  // end switch here
};

// moviesReducer and it's action generators
var moviesReducer = (state = [], action) => {
  // start switch here
  switch (action.type) {
    case 'ADD_HOBBY':
      return [
        ...state,
        {
          id: nextHobbyId++,
          hobby: action.hobby
        }
      ];
      case 'REMOVE_HOBBY':
        return state.filter((hobby) => hobby.id !== action.id);
      default:
        return state;
  }
  // end switch here
};



var reducer = redux.combineReducers({
  name: nameReducer,
  hobbies: hobbiesReducer,
  movies: moviesReducer
})
//store is provided by redux
var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

/* to awake REDUX tools inside the CHROME DEVELOPER tool
redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)
*/
var initialState = store.getState();
console.log("Initial State is:", initialState);

store.subscribe(() => {
  var state = store.getState();

  document.getElementById('app').innerHTML = JSON.stringify(state);
  console.log('New State is:', state);
});
/*
var action = {
  type: 'CHANGE_NAME',
  name: 'ReactRedux'
};

store.dispatch(action);
*/

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'ReactRedux'
});

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Trumph'
});

// var newState = store.getState();
// console.log("After Name action, the State is ", newState);

store.dispatch({
  type: 'ADD_MOVIE',
  title: 'Titanic',
  genre: 'Romance'
});

// var movieState = store.getState();
// console.log("After Moive action, the State is ", movieState);

store.dispatch({
  type: 'ADD_MOVIE',
  title: 'Kabil',
  genre: 'Drama'
});

// var movieStateNew = store.getState();
// console.log("After Moive action, the New State is ", movieStateNew);

store.dispatch({
  type: 'REMOVE_MOVIE',
  id: 1
});
// var movieStateNew = store.getState();
// console.log("After Moive action, the New State is ", movieStateNew);
store.dispatch({
  type: 'ADD_MOVIE',
  title: 'ScarFace',
  genre: 'Action'
});

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'AB Dulla'
});

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'dancing'
});
store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Programming'
});

store.dispatch({
  type: 'REMOVE_HOBBY',
  id: 1
});

store.dispatch({
  type: 'ROB_BANK',
  id: 1
});
store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Dancing'
});
