//setup canvas
var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
canvas.width = windowWidth - 20;
canvas.height = windowHeight - 20;

function drawCanvas() {
  console.log("called");
  const canvas = document.getElementById("canvas");
  canvas.classList.add(
    "border",
    "border-lime-500",
    "border-2",
    "m-2",
    "rounded-md",
    "bg-lime-100"
  );
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    console.log(ctx);

    let x = 0;
    let y = 0;
    ctx.fillRect(x, y, 20, 20);
    ctx.fillStyle = "blue";

    window.addEventListener("keydown", (e) => {
      console.log(e.key);
      if (e.key === "ArrowLeft") {
        ctx.clearRect(x, y, 20, 20);
        x -= 20;
      } else if (e.key === "ArrowRight") {
        ctx.clearRect(x, y, 20, 20);
        x += 20;
      } else if (e.key === "ArrowUp") {
        ctx.clearRect(x, y, 20, 20);
        y -= 20;
      } else if (e.key === "ArrowDown") {
        ctx.clearRect(x, y, 20, 20);
        y += 20;
      }
      ctx.fillRect(x, y, 20, 20);
    });
  }
}

window.addEventListener("load", drawCanvas);
