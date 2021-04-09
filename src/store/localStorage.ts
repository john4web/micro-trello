export const loadLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("reduxStore");
    if (serializedState === null) {
      return undefined;
    } else {
      return JSON.parse(serializedState);
    }
  } catch (err) {
    return undefined;
  }
};

export const saveLocalStorage = (state: any) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("reduxStore", serializedState);
  } catch (err) {
    return undefined;
  }
};
