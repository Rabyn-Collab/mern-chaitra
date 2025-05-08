



const u = '[{}]';



export const setToLocal = (users) => {
  localStorage.setItem('users', JSON.stringify(users));
}


export const removeFromLocal = () => {
  localStorage.clear();

}

export const getUsersFromLocal = () => {
  const users = localStorage.getItem('users');
  return users === null ? [] : JSON.parse(users);
}