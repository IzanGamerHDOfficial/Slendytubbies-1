var yourtexture : Texture2D;
var objecttodestroy: GameObject;

function OnGUI(){

     GUI.DrawTexture (Rect (0, 0, Screen.width, Screen.height), yourtexture);
     }
     
     function Update () {
          if (Input.GetKeyUp("m"))
{
     Destroy(objecttodestroy, 0);
     }
     }