var clicked : boolean = false;

function OnMouseDown() {
    clicked = !clicked;
Application.LoadLevel(8);
    Debug.Log("clicked credits" + (clicked? "" : " off"));
}