// https://github.com/Blank-09/12-Python/tree/main/Server
const author = "Priyanshu";

const ptsTable = `
  50:  8 14
  50:  23 8 14 27
  50:  27 8 27 23
  50:  8 27 14
  50:  27 14
  100: 23 27
  100: 27 14
  100: 8 23 27
  100: 23 14 27 8
  100: 8 27
`;

// Parser
ptsTable.trim().split("\n").forEach((line) => {
  if (line != "") {
    let quePoints = line;
    quePoints = quePoints.split(":");
    update(quePoints[0].trim(), quePoints[1].trim().split(" "));
  }
});


