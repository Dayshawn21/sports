import {
	ADD_RESIDENCE,
	DELETE_RESIDENCE,
	UPDATE_RESIDENCE,
	SET_CURRENT,
	CLEAR_FILTER,
	CLEAR_CURRENT,
	FILTER_RESIDENCE
} from '../type';

export default (state, action) => {
  switch(action.type){
    case ADD_RESIDENCE:
      return{
        ...state, 
        residences: [
          ...state.residences, 
          action.payload
        ]
      }
    case UPDATE_RESIDENCE:
      return{
        ...state, 
        residences: state.residences.map(residence =>(residence.id === action.payload.id ? action.payload : residence))
      }
    case DELETE_RESIDENCE:
      return{
        ...state, 
        residences: state.residences.filter(residence =>residence.id !== action.payload)
      }
      case SET_CURRENT:
        return {
          ...state,
          current : action.payload
        };
      case CLEAR_CURRENT:
        return {
          ...state,
          current : null
        };
        case FILTER_RESIDENCE:
          return {
            ...state,
            filtered : state.contacts.filter((residence) => {
              const regex = new RegExp(`${action.payload}`, 'gi');
              return residence.name.match(regex) || residence.email.match(regex);
            })
          };
        case CLEAR_FILTER:
          return {
            ...state,
            filtered : null
          };
    
        default:
          return state;
  }
}