
let pet1 = {
    name: "Walter",
    Age: 7,
    Gender: "Male",
    Service: "Wash",
    Breed: "Corgi"
};
let pet2 = {
    name: "Tato",
    Age: 7,
    Gender: "Male",
    Service: "Vaccinations",
    Breed: "Pit Bull"
};
let pet3 = {
    name: "Rocky",
    Age: 3,
    Gender: "Female",
    Service: "Nail Trim",
    Breed: "Rottweiller"
};

// Create an array to hold the pet objects
const petsList = [pet1, pet2, pet3];

// Function to display pet names
function displayPets() {
    const petsListElement = document.getElementById("petsList");

    // Iterate through the petsList array and add each pet name to the ordered list
    for (let i = 0; i < petsList.length; i++) {
        const pet = petsList[i];
        const listItem = document.createElement("li");
        listItem.textContent = pet.name;
        petsListElement.appendChild(listItem);
    }
}

displayPets();