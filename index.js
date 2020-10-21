 console.log('file loaded..');

const numbersArray = [3, 8, 2, 18];
const reducerCallback = (accumulator, current) => {
    console.log("accumulator, current value", accumulator, current);
    return accumulator + current;
}


const total = numbersArray.reduce(reducerCallback, 0);
console.log("Total is:", total);


const lettersArray = ['r', 'e', 'd', 'u', 'c', 'e', 'r'];

const word = lettersArray.reduce(reducerCallback, '');

console.log("The word is:", word);

// (state, action) = newState  this is what redux does

const stateReducer = (state, action) => {
    switch(action.type) {
        case 'ACTION_ADD':
            return state + action.item;
            
        case 'ACTION_RESET':
            return '';
            
        default:
            return state;
            
    }
};

let wordStore;
wordStore = stateReducer(wordStore, { type: "ACTION_RESET" });
wordStore = stateReducer(wordStore, { type: 'ACTION_ADD', item: 'r' });
wordStore = stateReducer(wordStore, { type: 'ACTION_ADD', item: 'e' });
wordStore = stateReducer(wordStore, { type: 'ACTION_ADD', item: 'd' });
wordStore = stateReducer(wordStore, { type: 'ACTION_ADD', item: 'u' });
wordStore = stateReducer(wordStore, { type: 'ACTION_ADD', item: 'x' });
console.log(wordStore);

const catReducer = (state = 'purring', action) => {
    switch(action.type) {
        case "ACTION_NAP":
            return "napping";
        case "ACTION_EAT":
            return "eating";
        case "ACTION_PLAY":
            return "playing";
        default: 
            return state;
    }
};

let oakley;
oakley = catReducer(oakley, { type: "ACTION_NAP"});
console.log("Oakley is:", oakley);
