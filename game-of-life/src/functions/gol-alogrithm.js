export const gol = (arr, idx1, idx2) => {
  let liveNeighbors = [
    arr[idx1 - 1] ? arr[idx1 - 1][idx2 - 1] : 0,
    arr[idx1 - 1] ? arr[idx1 - 1][idx2] : 0,
    arr[idx1 - 1] ? arr[idx1 - 1][idx2 + 1] : 0,
    arr[idx1][idx2 - 1] ? arr[idx1][idx2 - 1] : 0,
    arr[idx1][idx2 + 1] ? arr[idx1][idx2 + 1] : 0,
    arr[idx1 + 1][idx2 - 1] ? arr[idx1 + 1][idx2 - 1] : 0,
    arr[idx1 + 1][idx2 + 1] ? arr[idx1 + 1][idx2 + 1] : 0,
    arr[idx1 + 1][idx2] ? arr[idx1 + 1][idx2] : 0,
  ];
  console.log(liveNeighbors);
};
