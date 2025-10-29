const now = new Date();
const imageContainer = document.getElementById("imageContainer");

for (let day = 1; day <= 24; day++) {
    const accessDate = new Date(`2025-12-${String(day).padStart(2, '0')}T00:00:00`);
    const button = document.getElementById(`day${day}`);

    if (now >= accessDate) {
        button.disabled = false;
        button.classList.add("active");
    } else {
        button.disabled = true;
    }

    button.addEventListener("click", () => {
        document.querySelectorAll("#imageContainer img").forEach(img => img.classList.add("hidden"));
        const image = document.getElementById(`surpriseImage${day}`);
        if (image) {
            image.classList.remove("hidden");
            imageContainer.classList.remove("hidden");
        }
    });
}

// important frog function
function frog() {
    console.log("Ribbit!");
}
