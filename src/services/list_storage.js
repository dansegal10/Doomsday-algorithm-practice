const getList = (type) => {
  let result = localStorage.getItem("list" + type);
  if (result === null) {
    return null;
  }
  return result.split(",");
};
const setList = (type, list) => {
  localStorage.setItem("list" + type, list.join(","));
};

export const list_storage = {
  setList,
  getList,
};
