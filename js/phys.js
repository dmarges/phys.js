PhysJS = {};

PhysJS.gravity = -9.8;
PhysJS.friction = 0.99;

PhysJS.objects = [];

PhysJS.detectCollision = function(object1, object2) {
    var dX = object2.x - object1.x; 
    var dY = object2.y - object1.y; 
    var distance = Math.sqrt((dX*dX)+(dY*dY));
    
    if (distance < object1.radius + object2.radius) {
        var angle = Math.atan2(dY, dX); 
        var sine = Math.sin(angle);
        var cosine = Math.cos(angle);
        
        var x = 0;
        var y = 0;
        var xB = dX * cosine + dY * sine; 
        var yB = dY * cosine - dX * sine;
        var vX = object1.vX * cosine + object1.vY * sine; 
        var vY = object1.vY * cosine - object1.vX * sine;
        var vXb = object2.vX * cosine + object2.vY * sine; 
        var vYb = object2.vY * cosine - object2.vX * sine;
        
        var vTotal = vX - vXb;
        vX = ((object1.mass - object2.mass) * vX + 2 * object2.mass * vXb) / (object1.mass + object2.mass);
        vXb = vTotal + vX;

        xB = x + (object1.radius + object2.radius);
        
        object1.x = object1.x + (x * cosine - y * sine); 
        object1.y = object1.y + (y * cosine + x * sine);
        object2.x = object1.x + (xB * cosine - yB * sine); 
        object2.y = object1.y + (yB * cosine + xB * sine);
        object1.vX = vX * cosine - vY * sine; 
        object1.vY = vY * cosine + vX * sine;
        object2.vX = vXb * cosine - vYb * sine; 
        object2.vY = vYb * cosine + vXb * sine;
    
    }
};

PhysJS.calculateFriction = function(object) {
    
    if(Math.abs(object.vX) > 0.1) {
        object.vX *= this.friction;
    } else {
        object.vX = 0;
    }
    
    if(Math.abs(object.vY) > 0.1) {
        object.vY *= this.friction;
    } else {
        object.vY = 0;
    }
};

PhysJS.calculateAcceleration = function(object) {
    if (Math.abs(object.vX) < 10) { 
        object.vX += object.aX;
    }
    
    if (Math.abs(object.vY) < 10) { 
        object.vY += object.aY;
    }
}

PhysJS.wallCollision = function(object) {
	var x = object.x,
		y = object.y,
		vX = object.vX,
		vY = object.vY;

	if(x > 1000 - object.radius) {
		object.vX = -(vX);
	}

	if(x < 10 + object.radius) {
		object.vX = -(vX);
	}

	if(y > 760 - object.radius) {
		object.vY = -(vY);
	}

	if(y < 10 + object.radius) {
		object.vY = -(vY);
	}
};
