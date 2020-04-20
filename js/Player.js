//create the class for the player
class Player 
{

  //create the constructor function
  constructor()
  {

    //create all the objects which have to be shown in the database
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank = null;
  }


  //create the function to read the player count from database
  getCount()
  {
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>
    {
      playerCount = data.val();
    })
  }


  //create a function to update the playercount in the database
  updateCount(count)
  {
    database.ref('/').update(
      {
      playerCount: count
    });
  }


  //update the players information in the database
  update()
  {
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set(
      {
      name:this.name,
      distance:this.distance
    });
  }

  //get the player info in all player variable 
  static getPlayerInfo()
  {
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>
    {
      allPlayers = data.val();
    })
  }

  //read and write the cars at end property from database

  getCarsAtEnd()
  {
    database.ref('CarsAtEnd').on("value",(data)=>{

      this.rank = data.val();
    })
    

  }


  static updateCarsAtEnd(rank)
  {
    database.ref('/').update({

      CarsAtEnd:rank
    })

  }
}
