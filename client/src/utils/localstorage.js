export function addToLocalStorage(key, value) {
  if (typeof value === "object") {
    localStorage.setItem(key, JSON.stringify(value));
  } else {
    localStorage.setItem(key, value);
  }
}

export function getFromLocalStorage(key) {
  let value = localStorage.getItem(key);
  if (!value) {
    return null;
  }
  try {
    return JSON.parse(value);
  } catch (error) {
    return value;
  }
}

export function updateLocalStorage(key, updatedValue) {
  let value = localStorage.getItem(key);
  if (!value) {
    return null;
  }
  try {
    localStorage.setItem(key, updatedValue);
  } catch (error) {
    return value;
  }
}

export function removeFromLocalStorage(key) {
  localStorage.removeItem(key);
}

const method = {
  addToLocalStorage,
  getFromLocalStorage,
  updateLocalStorage,
  removeFromLocalStorage,
};


export default method;