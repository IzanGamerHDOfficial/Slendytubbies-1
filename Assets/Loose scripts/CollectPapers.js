    #pragma strict

    // -- Trigger hit Paper -- *posted Script starts Here*

    var Paper : int = 0;
    var paperToWin : int = 5;
    var allpapersobj : Transform;
    var winobj1 : Transform;
    var winobj2 : Transform;
    var winobj3 : Transform;
    var winobj4 : Transform;
    var winobj5 : Transform;
    var winobj6 : Transform;
    var winobj7 : Transform;
    var winobj8 : Transform;
    var winobj9 : Transform;

    function OnTriggerEnter( other : Collider ) 
    {
       // Debug.Log("Triggered by [tag] : " + other.gameObject.tag); // check the tag of the object hit
       // Debug.Log("Triggered by [name] : " + other.gameObject.name); // check the name of the object hit

       if (other.gameObject.tag == "Paper") // did the trigger hit Paper?
       {
         Paper += 1;
         Destroy(other.gameObject);

         Debug.Log("A paper was picked up. Total papers = " + Paper);
       }
                     if (Paper == paperToWin){
       
         //once reached all papers
         Network.Instantiate(allpapersobj, transform.position, transform.rotation, 1);
       }
       
                            if (Paper == 1){
       
         //once reached 1 papers
         Network.Instantiate(winobj1, transform.position, transform.rotation, 1);
       }
       
                            if (Paper == 2){
       
         //once reached 2 papers
         Network.Instantiate(winobj2, transform.position, transform.rotation, 1);
       }
       
                            if (Paper == 3){
       
         //once reached 3 papers
         Network.Instantiate(winobj3, transform.position, transform.rotation, 1);
       }
       
                            if (Paper == 4){
       
         //once reached 4 papers
         Network.Instantiate(winobj4, transform.position, transform.rotation, 1);
       }
       
                            if (Paper == 5){
       
         //once reached 5 papers
         Network.Instantiate(winobj5, transform.position, transform.rotation, 1);
       }
       
                            if (Paper == 6){
       
         //once reached 6 papers
         Network.Instantiate(winobj6, transform.position, transform.rotation, 1);
       }
       
                            if (Paper == 7){
       
         //once reached 7 papers
         Network.Instantiate(winobj7, transform.position, transform.rotation, 1);
       }
       
                            if (Paper == 8){
       
         //once reached 8 papers
         Network.Instantiate(winobj8, transform.position, transform.rotation, 1);
       }
       
                            if (Paper == 9){
       
         //once reached 9 papers
         Network.Instantiate(winobj9, transform.position, transform.rotation, 1);
       }
       
       
       
       }