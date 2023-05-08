const calculateWinner = squares => {
  // assume the board is travered left to right, top to bottom
  // with sqaures numberd like so below
  // 0, 1, 2
  // 3, 4, 5
  // 6, 7, 8
  // the numbers below represent lines with winning positions of 'X' or 'O'
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return [squares[a], a, b, c];
    }
  }
  return null;
}

export default calculateWinner