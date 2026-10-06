
var timer : float = 0.0;
    var spawning : boolean = false;
    var spawnpoint : Transform;
    var spawn1 : Transform;
    var spawn2 : Transform;
    var spawn3 : Transform;
    var spawn4 : Transform;
    var spawn5 : Transform;
    var spawn6 : Transform;
    
     
    function Update () {
     //check if spawning at the moment, if not add to timer
     if(!spawning){
      timer += Time.deltaTime;
     }
     //when timer reaches 2 seconds, call Spawn function
     if(timer >= 2){
      Spawn();
     }
    }
     
    function Spawn(){
     //set spawning to true, to stop timer counting in the Update function
     spawning = true;
     //reset the timer to 0 so process can start over
     timer = 0;
     
     //select a random number, inside a maths function absolute command to ensure it is a whole number
     var randomPick : int = Mathf.Abs(Random.Range(1,7));
     
     //create a location 'Transform' type variable to store one of 3 possible locations declared at top of script
     var location : Transform;
     
     //check what randomPick is, and select one of the 3 locations, based on that number
     if(randomPick == 1){
      location = spawn1;
      yield WaitForSeconds(Random.Range(30,200));
      Debug.Log("Chose pos 1");
     }
     else if(randomPick == 2){
     yield WaitForSeconds(Random.Range(30,200));
      location = spawn2;
      Debug.Log("Chose pos 2");
     }
     else if(randomPick == 3){
     yield WaitForSeconds(Random.Range(30,200));
      location = spawn3;
      Debug.Log("Chose pos 3");
     }
          else if(randomPick == 4){
          yield WaitForSeconds(Random.Range(30,200));
      location = spawn4;
      Debug.Log("Chose pos 4");
     }
          else if(randomPick == 5){
          yield WaitForSeconds(Random.Range(30,200));
      location = spawn5;
      Debug.Log("Chose pos 5");
     }
          else if(randomPick == 6){
          yield WaitForSeconds(Random.Range(30,200));
      location = spawn6;
      Debug.Log("Chose pos 6");
     }
     
     //create the object at point of the location variable
     var thingToMake : Transform = Network.Instantiate(location, spawnpoint.position, spawnpoint.rotation, 1);
     
     //halt script for 1 second before returning to the start of the process
     yield WaitForSeconds(1);
     //set spawning back to false so timer may start again
     spawning = false;
    }

