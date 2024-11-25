// Array to store guest names
let guestList = [];

// Function to handle the input of guest names
function submitName() {
  const nameInput = document.getElementById("guestNames").value;
  const output = document.getElementById("output");

  // Validate input to ensure the input is a word and not a number
  if (!isNaN(nameInput)) {
    output.innerText = "Please input valid names only.";
    return;
  }

  // Add the name to the guest list
  guestList.push(nameInput);

  // Ensure the list does not exceed 10 guests
  if (guestList.length > 10) {
    // Ask the user if they want to replace someone ensuring all variants of yes/no are recognised
    const replaceChoice = prompt(
      "You can only add a maximum of 10 people to your guest list. Would you like to replace someone on the list with the last person you entered? (yes/no):"
    ).toLowerCase();

    if (replaceChoice === "yes") {
      const replaceName = prompt(
        "Please enter the name of the person you'd like to replace:"
      );

      const index = guestList.indexOf(replaceName);
      if (index !== -1) {
        // Replace the specified name with the last inputted name
        guestList[index] = nameInput;
        guestList.pop();
        output.innerText = "Guest list updated with the replacement.";
      } 
      else {
        // If the name is not found, do not add the 11th name
        guestList.pop();
        output.innerText = `${replaceName} is not on the list. The last entered name will not be added.`;
      }
    } 
      else {
      // If the user chooses not to replace, remove the 11th name
      guestList.pop();
      output.innerText =
        "The 11th guest will not be added to the list. Keeping the first 10.";
    }
  }

  // Update the guest list display
  displayGuestList();
} 

// Function to display the guest list
function displayGuestList() {
  const output = document.getElementById("output");
  output.innerText = `Guest List: ${guestList.join(", ")}`;
}
