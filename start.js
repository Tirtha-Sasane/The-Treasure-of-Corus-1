class Start{
    constructor(){

    }


 display(){
    background(rgb(5, 247, 235))
    
       fill("purple");
       textSize(30);
       text(" The Lost Treasure of Corus ", 400, 50);

       textSize(25);
       text(" Press 'a' to start the game ", 450, 550);

       textSize(20);
       text(" ''Hope you like it''- devoloper ", 450, 150);

       textSize(15);
       text(" This is a storylined game. Has a storyline, all the story is fictional and contains fictional characters and most of the story contains text. ", 150, 250);
       
       if(keyDown("a")){
        show=2;
        state=2;
       }

    drawSprites();

    }
}
