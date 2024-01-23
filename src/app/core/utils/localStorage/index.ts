const APP_KEY = "TODO_APP";

//utils para controle do LS
const getStorageItem = (key: string) => {
  const data = window.localStorage.getItem(`${APP_KEY}_${key}`);
  return JSON.parse(data!);
};

const setStorageItem = (key: string, value: object) => {
  const data = JSON.stringify(value);
  return window.localStorage.setItem(`${APP_KEY}_${key}`, data);
};

export { getStorageItem, setStorageItem };
