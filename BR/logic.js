// search function
const search = (arr, name) => {
  return arr.filter((ele) => {
    return ele.name.toLowerCase().includes(name.toLowerCase());
  });
};

if (typeof module !== "undefined") {
  module.exports = { search };
}
