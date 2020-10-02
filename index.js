function occupiedfunc(id) {
  value = false;
  for (i = 0; i < occupied.length; i++) {
    if (id == occupied[i]) {
      value = true;
    }
  }
  console.log(occupied);
  return value;
}
function randit(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
function isBetween(a, b, c) {
  value = false;
  if ((a > b && b > c) || (c > b && b > a)) {
    value = true;
  }
  return value;
}
function chess960() {
  var occupied = [];
  // rook 1
  rook1id = randit(0, 7);
  occupied.push(rook1id);
  // rook 2
  rook2id = randit(0, 7);
  while (
    rook2id == rook1id ||
    rook1id + 1 == rook2id ||
    rook1id - 1 == rook2id
  ) {
    rook2id = randit(0, 7);
  }
  // king
  kingid = randit(0, 7);
  if (rook1id + 2 == rook2id) {
    kingid = rook1id + 1;
  } else if (rook1id - 2 == rook2id) {
    kingid = rook2id + 1;
  } else {
    if (rook1id > rook2id) {
      kingid = randit(rook1id, rook2id);
    } else {
      kingid = randit(rook2id, rook1id);
    }
  }
  // bishop 1
  bishop1id = randit(0, 7);
  while (bishop1id == rook1id || bishop1id == rook2id || bishop1id == kingid) {
    bishop1id = randit(0, 7);
  }
  // bishop 2
  bishop2id = randit(0, 7);
  if (bishop1id % 2 == 0) {
    while (
      bishop2id % 2 == 0 ||
      bishop2id == rook1id ||
      bishop2id == rook2id ||
      bishop2id == kingid ||
      bishop2id == bishop1id
    ) {
      bishop2id = randit(0, 7);
    }
  } else {
    while (
      bishop2id % 2 != 0 ||
      bishop2id == rook1id ||
      bishop2id == rook2id ||
      bishop2id == kingid ||
      bishop2id == bishop1id
    ) {
      bishop2id = randit(0, 7);
    }
  }
  //knight 1
  knight1id = randit(0, 7);
  while (
    knight1id == rook1id ||
    knight1id == rook2id ||
    knight1id == kingid ||
    knight1id == bishop1id ||
    knight1id == bishop2id
  ) {
    knight1id = randit(0, 7);
  }
  //knight 2
  knight2id = randit(0, 7);
  while (
    knight2id == rook1id ||
    knight2id == rook2id ||
    knight2id == kingid ||
    knight2id == bishop1id ||
    knight2id == bishop2id ||
    knight2id == knight1id
  ) {
    knight2id = randit(0, 7);
  }
  //queen
  queenid = randit(0, 7);
  while (
    queenid == rook1id ||
    queenid == rook2id ||
    queenid == kingid ||
    queenid == bishop1id ||
    queenid == bishop2id ||
    queenid == knight1id ||
    queenid == knight2id
  ) {
    queenid = randit(0, 7);
  }
  // output
  document.getElementById(rook1id.toString()).src = 'r.png';
  document.getElementById(rook2id.toString()).src = 'r.png';
  document.getElementById(kingid.toString()).src = 'k.png';
  document.getElementById(bishop1id.toString()).src = 'b.png';
  document.getElementById(bishop2id.toString()).src = 'b.png';
  document.getElementById(knight1id.toString()).src = 'kn.png';
  document.getElementById(knight2id.toString()).src = 'kn.png';
  document.getElementById(queenid.toString()).src = 'q.png';
  console.log(rook1id);
  console.log(rook2id);
  console.log(kingid);
  console.log(bishop1id);
  console.log(bishop2id);
}
