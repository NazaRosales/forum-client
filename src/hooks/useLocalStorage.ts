const setStorage = (item: string, sesion: string) => {
  localStorage.setItem(item, JSON.stringify(sesion));
};
const getStorage = (item: string): string | null => {
  const sesion: string | null = localStorage.getItem(item);
  if (sesion?.length) {
    return JSON.parse(sesion);
  }
  return null;
};

export { setStorage, getStorage };
