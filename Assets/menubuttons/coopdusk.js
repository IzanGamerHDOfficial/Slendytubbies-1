var clicked : boolean = false;

function OnMouseDown() {
    clicked = !clicked;
Application.LoadLevel(2);
    Debug.Log("clicked credits" + (clicked? "" : " off"));
}