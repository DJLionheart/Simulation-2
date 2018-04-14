
const initialState = {
    propertyname: '',
    address: '',
    city: '',
    state: '',
    zip: 0,
    step1collected: false,
    imageurl: '',
    step2collecfted: false,
    monthlymortgage: 0,
    desiredrent: 0,
    step3collected: false
}

const GET_PROPERTY = 'GET_PROPERTY',
      STEP_ONE_DONE = 'STEP_ONE_DONE',
      GET_IMAGE = 'GET_IMAGE',
      STEP_TWO_DONE = 'STEP_TWO_DONE',
      GET_FINANCIALS = 'GET_FINANCIALS',
      STEP_THREE_DONE = 'STEP_THREE_DONE',
      CLEAR_ALL = 'CLEAR_ALL';


export function getProperty( propertyname, address, city, state, zip ) {
    return {
        type: GET_PROPERTY,
        payload: {
            propertyname: propertyname,
            address: address,
            city: city,
            state: state,
            zip: zip
        }
    }
}

export function stepOneSaved() {
    return {
        type: STEP_ONE_DONE,
        payload: true
    }
}

export function getImage( imageurl ) {
    return {
        type: GET_IMAGE,
        payload: imageurl
    }
}

export function stepTwoSaved() {
    return {
        type: STEP_TWO_DONE,
        payload: true
    }
}

export function getFinancials( monthlymortgage, desiredrent ) {
    return {
        type: GET_FINANCIALS,
        payload: {
            monthlymortgage: monthlymortgage,
            desiredrent: desiredrent
        }
    }
}

export function stepThreeSaved() {
    return {
        type: STEP_THREE_DONE,
        payload: true
    }
}

export function clearAll() {
    return {
        type: CLEAR_ALL,
        payload: initialState
    }
}



export default function reducer(state = initialState, action) {
    switch( action.type ) {
        case GET_PROPERTY:
            return Object.assign({}, state, {propertyDetails: action.payload})

        case STEP_ONE_DONE:
            return Object.assign({}, state, {step1collected: action.payload})

        case GET_IMAGE:
            return Object.assign({}, state, {imageurl: action.payload})

        case STEP_TWO_DONE:
            return Object.assign({}, state, {step1collected: action.payload})
        
        case GET_FINANCIALS:
            return Object.assign({}, state, {financials: action.payload})
            
        case STEP_THREE_DONE:
            return Object.assign({}, state, {step1collected: action.payload})

        case CLEAR_ALL:
            return Object.assign({}, state, initialState)
        default:
            return state;
    }
}


