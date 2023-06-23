// REDUCER
const setUserState = (state: string = "", action: any) => {
  switch (action.type) {
    case "USER":
      return (state = "user");
    case "NOUSER":
      return (state = "nouser");
    default:
      return (state = "nouser");
  }
};

export default setUserState;
