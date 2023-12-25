/**
 * Creates a new Cylinder object with the specified radius and height.
 * @param {number} radius - The radius of the cylinder.
 * @param {number} height - The height of the cylinder.
 */
function Cylinder(radius, height) {
    this.radius = radius;
    this.height = height;

    /**
     * Calculates and returns the volume of the cylinder.
     * @returns {number} The volume of the cylinder.
     */
    this.cylinderVolume = function() {
        const volumeOfCylinder = Math.PI * Math.pow(this.radius, 2) * this.height;
        return volumeOfCylinder.toFixed(3);
    }
}
const cylinder1 = new Cylinder(12, 27);

console.log(`Volume of the cylinder is ${cylinder1.cylinderVolume()}`);
