import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [
        {
            name: "Hostel",
            imageLink: "https://i.pinimg.com/736x/22/e0/17/22e01709e94867cffcdf8baf83acd52a.jpg",
            contact: "8080",
            city: "Ngp",
            college: "ycce"
        }
    ],
    name: 'Dipak'
}

const showHostelSlice = createSlice({
    name: "hostelDekho",
    initialState,
    reducers: {
        getName: (state) => {
            return state.name;
        },
        addCart: (state, action) => {
            if (state.data.length != 0) {
                state.data = [];
            }
            state.data.push(action.payload);
        }
    }

})

export const { getName, addCart } = showHostelSlice.actions;
export default showHostelSlice.reducer;