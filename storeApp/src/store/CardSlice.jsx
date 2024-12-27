import { createSlice} from "@reduxjs/toolkit";


const CardSlice = createSlice({
    name:'cart',
    initialState:{
        cardItems:[]
    },
    reducers:{
        addItems: (state,action) =>{
            state.cardItems.push(action.payload);
        },
        removeItems:(state,action) =>{
            state.cardItems.pop();
        },
        clearCard :(state,action) =>{
            state.cardItems.length=0;
        }
    }
})
export const{addItems,removeItems,clearCard} = CardSlice.actions;
export default CardSlice.reducer;