const form = document.getElementById("userForm");
const nameInput = document.getElementById("name");
const lastNameInput = document.getElementById("lastName");
const outputDiv = document.getElementById("output");

document.getElementById("submitButton").addEventListener("click", () => {
  const name = nameInput.value.trim();
  const lastName = lastNameInput.value.trim();

  const jsonString = JSON.stringify({ name, lastName });

  const jsonOutput = document.createElement("p");
  jsonOutput.textContent = jsonString;
  outputDiv.appendChild(jsonOutput);

  nameInput.value = "";
  lastNameInput.value = "";
});
