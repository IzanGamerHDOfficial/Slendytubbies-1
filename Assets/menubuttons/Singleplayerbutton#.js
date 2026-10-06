var clicked : boolean = false;
var CameraMenu : Camera;
var CameraSettings : Camera;
var CameraSingleplayer : Camera;
var CameraMultiplayer : Camera;
var CameraCoop : Camera;
var CameraVerses : Camera;



function OnMouseDown() {
    clicked = !clicked;
        CameraMenu.camera.enabled = false;
        CameraSettings.camera.enabled = false;
                CameraSingleplayer.camera.enabled = true;
        CameraMultiplayer.camera.enabled = false;
                CameraCoop.camera.enabled = false;
        CameraVerses.camera.enabled = false;        
}