const display = document.querySelector(".number");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let value = button.textContent;

    if (value === "c") {
      display.value = "";
    } else if (value === "=") {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Error";
      }
    } else {
      display.value += value;
    }
  });
});
