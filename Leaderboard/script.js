const othersDiv = document.getElementById("others");
const tops = [
  document.getElementById("1"),
  document.getElementById("2"),
  document.getElementById("3"),
];

function convertName(name) {
  return name.split(" ").slice(3).join(" ");
}

function rankparticipations({ name, score, img, pos }, i) {
  let temp = "";

  if (img !== "") {
    let n = convertName(name);

    temp = `<div class="item ${pos}">
    <div class="rank">
      <svg class="green" height="8" viewBox="0 0 7.09 3.704" xmlns="http://www.w3.org/2000/svg"><path clip-path="M0 0h26.879v14.08H0z" d="M-.08 14L13.36-.08 26.798 14z" transform="scale(.26458)" fill-rule="evenodd" /></svg>
      <div class="bold">${i + 1}</div>
      <svg height="8" viewBox="0 0 7.09 3.704" xmlns="http://www.w3.org/2000/svg" class="red invert"><path clip-path="M0 0h26.879v14.08H0z" d="M-.08 14L13.36-.08 26.798 14z" transform="scale(.26458)" fill-rule="evenodd" /></svg>
    </div>
    <div class="cont">
      <div class="det">
        <div class="p_img"><img class="round" src="./Participants/unnamed(${img}).jpg"></div>
        <div style="padding-left: 10px;">
          <p class="name">${n}</p>
          <p class="id">@${n.replace(" ", "_")}</p>
        </div>
      </div>
      <div class="pts"><svg class="heart" viewBox="0 0 93.297 80.128" xmlns="http://www.w3.org/2000/svg"><path d="M25.663 59.133C4.092 37.365 3.523 36.737 1.83 32.881-.3 28.02-.605 21.15 1.097 16.314c.743-2.112 1.569-3.853 2.572-5.421C9.91 1.138 22.803-2.73 33.06 2.076c3.256 1.526 5.284 3.073 9.657 7.37l3.9 3.83 3.773-3.695C56.84 3.264 60.808.98 66.69.197c4.615-.614 9.308.212 13.668 2.404 4.906 2.468 8.07 5.68 10.558 10.72 1.97 3.992 2.413 5.959 2.38 10.583-.021 3.207-.12 4.017-.73 6.032-.76 2.515-1.81 4.767-3.292 7.065-.57.884-9.106 9.643-21.721 22.291C56.12 70.752 46.7 80.128 46.618 80.128c-.083 0-9.513-9.447-20.955-20.995z"/></svg> ${score}</div>
    </div>
    </div>`;
  }

  return temp;
}

function rankTopParticipations({ name, img, score, pos }, i) {
  let participantDiv = tops[i];
  if (i != 0) {
    participantDiv.className = `lbside ${pos}`;
  }
  participantDiv.querySelector(
    ".targetImg"
  ).src = `./Participants/unnamed(${img}).jpg`;
  participantDiv.querySelector(".targetName").innerText = convertName(name);
  participantDiv.querySelector(".targetScore").innerText = score;
}

function render() {
  let p = "";

  participations.forEach((participation, i) => {
    if (i < 3) rankTopParticipations(participation, i);
    else p += rankparticipations(participation, i);
  });

  othersDiv.innerHTML = p;
}

render();
