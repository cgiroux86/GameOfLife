export const randomGrid = (arr) => {
  return arr.map((rows) => rows.map((col) => (Math.random() > 0.4 ? 1 : 0)));
};
