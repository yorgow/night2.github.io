document.addEventListener("DOMContentLoaded", function () {
    const searchBar = document.getElementById("search-bar");
    const eventBoxes = document.querySelectorAll(".event-box");

    // Function to reset the visibility of event boxes
    function resetEventBoxes() {
        eventBoxes.forEach(function (box) {
            box.style.display = "block"; // Show all event boxes
        });
    }

    searchBar.addEventListener("input", function () {
        const searchTerm = searchBar.value.toLowerCase().trim(); // Get the search term and trim whitespace

        // If the search term is empty, reset the event boxes
        if (searchTerm === "") {
            resetEventBoxes(); // Show all event boxes when search input is empty
            return; // Exit the function early
        }

        eventBoxes.forEach(function (box) {
            const eventName = box.querySelector(".event-name").textContent.toLowerCase();

            // Check if the event name includes the search term
            if (eventName.includes(searchTerm)) {
                box.style.display = "block"; // Show the event box if it matches
            } else {
                box.style.display = "none"; // Hide if it doesn't match
            }
        });
    });
});
