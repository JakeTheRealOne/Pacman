//---------- SETTINGS -----------//

let difficutly = "Okay";
let upKey = "z";
let downKey = "s";
let leftKey = "q";
let rightKey = "d";

let skin = "YELL";
//---//
console.log(
  "PACMAN by JakeTheRealOne(#0001 on discord)\n      _      _      _  __  _____     ____     ____   ____    ___   ____    _____ \n     | |    / \\    | |/ / | ____|   / ___|   / ___| |  _ \\  |_ _| |  _ \\  |_   _|\n  _  | |   / _ \\   | ' /  |  _|     \\___ \\  | |     | |_) |  | |  | |_) |   | |  \n | |_| |  / ___ \\  | . \\  | |___     ___) | | |___  |  _ <   | |  |  __/    | |  \n  \\___/  /_/   \\_\\ |_|\\_\\ |_____|   |____/   \\____| |_| \\_\\ |___| |_|       |_|  "
);
//---------- PACME -----------//

let lignedValue = 5;
let columnValue = 8;

let score = 0;
const ScoreText = document.getElementById("score");

let myOrientation = "right";
let Xvalue = 0;
let Yvalue = 0;

const pacme = document.querySelector("#pacme");
pacme.src = "./assets/pacme" + skin + "skin" + myOrientation + ".gif";
const PACMEintertime = 350;

const PHANTOMintertime = 500;

let intervalFirst = setInterval(() => {
  let RIGHTcolumnValue = columnValue + 1;
  let rightPositionVar = "place" + lignedValue + RIGHTcolumnValue;
  if (document.getElementById(rightPositionVar).className === "wall") {
  } else {
    Xvalue += 5;
    pacme.style.transform = "translate(" + Xvalue + "px, " + Yvalue + "px)";
    setTimeout(() => {
      Xvalue += 5;
      pacme.style.transform = "translate(" + Xvalue + "px, " + Yvalue + "px)";
    }, PACMEintertime / 6);
    setTimeout(() => {
      Xvalue += 5;
      pacme.style.transform = "translate(" + Xvalue + "px, " + Yvalue + "px)";
    }, PACMEintertime / 3);
    setTimeout(() => {
      Xvalue += 5;
      pacme.style.transform = "translate(" + Xvalue + "px, " + Yvalue + "px)";
    }, PACMEintertime / 2);
    setTimeout(() => {
      Xvalue += 5;
      pacme.style.transform = "translate(" + Xvalue + "px, " + Yvalue + "px)";
    }, (PACMEintertime / 3) * 2);
    setTimeout(() => {
      Xvalue += 5;
      pacme.style.transform = "translate(" + Xvalue + "px, " + Yvalue + "px)";
    }, (PACMEintertime / 6) * 5);
    columnValue++;
    let myPositionVar = "place" + lignedValue + columnValue;
    let candyOrNot = document.getElementById(myPositionVar);
    if (candyOrNot.className === "candy") {
      setTimeout(() => {
        candyOrNot.classList.remove("candy");
        candyOrNot.classList.add("none");
        score++;
        ScoreText.textContent = "Score  " + score;
      }, PACMEintertime / 4);
    }
  }
}, PACMEintertime);

let intervalLeft;
let intervalRight;
let intervalUp;
let intervalDown;

document.addEventListener("keypress", mainFct);

function mainFct(e) {
  if (e.key === upKey) {
    myOrientation = "up";
    clearInterval(intervalRight);
    clearInterval(intervalFirst);
    clearInterval(intervalLeft);
    clearInterval(intervalUp);
    clearInterval(intervalDown);
    pacme.src = "./assets/pacme" + skin + "skin" + myOrientation + ".gif";
    intervalDown = setInterval(() => {
      let UPlignedValue = lignedValue - 1;
      let upPositionVar = "place" + UPlignedValue + columnValue;
      if (document.getElementById(upPositionVar).className === "wall") {
      } else {
        Yvalue -= 5;
        pacme.style.transform = "translate(" + Xvalue + "px, " + Yvalue + "px)";
        setTimeout(() => {
          Yvalue -= 5;
          pacme.style.transform =
            "translate(" + Xvalue + "px, " + Yvalue + "px)";
        }, PACMEintertime / 6);
        setTimeout(() => {
          Yvalue -= 5;
          pacme.style.transform =
            "translate(" + Xvalue + "px, " + Yvalue + "px)";
        }, PACMEintertime / 3);
        setTimeout(() => {
          Yvalue -= 5;
          pacme.style.transform =
            "translate(" + Xvalue + "px, " + Yvalue + "px)";
        }, PACMEintertime / 2);
        setTimeout(() => {
          Yvalue -= 5;
          pacme.style.transform =
            "translate(" + Xvalue + "px, " + Yvalue + "px)";
        }, (PACMEintertime / 3) * 2);
        setTimeout(() => {
          Yvalue -= 5;
          pacme.style.transform =
            "translate(" + Xvalue + "px, " + Yvalue + "px)";
        }, (PACMEintertime / 6) * 5);
        lignedValue--;
        let myPositionVar = "place" + lignedValue + columnValue;
        let candyOrNot = document.getElementById(myPositionVar);
        if (candyOrNot.className === "candy") {
          setTimeout(() => {
            candyOrNot.classList.remove("candy");
            candyOrNot.classList.add("none");
            score++;
            ScoreText.textContent = "Score  " + score;
          }, PACMEintertime / 4);
        }
      }
    }, PACMEintertime);
    console.log(myOrientation);
  } else if (e.key === downKey) {
    myOrientation = "down";
    clearInterval(intervalRight);
    clearInterval(intervalFirst);
    clearInterval(intervalLeft);
    clearInterval(intervalUp);
    clearInterval(intervalDown);
    pacme.src = "./assets/pacme" + skin + "skin" + myOrientation + ".gif";
    intervalDown = setInterval(() => {
      let DOWNlignedValue = lignedValue + 1;
      let downPositionVar = "place" + DOWNlignedValue + columnValue;
      if (document.getElementById(downPositionVar).className === "wall") {
      } else {
        Yvalue += 5;
        pacme.style.transform = "translate(" + Xvalue + "px, " + Yvalue + "px)";
        setTimeout(() => {
          Yvalue += 5;
          pacme.style.transform =
            "translate(" + Xvalue + "px, " + Yvalue + "px)";
        }, PACMEintertime / 6);
        setTimeout(() => {
          Yvalue += 5;
          pacme.style.transform =
            "translate(" + Xvalue + "px, " + Yvalue + "px)";
        }, PACMEintertime / 3);
        setTimeout(() => {
          Yvalue += 5;
          pacme.style.transform =
            "translate(" + Xvalue + "px, " + Yvalue + "px)";
        }, PACMEintertime / 2);
        setTimeout(() => {
          Yvalue += 5;
          pacme.style.transform =
            "translate(" + Xvalue + "px, " + Yvalue + "px)";
        }, (PACMEintertime / 3) * 2);
        setTimeout(() => {
          Yvalue += 5;
          pacme.style.transform =
            "translate(" + Xvalue + "px, " + Yvalue + "px)";
        }, (PACMEintertime / 6) * 5);
        lignedValue++;
        let myPositionVar = "place" + lignedValue + columnValue;
        let candyOrNot = document.getElementById(myPositionVar);
        if (candyOrNot.className === "candy") {
          setTimeout(() => {
            candyOrNot.classList.remove("candy");
            candyOrNot.classList.add("none");
            score++;
            ScoreText.textContent = "Score  " + score;
          }, PACMEintertime / 4);
        }
      }
    }, PACMEintertime);
    console.log(myOrientation);
  } else if (e.key === leftKey) {
    myOrientation = "left";
    clearInterval(intervalRight);
    clearInterval(intervalFirst);
    clearInterval(intervalLeft);
    clearInterval(intervalUp);
    clearInterval(intervalDown);
    pacme.src = "./assets/pacme" + skin + "skin" + myOrientation + ".gif";
    intervalLeft = setInterval(() => {
      let LEFTcolumnValue = columnValue - 1;
      let leftPositionVar = "place" + lignedValue + LEFTcolumnValue;
      if (document.getElementById(leftPositionVar).className === "wall") {
      } else {
        Xvalue -= 5;
        pacme.style.transform = "translate(" + Xvalue + "px, " + Yvalue + "px)";
        setTimeout(() => {
          Xvalue -= 5;
          pacme.style.transform =
            "translate(" + Xvalue + "px, " + Yvalue + "px)";
        }, PACMEintertime / 6);
        setTimeout(() => {
          Xvalue -= 5;
          pacme.style.transform =
            "translate(" + Xvalue + "px, " + Yvalue + "px)";
        }, PACMEintertime / 3);
        setTimeout(() => {
          Xvalue -= 5;
          pacme.style.transform =
            "translate(" + Xvalue + "px, " + Yvalue + "px)";
        }, PACMEintertime / 2);
        setTimeout(() => {
          Xvalue -= 5;
          pacme.style.transform =
            "translate(" + Xvalue + "px, " + Yvalue + "px)";
        }, (PACMEintertime / 3) * 2);
        setTimeout(() => {
          Xvalue -= 5;
          pacme.style.transform =
            "translate(" + Xvalue + "px, " + Yvalue + "px)";
        }, (PACMEintertime / 6) * 5);
        columnValue--;
        let myPositionVar = "place" + lignedValue + columnValue;
        let candyOrNot = document.getElementById(myPositionVar);
        if (candyOrNot.className === "candy") {
          setTimeout(() => {
            candyOrNot.classList.remove("candy");
            candyOrNot.classList.add("none");
            score++;
            ScoreText.textContent = "Score  " + score;
          }, PACMEintertime / 4);
        }
      }
    }, PACMEintertime);
    console.log(myOrientation);
  } else if (e.key === rightKey) {
    myOrientation = "right";
    clearInterval(intervalLeft);
    clearInterval(intervalFirst);
    clearInterval(intervalRight);
    clearInterval(intervalUp);
    clearInterval(intervalDown);
    pacme.src = "./assets/pacme" + skin + "skin" + myOrientation + ".gif";
    intervalRight = setInterval(() => {
      let RIGHTcolumnValue = columnValue + 1;
      let rightPositionVar = "place" + lignedValue + RIGHTcolumnValue;
      if (document.getElementById(rightPositionVar).className === "wall") {
      } else {
        Xvalue += 5;
        pacme.style.transform = "translate(" + Xvalue + "px, " + Yvalue + "px)";
        setTimeout(() => {
          Xvalue += 5;
          pacme.style.transform =
            "translate(" + Xvalue + "px, " + Yvalue + "px)";
        }, PACMEintertime / 6);
        setTimeout(() => {
          Xvalue += 5;
          pacme.style.transform =
            "translate(" + Xvalue + "px, " + Yvalue + "px)";
        }, PACMEintertime / 3);
        setTimeout(() => {
          Xvalue += 5;
          pacme.style.transform =
            "translate(" + Xvalue + "px, " + Yvalue + "px)";
        }, PACMEintertime / 2);
        setTimeout(() => {
          Xvalue += 5;
          pacme.style.transform =
            "translate(" + Xvalue + "px, " + Yvalue + "px)";
        }, (PACMEintertime / 3) * 2);
        setTimeout(() => {
          Xvalue += 5;
          pacme.style.transform =
            "translate(" + Xvalue + "px, " + Yvalue + "px)";
        }, (PACMEintertime / 6) * 5);
        columnValue++;
        let myPositionVar = "place" + lignedValue + columnValue;
        let candyOrNot = document.getElementById(myPositionVar);
        if (candyOrNot.className === "candy") {
          setTimeout(() => {
            candyOrNot.classList.remove("candy");
            candyOrNot.classList.add("none");
            score++;
            ScoreText.textContent = "Score  " + score;
          }, PACMEintertime / 4);
        }
      }
    }, PACMEintertime);
    console.log(myOrientation);
  }
}
//---------- PHANTOMS 1 -----------//

