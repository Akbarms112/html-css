const wheel = document.getElementById('wheel');
const spinButton = document.getElementById('spinButton');

const sectors = ['Prize 1', 'Prize 2', 'Prize 3', 'Prize 4', 'Prize 5']; // Add your prizes here
const numberOfSectors = sectors.length;
const degreesPerSector = 360 / numberOfSectors;

let spinning = false;

function spinWheel() {
    if (!spinning) {
        spinning = true;
        
        // Randomly select a sector
        const randomSectorIndex = Math.floor(Math.random() * numberOfSectors);
        const selectedSector = sectors[randomSectorIndex];

        // Calculate rotation angle
        const rotation = 3600 + (randomSectorIndex * degreesPerSector) + (degreesPerSector / 2);

        // Apply rotation animation
        wheel.style.transition = 'transform 5s ease-out';
        wheel.style.transform = `rotate(${rotation}deg)`;

        // Display result after animation ends
        setTimeout(() => {
            alert(`You won: ${selectedSector}`);
            spinning = false;
        }, 5000); // Change this value to match your animation duration
    }
}

spinButton.addEventListener('click', spinWheel);
