// search function 
const search = (arr, name) => {
  return arr.filter((ele) => {
    return ele.name.toLowerCase().includes(name.toLowerCase());
  });
};
const sortItemsDescending = (arr) => {
  return arr.sort((a, b) => {
    return b.char_id - a.char_id;
  });
};
const sortItemsAscending = (arr) => {
  return arr.sort((a, b) => {
    return a.char_id - b.char_id;
  });
};
if (typeof module !== "undefined") {
  module.exports = { search, sortItemsDescending, sortItemsAscending };
}