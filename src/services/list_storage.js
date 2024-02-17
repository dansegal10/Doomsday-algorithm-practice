const getList = (type, parse_object = (o) => o) => {
  let result = localStorage.getItem("list" + type);
  if (result === null) {
    return null;
  }
  return result.split(",").map(o => parse_object(o));
};
const setList = (type, list) => {
  localStorage.setItem("list" + type, list.join(","));
};

export const list_storage = {
  setList,
  getList,
};
