const API = "";

export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
        "",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}