const phantom1 = document.getElementById("phantom1");

let p1LignedValue = 2;
let p1ColumnValue = 2;

let p1Orientation;

let p1Xvalue = 0;
let p1Yvalue = 0;

let p1Interval = setInterval(() => {
  let random1Value = Math.random();
  if (random1Value < 0.75 && random1Value > 0.5) {
    let p1RIGHTcolumnValue = p1ColumnValue + 1;
    let p1rightPositionVar = "place" + p1LignedValue + p1RIGHTcolumnValue;
    if (document.getElementById(p1rightPositionVar).className === "wall") {
      let p1LEFTcolumnValue = p1ColumnValue - 1;
      let p1leftPositionVar = "place" + p1LignedValue + p1LEFTcolumnValue;
      if (document.getElementById(p1leftPositionVar).className === "wall") {
        let p1UPlignedValue = p1LignedValue - 1;
        let p1upPositionVar = "place" + p1UPlignedValue + p1ColumnValue;
        if (document.getElementById(p1upPositionVar).className === "wall") {
        } else {
          //UP
          p1Yvalue -= 5;
          phantom1.style.transform =
            "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
          setTimeout(() => {
            p1Yvalue -= 5;
            phantom1.style.transform =
              "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
          }, PHANTOMintertime / 6);
          setTimeout(() => {
            p1Yvalue -= 5;
            phantom1.style.transform =
              "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
          }, PHANTOMintertime / 3);
          setTimeout(() => {
            p1Yvalue -= 5;
            phantom1.style.transform =
              "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
          }, PHANTOMintertime / 2);
          setTimeout(() => {
            p1Yvalue -= 5;
            phantom1.style.transform =
              "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
          }, (PHANTOMintertime / 3) * 2);
          setTimeout(() => {
            p1Yvalue -= 5;
            phantom1.style.transform =
              "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
          }, (PHANTOMintertime / 6) * 5);
          p1LignedValue--;
          p1Orientation = "Up";
          phantom1.src = "./assets/phantom1-see" + p1Orientation + ".gif";
        }
      } else {
        //LEFT
        p1Xvalue -= 5;
        phantom1.style.transform =
          "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
        setTimeout(() => {
          p1Xvalue -= 5;
          phantom1.style.transform =
            "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
        }, PHANTOMintertime / 6);
        setTimeout(() => {
          p1Xvalue -= 5;
          phantom1.style.transform =
            "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
        }, PHANTOMintertime / 3);
        setTimeout(() => {
          p1Xvalue -= 5;
          phantom1.style.transform =
            "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
        }, PHANTOMintertime / 2);
        setTimeout(() => {
          p1Xvalue -= 5;
          phantom1.style.transform =
            "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
        }, (PHANTOMintertime / 3) * 2);
        setTimeout(() => {
          p1Xvalue -= 5;
          phantom1.style.transform =
            "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
        }, (PHANTOMintertime / 6) * 5);
        p1ColumnValue--;
        p1Orientation = "Left";
        phantom1.src = "./assets/phantom1-see" + p1Orientation + ".gif";
      }
    } else {
      //RIGHT
      p1Xvalue += 5;
      phantom1.style.transform =
        "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
      setTimeout(() => {
        p1Xvalue += 5;
        phantom1.style.transform =
          "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
      }, PHANTOMintertime / 6);
      setTimeout(() => {
        p1Xvalue += 5;
        phantom1.style.transform =
          "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
      }, PHANTOMintertime / 3);
      setTimeout(() => {
        p1Xvalue += 5;
        phantom1.style.transform =
          "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
      }, PHANTOMintertime / 2);
      setTimeout(() => {
        p1Xvalue += 5;
        phantom1.style.transform =
          "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
      }, (PHANTOMintertime / 3) * 2);
      setTimeout(() => {
        p1Xvalue += 5;
        phantom1.style.transform =
          "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
      }, (PHANTOMintertime / 6) * 5);
      p1ColumnValue++;
      p1Orientation = "Right";
      phantom1.src = "./assets/phantom1-see" + p1Orientation + ".gif";
    }
  }
  if (random1Value < 1 && random1Value > 0.75) {
    let p1UPlignedValue = p1LignedValue - 1;
    let p1upPositionVar = "place" + p1UPlignedValue + p1ColumnValue;
    if (document.getElementById(p1upPositionVar).className === "wall") {
      let p1RIGHTcolumnValue = p1ColumnValue + 1;
      let p1rightPositionVar = "place" + p1LignedValue + p1RIGHTcolumnValue;
      if (document.getElementById(p1rightPositionVar).className === "wall") {
        let p1LEFTcolumnValue = p1ColumnValue - 1;
        let p1leftPositionVar = "place" + p1LignedValue + p1LEFTcolumnValue;
        if (document.getElementById(p1leftPositionVar).className === "wall") {
        } else {
          //LEFT
          p1Xvalue -= 5;
          phantom1.style.transform =
            "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
          setTimeout(() => {
            p1Xvalue -= 5;
            phantom1.style.transform =
              "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
          }, PHANTOMintertime / 6);
          setTimeout(() => {
            p1Xvalue -= 5;
            phantom1.style.transform =
              "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
          }, PHANTOMintertime / 3);
          setTimeout(() => {
            p1Xvalue -= 5;
            phantom1.style.transform =
              "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
          }, PHANTOMintertime / 2);
          setTimeout(() => {
            p1Xvalue -= 5;
            phantom1.style.transform =
              "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
          }, (PHANTOMintertime / 3) * 2);
          setTimeout(() => {
            p1Xvalue -= 5;
            phantom1.style.transform =
              "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
          }, (PHANTOMintertime / 6) * 5);
          p1ColumnValue--;
          p1Orientation = "Left";
          phantom1.src = "./assets/phantom1-see" + p1Orientation + ".gif";
        }
      } else {
        //RIGHT
        p1Xvalue += 5;
        phantom1.style.transform =
          "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
        setTimeout(() => {
          p1Xvalue += 5;
          phantom1.style.transform =
            "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
        }, PHANTOMintertime / 6);
        setTimeout(() => {
          p1Xvalue += 5;
          phantom1.style.transform =
            "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
        }, PHANTOMintertime / 3);
        setTimeout(() => {
          p1Xvalue += 5;
          phantom1.style.transform =
            "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
        }, PHANTOMintertime / 2);
        setTimeout(() => {
          p1Xvalue += 5;
          phantom1.style.transform =
            "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
        }, (PHANTOMintertime / 3) * 2);
        setTimeout(() => {
          p1Xvalue += 5;
          phantom1.style.transform =
            "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
        }, (PHANTOMintertime / 6) * 5);
        p1ColumnValue++;
        p1Orientation = "Right";
        phantom1.src = "./assets/phantom1-see" + p1Orientation + ".gif";
      }
    } else {
      //UP
      p1Yvalue -= 5;
      phantom1.style.transform =
        "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
      setTimeout(() => {
        p1Yvalue -= 5;
        phantom1.style.transform =
          "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
      }, PHANTOMintertime / 6);
      setTimeout(() => {
        p1Yvalue -= 5;
        phantom1.style.transform =
          "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
      }, PHANTOMintertime / 3);
      setTimeout(() => {
        p1Yvalue -= 5;
        phantom1.style.transform =
          "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
      }, PHANTOMintertime / 2);
      setTimeout(() => {
        p1Yvalue -= 5;
        phantom1.style.transform =
          "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
      }, (PHANTOMintertime / 3) * 2);
      setTimeout(() => {
        p1Yvalue -= 5;
        phantom1.style.transform =
          "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
      }, (PHANTOMintertime / 6) * 5);
      p1LignedValue--;
      p1Orientation = "Up";
      phantom1.src = "./assets/phantom1-see" + p1Orientation + ".gif";
    }
  }
  if (random1Value < 0.25) {
    let p1LEFTcolumnValue = p1ColumnValue - 1;
    let p1leftPositionVar = "place" + p1LignedValue + p1LEFTcolumnValue;
    if (document.getElementById(p1leftPositionVar).className === "wall") {
      let p1DOWNlignedValue = p1LignedValue + 1;
      let p1downPositionVar = "place" + p1DOWNlignedValue + p1ColumnValue;
      if (document.getElementById(p1downPositionVar).className === "wall") {
        let p1UPlignedValue = p1LignedValue - 1;
        let p1upPositionVar = "place" + p1UPlignedValue + p1ColumnValue;
        if (document.getElementById(p1upPositionVar).className === "wall") {
          let p1RIGHTcolumnValue = p1ColumnValue + 1;
          let p1rightPositionVar = "place" + p1LignedValue + p1RIGHTcolumnValue;
          if (
            document.getElementById(p1rightPositionVar).className === "wall"
          ) {
          } else {
            p1Xvalue += 5;
            phantom1.style.transform =
              "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
            setTimeout(() => {
              p1Xvalue += 5;
              phantom1.style.transform =
                "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
            }, PHANTOMintertime / 6);
            setTimeout(() => {
              p1Xvalue += 5;
              phantom1.style.transform =
                "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
            }, PHANTOMintertime / 3);
            setTimeout(() => {
              p1Xvalue += 5;
              phantom1.style.transform =
                "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
            }, PHANTOMintertime / 2);
            setTimeout(() => {
              p1Xvalue += 5;
              phantom1.style.transform =
                "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
            }, (PHANTOMintertime / 3) * 2);
            setTimeout(() => {
              p1Xvalue += 5;
              phantom1.style.transform =
                "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
            }, (PHANTOMintertime / 6) * 5);
            p1ColumnValue++;
            p1Orientation = "Right";
            phantom1.src = "./assets/phantom1-see" + p1Orientation + ".gif";
          }
        } else {
          p1Yvalue -= 5;
          phantom1.style.transform =
            "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
          setTimeout(() => {
            p1Yvalue -= 5;
            phantom1.style.transform =
              "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
          }, PHANTOMintertime / 6);
          setTimeout(() => {
            p1Yvalue -= 5;
            phantom1.style.transform =
              "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
          }, PHANTOMintertime / 3);
          setTimeout(() => {
            p1Yvalue -= 5;
            phantom1.style.transform =
              "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
          }, PHANTOMintertime / 2);
          setTimeout(() => {
            p1Yvalue -= 5;
            phantom1.style.transform =
              "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
          }, (PHANTOMintertime / 3) * 2);
          setTimeout(() => {
            p1Yvalue -= 5;
            phantom1.style.transform =
              "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
          }, (PHANTOMintertime / 6) * 5);
          p1LignedValue--;
          p1Orientation = "Up";
          phantom1.src = "./assets/phantom1-see" + p1Orientation + ".gif";
        }
      } else {
        p1Yvalue += 5;
        phantom1.style.transform =
          "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
        setTimeout(() => {
          p1Yvalue += 5;
          phantom1.style.transform =
            "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
        }, PHANTOMintertime / 6);
        setTimeout(() => {
          p1Yvalue += 5;
          phantom1.style.transform =
            "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
        }, PHANTOMintertime / 3);
        setTimeout(() => {
          p1Yvalue += 5;
          phantom1.style.transform =
            "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
        }, PHANTOMintertime / 2);
        setTimeout(() => {
          p1Yvalue += 5;
          phantom1.style.transform =
            "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
        }, (PHANTOMintertime / 3) * 2);
        setTimeout(() => {
          p1Yvalue += 5;
          phantom1.style.transform =
            "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
        }, (PHANTOMintertime / 6) * 5);
        p1LignedValue++;
        p1Orientation = "Down";
        phantom1.src = "./assets/phantom1-see" + p1Orientation + ".gif";
      }
    } else {
      p1Xvalue -= 5;
      phantom1.style.transform =
        "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
      setTimeout(() => {
        p1Xvalue -= 5;
        phantom1.style.transform =
          "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
      }, PHANTOMintertime / 6);
      setTimeout(() => {
        p1Xvalue -= 5;
        phantom1.style.transform =
          "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
      }, PHANTOMintertime / 3);
      setTimeout(() => {
        p1Xvalue -= 5;
        phantom1.style.transform =
          "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
      }, PHANTOMintertime / 2);
      setTimeout(() => {
        p1Xvalue -= 5;
        phantom1.style.transform =
          "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
      }, (PHANTOMintertime / 3) * 2);
      setTimeout(() => {
        p1Xvalue -= 5;
        phantom1.style.transform =
          "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
      }, (PHANTOMintertime / 6) * 5);
      p1ColumnValue--;
      p1Orientation = "Left";
      phantom1.src = "./assets/phantom1-see" + p1Orientation + ".gif";
    }
  }
  if (random1Value < 0.5 && random1Value > 0.25) {
    let p1DOWNlignedValue = p1LignedValue + 1;
    let p1downPositionVar = "place" + p1DOWNlignedValue + p1ColumnValue;
    if (document.getElementById(p1downPositionVar).className === "wall") {
      let p1LEFTcolumnValue = p1ColumnValue - 1;
      let p1leftPositionVar = "place" + p1LignedValue + p1LEFTcolumnValue;
      if (document.getElementById(p1leftPositionVar).className === "wall") {
        let p1UPlignedValue = p1LignedValue - 1;
        let p1upPositionVar = "place" + p1UPlignedValue + p1ColumnValue;
        if (document.getElementById(p1upPositionVar).className === "wall") {
          let p1RIGHTcolumnValue = p1ColumnValue + 1;
          let p1rightPositionVar = "place" + p1LignedValue + p1RIGHTcolumnValue;
          if (
            document.getElementById(p1rightPositionVar).className === "wall"
          ) {
          } else {
            p1Xvalue += 5;
            phantom1.style.transform =
              "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
            setTimeout(() => {
              p1Xvalue += 5;
              phantom1.style.transform =
                "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
            }, PHANTOMintertime / 6);
            setTimeout(() => {
              p1Xvalue += 5;
              phantom1.style.transform =
                "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
            }, PHANTOMintertime / 3);
            setTimeout(() => {
              p1Xvalue += 5;
              phantom1.style.transform =
                "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
            }, PHANTOMintertime / 2);
            setTimeout(() => {
              p1Xvalue += 5;
              phantom1.style.transform =
                "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
            }, (PHANTOMintertime / 3) * 2);
            setTimeout(() => {
              p1Xvalue += 5;
              phantom1.style.transform =
                "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
            }, (PHANTOMintertime / 6) * 5);
            p1ColumnValue++;
            p1Orientation = "Right";
            phantom1.src = "./assets/phantom1-see" + p1Orientation + ".gif";
          }
        } else {
          p1Yvalue -= 5;
          phantom1.style.transform =
            "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
          setTimeout(() => {
            p1Yvalue -= 5;
            phantom1.style.transform =
              "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
          }, PHANTOMintertime / 6);
          setTimeout(() => {
            p1Yvalue -= 5;
            phantom1.style.transform =
              "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
          }, PHANTOMintertime / 3);
          setTimeout(() => {
            p1Yvalue -= 5;
            phantom1.style.transform =
              "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
          }, PHANTOMintertime / 2);
          setTimeout(() => {
            p1Yvalue -= 5;
            phantom1.style.transform =
              "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
          }, (PHANTOMintertime / 3) * 2);
          setTimeout(() => {
            p1Yvalue -= 5;
            phantom1.style.transform =
              "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
          }, (PHANTOMintertime / 6) * 5);
          p1LignedValue--;
          p1Orientation = "Up";
          phantom1.src = "./assets/phantom1-see" + p1Orientation + ".gif";
        }
      } else {
        p1Xvalue -= 5;
        phantom1.style.transform =
          "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
        setTimeout(() => {
          p1Xvalue -= 5;
          phantom1.style.transform =
            "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
        }, PHANTOMintertime / 6);
        setTimeout(() => {
          p1Xvalue -= 5;
          phantom1.style.transform =
            "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
        }, PHANTOMintertime / 3);
        setTimeout(() => {
          p1Xvalue -= 5;
          phantom1.style.transform =
            "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
        }, PHANTOMintertime / 2);
        setTimeout(() => {
          p1Xvalue -= 5;
          phantom1.style.transform =
            "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
        }, (PHANTOMintertime / 3) * 2);
        setTimeout(() => {
          p1Xvalue -= 5;
          phantom1.style.transform =
            "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
        }, (PHANTOMintertime / 6) * 5);
        p1ColumnValue--;
        p1Orientation = "Left";
        phantom1.src = "./assets/phantom1-see" + p1Orientation + ".gif";
      }
    } else {
      p1Yvalue += 5;
      phantom1.style.transform =
        "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
      setTimeout(() => {
        p1Yvalue += 5;
        phantom1.style.transform =
          "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
      }, PHANTOMintertime / 6);
      setTimeout(() => {
        p1Yvalue += 5;
        phantom1.style.transform =
          "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
      }, PHANTOMintertime / 3);
      setTimeout(() => {
        p1Yvalue += 5;
        phantom1.style.transform =
          "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
      }, PHANTOMintertime / 2);
      setTimeout(() => {
        p1Yvalue += 5;
        phantom1.style.transform =
          "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
      }, (PHANTOMintertime / 3) * 2);
      setTimeout(() => {
        p1Yvalue += 5;
        phantom1.style.transform =
          "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
      }, (PHANTOMintertime / 6) * 5);
      p1LignedValue++;
      p1Orientation = "Down";
      phantom1.src = "./assets/phantom1-see" + p1Orientation + ".gif";
    }
  }
}, PHANTOMintertime);

