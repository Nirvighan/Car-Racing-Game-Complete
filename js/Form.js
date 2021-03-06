//create the class for the form
class Form 
{

  constructor() 
  {
    //create all the buttons and texts in the form
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');

    //create the reset button
    this.reset = createButton('Reset');
  }
  hide() 
  {
    //hide all the form objects
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display() 
  {
    //add the form image
    background(bg);

    //show the heading
    this.title.html("Car Racing Game");
    this.title.position(displayWidth / 2 - 50, 0);

    //show the name box and play button
    this.input.position(displayWidth / 2 - 40, displayHeight / 2 - 280);
    this.button.position(displayWidth / 2 + 30, displayHeight / 2 - 250);

    //set the position for the reset button
    this.reset.position(displayWidth - 100, 30);
    
    //write the code to make the changes when play button is pressed
    this.button.mousePressed(() => 
    {
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount += 1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth / 2 - 70, displayHeight / 4);
    });

    //reset the databse when the button is pressed
    this.reset.mousePressed(() => 
    {
      game.update(0);
      player.updateCount(0);
       Player.updateCarsAtEnd(0);
    })

  }
}