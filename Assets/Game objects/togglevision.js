var NoFog : Transform;
var switchsound : AudioClip;
function Update()
{
              if (Input.GetKeyDown("f"))
{
audio.PlayOneShot(switchsound);
Instantiate(NoFog, transform.position, transform.rotation);
     }
     if (Input.GetMouseButtonDown(1))
{
audio.PlayOneShot(switchsound);
Instantiate(NoFog, transform.position, transform.rotation);
}
}