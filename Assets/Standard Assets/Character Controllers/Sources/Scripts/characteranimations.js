var Player : GameObject;

function Update(){
   if(Input.GetAxis("Vertical") != 0){
   
     networkView.RPC("walking",RPCMode.All,  Player.name);
  }
     else{  
       networkView.RPC("idle", RPCMode.All, Player.name);
    }
    }