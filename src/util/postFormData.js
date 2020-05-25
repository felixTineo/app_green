export default (post) => {
  const data = new FormData();
  const props = Object.keys(post);
  for(val of props){
    data.append(`${val}`, post[val]);
  }
  return data;
}