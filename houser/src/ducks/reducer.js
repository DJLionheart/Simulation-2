
const initialState = {
    propertyDetails: {
        propertyname: '',
        address: '',
        city: '',
        state: '',
        zip: 0,
    },
    imageurl: '',
    financials: {
        monthlymortgage: 0,
        desiredrent: 0
    }
}

const GET_PROPERTY = 'GET_PROPERTY',
      GET_IMAGE = 'GET_IMAGE',
      GET_FINANCIALS = 'GET_FINANCIALS';


function getProperty( propertyDetails ) {
    return {
        type: GET_PROPERTY,
        payload: propertyDetails
    }
}

function getImage( imageurl ) {
    return {
        type: GET_IMAGE,
        payload: imageurl
    }
}

function getFinancials( financials ) {
    return {
        type: GET_FINANCIALS,
        payload: financials
    }
}



export default function reducer(state = initialState, action) {
    switch( action.type ) {
        case GET_PROPERTY:
            return Object.assign({}, state, {propertyDetails: action.payload})

        case GET_IMAGE:
            return Object.assign({}, state, {imageurl: action.payload})

        case GET_FINANCIALS:
            return Object.assign({}, state, {financials: action.payload})
            
        default:
            return state;
    }
}


