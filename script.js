var awesomeBirds = ["Bluebird", "Roadrunner", "Desert Dove", "Pigeon"]

for (var i=0; i < awesomeBirds.length; i++){
    if (awesomeBirds[i] === "Bluebird"){
        alert("Bluebirds are so beautiful");
    }
    else {
        alert("Not as beautiful as Bluebirds");
    }
}
console.log(awesomeBirds);

// Create a loop that loops through the previously created array, awesomeBirds.
// Within the loop, check with an if statement:
// if the array value equals (use === to check for equality) "Bluebird" then add an alert that says "Bluebirds are so beautiful".
// if the array value equals anything else, add an alert that says "Not as beautiful as Bluebirds".