export const ADD_BOOK = "ADD_BOOK";

const initalState = {
  books: [],
};

export default (state = initalState, action) => {
  switch (action.type) {
    case ADD_BOOK: {
      const newBooks = [...state.books, action.payload];
      return {
        ...state,
        books: newBooks,
      };
    }
    default: {
      console.warn(`Unknown action ${action.type}`);
      return { ...state };
    }
  }
};

//metoda zeby nie robic tego recznie za kazdym
export const addBook = (book) => (dispatch) => {
  dispatch({ type: ADD_BOOK, payload: book });
};
