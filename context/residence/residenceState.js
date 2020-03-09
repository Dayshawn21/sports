import React, {useReducer} from 'react'
import uuid from 'uuid'
import ResidenceContext from './residenceContent'
import residenceReducer from './residenceReducer'



const ResidenceState = (props) => {
  const initialState = {
    residence : [
      {
        id:1,
        title: "Beauty Residence", 
        price: "$1000", 
        bedroom: "2",
        bathroom: "1",
        location: "Houston",
        Type: "Rent"

      }
    ]
  }




const [state, dispatch] = useReducer(ResidenceReducer, initialState);

return (
  <ResidenceContext.Provider
  value={{
    residence: state.residence,
  }}
  >
    {props.childern}
  </ResidenceContext.Provider>
)
}

export default  ResidenceState