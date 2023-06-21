// REDUCER
const setColourState = (state: string = "", action: any) => {
  switch (action.type) {
    case "RANDOM":
      return (state = "random");
    case "RED":
      return (state = "red");
    case "GREEN":
      return (state = "green");
    case "BLUE":
      return (state = "blue");
    default:
      return (state = "random");
  }
};

export default setColourState;
