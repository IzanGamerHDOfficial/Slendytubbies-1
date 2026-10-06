var clicked : boolean = false;
var CameraMenu : Camera;
var CameraSettings : Camera;
var CameraSingleplayer : Camera;
var CameraMultiplayer : Camera;
var CameraCoop : Camera;
var CameraVerses : Camera;

function OnMouseDown() {
    clicked = !clicked;
    settingsobject = GameObject.FindWithTag("Settings").transform;
    Destroy(settingsobject.gameObject);
        CameraMenu.camera.enabled = true;
        CameraSettings.camera.enabled = false;
                CameraSingleplayer.camera.enabled = false;
        CameraMultiplayer.camera.enabled = false;
                CameraCoop.camera.enabled = false;
        CameraVerses.camera.enabled = false;        
}