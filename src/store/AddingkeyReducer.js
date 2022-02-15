
const initialState={
  CART_ITEMS:[],
  INCREMENT:0,
  DECREMENT:0,
  CARDCOUNTER:0
  }
const AddingkeyReducer = (state=initialState,action)=> {
	switch(action.type){
		case "ADD":
		return {...state,CART_ITEMS:[...state.CART_ITEMS,action.payload],CARDCOUNTER:state.CARDCOUNTER+1};
		case "REMOVE":
		return {...state,CART_ITEMS:[...state.CART_ITEMS.filter((item)=>item!==action.payload)],CARDCOUNTER:state.CARDCOUNTER-1};
    case "INCREMENT":
    return {...state,INCREMENT:state.INCREMENT+1};
		default:
		return state;
	}
}
export default AddingkeyReducer