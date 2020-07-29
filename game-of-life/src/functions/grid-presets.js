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

export const fourCornersSmall = (arr) => {
  const corners = arr.map((rows, i) =>
    rows.map((cols, j) => {
      if (i === 5) {
        if (j >= 2 && j < 7) {
          return 1;
        } else if (j >= 12 && j < 17) {
          return 1;
        } else {
          return 0;
        }
      } else if (i === 15) {
        if (j >= 2 && j < 7) {
          return 1;
        } else if (j >= 12 && j < 17) {
          return 1;
        } else {
          return 0;
        }
      }
    })
  );
  return corners;
};

export const gliders = (arr) => {
  const glide = arr.map((rows, i) =>
    rows.map((cols, j) => {
      if (i >= 9 && i <= 14) {
        if ((i === 10 || i === 13) && j === 11) {
          return 0;
        }
        if (j >= 10 && j <= 12) {
          return 1;
        }
      } else return 0;
    })
  );
  return glide;
};

export const glidersSmall = (arr) => {
  const glide = arr.map((rows, i) =>
    rows.map((cols, j) => {
      if (i >= 7 && i <= 12) {
        if ((i === 8 || i === 11) && j === 9) {
          return 0;
        }
        if (j >= 8 && j <= 10) {
          return 1;
        }
      } else return 0;
    })
  );
  return glide;
};

export const stables = (arr) => {
  const stable = arr.map((rows, i) =>
    rows.map((cols, j) => {
      if (i === 12 && j >= 6 && j <= 8) {
        return 1;
      } else if (i === 13 && j >= 5 && j <= 7) {
        return 1;
      } else if (i === 12 && j >= 17 && j <= 18) {
        return 1;
      } else if (i === 13 && j === 5) {
        return 1;
      } else if (i === 13 && j === 17) {
        return 1;
      } else if (i === 14 && j === 20) {
        return 1;
      } else if (i === 15 && j >= 19 && j <= 20) {
        return 1;
      }
    })
  );
  return stable;
};

export const findLabelTitle = (label, obj) => {
  console.log(label, obj, "objjjjj");
  switch (label) {
    case "Random":
      return obj[label];
    case "Four Corners":
      return obj[label];
  }
};
