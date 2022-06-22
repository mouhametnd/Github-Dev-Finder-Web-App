const getTheme = () => {
  let isDarkMode = JSON.parse(localStorage.getItem('isDarkMode'));
  return isDarkMode === null ? window.matchMedia('(prefers-color-scheme: dark)').matches : isDarkMode;  
};

export default getTheme;
