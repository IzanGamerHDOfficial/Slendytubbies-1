var clicked : boolean = false;

function OnMouseDown() {
    clicked = !clicked;
Application.LoadLevel(4);
    Debug.Log("clicked credits" + (clicked? "" : " off"));
}