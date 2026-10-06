var clicked : boolean = false;
var CameraMenu : Camera;
var CameraSettings : Camera;
var CameraSingleplayer : Camera;
var CameraMultiplayer : Camera;
var CameraCoop : Camera;
var CameraVerses : Camera;
var settingsobject : Transform;



function OnMouseDown() {
    clicked = !clicked;
    Instantiate(settingsobject, transform.position, transform.rotation);
        CameraMenu.camera.enabled = false;
        CameraSettings.camera.enabled = true;
                CameraSingleplayer.camera.enabled = false;
        CameraMultiplayer.camera.enabled = false;
                CameraCoop.camera.enabled = false;
        CameraVerses.camera.enabled = false;        
}