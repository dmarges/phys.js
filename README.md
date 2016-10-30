# Phys.js
## Javascript Lightweight 2D Physics Library

This is a lightweight 2D Physics Library for Game Development in JavaScript. 

# Why did I create this library?

This project was born out of another project I was working on at the time. I was working to create
small interactive simulations and games and I needed reasonably accurate physics. I searched far and wide
and the only library at the time I could find was Box2D. 

While I think Box2D is a great library, it was simply too large and had a lot of stuff I didn't need.
The other problem was that there was a lot to learn just to get up and running.

So I wrote this code which I turned into a library of sorts. This code sat on my hard drive until this very day.
I decided to upload it to GitHub in case anyone else found some use for it.


NOTE (October 29, 2016): I'm planning to go through the code and modularize it to be a bit more intuitive. 


#Usage
```
	//Include the JS file in your project, then call methods as needed.

	//Push an entity into the objects list
	PhysJS.objects.push({name: 'player', x: 400, y: 600, width: 143, height: 143, radius: 72, vX: 10, vY: 0, aX: 1, aY: 1, mass: 10});

    var testCircle = PhysJS.objects[0];

	//In your render method...
    PhysJS.calculateFriction(testCircle);
    PhysJS.detectCollision(testCircle, testCircle2);
    PhysJS.wallCollision(testCircle2);
```
