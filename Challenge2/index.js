function speedDetector(speed) {
    const speedLimit = 70;
    if (speed <= speedLimit) {
        return 'Ok';
    } else {
        let demeritPoints = Math.floor((speed - speedLimit) / 5);
        if (demeritPoints > 12) {
            return 'License suspended';
        } else {
            return `Points: ${demeritPoints}`;
        }
    }
}

// Example usage:
let carSpeed = 80;
console.log(speedDetector(carSpeed)); 
// Output: Points: 2
