var clicked : boolean = false;

function OnMouseDown() {
    clicked = !clicked;
Application.LoadLevel(9);
    Debug.Log("clicked credits" + (clicked? "" : " off"));
}