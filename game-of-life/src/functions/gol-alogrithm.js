//need to find the updated dead and alive cells based on neighbors
//calculate if cell is dead or alive, how many live neighbors it has
export const gol = (arr) => {
  const newArr = arr.map((row, i) =>
    row.map((col, j) => gol_helper(arr, i, j))
  );
  return newArr;
};

export const gol_helper = (arr, idx1, idx2) => {
  //current values of all neighbors, reduce and find total count of neighbors for determining future state
  var liveNeighbors = [
    //check for valid neighbors, if not valid, 0
    arr[idx1 - 1] ? arr[idx1 - 1][idx2 - 1] : 0,
    arr[idx1 - 1] ? arr[idx1 - 1][idx2] : 0,
    arr[idx1 - 1] ? arr[idx1 - 1][idx2 + 1] : 0,
    arr[idx1][idx2 - 1] ? arr[idx1][idx2 - 1] : 0,
    arr[idx1][idx2 + 1] ? arr[idx1][idx2 + 1] : 0,
    arr[idx1 + 1] ? arr[idx1 + 1][idx2 - 1] : 0,
    arr[idx1 + 1] ? arr[idx1 + 1][idx2 + 1] : 0,
    arr[idx1 + 1] ? arr[idx1 + 1][idx2] : 0,
  ];
  const total = liveNeighbors.reduce((a, b) => a + (b ? b : 0), 0);
  return total;
};
