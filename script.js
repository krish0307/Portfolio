let currentFloor = 1;

function moveToFloor(floorNumber) {
    const distance = (floorNumber - 1) * -100;
    const floors = document.querySelectorAll('.floor');
    floors.forEach(floor => {
        floor.style.transform = `translateY(${distance}vh)`;
    });
    currentFloor = floorNumber;
}

document.addEventListener('DOMContentLoaded', () => {
    // Initialize the elevator position
    moveToFloor(1);
});
