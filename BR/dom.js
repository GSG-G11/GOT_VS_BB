// function to add events to the btns and inputs

const addEvent = (selector, action, callback) => {
  return selector.addEventListener(action, callback);
};

// function to create requsets and applying the callback
const fetch = (method, url, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status) {
        callback(JSON.parse(xhr.responseText));
      } else if (xhr.status === 404) {
        console.log("HTTP error 404 :page not found ");
      } else if (xhr.status === 500) {
        console.log("HTTP error 500 : Internal Server Error");
      }
    }
  };
  xhr.open(method, url);
  xhr.send();
};
