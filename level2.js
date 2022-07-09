class Level2{
    constructor(){
        this.box1=createInput("");
        this.button1=createButton("submit");
        this.ans1=createElement("h2");

        this.box2=createInput("");
        this.button2=createButton("submit");
        this.ans2=createElement("h2");

        this.box3=createInput("");
        this.button3=createButton("submit");
        this.ans3=createElement("h2");

        this.box4=createInput("");
        this.button4=createButton("submit");
        this.ans4=createElement("h2");
    }
    display(){
        background("pink")
        fill("purple");
        textSize(30);
        text(" --- Welcome to The Spring Falls --- ", 375, 50);

        text(" Who is the youngest member of BTS? ", 50, 100);
        text(" 1. Jungkook 2. Suga 3. Jin", 50, 150);
        this.box1.position(50,200);
        this.button1.position(250,200);
        this.ans1.position(350,175);
        this.button1.mousePressed(()=>{
            if(this.box1.value()==='1'){
                this.ans1.html("correct")
            }
            else{
                this.ans1.html("wrong")
            }
        })

        text(" What is bts' fandom known as ", 50, 300);
        text(" 1. Blink 2. Army 3. Bangtanies ", 50, 350);
        this.box2.position(50,400);
        this.button2.position(250,400);
        this.ans2.position(350,375);
        this.button2.mousePressed(()=>{
            if(this.box2.value()==='2'){
                this.ans2.html("correct")
            }
            else{
                this.ans2.html("wrong")
            }
        })

        text(" Under names does bts' suga not work under? ", 550, 300);
        text(" 1. gloss 2. lil meow 3. Agust D ", 550, 350);
        this.box3.position(550,400);
        this.button3.position(750,400);
        this.ans3.position(850,375);
        this.button3.mousePressed(()=>{
            if(this.box3.value()==='2'){
                this.ans3.html("correct")
            }
            else{
                this.ans3.html("wrong")
            }
        })

        text(" What is bts' debut song? ", 600, 100);
        text(" 1. No More dream 2. Boy in Luv 3. DNA ", 600, 150);
        this.box4.position(650,200);
        this.button4.position(850,200);
        this.ans4.position(950,175);
        this.button4.mousePressed(()=>{
            if(this.box4.value()==='1'){
                this.ans4.html("correct")
            }
            else{
                this.ans4.html("wrong")
            }
        })
    }
}