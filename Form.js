class Form 
{
    constructor()
    {
        this.name = createElement('h1');
        this.playerName = createInput("Name");
        this.team = createElement('h3');
        this.redTeam = createButton("RED Team");
        this.blueTeam = createButton("BLUE Team");
        this.greenTeam = createButton("GREEN Team");
        this.orangeTeam = createButton("ORANGE Team");
        this.greeting = createElement('h2');
        // this.reset = createButton('Reset');
        

    }
    hide(){
        this.playerName.hide();
        this.team.hide();
        this.redTeam.hide();
        this.blueTeam.hide();
        this.greenTeam.hide();
        this.orangeTeam.hide();
      }

    display(){
        this.name.html("Multiplayer Football Game");
        this.name.position(displayWidth/3 , 20);

        this.team.html("Select Your Team")
        this.team.position(560, 330);

        this.playerName.position(displayWidth/2.5 , 200);
        
        this.redTeam.position(440 , 400);
        this.redTeam.style('background', 'red');
        this.redTeam.style('color', 'white');

        this.blueTeam.position(530 , 400);
        this.blueTeam.style('background', 'blue');
        this.blueTeam.style('color', 'white');

        this.greenTeam.position(630 , 400);
        this.greenTeam.style('background', 'green');
        this.greenTeam.style('color', 'white');

        this.orangeTeam.position(740 , 400);
        this.orangeTeam.style('background', 'orange');
        this.orangeTeam.style('color', 'white');

        // this.reset.position(1200,20);
        

        this.redTeam.mousePressed(()=>{
            player = new Player();
            player.name = this.playerName.value(); 

            this.playerName.hide();
            this.team.hide();
            this.redTeam.hide();
            this.blueTeam.hide();
            this.greenTeam.hide();
            this.orangeTeam.hide();

            playerCount+=1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);

            this.greeting.html("Hello " + player.name)
            this.greeting.position(600,350);
          })

        this.blueTeam.mousePressed(()=>{
            player = new Player();
            player.name = this.playerName.value();
            
            this.playerName.hide();
            this.team.hide();
            this.redTeam.hide();
            this.blueTeam.hide();
            this.greenTeam.hide();
            this.orangeTeam.hide();

            playerCount+=1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);

            this.greeting.html("Hello " + player.name)
            this.greeting.position(600,350);
          })

        this.greenTeam.mousePressed(()=>{
            player = new Player();
            player.name = this.playerName.value();
            
            this.playerName.hide();
            this.team.hide();
            this.redTeam.hide();
            this.blueTeam.hide();
            this.greenTeam.hide();
            this.orangeTeam.hide();

            playerCount+=1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);

            this.greeting.html("Hello " + player.name)
            this.greeting.position(600,350);
          })


          this.orangeTeam.mousePressed(()=>{
            player = new Player();
            player.name = this.playerName.value();

            this.playerName.hide();
            this.team.hide();
            this.redTeam.hide();
            this.blueTeam.hide();
            this.greenTeam.hide();
            this.orangeTeam.hide();

            playerCount+=1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);

            this.greeting.html("Hello " + player.name)
            this.greeting.position(600,350);
          })

        // this.reset.mousePressed(()=>{
        //     this.reset.hide();

            // player.updateCount(0);
            // player.update(0);
        //    })        
    }
}