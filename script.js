const target = new Date("2027-05-15T16:00:00+02:00").getTime();

function updateCountdown() {
  const now = Date.now();
  let diff = target - now;
  if (diff < 0) diff = 0;

  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);

  const values = [days, hours, minutes, seconds];
  document.querySelectorAll("#countdown strong").forEach((el, i) => {
    el.textContent = String(values[i]).padStart(i === 0 ? 1 : 2, "0");
  });
}
updateCountdown();
setInterval(updateCountdown, 1000);
