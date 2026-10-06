static var leverswitch: int;
var trigger: int=1;
var Player: Transform;
//var AnimationFile: AnimationClip;
var animated : GameObject;
var dooractivater : Transform;

function OnTriggerEnter (other: Collider)
{
      leverswitch =trigger;
      Player.parent =null;
      animated.animation.Play("Take 001");
      isTrigger = false;
   }
   
 function OnTriggerExit (other: Collider)
 {
 Destroy(gameObject);
 }