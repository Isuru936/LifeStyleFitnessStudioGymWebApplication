// utils.js

export const urlSafeEncode = (data) => {
  return encodeURIComponent(data)
    .replace(/[+]/g, "-")
    .replace(/[/]/g, "_")
    .replace(/[=]/g, "");
};
