export default function manageQuotes(state = [], action) {
  let idx = state.findIndex(quote => quote.id === action.quoteId);
  let quotes = [...state];
  let q = quotes.find(quote => quote.id === action.quoteId)
  // debugger
  switch (action.type) {

    case 'ADD_QUOTE':
      return [...state, action.quote]
      
    case 'REMOVE_QUOTE':
      return [...state.filter(quote => quote.id !== action.quoteId)];
      
    case 'UPVOTE_QUOTE':
      // let idx = quotes.findIndex(quote => quote.id === action.id);
      q.votes += 1
      return [...quotes.slice(0, idx), q, ...quotes.slice(idx + 1)];
      
    case 'DOWNVOTE_QUOTE':
      // let quotes = [...state];
      // let q = quotes.find(quote => quote.id === action.id)
      // let idx = quotes.findIndex(quote => quote.id === action.id);
      if(q.votes > 0){

        q.votes -= 1
      }
      return [...quotes.slice(0, idx), q, ...quotes.slice(idx + 1)];

    default:
      return state;

  }
};