//---------- PHANTOMS 2 -----------//
const phantom2 = document.getElementById("phantom2");

let p2LignedValue = 8;
let p2ColumnValue = 15;

let p2Orientation;

let p2Xvalue = 0;
let p2Yvalue = 0;

let p2Interval = setInterval(() => {
  let random2Value = Math.random();
  if (random2Value < 0.33) {
    let p2RIGHTcolumnValue = p2ColumnValue + 1;
    let p2rightPositionVar = "place" + p2LignedValue + p2RIGHTcolumnValue;
    if (document.getElementById(p2rightPositionVar).className === "wall") {
      let p2LEFTcolumnValue = p2ColumnValue - 1;
      let p2leftPositionVar = "place" + p2LignedValue + p2LEFTcolumnValue;
      if (document.getElementById(p2leftPositionVar).className === "wall") {
        let p2DOWNlignedValue = p2LignedValue + 1;
        let p2downPositionVar = "place" + p2DOWNlignedValue + p2ColumnValue;
        if (document.getElementById(p2downPositionVar).className === "wall") {
          let p2UPlignedValue = p2LignedValue - 1;
          let p2upPositionVar = "place" + p2UPlignedValue + p2ColumnValue;
          if (document.getElementById(p2upPositionVar).className === "wall") {
          } else {
            p2Yvalue -= 5;
            phantom2.style.transform =
              "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
            setTimeout(() => {
              p2Yvalue -= 5;
              phantom2.style.transform =
                "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
            }, PHANTOMintertime / 6);
            setTimeout(() => {
              p2Yvalue -= 5;
              phantom2.style.transform =
                "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
            }, PHANTOMintertime / 3);
            setTimeout(() => {
              p2Yvalue -= 5;
              phantom2.style.transform =
                "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
            }, PHANTOMintertime / 2);
            setTimeout(() => {
              p2Yvalue -= 5;
              phantom2.style.transform =
                "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
            }, (PHANTOMintertime / 3) * 2);
            setTimeout(() => {
              p2Yvalue -= 5;
              phantom2.style.transform =
                "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
            }, (PHANTOMintertime / 6) * 5);
            p2LignedValue--;
            p2Orientation = "Up";
            phantom2.src = "./assets/phantom2-see" + p2Orientation + ".gif";
          }
        } else {
          p2Yvalue += 5;
          phantom2.style.transform =
            "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
          setTimeout(() => {
            p2Yvalue += 5;
            phantom2.style.transform =
              "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
          }, PHANTOMintertime / 6);
          setTimeout(() => {
            p2Yvalue += 5;
            phantom2.style.transform =
              "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
          }, PHANTOMintertime / 3);
          setTimeout(() => {
            p2Yvalue += 5;
            phantom2.style.transform =
              "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
          }, PHANTOMintertime / 2);
          setTimeout(() => {
            p2Yvalue += 5;
            phantom2.style.transform =
              "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
          }, (PHANTOMintertime / 3) * 2);
          setTimeout(() => {
            p2Yvalue += 5;
            phantom2.style.transform =
              "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
          }, (PHANTOMintertime / 6) * 5);
          p2LignedValue++;
          p2Orientation = "Down";
          phantom2.src = "./assets/phantom2-see" + p2Orientation + ".gif";
        }
      } else {
        p2Xvalue -= 5;
        phantom2.style.transform =
          "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
        setTimeout(() => {
          p2Xvalue -= 5;
          phantom2.style.transform =
            "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
        }, PHANTOMintertime / 6);
        setTimeout(() => {
          p2Xvalue -= 5;
          phantom2.style.transform =
            "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
        }, PHANTOMintertime / 3);
        setTimeout(() => {
          p2Xvalue -= 5;
          phantom2.style.transform =
            "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
        }, PHANTOMintertime / 2);
        setTimeout(() => {
          p2Xvalue -= 5;
          phantom2.style.transform =
            "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
        }, (PHANTOMintertime / 3) * 2);
        setTimeout(() => {
          p2Xvalue -= 5;
          phantom2.style.transform =
            "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
        }, (PHANTOMintertime / 6) * 5);
        p2ColumnValue--;
        p2Orientation = "Left";
        phantom2.src = "./assets/phantom2-see" + p2Orientation + ".gif";
      }
    } else {
      p2Xvalue += 5;
      phantom2.style.transform =
        "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
      setTimeout(() => {
        p2Xvalue += 5;
        phantom2.style.transform =
          "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
      }, PHANTOMintertime / 6);
      setTimeout(() => {
        p2Xvalue += 5;
        phantom2.style.transform =
          "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
      }, PHANTOMintertime / 3);
      setTimeout(() => {
        p2Xvalue += 5;
        phantom2.style.transform =
          "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
      }, PHANTOMintertime / 2);
      setTimeout(() => {
        p2Xvalue += 5;
        phantom2.style.transform =
          "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
      }, (PHANTOMintertime / 3) * 2);
      setTimeout(() => {
        p2Xvalue += 5;
        phantom2.style.transform =
          "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
      }, (PHANTOMintertime / 6) * 5);
      p2ColumnValue++;
      p2Orientation = "Right";
      phantom2.src = "./assets/phantom2-see" + p2Orientation + ".gif";
    }
  }
  if (random2Value < 0.66 && random2Value > 0.33) {
    let p2UPlignedValue = p2LignedValue - 1;
    let p2upPositionVar = "place" + p2UPlignedValue + p2ColumnValue;
    if (document.getElementById(p2upPositionVar).className === "wall") {
      let p2DOWNlignedValue = p2LignedValue + 1;
      let p2downPositionVar = "place" + p2DOWNlignedValue + p2ColumnValue;
      if (document.getElementById(p2downPositionVar).className === "wall") {
        let p2LEFTcolumnValue = p2ColumnValue - 1;
        let p2leftPositionVar = "place" + p2LignedValue + p2LEFTcolumnValue;
        if (document.getElementById(p2leftPositionVar).className === "wall") {
          let p2RIGHTcolumnValue = p2ColumnValue + 1;
          let p2rightPositionVar = "place" + p2LignedValue + p2RIGHTcolumnValue;
          if (
            document.getElementById(p2rightPositionVar).className === "wall"
          ) {
          } else {
            p2Xvalue += 5;
            phantom2.style.transform =
              "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
            setTimeout(() => {
              p2Xvalue += 5;
              phantom2.style.transform =
                "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
            }, PHANTOMintertime / 6);
            setTimeout(() => {
              p2Xvalue += 5;
              phantom2.style.transform =
                "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
            }, PHANTOMintertime / 3);
            setTimeout(() => {
              p2Xvalue += 5;
              phantom2.style.transform =
                "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
            }, PHANTOMintertime / 2);
            setTimeout(() => {
              p2Xvalue += 5;
              phantom2.style.transform =
                "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
            }, (PHANTOMintertime / 3) * 2);
            setTimeout(() => {
              p2Xvalue += 5;
              phantom2.style.transform =
                "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
            }, (PHANTOMintertime / 6) * 5);
            p2ColumnValue++;
            p2Orientation = "Right";
            phantom2.src = "./assets/phantom2-see" + p2Orientation + ".gif";
          }
        } else {
          p2Xvalue -= 5;
          phantom2.style.transform =
            "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
          setTimeout(() => {
            p2Xvalue -= 5;
            phantom2.style.transform =
              "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
          }, PHANTOMintertime / 6);
          setTimeout(() => {
            p2Xvalue -= 5;
            phantom2.style.transform =
              "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
          }, PHANTOMintertime / 3);
          setTimeout(() => {
            p2Xvalue -= 5;
            phantom2.style.transform =
              "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
          }, PHANTOMintertime / 2);
          setTimeout(() => {
            p2Xvalue -= 5;
            phantom2.style.transform =
              "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
          }, (PHANTOMintertime / 3) * 2);
          setTimeout(() => {
            p2Xvalue -= 5;
            phantom2.style.transform =
              "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
          }, (PHANTOMintertime / 6) * 5);
          p2ColumnValue--;
          p2Orientation = "Left";
          phantom2.src = "./assets/phantom2-see" + p2Orientation + ".gif";
        }
      } else {
        p2Yvalue += 5;
        phantom2.style.transform =
          "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
        setTimeout(() => {
          p2Yvalue += 5;
          phantom2.style.transform =
            "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
        }, PHANTOMintertime / 6);
        setTimeout(() => {
          p2Yvalue += 5;
          phantom2.style.transform =
            "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
        }, PHANTOMintertime / 3);
        setTimeout(() => {
          p2Yvalue += 5;
          phantom2.style.transform =
            "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
        }, PHANTOMintertime / 2);
        setTimeout(() => {
          p2Yvalue += 5;
          phantom2.style.transform =
            "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
        }, (PHANTOMintertime / 3) * 2);
        setTimeout(() => {
          p2Yvalue += 5;
          phantom2.style.transform =
            "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
        }, (PHANTOMintertime / 6) * 5);
        p2LignedValue++;
        p2Orientation = "Down";
        phantom2.src = "./assets/phantom2-see" + p2Orientation + ".gif";
      }
    } else {
      p2Yvalue -= 5;
      phantom2.style.transform =
        "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
      setTimeout(() => {
        p2Yvalue -= 5;
        phantom2.style.transform =
          "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
      }, PHANTOMintertime / 6);
      setTimeout(() => {
        p2Yvalue -= 5;
        phantom2.style.transform =
          "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
      }, PHANTOMintertime / 3);
      setTimeout(() => {
        p2Yvalue -= 5;
        phantom2.style.transform =
          "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
      }, PHANTOMintertime / 2);
      setTimeout(() => {
        p2Yvalue -= 5;
        phantom2.style.transform =
          "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
      }, (PHANTOMintertime / 3) * 2);
      setTimeout(() => {
        p2Yvalue -= 5;
        phantom2.style.transform =
          "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
      }, (PHANTOMintertime / 6) * 5);
      p2LignedValue--;
      p2Orientation = "Up";
      phantom2.src = "./assets/phantom2-see" + p2Orientation + ".gif";
    }
  }
  if (random2Value < 1 && random2Value > 0.66) {
    let p2LEFTcolumnValue = p2ColumnValue - 1;
    let p2leftPositionVar = "place" + p2LignedValue + p2LEFTcolumnValue;
    if (document.getElementById(p2leftPositionVar).className === "wall") {
      let p2DOWNlignedValue = p2LignedValue + 1;
      let p2downPositionVar = "place" + p2DOWNlignedValue + p2ColumnValue;
      if (document.getElementById(p2downPositionVar).className === "wall") {
        let p2RIGHTcolumnValue = p2ColumnValue + 1;
        let p2rightPositionVar = "place" + p2LignedValue + p2RIGHTcolumnValue;
        if (document.getElementById(p2rightPositionVar).className === "wall") {
          let p2UPlignedValue = p2LignedValue - 1;
          let p2upPositionVar = "place" + p2UPlignedValue + p2ColumnValue;
          if (document.getElementById(p2upPositionVar).className === "wall") {
          } else {
            p2Yvalue -= 5;
            phantom2.style.transform =
              "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
            setTimeout(() => {
              p2Yvalue -= 5;
              phantom2.style.transform =
                "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
            }, PHANTOMintertime / 6);
            setTimeout(() => {
              p2Yvalue -= 5;
              phantom2.style.transform =
                "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
            }, PHANTOMintertime / 3);
            setTimeout(() => {
              p2Yvalue -= 5;
              phantom2.style.transform =
                "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
            }, PHANTOMintertime / 2);
            setTimeout(() => {
              p2Yvalue -= 5;
              phantom2.style.transform =
                "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
            }, (PHANTOMintertime / 3) * 2);
            setTimeout(() => {
              p2Yvalue -= 5;
              phantom2.style.transform =
                "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
            }, (PHANTOMintertime / 6) * 5);
            p2LignedValue--;
            p2Orientation = "Up";
            phantom2.src = "./assets/phantom2-see" + p2Orientation + ".gif";
          }
        } else {
          p2Xvalue += 5;
          phantom2.style.transform =
            "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
          setTimeout(() => {
            p2Xvalue += 5;
            phantom2.style.transform =
              "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
          }, PHANTOMintertime / 6);
          setTimeout(() => {
            p2Xvalue += 5;
            phantom2.style.transform =
              "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
          }, PHANTOMintertime / 3);
          setTimeout(() => {
            p2Xvalue += 5;
            phantom2.style.transform =
              "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
          }, PHANTOMintertime / 2);
          setTimeout(() => {
            p2Xvalue += 5;
            phantom2.style.transform =
              "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
          }, (PHANTOMintertime / 3) * 2);
          setTimeout(() => {
            p2Xvalue += 5;
            phantom2.style.transform =
              "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
          }, (PHANTOMintertime / 6) * 5);
          p2ColumnValue++;
          p2Orientation = "Right";
          phantom2.src = "./assets/phantom2-see" + p2Orientation + ".gif";
        }
      } else {
        p2Yvalue += 5;
        phantom2.style.transform =
          "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
        setTimeout(() => {
          p2Yvalue += 5;
          phantom2.style.transform =
            "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
        }, PHANTOMintertime / 6);
        setTimeout(() => {
          p2Yvalue += 5;
          phantom2.style.transform =
            "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
        }, PHANTOMintertime / 3);
        setTimeout(() => {
          p2Yvalue += 5;
          phantom2.style.transform =
            "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
        }, PHANTOMintertime / 2);
        setTimeout(() => {
          p2Yvalue += 5;
          phantom2.style.transform =
            "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
        }, (PHANTOMintertime / 3) * 2);
        setTimeout(() => {
          p2Yvalue += 5;
          phantom2.style.transform =
            "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
        }, (PHANTOMintertime / 6) * 5);
        p2LignedValue++;
        p2Orientation = "Down";
        phantom2.src = "./assets/phantom2-see" + p2Orientation + ".gif";
      }
    } else {
      p2Xvalue -= 5;
      phantom2.style.transform =
        "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
      setTimeout(() => {
        p2Xvalue -= 5;
        phantom2.style.transform =
          "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
      }, PHANTOMintertime / 6);
      setTimeout(() => {
        p2Xvalue -= 5;
        phantom2.style.transform =
          "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
      }, PHANTOMintertime / 3);
      setTimeout(() => {
        p2Xvalue -= 5;
        phantom2.style.transform =
          "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
      }, PHANTOMintertime / 2);
      setTimeout(() => {
        p2Xvalue -= 5;
        phantom2.style.transform =
          "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
      }, (PHANTOMintertime / 3) * 2);
      setTimeout(() => {
        p2Xvalue -= 5;
        phantom2.style.transform =
          "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
      }, (PHANTOMintertime / 6) * 5);
      p2ColumnValue--;
      p2Orientation = "Left";
      phantom2.src = "./assets/phantom2-see" + p2Orientation + ".gif";
    }
  }
}, PHANTOMintertime);

