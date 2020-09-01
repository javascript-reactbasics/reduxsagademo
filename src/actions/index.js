const getTeams = (payload) => {
  
    return {
      type: "GET_TEAMS",
     
    };
  };

  const saveTeams = (payload) => {
    return {
      type: "SAVE_TEAMS",
      payload:payload
    };
  };
  
  export  { saveTeams, getTeams };