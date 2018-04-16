
const initialState = {
    propertyname: '',
    address: '',
    city: '',
    state: '',
    zip: 0,
    imageurl: '',
    monthlymortgage: 0,
    desiredrent: 0,
}

const GET_PROPERTY = 'GET_PROPERTY',
      GET_ADDRESS = 'GET_ADDRESS',
      GET_CITY = 'GET_CITY',
      GET_STATE = 'GET_STATE',
      GET_ZIP = 'GET_ZIP',
      GET_IMAGE = 'GET_IMAGE',
      GET_MORTGAGE = 'GET_MORTGAGE',
      GET_RENT = 'GET_RENT',
      CLEAR_ALL = 'CLEAR_ALL';
    //   STEP_ONE = 'STEP_ONE',
    //   STEP_TWO = 'STEP_TWO',
    //   STEP_THREE = 'STEP_THREE';


export function getProperty( propertyname ) {
    return {
        type: GET_PROPERTY,
        payload: propertyname
    }
}

export function getAddress( address ) {
    return {
        type: GET_ADDRESS,
        payload: address
    }
}

export function getCity( city ) {
    return {
        type: GET_CITY,
        payload: city
    }
}

export function getState( state ) {
    return {
        type: GET_STATE,
        payload: state
    }
}

export function getZip( zip ) {
    return {
        type: GET_ZIP,
        payload: zip
    }
}

export function getImage( imageurl ) {
    return {
        type: GET_IMAGE,
        payload: imageurl
    }
}

export function getMortgage( monthlymortgage ) {
    return {
        type: GET_MORTGAGE,
        payload: monthlymortgage
    }
}

export function getRent( desiredrent ) {
    return {
        type: GET_RENT,
        payload: desiredrent
    }
}

export function clearAll() {
    return {
        type: CLEAR_ALL,
        payload: initialState
    }
}

// export function stepOne() {
//     return {
//         type: STEP_ONE,
//         payload: true
//     }
// }

// export function stepTwo() {
//     return {
//         type: STEP_TWO,
//         payload: true
//     }
// }

// export function stepThree() {
//     return {
//         type: STEP_THREE,
//         payload: true
//     }
// }



export default function reducer(state = initialState, action) {
    switch( action.type ) {
        case GET_PROPERTY:
            return Object.assign({}, state, {propertyname: action.payload})

        case GET_ADDRESS:
            return Object.assign({}, state, {address: action.payload})

        case GET_CITY:
            return Object.assign({}, state, {city: action.payload})

        case GET_STATE:
            return Object.assign({}, state, {state: action.payload})

        case GET_ZIP:
            return Object.assign({}, state, {zip: action.payload})

        case GET_IMAGE:
            return Object.assign({}, state, {imageurl: action.payload})

        case GET_MORTGAGE:
            return Object.assign({}, state, {monthlymortgage: action.payload})
            
        case GET_RENT:
            return Object.assign({}, state, {desiredrent: action.payload})
            
        case CLEAR_ALL:
            return Object.assign({}, state, initialState)
        
        // case STEP_ONE:
        //     return Object.assign({}, state, {step1completed: action.payload})

        // case STEP_TWO:
        //     return Object.assign({}, state, {step2completed: action.payload})

        // case STEP_THREE:
        //     return Object.assign({}, state, {step3completed: action.payload})



            default:
            return state;
    }
}