//---------- FINAL -----------//

const finalWord = document.querySelector("h2");
const buttonL = document.getElementById("buttonL");
const noneCase = document.getElementsByClassName("none");

let finalInterval = setInterval(() => {
  let myPositionVar = "place" + lignedValue + columnValue;
  let p2PositionVar = "place" + p2LignedValue + p2ColumnValue;
  let p1PositionVar = "place" + p1LignedValue + p1ColumnValue;
  if (myPositionVar === p2PositionVar || myPositionVar === p1PositionVar) {
    pacme.style.visibility = "hidden";
    finalWord.style.fontSize = "3.5rem";
    finalWord.textContent = "Game over";
    console.log("Loser !");
    clearInterval(intervalRight);
    clearInterval(intervalFirst);
    clearInterval(intervalLeft);
    clearInterval(intervalUp);
    clearInterval(intervalDown);
    clearInterval(finalInterval);
    clearInterval(p1Interval);
    clearInterval(p2Interval);
    document.removeEventListener("keypress", mainFct);
    finalWord.style.visibility = "visible";
    buttonL.style.visibility = "visible";
    buttonL.disabled = false;
  }
  if (score > 67) {
    finalWord.textContent = "GG";
    console.log("Winner !");
    clearInterval(finalInterval);
    clearInterval(intervalRight);
    clearInterval(intervalFirst);
    clearInterval(intervalLeft);
    clearInterval(intervalUp);
    clearInterval(intervalDown);
    clearInterval(p1Interval);
    clearInterval(p2Interval);
    document.removeEventListener("keypress", mainFct);
    finalWord.style.fontSize = "5rem";
    finalWord.style.visibility = "visible";
    buttonL.style.visibility = "visible";
    buttonL.disabled = false;
  }
}, 10);

