function generateNumbers() {

    // Select the ordered list
    const numberList = document.getElementById("numberList");

    // Clear existing items
    numberList.textContent = "";

    // Generate numbers from 1 to 5
    for (let i = 1; i <= 5; i++) {

        // Create a new list item
        const listItem = document.createElement("li");

        // Set the text content
        listItem.textContent = "The number is " + i;

        // Append the list item to the ordered list
        numberList.appendChild(listItem);
    }
}

// Add click event listener
document.getElementById("generateBtn")
    .addEventListener("click", generateNumbers);
