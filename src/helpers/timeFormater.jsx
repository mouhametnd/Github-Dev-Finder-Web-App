const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const timeFormater = time => {
  const dated = new Date(time);
  const date = dated.getDate();
  const month = months[dated.getMonth()];
  const year = dated.getFullYear();
  
  return `${date} ${month} ${year}`;
};

export default timeFormater;