function buttonLfct() {
  pacme.style.visibility = "visible";
  myOrientation = "Right";
  pacme.src = "./assets/pacme" + skin + "skin" + myOrientation + ".gif";
  Xvalue = 0;
  Yvalue = 0;
  p1Xvalue = 0;
  p1Yvalue = 0;
  p2Xvalue = 0;
  p2Yvalue = 0;
  p2LignedValue = 8;
  p2ColumnValue = 15;
  lignedValue = 5;
  columnValue = 8;
  p1LignedValue = 2;
  p1ColumnValue = 2;
  score = 0;
  phantom1.style.transform = "translate(" + 0 + "px, " + 0 + "px)";
  phantom2.style.transform = "translate(" + 0 + "px, " + 0 + "px)";
  pacme.style.transform = "translate(" + 0 + "px, " + 0 + "px)";
  intervalFirst = setInterval(() => {
    let RIGHTcolumnValue = columnValue + 1;
    let rightPositionVar = "place" + lignedValue + RIGHTcolumnValue;
    if (document.getElementById(rightPositionVar).className === "wall") {
    } else {
      Xvalue += 5;
      pacme.style.transform = "translate(" + Xvalue + "px, " + Yvalue + "px)";
      setTimeout(() => {
        Xvalue += 5;
        pacme.style.transform = "translate(" + Xvalue + "px, " + Yvalue + "px)";
      }, PACMEintertime / 6);
      setTimeout(() => {
        Xvalue += 5;
        pacme.style.transform = "translate(" + Xvalue + "px, " + Yvalue + "px)";
      }, PACMEintertime / 3);
      setTimeout(() => {
        Xvalue += 5;
        pacme.style.transform = "translate(" + Xvalue + "px, " + Yvalue + "px)";
      }, PACMEintertime / 2);
      setTimeout(() => {
        Xvalue += 5;
        pacme.style.transform = "translate(" + Xvalue + "px, " + Yvalue + "px)";
      }, (PACMEintertime / 3) * 2);
      setTimeout(() => {
        Xvalue += 5;
        pacme.style.transform = "translate(" + Xvalue + "px, " + Yvalue + "px)";
      }, (PACMEintertime / 6) * 5);
      columnValue++;
      let myPositionVar = "place" + lignedValue + columnValue;
      let candyOrNot = document.getElementById(myPositionVar);
      if (candyOrNot.className === "candy") {
        setTimeout(() => {
          candyOrNot.classList.remove("candy");
          candyOrNot.classList.add("none");
          score++;
        }, PACMEintertime / 4);
      }
    }
  }, PACMEintertime);
  p1Interval = setInterval(() => {
    let random1Value = Math.random();
    if (random1Value < 0.75 && random1Value > 0.5) {
      let p1RIGHTcolumnValue = p1ColumnValue + 1;
      let p1rightPositionVar = "place" + p1LignedValue + p1RIGHTcolumnValue;
      if (document.getElementById(p1rightPositionVar).className === "wall") {
        let p1LEFTcolumnValue = p1ColumnValue - 1;
        let p1leftPositionVar = "place" + p1LignedValue + p1LEFTcolumnValue;
        if (document.getElementById(p1leftPositionVar).className === "wall") {
          let p1UPlignedValue = p1LignedValue - 1;
          let p1upPositionVar = "place" + p1UPlignedValue + p1ColumnValue;
          if (document.getElementById(p1upPositionVar).className === "wall") {
          } else {
            //UP
            p1Yvalue -= 5;
            phantom1.style.transform =
              "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
            setTimeout(() => {
              p1Yvalue -= 5;
              phantom1.style.transform =
                "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
            }, PHANTOMintertime / 6);
            setTimeout(() => {
              p1Yvalue -= 5;
              phantom1.style.transform =
                "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
            }, PHANTOMintertime / 3);
            setTimeout(() => {
              p1Yvalue -= 5;
              phantom1.style.transform =
                "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
            }, PHANTOMintertime / 2);
            setTimeout(() => {
              p1Yvalue -= 5;
              phantom1.style.transform =
                "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
            }, (PHANTOMintertime / 3) * 2);
            setTimeout(() => {
              p1Yvalue -= 5;
              phantom1.style.transform =
                "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
            }, (PHANTOMintertime / 6) * 5);
            p1LignedValue--;
            p1Orientation = "Up";
            phantom1.src = "./assets/phantom1-see" + p1Orientation + ".gif";
          }
        } else {
          //LEFT
          p1Xvalue -= 5;
          phantom1.style.transform =
            "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
          setTimeout(() => {
            p1Xvalue -= 5;
            phantom1.style.transform =
              "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
          }, PHANTOMintertime / 6);
          setTimeout(() => {
            p1Xvalue -= 5;
            phantom1.style.transform =
              "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
          }, PHANTOMintertime / 3);
          setTimeout(() => {
            p1Xvalue -= 5;
            phantom1.style.transform =
              "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
          }, PHANTOMintertime / 2);
          setTimeout(() => {
            p1Xvalue -= 5;
            phantom1.style.transform =
              "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
          }, (PHANTOMintertime / 3) * 2);
          setTimeout(() => {
            p1Xvalue -= 5;
            phantom1.style.transform =
              "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
          }, (PHANTOMintertime / 6) * 5);
          p1ColumnValue--;
          p1Orientation = "Left";
          phantom1.src = "./assets/phantom1-see" + p1Orientation + ".gif";
        }
      } else {
        //RIGHT
        p1Xvalue += 5;
        phantom1.style.transform =
          "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
        setTimeout(() => {
          p1Xvalue += 5;
          phantom1.style.transform =
            "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
        }, PHANTOMintertime / 6);
        setTimeout(() => {
          p1Xvalue += 5;
          phantom1.style.transform =
            "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
        }, PHANTOMintertime / 3);
        setTimeout(() => {
          p1Xvalue += 5;
          phantom1.style.transform =
            "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
        }, PHANTOMintertime / 2);
        setTimeout(() => {
          p1Xvalue += 5;
          phantom1.style.transform =
            "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
        }, (PHANTOMintertime / 3) * 2);
        setTimeout(() => {
          p1Xvalue += 5;
          phantom1.style.transform =
            "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
        }, (PHANTOMintertime / 6) * 5);
        p1ColumnValue++;
        p1Orientation = "Right";
        phantom1.src = "./assets/phantom1-see" + p1Orientation + ".gif";
      }
    }
    if (random1Value < 1 && random1Value > 0.75) {
      let p1UPlignedValue = p1LignedValue - 1;
      let p1upPositionVar = "place" + p1UPlignedValue + p1ColumnValue;
      if (document.getElementById(p1upPositionVar).className === "wall") {
        let p1RIGHTcolumnValue = p1ColumnValue + 1;
        let p1rightPositionVar = "place" + p1LignedValue + p1RIGHTcolumnValue;
        if (document.getElementById(p1rightPositionVar).className === "wall") {
          let p1LEFTcolumnValue = p1ColumnValue - 1;
          let p1leftPositionVar = "place" + p1LignedValue + p1LEFTcolumnValue;
          if (document.getElementById(p1leftPositionVar).className === "wall") {
          } else {
            //LEFT
            p1Xvalue -= 5;
            phantom1.style.transform =
              "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
            setTimeout(() => {
              p1Xvalue -= 5;
              phantom1.style.transform =
                "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
            }, PHANTOMintertime / 6);
            setTimeout(() => {
              p1Xvalue -= 5;
              phantom1.style.transform =
                "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
            }, PHANTOMintertime / 3);
            setTimeout(() => {
              p1Xvalue -= 5;
              phantom1.style.transform =
                "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
            }, PHANTOMintertime / 2);
            setTimeout(() => {
              p1Xvalue -= 5;
              phantom1.style.transform =
                "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
            }, (PHANTOMintertime / 3) * 2);
            setTimeout(() => {
              p1Xvalue -= 5;
              phantom1.style.transform =
                "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
            }, (PHANTOMintertime / 6) * 5);
            p1ColumnValue--;
            p1Orientation = "Left";
            phantom1.src = "./assets/phantom1-see" + p1Orientation + ".gif";
          }
        } else {
          //RIGHT
          p1Xvalue += 5;
          phantom1.style.transform =
            "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
          setTimeout(() => {
            p1Xvalue += 5;
            phantom1.style.transform =
              "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
          }, PHANTOMintertime / 6);
          setTimeout(() => {
            p1Xvalue += 5;
            phantom1.style.transform =
              "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
          }, PHANTOMintertime / 3);
          setTimeout(() => {
            p1Xvalue += 5;
            phantom1.style.transform =
              "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
          }, PHANTOMintertime / 2);
          setTimeout(() => {
            p1Xvalue += 5;
            phantom1.style.transform =
              "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
          }, (PHANTOMintertime / 3) * 2);
          setTimeout(() => {
            p1Xvalue += 5;
            phantom1.style.transform =
              "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
          }, (PHANTOMintertime / 6) * 5);
          p1ColumnValue++;
          p1Orientation = "Right";
          phantom1.src = "./assets/phantom1-see" + p1Orientation + ".gif";
        }
      } else {
        //UP
        p1Yvalue -= 5;
        phantom1.style.transform =
          "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
        setTimeout(() => {
          p1Yvalue -= 5;
          phantom1.style.transform =
            "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
        }, PHANTOMintertime / 6);
        setTimeout(() => {
          p1Yvalue -= 5;
          phantom1.style.transform =
            "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
        }, PHANTOMintertime / 3);
        setTimeout(() => {
          p1Yvalue -= 5;
          phantom1.style.transform =
            "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
        }, PHANTOMintertime / 2);
        setTimeout(() => {
          p1Yvalue -= 5;
          phantom1.style.transform =
            "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
        }, (PHANTOMintertime / 3) * 2);
        setTimeout(() => {
          p1Yvalue -= 5;
          phantom1.style.transform =
            "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
        }, (PHANTOMintertime / 6) * 5);
        p1LignedValue--;
        p1Orientation = "Up";
        phantom1.src = "./assets/phantom1-see" + p1Orientation + ".gif";
      }
    }
    if (random1Value < 0.25) {
      let p1LEFTcolumnValue = p1ColumnValue - 1;
      let p1leftPositionVar = "place" + p1LignedValue + p1LEFTcolumnValue;
      if (document.getElementById(p1leftPositionVar).className === "wall") {
        let p1DOWNlignedValue = p1LignedValue + 1;
        let p1downPositionVar = "place" + p1DOWNlignedValue + p1ColumnValue;
        if (document.getElementById(p1downPositionVar).className === "wall") {
          let p1UPlignedValue = p1LignedValue - 1;
          let p1upPositionVar = "place" + p1UPlignedValue + p1ColumnValue;
          if (document.getElementById(p1upPositionVar).className === "wall") {
            let p1RIGHTcolumnValue = p1ColumnValue + 1;
            let p1rightPositionVar =
              "place" + p1LignedValue + p1RIGHTcolumnValue;
            if (
              document.getElementById(p1rightPositionVar).className === "wall"
            ) {
            } else {
              p1Xvalue += 5;
              phantom1.style.transform =
                "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
              setTimeout(() => {
                p1Xvalue += 5;
                phantom1.style.transform =
                  "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
              }, PHANTOMintertime / 6);
              setTimeout(() => {
                p1Xvalue += 5;
                phantom1.style.transform =
                  "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
              }, PHANTOMintertime / 3);
              setTimeout(() => {
                p1Xvalue += 5;
                phantom1.style.transform =
                  "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
              }, PHANTOMintertime / 2);
              setTimeout(() => {
                p1Xvalue += 5;
                phantom1.style.transform =
                  "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
              }, (PHANTOMintertime / 3) * 2);
              setTimeout(() => {
                p1Xvalue += 5;
                phantom1.style.transform =
                  "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
              }, (PHANTOMintertime / 6) * 5);
              p1ColumnValue++;
              p1Orientation = "Right";
              phantom1.src = "./assets/phantom1-see" + p1Orientation + ".gif";
            }
          } else {
            p1Yvalue -= 5;
            phantom1.style.transform =
              "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
            setTimeout(() => {
              p1Yvalue -= 5;
              phantom1.style.transform =
                "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
            }, PHANTOMintertime / 6);
            setTimeout(() => {
              p1Yvalue -= 5;
              phantom1.style.transform =
                "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
            }, PHANTOMintertime / 3);
            setTimeout(() => {
              p1Yvalue -= 5;
              phantom1.style.transform =
                "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
            }, PHANTOMintertime / 2);
            setTimeout(() => {
              p1Yvalue -= 5;
              phantom1.style.transform =
                "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
            }, (PHANTOMintertime / 3) * 2);
            setTimeout(() => {
              p1Yvalue -= 5;
              phantom1.style.transform =
                "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
            }, (PHANTOMintertime / 6) * 5);
            p1LignedValue--;
            p1Orientation = "Up";
            phantom1.src = "./assets/phantom1-see" + p1Orientation + ".gif";
          }
        } else {
          p1Yvalue += 5;
          phantom1.style.transform =
            "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
          setTimeout(() => {
            p1Yvalue += 5;
            phantom1.style.transform =
              "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
          }, PHANTOMintertime / 6);
          setTimeout(() => {
            p1Yvalue += 5;
            phantom1.style.transform =
              "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
          }, PHANTOMintertime / 3);
          setTimeout(() => {
            p1Yvalue += 5;
            phantom1.style.transform =
              "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
          }, PHANTOMintertime / 2);
          setTimeout(() => {
            p1Yvalue += 5;
            phantom1.style.transform =
              "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
          }, (PHANTOMintertime / 3) * 2);
          setTimeout(() => {
            p1Yvalue += 5;
            phantom1.style.transform =
              "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
          }, (PHANTOMintertime / 6) * 5);
          p1LignedValue++;
          p1Orientation = "Down";
          phantom1.src = "./assets/phantom1-see" + p1Orientation + ".gif";
        }
      } else {
        p1Xvalue -= 5;
        phantom1.style.transform =
          "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
        setTimeout(() => {
          p1Xvalue -= 5;
          phantom1.style.transform =
            "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
        }, PHANTOMintertime / 6);
        setTimeout(() => {
          p1Xvalue -= 5;
          phantom1.style.transform =
            "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
        }, PHANTOMintertime / 3);
        setTimeout(() => {
          p1Xvalue -= 5;
          phantom1.style.transform =
            "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
        }, PHANTOMintertime / 2);
        setTimeout(() => {
          p1Xvalue -= 5;
          phantom1.style.transform =
            "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
        }, (PHANTOMintertime / 3) * 2);
        setTimeout(() => {
          p1Xvalue -= 5;
          phantom1.style.transform =
            "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
        }, (PHANTOMintertime / 6) * 5);
        p1ColumnValue--;
        p1Orientation = "Left";
        phantom1.src = "./assets/phantom1-see" + p1Orientation + ".gif";
      }
    }
    if (random1Value < 0.5 && random1Value > 0.25) {
      let p1DOWNlignedValue = p1LignedValue + 1;
      let p1downPositionVar = "place" + p1DOWNlignedValue + p1ColumnValue;
      if (document.getElementById(p1downPositionVar).className === "wall") {
        let p1LEFTcolumnValue = p1ColumnValue - 1;
        let p1leftPositionVar = "place" + p1LignedValue + p1LEFTcolumnValue;
        if (document.getElementById(p1leftPositionVar).className === "wall") {
          let p1UPlignedValue = p1LignedValue - 1;
          let p1upPositionVar = "place" + p1UPlignedValue + p1ColumnValue;
          if (document.getElementById(p1upPositionVar).className === "wall") {
            let p1RIGHTcolumnValue = p1ColumnValue + 1;
            let p1rightPositionVar =
              "place" + p1LignedValue + p1RIGHTcolumnValue;
            if (
              document.getElementById(p1rightPositionVar).className === "wall"
            ) {
            } else {
              p1Xvalue += 5;
              phantom1.style.transform =
                "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
              setTimeout(() => {
                p1Xvalue += 5;
                phantom1.style.transform =
                  "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
              }, PHANTOMintertime / 6);
              setTimeout(() => {
                p1Xvalue += 5;
                phantom1.style.transform =
                  "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
              }, PHANTOMintertime / 3);
              setTimeout(() => {
                p1Xvalue += 5;
                phantom1.style.transform =
                  "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
              }, PHANTOMintertime / 2);
              setTimeout(() => {
                p1Xvalue += 5;
                phantom1.style.transform =
                  "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
              }, (PHANTOMintertime / 3) * 2);
              setTimeout(() => {
                p1Xvalue += 5;
                phantom1.style.transform =
                  "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
              }, (PHANTOMintertime / 6) * 5);
              p1ColumnValue++;
              p1Orientation = "Right";
              phantom1.src = "./assets/phantom1-see" + p1Orientation + ".gif";
            }
          } else {
            p1Yvalue -= 5;
            phantom1.style.transform =
              "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
            setTimeout(() => {
              p1Yvalue -= 5;
              phantom1.style.transform =
                "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
            }, PHANTOMintertime / 6);
            setTimeout(() => {
              p1Yvalue -= 5;
              phantom1.style.transform =
                "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
            }, PHANTOMintertime / 3);
            setTimeout(() => {
              p1Yvalue -= 5;
              phantom1.style.transform =
                "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
            }, PHANTOMintertime / 2);
            setTimeout(() => {
              p1Yvalue -= 5;
              phantom1.style.transform =
                "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
            }, (PHANTOMintertime / 3) * 2);
            setTimeout(() => {
              p1Yvalue -= 5;
              phantom1.style.transform =
                "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
            }, (PHANTOMintertime / 6) * 5);
            p1LignedValue--;
            p1Orientation = "Up";
            phantom1.src = "./assets/phantom1-see" + p1Orientation + ".gif";
          }
        } else {
          p1Xvalue -= 5;
          phantom1.style.transform =
            "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
          setTimeout(() => {
            p1Xvalue -= 5;
            phantom1.style.transform =
              "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
          }, PHANTOMintertime / 6);
          setTimeout(() => {
            p1Xvalue -= 5;
            phantom1.style.transform =
              "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
          }, PHANTOMintertime / 3);
          setTimeout(() => {
            p1Xvalue -= 5;
            phantom1.style.transform =
              "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
          }, PHANTOMintertime / 2);
          setTimeout(() => {
            p1Xvalue -= 5;
            phantom1.style.transform =
              "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
          }, (PHANTOMintertime / 3) * 2);
          setTimeout(() => {
            p1Xvalue -= 5;
            phantom1.style.transform =
              "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
          }, (PHANTOMintertime / 6) * 5);
          p1ColumnValue--;
          p1Orientation = "Left";
          phantom1.src = "./assets/phantom1-see" + p1Orientation + ".gif";
        }
      } else {
        p1Yvalue += 5;
        phantom1.style.transform =
          "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
        setTimeout(() => {
          p1Yvalue += 5;
          phantom1.style.transform =
            "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
        }, PHANTOMintertime / 6);
        setTimeout(() => {
          p1Yvalue += 5;
          phantom1.style.transform =
            "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
        }, PHANTOMintertime / 3);
        setTimeout(() => {
          p1Yvalue += 5;
          phantom1.style.transform =
            "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
        }, PHANTOMintertime / 2);
        setTimeout(() => {
          p1Yvalue += 5;
          phantom1.style.transform =
            "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
        }, (PHANTOMintertime / 3) * 2);
        setTimeout(() => {
          p1Yvalue += 5;
          phantom1.style.transform =
            "translate(" + p1Xvalue + "px, " + p1Yvalue + "px)";
        }, (PHANTOMintertime / 6) * 5);
        p1LignedValue++;
        p1Orientation = "Down";
        phantom1.src = "./assets/phantom1-see" + p1Orientation + ".gif";
      }
    }
  }, PHANTOMintertime);
  p2Interval = setInterval(() => {
    let random2Value = Math.random();
    if (random2Value < 0.33) {
      let p2RIGHTcolumnValue = p2ColumnValue + 1;
      let p2rightPositionVar = "place" + p2LignedValue + p2RIGHTcolumnValue;
      if (document.getElementById(p2rightPositionVar).className === "wall") {
        let p2LEFTcolumnValue = p2ColumnValue - 1;
        let p2leftPositionVar = "place" + p2LignedValue + p2LEFTcolumnValue;
        if (document.getElementById(p2leftPositionVar).className === "wall") {
          let p2DOWNlignedValue = p2LignedValue + 1;
          let p2downPositionVar = "place" + p2DOWNlignedValue + p2ColumnValue;
          if (document.getElementById(p2downPositionVar).className === "wall") {
            let p2UPlignedValue = p2LignedValue - 1;
            let p2upPositionVar = "place" + p2UPlignedValue + p2ColumnValue;
            if (document.getElementById(p2upPositionVar).className === "wall") {
            } else {
              p2Yvalue -= 5;
              phantom2.style.transform =
                "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
              setTimeout(() => {
                p2Yvalue -= 5;
                phantom2.style.transform =
                  "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
              }, PHANTOMintertime / 6);
              setTimeout(() => {
                p2Yvalue -= 5;
                phantom2.style.transform =
                  "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
              }, PHANTOMintertime / 3);
              setTimeout(() => {
                p2Yvalue -= 5;
                phantom2.style.transform =
                  "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
              }, PHANTOMintertime / 2);
              setTimeout(() => {
                p2Yvalue -= 5;
                phantom2.style.transform =
                  "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
              }, (PHANTOMintertime / 3) * 2);
              setTimeout(() => {
                p2Yvalue -= 5;
                phantom2.style.transform =
                  "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
              }, (PHANTOMintertime / 6) * 5);
              p2LignedValue--;
              p2Orientation = "Up";
              phantom2.src = "./assets/phantom2-see" + p2Orientation + ".gif";
            }
          } else {
            p2Yvalue += 5;
            phantom2.style.transform =
              "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
            setTimeout(() => {
              p2Yvalue += 5;
              phantom2.style.transform =
                "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
            }, PHANTOMintertime / 6);
            setTimeout(() => {
              p2Yvalue += 5;
              phantom2.style.transform =
                "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
            }, PHANTOMintertime / 3);
            setTimeout(() => {
              p2Yvalue += 5;
              phantom2.style.transform =
                "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
            }, PHANTOMintertime / 2);
            setTimeout(() => {
              p2Yvalue += 5;
              phantom2.style.transform =
                "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
            }, (PHANTOMintertime / 3) * 2);
            setTimeout(() => {
              p2Yvalue += 5;
              phantom2.style.transform =
                "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
            }, (PHANTOMintertime / 6) * 5);
            p2LignedValue++;
            p2Orientation = "Down";
            phantom2.src = "./assets/phantom2-see" + p2Orientation + ".gif";
          }
        } else {
          p2Xvalue -= 5;
          phantom2.style.transform =
            "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
          setTimeout(() => {
            p2Xvalue -= 5;
            phantom2.style.transform =
              "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
          }, PHANTOMintertime / 6);
          setTimeout(() => {
            p2Xvalue -= 5;
            phantom2.style.transform =
              "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
          }, PHANTOMintertime / 3);
          setTimeout(() => {
            p2Xvalue -= 5;
            phantom2.style.transform =
              "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
          }, PHANTOMintertime / 2);
          setTimeout(() => {
            p2Xvalue -= 5;
            phantom2.style.transform =
              "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
          }, (PHANTOMintertime / 3) * 2);
          setTimeout(() => {
            p2Xvalue -= 5;
            phantom2.style.transform =
              "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
          }, (PHANTOMintertime / 6) * 5);
          p2ColumnValue--;
          p2Orientation = "Left";
          phantom2.src = "./assets/phantom2-see" + p2Orientation + ".gif";
        }
      } else {
        p2Xvalue += 5;
        phantom2.style.transform =
          "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
        setTimeout(() => {
          p2Xvalue += 5;
          phantom2.style.transform =
            "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
        }, PHANTOMintertime / 6);
        setTimeout(() => {
          p2Xvalue += 5;
          phantom2.style.transform =
            "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
        }, PHANTOMintertime / 3);
        setTimeout(() => {
          p2Xvalue += 5;
          phantom2.style.transform =
            "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
        }, PHANTOMintertime / 2);
        setTimeout(() => {
          p2Xvalue += 5;
          phantom2.style.transform =
            "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
        }, (PHANTOMintertime / 3) * 2);
        setTimeout(() => {
          p2Xvalue += 5;
          phantom2.style.transform =
            "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
        }, (PHANTOMintertime / 6) * 5);
        p2ColumnValue++;
        p2Orientation = "Right";
        phantom2.src = "./assets/phantom2-see" + p2Orientation + ".gif";
      }
    }
    if (random2Value < 0.66 && random2Value > 0.33) {
      let p2UPlignedValue = p2LignedValue - 1;
      let p2upPositionVar = "place" + p2UPlignedValue + p2ColumnValue;
      if (document.getElementById(p2upPositionVar).className === "wall") {
        let p2DOWNlignedValue = p2LignedValue + 1;
        let p2downPositionVar = "place" + p2DOWNlignedValue + p2ColumnValue;
        if (document.getElementById(p2downPositionVar).className === "wall") {
          let p2LEFTcolumnValue = p2ColumnValue - 1;
          let p2leftPositionVar = "place" + p2LignedValue + p2LEFTcolumnValue;
          if (document.getElementById(p2leftPositionVar).className === "wall") {
            let p2RIGHTcolumnValue = p2ColumnValue + 1;
            let p2rightPositionVar =
              "place" + p2LignedValue + p2RIGHTcolumnValue;
            if (
              document.getElementById(p2rightPositionVar).className === "wall"
            ) {
            } else {
              p2Xvalue += 5;
              phantom2.style.transform =
                "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
              setTimeout(() => {
                p2Xvalue += 5;
                phantom2.style.transform =
                  "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
              }, PHANTOMintertime / 6);
              setTimeout(() => {
                p2Xvalue += 5;
                phantom2.style.transform =
                  "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
              }, PHANTOMintertime / 3);
              setTimeout(() => {
                p2Xvalue += 5;
                phantom2.style.transform =
                  "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
              }, PHANTOMintertime / 2);
              setTimeout(() => {
                p2Xvalue += 5;
                phantom2.style.transform =
                  "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
              }, (PHANTOMintertime / 3) * 2);
              setTimeout(() => {
                p2Xvalue += 5;
                phantom2.style.transform =
                  "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
              }, (PHANTOMintertime / 6) * 5);
              p2ColumnValue++;
              p2Orientation = "Right";
              phantom2.src = "./assets/phantom2-see" + p2Orientation + ".gif";
            }
          } else {
            p2Xvalue -= 5;
            phantom2.style.transform =
              "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
            setTimeout(() => {
              p2Xvalue -= 5;
              phantom2.style.transform =
                "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
            }, PHANTOMintertime / 6);
            setTimeout(() => {
              p2Xvalue -= 5;
              phantom2.style.transform =
                "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
            }, PHANTOMintertime / 3);
            setTimeout(() => {
              p2Xvalue -= 5;
              phantom2.style.transform =
                "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
            }, PHANTOMintertime / 2);
            setTimeout(() => {
              p2Xvalue -= 5;
              phantom2.style.transform =
                "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
            }, (PHANTOMintertime / 3) * 2);
            setTimeout(() => {
              p2Xvalue -= 5;
              phantom2.style.transform =
                "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
            }, (PHANTOMintertime / 6) * 5);
            p2ColumnValue--;
            p2Orientation = "Left";
            phantom2.src = "./assets/phantom2-see" + p2Orientation + ".gif";
          }
        } else {
          p2Yvalue += 5;
          phantom2.style.transform =
            "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
          setTimeout(() => {
            p2Yvalue += 5;
            phantom2.style.transform =
              "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
          }, PHANTOMintertime / 6);
          setTimeout(() => {
            p2Yvalue += 5;
            phantom2.style.transform =
              "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
          }, PHANTOMintertime / 3);
          setTimeout(() => {
            p2Yvalue += 5;
            phantom2.style.transform =
              "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
          }, PHANTOMintertime / 2);
          setTimeout(() => {
            p2Yvalue += 5;
            phantom2.style.transform =
              "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
          }, (PHANTOMintertime / 3) * 2);
          setTimeout(() => {
            p2Yvalue += 5;
            phantom2.style.transform =
              "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
          }, (PHANTOMintertime / 6) * 5);
          p2LignedValue++;
          p2Orientation = "Down";
          phantom2.src = "./assets/phantom2-see" + p2Orientation + ".gif";
        }
      } else {
        p2Yvalue -= 5;
        phantom2.style.transform =
          "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
        setTimeout(() => {
          p2Yvalue -= 5;
          phantom2.style.transform =
            "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
        }, PHANTOMintertime / 6);
        setTimeout(() => {
          p2Yvalue -= 5;
          phantom2.style.transform =
            "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
        }, PHANTOMintertime / 3);
        setTimeout(() => {
          p2Yvalue -= 5;
          phantom2.style.transform =
            "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
        }, PHANTOMintertime / 2);
        setTimeout(() => {
          p2Yvalue -= 5;
          phantom2.style.transform =
            "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
        }, (PHANTOMintertime / 3) * 2);
        setTimeout(() => {
          p2Yvalue -= 5;
          phantom2.style.transform =
            "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
        }, (PHANTOMintertime / 6) * 5);
        p2LignedValue--;
        p2Orientation = "Up";
        phantom2.src = "./assets/phantom2-see" + p2Orientation + ".gif";
      }
    }
    if (random2Value < 1 && random2Value > 0.66) {
      let p2LEFTcolumnValue = p2ColumnValue - 1;
      let p2leftPositionVar = "place" + p2LignedValue + p2LEFTcolumnValue;
      if (document.getElementById(p2leftPositionVar).className === "wall") {
        let p2DOWNlignedValue = p2LignedValue + 1;
        let p2downPositionVar = "place" + p2DOWNlignedValue + p2ColumnValue;
        if (document.getElementById(p2downPositionVar).className === "wall") {
          let p2RIGHTcolumnValue = p2ColumnValue + 1;
          let p2rightPositionVar = "place" + p2LignedValue + p2RIGHTcolumnValue;
          if (
            document.getElementById(p2rightPositionVar).className === "wall"
          ) {
            let p2UPlignedValue = p2LignedValue - 1;
            let p2upPositionVar = "place" + p2UPlignedValue + p2ColumnValue;
            if (document.getElementById(p2upPositionVar).className === "wall") {
            } else {
              p2Yvalue -= 5;
              phantom2.style.transform =
                "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
              setTimeout(() => {
                p2Yvalue -= 5;
                phantom2.style.transform =
                  "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
              }, PHANTOMintertime / 6);
              setTimeout(() => {
                p2Yvalue -= 5;
                phantom2.style.transform =
                  "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
              }, PHANTOMintertime / 3);
              setTimeout(() => {
                p2Yvalue -= 5;
                phantom2.style.transform =
                  "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
              }, PHANTOMintertime / 2);
              setTimeout(() => {
                p2Yvalue -= 5;
                phantom2.style.transform =
                  "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
              }, (PHANTOMintertime / 3) * 2);
              setTimeout(() => {
                p2Yvalue -= 5;
                phantom2.style.transform =
                  "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
              }, (PHANTOMintertime / 6) * 5);
              p2LignedValue--;
              p2Orientation = "Up";
              phantom2.src = "./assets/phantom2-see" + p2Orientation + ".gif";
            }
          } else {
            p2Xvalue += 5;
            phantom2.style.transform =
              "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
            setTimeout(() => {
              p2Xvalue += 5;
              phantom2.style.transform =
                "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
            }, PHANTOMintertime / 6);
            setTimeout(() => {
              p2Xvalue += 5;
              phantom2.style.transform =
                "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
            }, PHANTOMintertime / 3);
            setTimeout(() => {
              p2Xvalue += 5;
              phantom2.style.transform =
                "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
            }, PHANTOMintertime / 2);
            setTimeout(() => {
              p2Xvalue += 5;
              phantom2.style.transform =
                "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
            }, (PHANTOMintertime / 3) * 2);
            setTimeout(() => {
              p2Xvalue += 5;
              phantom2.style.transform =
                "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
            }, (PHANTOMintertime / 6) * 5);
            p2ColumnValue++;
            p2Orientation = "Right";
            phantom2.src = "./assets/phantom2-see" + p2Orientation + ".gif";
          }
        } else {
          p2Yvalue += 5;
          phantom2.style.transform =
            "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
          setTimeout(() => {
            p2Yvalue += 5;
            phantom2.style.transform =
              "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
          }, PHANTOMintertime / 6);
          setTimeout(() => {
            p2Yvalue += 5;
            phantom2.style.transform =
              "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
          }, PHANTOMintertime / 3);
          setTimeout(() => {
            p2Yvalue += 5;
            phantom2.style.transform =
              "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
          }, PHANTOMintertime / 2);
          setTimeout(() => {
            p2Yvalue += 5;
            phantom2.style.transform =
              "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
          }, (PHANTOMintertime / 3) * 2);
          setTimeout(() => {
            p2Yvalue += 5;
            phantom2.style.transform =
              "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
          }, (PHANTOMintertime / 6) * 5);
          p2LignedValue++;
          p2Orientation = "Down";
          phantom2.src = "./assets/phantom2-see" + p2Orientation + ".gif";
        }
      } else {
        p2Xvalue -= 5;
        phantom2.style.transform =
          "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
        setTimeout(() => {
          p2Xvalue -= 5;
          phantom2.style.transform =
            "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
        }, PHANTOMintertime / 6);
        setTimeout(() => {
          p2Xvalue -= 5;
          phantom2.style.transform =
            "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
        }, PHANTOMintertime / 3);
        setTimeout(() => {
          p2Xvalue -= 5;
          phantom2.style.transform =
            "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
        }, PHANTOMintertime / 2);
        setTimeout(() => {
          p2Xvalue -= 5;
          phantom2.style.transform =
            "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
        }, (PHANTOMintertime / 3) * 2);
        setTimeout(() => {
          p2Xvalue -= 5;
          phantom2.style.transform =
            "translate(" + p2Xvalue + "px, " + p2Yvalue + "px)";
        }, (PHANTOMintertime / 6) * 5);
        p2ColumnValue--;
        p2Orientation = "Left";
        phantom2.src = "./assets/phantom2-see" + p2Orientation + ".gif";
      }
    }
  }, PHANTOMintertime);
  finalInterval = setInterval(() => {
    let myPositionVar = "place" + lignedValue + columnValue;
    let p2PositionVar = "place" + p2LignedValue + p2ColumnValue;
    let p1PositionVar = "place" + p1LignedValue + p1ColumnValue;
    if (myPositionVar === p2PositionVar || myPositionVar === p1PositionVar) {
      pacme.style.visibility = "hidden";
      finalWord.style.fontSize = "3.5rem";
      finalWord.textContent = "Game over";
      console.log("Loser !");
      clearInterval(intervalRight);
      clearInterval(intervalFirst);
      clearInterval(intervalLeft);
      clearInterval(intervalUp);
      clearInterval(intervalDown);
      clearInterval(finalInterval);
      clearInterval(p1Interval);
      clearInterval(p2Interval);
      document.removeEventListener("keypress", mainFct);
      finalWord.style.visibility = "visible";
      buttonL.style.visibility = "visible";
      buttonL.disabled = false;
    }
    if (score > 67) {
      finalWord.textContent = "GG";
      console.log("Winner !");
      clearInterval(finalInterval);
      clearInterval(intervalRight);
      clearInterval(intervalFirst);
      clearInterval(intervalLeft);
      clearInterval(intervalUp);
      clearInterval(intervalDown);
      clearInterval(p1Interval);
      clearInterval(p2Interval);
      document.removeEventListener("keypress", mainFct);
      finalWord.style.fontSize = "5rem";
      finalWord.style.visibility = "visible";
      buttonL.style.visibility = "visible";
      buttonL.disabled = false;
    }
  }, 10);

  document.addEventListener("keypress", mainFct);
  finalWord.textContent = "";
  finalWord.style.visibility = "Hidden";
  buttonL.style.visibility = "Hidden";
  for (let YAY = 0; YAY < noneCase.length; YAY += 0.01) {
    noneCase.item(YAY).className = "candy";
  }
  buttonL.disabled = true;
}

buttonL.addEventListener("click", buttonLfct);
