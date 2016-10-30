PhysJS.Vector = function(x, y, z) {

    this.x = x;
    this.y = y;
    this.z = z;
};

PhysJS.Vector.prototype.magnitude = function() {
    var x = this.x,
        y = this.y,
        z = this.z;

    return Math.sqrt((x * x) + (y * y) + (z * z));
};

PhysJS.Vector.prototype.normalize = function() {
    var vector = this.magnitude(),
        tolerance = 0.0001,
        x = this.x,
        y = this.y,
        z = this.z;

    if(vector <= tolerance) {
        x /= vector;
        y /= vector;
        z /= vector;

        if(Math.abs(x) < tolerance) {
            x = 0.0;
        }

        if(Math.abs(y) < tolerance) {
            y = 0.0;
        }

        if(Math.abs(z) < tolerance) {
            z = 0.0;
        }
    }

    this.x = x;
    this.y = y;
    this.z = z;
};

PhysJS.Vector.prototype.reverse = function() {
    this.x = -this.x;
    this.y = -this.y;
    this.z = -this.z;
};

PhysJS.Vector.prototype.addToVector = function(vector) {
    this.x += vector.x;
    this.y += vector.y;
    this.z += vector.z;
};

PhysJS.Vector.prototype.subFromVector = function(vector) {
    this.x -= vector.x;
    this.y -= vector.y;
    this.z -= vector.z;
};

PhysJS.Vector.prototype.multiplyScalar = function(scalar) {
    this.x *= scalar;
    this.y *= scalar
    this.z *= scalar;
};

PhysJS.Vector.prototype.divideScalar = function(scalar) {
    this.x /= scalar;
    this.y /= scalar;
    this.z /= scalar;
};

PhysJS.Vector.prototype.addVectors = function() {
    var args = arguments,
        vector1 = null,
        vector2 = null,
        newVector = null;

    if(args.length > 1) {
        vector1 = args[0];
        vector2 = args[1];

        return new PhysJS.Vector(vector1.x + vector2.x, vector1.y + vector2.y, vector1.z + vector2.z);
    }
};

PhysJS.Vector.prototype.subtractVectors = function() {
    var args = arguments,
        vector1 = null,
        vector2 = null,
        newVector = null;

    if(args.length > 1) {
        vector1 = args[0];
        vector2 = args[1];

        return new PhysJS.Vector(vector1.x - vector2.x, vector1.y - vector2.y, vector1.z - vector2.z);
    }
};

/*PhysJS.Vector.prototype.crossVectors = function() {
    var args = arguments,
        vector1 = null,
        vector2 = null,
        newVector = null;

    if(args.length > 1) {
        vector1 = args[0];
        vector2 = args[1];

        return new PhysJS.Vector(vector1.y * vector2.z, vector1.y - vector2.y, vector1.z - vector2.z);
    }
};*/