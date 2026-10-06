var yourtexture : Texture2D;
var popupsound: AudioClip;

function Update(){
    audio.clip = popupsound;
    audio.Play();
    }
function OnGUI(){
     GUI.DrawTexture (Rect (0, 0, Screen.width, Screen.height), yourtexture);
}