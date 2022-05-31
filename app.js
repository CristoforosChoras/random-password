const passwordButton = document.querySelector("label");
const div = document.querySelector(".mainDiv");
const body = document.querySelector("body");
const button = document.querySelector("button")

passwordButton.style.color = "white";
passwordButton.style.fontSize = "20px";
button.style.width= "50%"
button.style.height= "20%"
button.style.borderRadius= "5%"


div.style.width = "500px";
div.style.height = "200px";
div.style.backgroundColor = "black";
div.style.display = "flex";
div.style.flexDirection = "column";
div.style.justifyContent = "center";
div.style.alignItems = "center";
div.style.borderRadius= "100%"

function generatePassword() {
  let length = 8,
    charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!§$%&/(",
    passwordGenerated = "";
  for (let i = 0, n = charset.length; i < length; ++i) {
    passwordButton.innerHTML = passwordGenerated += charset.charAt(
      Math.floor(Math.random() * n)
    );
  }
  return passwordGenerated;
}
