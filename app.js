const passwordButton = document.querySelector("label");
const div = document.querySelector(".mainDiv")



div.style.width="100px"
div.style.height="100px"
div.style.backgroundColor = "black"




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
