let isRunning = false;
let inter;
let ms = 0;
let s = 0;
let m = 0;
let h = 0;
const cont = document.querySelector(".container");
const div = document.querySelector(".stopwatch");
const buttons = document.querySelector(".btn");
buttons.addEventListener("click", (event) => {
  const target = event.target;
  if (target.classList.contains("btn-grad")) {
    var buttonText = target.textContent;
    var element = document.createElement("button");
    const lapbtn = document.getElementById("lap-btn");
    element.classList.add("btn-grad");
    element.innerText = "Lap";
    element.id = "lap-btn";
    var ele = document.createElement("h2");
    var lapdiv = document.createElement("div");
    lapdiv.classList.add("lap");
    const btn = document.querySelector(".lap");

    switch (buttonText) {
      case "Start":
        if (!isRunning) {
          isRunning = true;
          inter = setInterval(miliseconds, 10);
          buttons.appendChild(element);
          cont.appendChild(lapdiv);
        }
        break;

      case "Stop":
        if (isRunning) {
          isRunning = false;
          clearInterval(inter);
        }
        break;

      case "Lap":
        ele.innerText = div.innerText;
        btn.appendChild(ele);
        break;

      case "Reset":
        isRunning = false;
        ms = 0;
        s = 0;
        m = 0;
        h = 0;
        div.innerText = `${"0" + h} : ${"0" + m} : ${"0" + s} : ${"0" + ms}`;
        clearInterval(inter);
        lapbtn.remove();
        btn.remove();
        break;
    }
  }
});

function miliseconds() {
  if (ms < 99) {
    ms++;
  } else {
    ms = 0;
    if (s < 59) {
      s++;
    } else {
      s = 0;
      if (m < 59) {
        m++;
      } else {
        m = 0;
        h++;
      }
    }
  }
  div.innerText = `${h < 10 ? "0" + h : h} : ${m < 10 ? "0" + m : m} : ${
    s < 10 ? "0" + s : s
  } : ${ms < 10 ? "0" + ms : ms}`;
}
