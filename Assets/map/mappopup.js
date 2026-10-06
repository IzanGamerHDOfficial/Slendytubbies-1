var ifseesobject: Transform;

function Update () {
if (Input.GetKeyDown("m")) {
Instantiate(ifseesobject, transform.position, transform.rotation);
}
}