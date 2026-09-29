const startButton = document.querySelector("#start-button");
const statusMessage = document.querySelector("#status");

startButton.addEventListener("click", () => {
  statusMessage.textContent = "좋아요! 새로운 여정을 시작합니다 ✨";
  startButton.querySelector("span:first-child").textContent = "시작했어요";
  startButton.setAttribute("aria-pressed", "true");
});
