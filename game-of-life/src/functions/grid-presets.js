export const randomGrid = (arr) => {
  return arr.map((rows) => rows.map((col) => (Math.random() > 0.4 ? 1 : 0)));
};

export const fourCorners = (arr) => {
  const corners = arr.map((rows, i) =>
    rows.map((cols, j) => {
      if (i === 4) {
        if (j >= 5 && j < 10) {
          return 1;
        } else if (j >= 15 && j < 20) {
          return 1;
        } else {
          return 0;
        }
      } else if (i === 20) {
        if (j >= 5 && j < 10) {
          return 1;
        } else if (j >= 15 && j < 20) {
          return 1;
        } else {
          return 0;
        }
      }
    })
  );
  return corners;
};
