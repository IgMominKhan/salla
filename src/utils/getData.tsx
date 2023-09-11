"use client";
const getData = (url: string) => {
  return fetch(url).then((res) => res.json());
};

export default getData;
