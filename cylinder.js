function Cylinder(radius, height) {
    this.radius = radius;
    this.height = height;

    this.cylinderVolume = () => {
        const volumeOfCylinder = Math.PI * Math.pow(this.radius, 2) * this.height;
        return (volumeOfCylinder.toFixed(3));
    }
}

const cylinder1 = new Cylinder(12, 27);

console.log(`Volume of the cylinder is ${cylinder1.cylinderVolume()}`);