// This in no way is meant to demonstrate the best way to solve this 
// problem.  It is simply meant to demonstrate conditional statements
// to a beginner  

//puts a listener on the button and waits for it to be clicked
//once the button is clicked, everything inside is done
document.getElementById('alarm').addEventListener('click', function() {
  //after button is clicked, what direction is selected will be stored
  //in the direction variable.  It will be either "North", "East",
  //"South", or "West"
  var direction = document.getElementById('direction').value;
  //same as above but will store threat level
  var threatLevel = document.getElementById('threatLevel').value;
  //just creating a variable named message.  This will store what 
  //needs to be printed out
  var message;

  //below you'll need to finish writing out the conditional logic to make
  //this app work.  I've started it, you'll need to finish it. 
  //
  if (direction === "North") {
    if (threatLevel === "1") {
      message = `Silos 1 through 3 are activated!`
    }
    else if (threatLevel === "2") {
      message = `Silos 1 through 6 are activated!`
    }
  }
  
  
  document.getElementById('display').innerHTML = message;

})
