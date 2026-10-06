var clicked : boolean = false;

function OnMouseDown() {
    clicked = !clicked;
Application.LoadLevel(6);
    Debug.Log("clicked credits" + (clicked? "" : " off"));
}