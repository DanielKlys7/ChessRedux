export const FEN_CHANGED = "FEN_CHANGED";

const initialFen = {
  fen: "start",
};

export default (state = initialFen, action) => {
  switch (action.type) {
    case FEN_CHANGED: {
      const newFen = [...state.fen, action.payload];
      return {
        fen: newFen,
      };
    }
    default: {
      console.warn(`Unknown action ${action.type}`);
      return { ...state };
    }
  }
};

export const sendFen = (fen) => (dispatch) => {
  dispatch({ type: FEN_CHANGED, payload: fen });
};
