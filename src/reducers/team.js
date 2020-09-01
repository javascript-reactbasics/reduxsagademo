 const teams=(state=[],action)=>{


    switch(action.type)
    {

   case "SAVE_TEAMS":
    return { ...state, payload: action.payload };

 

    case "SET_DATA":
     
        return { ...state, payload: action.payload };

    default: 
    return state;

    }



}

export default teams;