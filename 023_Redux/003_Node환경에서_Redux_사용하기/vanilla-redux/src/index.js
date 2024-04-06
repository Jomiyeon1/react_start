import { createStore } from "redux";

//Reducer
const countReducer = (state = 0, action) => {// state 초기화
    switch (action.type) {
        case "ADD" :
            minus.disabled = false;
            return state + 1 ;
        case "SUBSTRACT" :
            minus.disabled = false;
            return state - 1;    
        default : 
            return state;    
    }

}

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.getElementById("number"); // 수량
const quantity = document.getElementById("quantity"); // 페이지 하단에 총 수량
const totalPrice = document.getElementById("total"); // 페이지 하단에 총 가격

const PRICE = 17500;

let count = 0;

//action
const addNumber = () =>{
    store.dispatch({ type : "ADD"});
};

//action
const substractNumber = () => {
    store.dispatch({ type : "SUBSTRACT"})
};

// create Store
const store = createStore(countReducer);

const handleWrite = () => { 
    number.innerText = store.getState();
    quantity.innerText = store.getState();
    totalPrice.innerText = store.getState() * PRICE;
}

// UI Update - text
// const updateResult = (c) => {
//     number.innerText = count;
//     quantity.innerHTML = c;
//     totalPrice.innerHTML = c * PRICE;
// };
store.subscribe(handleWrite);

// State Change
// const addNumber = () => {
//     count += 1;
//     minus.disabled = false;
//     updateResult(count);
// };

// State Change
// const substractNumber = () => {
//     count -= 1;
//     plus.disabled = false;
//     updateResult(count);
// };

// Init
// number.innerHTML = count;
// updateResult(count);


// Event
plus.addEventListener("click", addNumber);
minus.addEventListener("click", substractNumber);