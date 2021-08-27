let participations = [
  {
    name: "12 B 01 Esaky S",
    img: "27",
  },
  {
    name: "12 B 02 Hariish.A",
    img: "28",
  },
  {
    name: "12 B 03 Mohan Dharshan",
    img: "29",
  },
  {
    name: "12 B 04 Raj Srimann",
    img: "6",
  },
  {
    name: "12 B 05 Ritheeswaran",
    img: "30",
  },
  {
    name: "12 B 06 Sanjay",
    img: "31",
  },
  {
    name: "12 B 07 K.Sharaj Shanjay",
    img: "7",
  },
  {
    name: "12 B 08 Sriraam.N",
    img: "32",
  },
  {
    name: "12 B 09 Akshaya",
    img: "33",
  },
  {
    name: "12 B 10 Harshana",
    img: "34",
  },
  {
    name: "12 B 11 Kannika K",
    img: "4",
  },
  {
    name: "12 B 12 Adithya",
    img: "35",
  },
  {
    name: "12 B 13 Logesh Naidu",
    img: "36",
  },
  {
    name: "12 B 14 Shrivathsan",
    img: "37",
  },
  {
    name: "12 B 15 Vinay",
    img: "38",
  },
  {
    name: "12 B 16 ABINAYAA S S",
    img: "39",
  },
  {
    name: "12 B 17 Aparnaa",
    img: "40",
  },
  {
    name: "12 B 18 Ajay Krishna",
    img: "41",
  },
  {
    name: "12 B 19",
    img: "",
  },
  {
    name: "12 B 20 Danush",
    img: "42",
  },
  {
    name: "12 B 21 Dhanush Raghav",
    img: "5",
  },
  {
    name: "12 B 22 Guru Sharan S",
    img: "43",
  },
  {
    name: "12 B 23 Jeyanth A",
    img: "3",
  },
  {
    name: "12 B 24 Kaushik",
    img: "44",
  },
  {
    name: "12 B 25 Krishna Raichura",
    img: "45",
  },
  {
    name: "12 B 26 MAADHAV.C",
    img: "46",
  },
  {
    name: "12 B 27 PREM DHARSHAN",
    img: "47",
  },
  {
    name: "12 B 28 Prithiv Kumar",
    img: "48",
  },
  {
    name: "12 B 29 Priyanshu T",
    img: "0",
  },
  {
    name: "12 B 30 Ravi",
    img: "49",
  },
  {
    name: "12 B 31 Vijay aswath",
    img: "50",
  },
  {
    name: "12 B 32 Vikaas",
    img: "51",
  },
  {
    name: "12 B 33 Aishwarya",
    img: "52",
  },
  {
    name: "12 B 34 Aksharaa",
    img: "53",
  },
  {
    name: "12 B 35 Charulata H",
    img: "2",
  },
  {
    name: "12 B 36 Divya rakshana",
    img: "54",
  },
  {
    name: "12 B 37 Magathi Krishnaa",
    img: "55",
  },
  {
    name: "12 B 38 Nithya",
    img: "1",
  },
  {
    name: "12 B 39 Shreya.J.V",
    img: "56",
  },
  {
    name: "12 B 40 Sreenidhi SP",
    img: "57",
  },
];

// 19 missing

// console.log(participations.length);

// For extracting roll numbers from the name
// participations.forEach((p, i) => {
//   participations[i]["id"] = parseInt(p.name.split(" ").slice(2, 3).join(""));
// });

function arranger() {
  return participations.sort((a, b) => b.score - a.score);
}

function position() {
  participations.forEach((p, i) => {
    i++;
    if (p.rank == i) p.pos = "";
    else if (p.rank > i) p.pos = "up";
    else p.pos = "down";

    p.rank = i;
  });
}

function update(pts, arr) {
  pts = parseInt(pts)
  let decrement = pts / 5;

  arr.forEach((i) => {
    i = parseInt(i);
    for (var j = 0; j < 40; j++) {
      if (pts <= 0) break;
      if (i == participations[j].id) {
        participations[j].score += pts;
        pts = Math.ceil(pts - decrement);
        decrement += Math.ceil(decrement/2);
        break;
      }
    }
  });

  arranger();
  position();
  render();
}

// Startup
// Giving each rank
participations.forEach((p) => {
  p.rank = p.id = parseInt(p.name.split(" ").slice(2, 3).join(""));
  p.score = p.img !== "" ? 0 : -1;
});

arranger();

participations.forEach((p, i) => {
  p.rank = i + 1;
});

position();

/*
  update(3, [1, 3, 5, 10]);
  update(7, [1, 8, 30]);
  update(17, [10, 8, 25]);
  update(100, [1, 8, 30, 9, 40, 5]);
*/
