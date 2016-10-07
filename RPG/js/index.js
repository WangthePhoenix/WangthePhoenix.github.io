//Startup 
console.log("program start!");
//progress variable, can be updated at certain moments to trigger certain functions (e.g. while loops)
var progress = 0;

var playerBaseHealth = 100;
var playerBaseAttack = 20;
var playerHealth = playerBaseHealth;
var playerBasePP = 20;
var playerPP = playerBasePP;
var playerBaseDefense = 20;
var playerBaseSpeed = 50;
var playerCrit = 0;
var playerBaseMana = 0;
var playerMana = playerBaseMana;
var playerChara = "Jimmy";
var playerName = null;
var classtoggle = 0;
var playerSpeed = 0;
var playerAttack = 0;
var playerDefense = 0;
var maxHP = 0;
var maxPP = 0;
var maxMP = 0;
//here's the battle variable declarations, too.  cuz you're also not supposed to declare variables inside functions, something about them having to be global
var priority = 0;
var turnNumber = 0;
var lastMove = 0;
var playerSucc = 0;
var monsterSucc = 0;
var luckGen = 0;
var plusMinus = 0;
var runSucc = 0;
//couldn't decide where to put this variable...
var attackDMG = 0;

//even some monster generation variables
var availableMons = null;
var monsterName = "Jimmy";
var deletThisOut = 0;
var deletThisIn = 0;
var monsterPic = 0;

//variable that generates extra numbers, useful in a variety of situations. just make sure you remember that it exists ;)
var numGen = 0;

var message = "No Messages";
progress = 1;
message = "Started Game!";

document.getElementById("msg").innerHTML = message;

function heromessage() {
  playerName = prompt("What is your hero's name?");
  console.log("hero named!");
  console.log("new name: " + playerName);
  document.getElementById("hero").innerHTML = playerName;
  document.getElementById("nameButton").style.display = "none";
  document.getElementById("classSelec").style.display = "inline";
  message = "Hero Named!";
  document.getElementById("msg").innerHTML = message;
  progress = 2;
}



//class selection
function chooseFighter() {
  playerChara = "Fighter";
  playerBaseHealth = 150;
  playerBaseAttack = 45;
  playerBasePP = 45;
  playerBaseDefense = 45;
  playerBaseSpeed = 55;
  playerBaseMana = "None";
  //considering class selection message
  message = "You are considering " + playerChara + ".";
  document.getElementById("msg").innerHTML = message;
  //enables the 'Confirm Class?' button
  document.getElementById("classConfirm").style.display = "block";
}
function choosePaladin() {
  playerChara = "Paladin";
  playerBaseHealth = 180;
  playerBaseAttack = 25;
  playerBasePP = 10;
  playerBaseDefense = 55;
  playerBaseSpeed = 50;
  playerBaseMana = 20;
  message = "You are considering " + playerChara + ".";
  document.getElementById("msg").innerHTML = message;
  document.getElementById("classConfirm").style.display = "block";
}
function chooseSpecialist() {
  //specialist class is... well, special.  they have less than average base stats but at the beginning of the game the player can choose a single stat to add 100 points to. they get an extra 10 points in their stat total over other characters
  playerChara = "Specialist";
  playerBaseHealth = 120;
  playerBaseAttack = 20;
  playerBasePP = 60;
  playerBaseDefense = 20;
  playerBaseSpeed = 30;
  playerBaseMana = "None";
  message = "You are considering " + playerChara + ".";
  document.getElementById("msg").innerHTML = message;
  document.getElementById("classConfirm").style.display = "block";
}
function chooseMage() {
  playerChara = "Mage";
  playerBaseHealth = 120;
  playerBaseAttack = 30;
  playerBasePP = 40;
  playerBaseDefense = 20;
  playerBaseSpeed = 60;
  playerBaseMana = 70;
  message = "You are considering " + playerChara + ".";
  document.getElementById("msg").innerHTML = message;
  document.getElementById("classConfirm").style.display = "block";
}
function chooseWarrior() {
  playerChara = "Warrior";
  playerBaseHealth = 180;
  playerBaseAttack = 70;
  playerBasePP = 10;
  playerBaseDefense = 40;
  playerBaseSpeed = 40;
  playerBaseMana = "None";
  message = "You are considering " + playerChara + ".";
  document.getElementById("msg").innerHTML = message;
  document.getElementById("classConfirm").style.display = "block";
}
function chooseAssassin() {
  playerChara = "Assassin";
  playerBaseHealth = 120;
  playerBaseAttack = 70;
  playerBasePP = 50;
  playerBaseDefense = 20;
  playerBaseSpeed = 70;
  playerBaseMana = 10;
  message = "You are considering " + playerChara + ".";
  document.getElementById("msg").innerHTML = message;
  document.getElementById("classConfirm").style.display = "block";
}

function lockIn() {
  playerHealth = playerBaseHealth;
  playerPP = playerBasePP;
  playerMana = playerBaseMana;
  playerAttack = playerBaseAttack;
  playerDefense = playerBaseDefense;
  playerSpeed = playerBaseSpeed;
  maxHP = playerHealth;
  maxPP = playerPP;
  maxMP = playerMana;
  document.getElementById("classConfirm").style.display = "none";
  document.getElementById("classSelec").style.display = "none";
  //change message to... wait, you should know this
  message = "You have selected " + playerChara + "!";
  document.getElementById("msg").innerHTML = message;
  //character picture setup
  var img = new Image();
  var div = document.getElementById("profile");
  img.onload = function () {
    div.appendChild(img);
  };
  img.src = "images/" + playerChara + ".png";

  //player luck generation
  playerCrit = Math.floor((Math.random() * 100) + 1);
  if (playerCrit >= 95) {
    message = "Your character has been blessed with great luck.";
    document.getElementById("luckMsg").innerHTML = message;
  } else if (playerCrit <= 5) {
    message = "Your character has been cursed with misfortune";
    document.getElementById("luckMsg").innerHTML = message;
  }

  //hot stat box setup
  document.getElementById("hotStat").style.display = "block";
  document.getElementById("currentClass").innerHTML = "Class: " + playerChara;
  document.getElementById("heroHealth").innerHTML = "HP: " + playerHealth;
  document.getElementById("heroPP").innerHTML = "PP: " + playerPP;
  document.getElementById("heroMana").innerHTML = "MP: " + playerMana;
  //menu setup

  //in-depth stat box setup
  document.getElementById("maxHP").innerHTML = "Max Health: " + maxHP;
  document.getElementById("maxPP").innerHTML = "Max Power Points: " + maxPP;
  document.getElementById("maxMP").innerHTML = "Max Mana: " + maxMP;
  document.getElementById("heroAttack").innerHTML = "Attack: " + playerAttack;
  document.getElementById("heroDefense").innerHTML = "Defense: " + playerDefense;
  document.getElementById("heroSpeed").innerHTML = "Speed: " + playerSpeed;
  //and outside town actions Button setup
  document.getElementById("menuButton").style.display = "block";
  document.getElementById("acts").style.display = "block";

}

//Menu Functionality
function openMenu() {
  document.getElementById("menuOutie").style.display = "block";
  document.getElementById("menuButton").style.display = "none";
  document.getElementById("menuText").style.display = "block";
  document.getElementById("statButton").style.display = "block";
  document.getElementById("invenButton").style.display = "block";
  document.getElementById("equipButton").style.display = "block";
}
//In-Depth Stat Box Open
function openStat() {
  document.getElementById("inStat").style.display = "block";
  document.getElementById("statButton").style.display = "none";
  document.getElementById("statText").style.display = "block";
  document.getElementById("menuText").style.display = "none";
  document.getElementById("invenButton").style.display = "none";
  document.getElementById("equipButton").style.display = "none";
}
//Master Menu Exit
function exitInnie() {
  document.getElementById("inStat").style.display = "none";
  document.getElementById("menuOutie").style.display = "none";
  document.getElementById("statText").style.display = "none";
  document.getElementById("menuText").style.display = "none";
  document.getElementById("menuButton").style.display = "block";
}



console.log("game start!");

//monster encounter
var area = 1;
console.log("area registered");

//area 1 monsters
//blueslime
var bSlime = "Blue Slime";
var bSlimeHealth = 70;
var bSlimeAttack = 60;
var bSlimeSpeed = 10;
//greenslime
var pSlime = "Purple Slime";
var pSlimeHealth = 100;
var pSlimeAttack = 30;
var pSlimeSpeed = 10;

console.log("monsters loaded");

//monster before encounter
var encounter = 0;
var monsterHealth = 0;
var monsterPrevHealth = 0;
var monsterAttack = 0;
var monsterSpeed = 0;



//encounter
function battle() {
  
  //monster generation
  if (area == 1) {
    availableMons = [bSlime, pSlime];
    monsterName = availableMons[(Math.floor(Math.random() * availableMons.length))];
  }
  message = "Encountered " + monsterName + "!";
  console.log("encounter: " + monsterName);
  document.getElementById("msg").innerHTML = message;

  //disables menu
  document.getElementById("townButton").style.display = "none";
  //document.getElementById("leaveButton").style.display = "none";
  document.getElementById("dangerButton").style.display = "none";
  //loads in-battle action buttons
  document.getElementById("attackButton").style.display = "block";
  document.getElementById("runButton").style.display = "block";


  //setting encounter stats
  if (monsterName == bSlime) {
    monsterHealth = bSlimeHealth;
    monsterAttack = bSlimeAttack;
    monsterSpeed = bSlimeSpeed;
  } else if (monsterName == pSlime) {
    monsterHealth = pSlimeHealth;
    monsterAttack = pSlimeAttack;
    monsterSpeed = pSlimeSpeed;
  }

  //setting up monster picture
  monsterPic = document.createElement("img");
  monsterPic.src = "images/monster/" + monsterName + ".png";
  document.getElementById("monsterPic").appendChild(monsterPic);


  //fight program
}

//battle program! cuz, well... it's supposed to be down here for some reason... yeah, you can't nest functions inside other, uh... things.
function attack() {
  //speed factors (which one acts first?)
  //the priority variable used to be declared here
  document.getElementById("msg1").innerHTML = null;
  document.getElementById("attackButton").style.display = "none";
  document.getElementById("runButton").style.display = "none";

  if (turnNumber === 0) {
    if (playerSpeed > monsterSpeed) {
      //player moves first
      priority = 1;
      //player is the last one that moved, monster gets to go next
      lastMove = 1;
    } else if (playerSpeed == monsterSpeed) {
      //player and monster speed equal, random first-mover calculated
      priority = Math.floor((Math.random() * 2) + 1);
      lastMove = priority;
    } else {
      //monster moves first
      priority = 2;
      lastMove = 2;
    }
  } 
  else {
    //if player is the one that moved last, monster gets to go next
    if (lastMove == 1) {
      priority = 2;
    } else {
      //if monster moved last, player gets to go next
      priority = 1;
    }
  }
    
    

  //actual attacking... fooled ya, it's the luck determination first

  if (priority == 1) {
    //if the player attacks on this turn...
    luckGen = Math.floor((Math.random() * 95) + 1);
    plusMinus = Math.floor((Math.random() * 2) + 1);
    if (plusMinus == 1) {
      playerSucc = playerCrit + luckGen;
    } else {
      playerSucc = playerCrit - luckGen;
    }
    //now it's time for player attacking... i think... maybe
    message = playerName + " attacks!";
    document.getElementById("msg").innerHTML = message;
    setTimeout (function(){
      message = playerName + " attacks!.";
      document.getElementById("msg").innerHTML = message;
    }, 500);
    setTimeout (function(){
      message = playerName + " attacks!..";
      document.getElementById("msg").innerHTML = message;
    }, 1000);
    setTimeout (function(){
      message = playerName + " attacks!...";
      document.getElementById("msg").innerHTML = message;
    }, 1500);
    setTimeout (function(){
      if (playerSucc > 99) {
        //critical hit
        attackDMG = playerAttack * 2;
        monsterHealth = monsterHealth - attackDMG;
        message = "A Smashing Blow!";
        document.getElementById("msg").innerHTML = message;
        message = "Monster took " + attackDMG + " damage!";
        document.getElementById("msg1").innerHTML = message;
      } else if (playerSucc < 1) {
        //miss
        message = playerName + " missed!";
        document.getElementById("msg").innerHTML = message;
        message = null;
        document.getElementById("msg1").innerHTML = message;
      } else {
        //regular attack
        attackDMG = playerAttack;
        monsterHealth = monsterHealth - attackDMG;
        message = "Success!";
        document.getElementById("msg").innerHTML = message;
        message = "Monster took " + attackDMG + " damage!";
        document.getElementById("msg1").innerHTML = message;
      }
      turnNumber = turnNumber + 1;
    }, 2000);
    setTimeout (function(){
      //now it's the monster's turn... provided it isn't dead, cuz y'now.
      if (monsterHealth < 1) {
        //wow, you won!
        message = "You're Winner!";
        document.getElementById("msg").innerHTML = message;
        console.log(message);
        document.getElementById("msg1").innerHTML = null;
        setTimeout(function(){
          message = "From the battle " +playerName+ " got";
          document.getElementById("msg1").innerHTML = message;
        }, 800);
        setTimeout(function(){
          message = "From the battle " +playerName+ " got.";
          document.getElementById("msg1").innerHTML = message;
        }, 1500);
        setTimeout(function(){
          message = "From the battle " +playerName+ " got..";
          document.getElementById("msg1").innerHTML = message;
        }, 2200);
        setTimeout(function(){
          message = "From the battle " +playerName+ " got...";
          document.getElementById("msg1").innerHTML = message;
        }, 2900);
        setTimeout(function(){
          message = "From the battle " +playerName+ " got... nothing.";
          document.getElementById("msg1").innerHTML = message;
        }, 3600);
        setTimeout(function(){
          message = "From the battle " +playerName+ " got... nothing. Items aren't in the game, yet.";
          document.getElementById("msg1").innerHTML = message;
        }, 4200);
        setTimeout(function(){
          document.getElementById("endButton").style.display = "block";
        }, 4800);
      } else {
        //looks like the monster's not rekt, so, like most conventional monsters, he's gonna attack
        luckGen = Math.floor((Math.random() * 100) + 1);
        numGen = Math.floor((Math.random() * 100) + 1);
        monsterSucc = (luckGen + numGen) / 2;
        //now it's time for the monster attacking
        document.getElementById("msg1").innerHTML = null;
        message = monsterName + " attacks!";
        document.getElementById("msg").innerHTML = message;
        setTimeout (function(){
          message = monsterName + " attacks!.";
        }, 500);
        setTimeout (function(){
          message = monsterName + " attacks!..";
        }, 1000);
        setTimeout (function(){
          message = monsterName + " attacks!...";
        }, 1500);
        setTimeout (function(){
          if (monsterSucc > 90) {
            //monster critical, AKA bad news for player
            attackDMG = monsterAttack * 2;
            playerHealth = playerHealth - attackDMG;
            message = "Ouch! " + playerName + " took a heavy hit!";
            document.getElementById("msg").innerHTML = message;
            message = "Took " + attackDMG + " damage!";
            document.getElementById("msg1").innerHTML = message;
            if (playerHealth < 0) {
              playerHealth = 0;
            }
            document.getElementById("heroHealth").innerHTML = "HP: " + playerHealth;
          } else if (monsterSucc < 10) {
            //monster misses and looks a bit dumb, kind of like how I feel while programming this
            message = monsterName + " missed!";
            document.getElementById("msg").innerHTML = message;
          } else {
            //just a regular, boring, old attack
            attackDMG = monsterAttack;
            playerHealth = playerHealth - attackDMG;
            message = playerName + " took some damage!";
            document.getElementById("msg").innerHTML = message;
            message = "Took " + attackDMG + " damage!";
            document.getElementById("msg1").innerHTML = message;
            if (playerHealth < 0) {
              playerHealth = 0;
            }
            document.getElementById("heroHealth").innerHTML = "HP: " + playerHealth;
          }
          document.getElementById("attackButton").style.display = "block";
          document.getElementById("runButton").style.display = "block";
        }, 2000);
      }
    }, 3500);
    turnNumber = turnNumber + 1;
    lastMove = 2;
    setTimeout (function(){
      //now check if the player's dead, which is honestly pretty hard for the player to manage to do at this point, i'll be impressed if you manage to kill yourself this early
      //loser program
      if (playerHealth < 1) {
        //haha you just got dunked
        document.getElementById("msg1").innerHTML = null;
        document.getElementById("gg").style.display = "block";
        message = "You're a lose!";
        document.getElementById("msg").innerHTML = message;
        console.log(message);
        message = null;
        document.getElementById("msg1").innerHTML = message;
        setTimeout (function(){
          message = "Now re-load the page or something.";
          document.getElementById("msg1").innerHTML = message;
        }, 500);
      } else {
        setTimeout (function(){
          document.getElementsByClassName("inBattleAct").style.display = "block";
        }, 1000);
      }

    }, 4000);
    
  } else {
    //if the monster attacks on this turn...
    //monsters have luck, too, you know
    luckGen = Math.floor((Math.random() * 100) + 1);
    numGen = Math.floor((Math.random() * 100) + 1);
    monsterSucc = (luckGen + numGen) / 2;
    //now it's time for the monster attacking
    message = monsterName + " attacks!";
    document.getElementById("msg").innerHTML = message;
    document.getElementById("msg1").innerHTML = null;
    setTimeout(function(){
      message = monsterName + " attacks!.";
      document.getElementById("msg").innerHTML = message;
    }, 500);
    setTimeout(function(){
      message = monsterName + " attacks!..";
      document.getElementById("msg").innerHTML = message;
    }, 1000);
    setTimeout(function(){
      message = monsterName + " attacks!...";
      document.getElementById("msg").innerHTML = message;
    }, 1500);
    setTimeout (function(){
      if (monsterSucc > 90) {
        //monster critical, AKA bad news for player
        attackDMG = monsterAttack * 2;
        playerHealth = playerHealth - attackDMG;
        message = "Ouch! " + playerName + " took a heavy hit!";
        document.getElementById("msg").innerHTML = message;
        message = "Took " + attackDMG + " damage!";
        document.getElementById("msg1").innerHTML = message;
        if (playerHealth < 0) {
          playerHealth = 0;
        }
        document.getElementById("heroHealth").innerHTML = "HP: " + playerHealth;
      } else if (monsterSucc < 10) {
        //monster misses and looks a bit dumb, kind of like how I feel while programming this
        message = monsterName + " missed!";
        document.getElementById("msg").innerHTML = message;
        message = null;
        document.getElementById("msg1").innerHTML = message;
      } else {
        //just a regular, boring, old attack
        attackDMG = monsterAttack;
        playerHealth = playerHealth - attackDMG;
        message = playerName + " took some damage!";
        document.getElementById("msg").innerHTML = message;
        message = "Took " + attackDMG + " damage!";
        document.getElementById("msg1").innerHTML = message;
      }
      if (playerHealth < 0) {
        playerHealth = 0;
      }
      document.getElementById("heroHealth").innerHTML = "HP: " + playerHealth;
      turnNumber = turnNumber + 1;
    }, 2000);
  


    
    //now check if the player's dead, which is honestly pretty hard for the player to manage to do at this point, i'll be impressed if you manage to kill yourself this early, i guess you can tell i copy-pasted that
    //loser program
    setTimeout (function(){
      if (playerHealth < 1) {
        document.getElementById("msg1").innerHTML = null;
        //haha you just got dunked
        message = "You're a lose!";
        document.getElementById("msg").innerHTML = message;
        console.log(message);
        setTimeout (function(){
          message = "Now re-load the page or something.";
          document.getElementById("msg1").innerHTML = message;
        }, 800);
      } else {
        document.getElementById("msg1").innerHTML = null;
        //now the player mc-slow-face gets to attack
        //if the player attacks on this turn...
        luckGen = Math.floor((Math.random() * 95) + 1);
        plusMinus = Math.floor((Math.random() * 2) + 1);
        if (plusMinus == 1) {
          playerSucc = playerCrit + luckGen;
        } else {
          playerSucc = playerCrit - luckGen;
        }
        //now it's time for player attacking... i think... maybe
        message = playerName + " attacks!";
        document.getElementById("msg").innerHTML = message;
        setTimeout (function(){
          message = playerName + " attacks!.";
          document.getElementById("msg").innerHTML = message;
        }, 500);
        setTimeout (function(){
          message = playerName + " attacks!..";
          document.getElementById("msg").innerHTML = message;
        }, 1000);
        setTimeout (function(){
          message = playerName + " attacks!...";
          document.getElementById("msg").innerHTML = message;
        }, 1500);
        setTimeout (function(){
          if (playerSucc > 99) {
            //critical hit
            attackDMG = playerAttack * 2;
            monsterHealth = monsterHealth - attackDMG;
            message = "A Smashing Blow!";
            document.getElementById("msg").innerHTML = message;
            message = "Monster took " + attackDMG + " damage!";
            document.getElementById("msg1").innerHTML = message;
          } else if (playerSucc < 1) {
            //miss
            message = playerName + " missed!";
            document.getElementById("msg").innerHTML = message;
            message = null;
           document.getElementById("msg1").innerHTML = message;
          } else {
            //regular attack
            attackDMG = playerAttack;
            monsterHealth = monsterHealth - attackDMG;
            message = "Success!";
            document.getElementById("msg").innerHTML = message;
            message = "Monster took " + attackDMG + " damage!";
            document.getElementById("msg1").innerHTML = message;
          }
          turnNumber = turnNumber + 1;
          lastMove = 1;
          document.getElementById("attackButton").style.display = "block";
          document.getElementById("runButton").style.display = "block";
        }, 2000);  
      }
    }, 3500);

    setTimeout (function(){
      if (monsterHealth < 1) {
        //wow, you won!
        message = "You're Winner!";
        document.getElementById("msg").innerHTML = message;
        console.log(message);
        document.getElementById("msg1").innerHTML = null;
        setTimeout(function(){
          message = "From the battle " +playerName+ " got";
          document.getElementById("msg1").innerHTML = message;
        }, 800);
        setTimeout(function(){
          message = "From the battle " +playerName+ " got.";
          document.getElementById("msg1").innerHTML = message;
        }, 1500);
        setTimeout(function(){
          message = "From the battle " +playerName+ " got..";
          document.getElementById("msg1").innerHTML = message;
        }, 2200);
        setTimeout(function(){
          message = "From the battle " +playerName+ " got...";
          document.getElementById("msg1").innerHTML = message;
        }, 2900);
        setTimeout(function(){
          message = "From the battle " +playerName+ " got... nothing.";
          document.getElementById("msg1").innerHTML = message;
        }, 3600);
        setTimeout(function(){
          message = "From the battle " +playerName+ " got... nothing. Items aren't in the game, yet.";
          document.getElementById("msg1").innerHTML = message;
        }, 4200);
        setTimeout(function(){
          document.getElementById("endButton").style.display = "block";
        }, 4800);
      } else {
        setTimeout (function(){
          document.getElementsByClassName("inBattleAct").style.display = "block";
        }, 1000);
      }
    }, 4000);
  }
}



// if you happen to wanna run from the battle
function run() {
  console.log("attempted to run");

  document.getElementById("attackButton").style.display = "none";
  document.getElementById("runButton").style.display = "none";
  document.getElementById("msg1").innerHTML = null;
  document.getElementById("msg").innerHTML = "Trying to run away";
  setTimeout(function(){
    document.getElementById("msg").innerHTML = "Trying to run away.";
  }, 500);
  setTimeout(function(){
    document.getElementById("msg").innerHTML = "Trying to run away..";
  }, 1000);
  setTimeout(function(){
    document.getElementById("msg").innerHTML = "Trying to run away...";
  }, 1500);
  //SUCCess determination
  setTimeout(function(){
    if ((playerSpeed - monsterSpeed) >= (monsterSpeed/10)){
      //SUCCess!
      setTimeout(function(){
        document.getElementById("msg").innerHTML = "Got Away Safely!";
        deletThisOut = document.getElementById("fight");
        deletThisIn = document.getElementById("monsterPic");
        deletThisOut.removeChild(deletThisIn);

        //enables menu
        document.getElementById("townButton").style.display = "block";
        //document.getElementById("leaveButton").style.display = "block";
        document.getElementById("dangerButton").style.display = "block";
      }, 800);
    } else if ((playerSpeed - monsterSpeed) <= (0 - (monsterSpeed/10))) {
      //lol fail
      setTimeout(function(){
        document.getElementById("msg").innerHTML = "Couldn't Get Away!";
      }, 800);

      //and then the monster attack program again, because the wild ride doesn't end until the monster dies or you get away
      luckGen = Math.floor((Math.random() * 100) + 1);
      numGen = Math.floor((Math.random() * 100) + 1);
      monsterSucc = (luckGen + numGen) / 2;
      //now it's time for the monster attacking
      message = monsterName + " attacks!";
      document.getElementById("msg").innerHTML = message;
      document.getElementById("msg1").innerHTML = null;
      setTimeout(function(){
        message = monsterName + " attacks!.";
        document.getElementById("msg").innerHTML = message;
      }, 500);
      setTimeout(function(){
        message = monsterName + " attacks!..";
        document.getElementById("msg").innerHTML = message;
      }, 1000);
      setTimeout(function(){
        message = monsterName + " attacks!...";
        document.getElementById("msg").innerHTML = message;
      }, 1500);
      setTimeout (function(){
        if (monsterSucc > 90) {
          //monster critical, AKA bad news for player
          attackDMG = monsterAttack * 2;
          playerHealth = playerHealth - attackDMG;
          message = "Ouch! " + playerName + " took a heavy hit!";
          document.getElementById("msg").innerHTML = message;
          message = "Took " + attackDMG + " damage!";
          document.getElementById("msg1").innerHTML = message;
          if (playerHealth < 0) {
            playerHealth = 0;
          }
          document.getElementById("heroHealth").innerHTML = "HP: " + playerHealth;
        } else if (monsterSucc < 10) {
          //monster misses and looks a bit dumb, kind of like how I feel while programming this
          message = monsterName + " missed!";
          document.getElementById("msg").innerHTML = message;
          message = null;
          document.getElementById("msg1").innerHTML = message;
        } else {
          //just a regular, boring, old attack
          attackDMG = monsterAttack;
          playerHealth = playerHealth - attackDMG;
          message = playerName + " took some damage!";
          document.getElementById("msg").innerHTML = message;
          message = "Took " + attackDMG + " damage!";
          document.getElementById("msg1").innerHTML = message;
        }
        if (playerHealth < 0) {
          playerHealth = 0;
        }
        document.getElementById("heroHealth").innerHTML = "HP: " + playerHealth;
        turnNumber = turnNumber + 1;
      }, 2000);
  


    
      //now check if the player's dead, which is honestly pretty hard for the player to manage to do at this point, i'll be impressed if you manage to kill yourself this early, i guess you can tell i copy-pasted that
      //loser program
      setTimeout (function(){
        if (playerHealth < 1) {
          document.getElementById("msg1").innerHTML = null;
          //haha you just got dunked
          message = "You're a lose!";
          document.getElementById("msg").innerHTML = message;
          console.log(message);
          setTimeout (function(){
            message = "Now re-load the page or something.";
            document.getElementById("msg1").innerHTML = message;
          }, 800);
        } else {
          document.getElementById("attackButton").style.display = "block";
          document.getElementById("runButton").style.display = "block";
        }
      }, 3500);

    } else {
      runSucc = Math.floor((Math.random() * 2) + 1);
      if (runSucc == 1) {
        setTimeout(function(){
          document.getElementById("msg").innerHTML = "Got Away Safely!";
          deletThisOut = document.getElementById("fight");
          deletThisIn = document.getElementById("monsterPic");
          deletThisOut.removeChild(deletThisIn);

          //enables menu
          document.getElementById("townButton").style.display = "block";
          //document.getElementById("leaveButton").style.display = "block";
          document.getElementById("dangerButton").style.display = "block";
        }, 800);
      } else {
        setTimeout(function(){
          document.getElementById("msg").innerHTML = "Couldn't Get Away!";
        }, 800);

        //and then the monster attack program again, because the wild ride doesn't end until the monster dies or you get away
        luckGen = Math.floor((Math.random() * 100) + 1);
        numGen = Math.floor((Math.random() * 100) + 1);
        monsterSucc = (luckGen + numGen) / 2;
        //now it's time for the monster attacking
        message = monsterName + " attacks!";
        document.getElementById("msg").innerHTML = message;
        document.getElementById("msg1").innerHTML = null;
        setTimeout(function(){
          message = monsterName + " attacks!.";
          document.getElementById("msg").innerHTML = message;
        }, 500);
        setTimeout(function(){
          message = monsterName + " attacks!..";
          document.getElementById("msg").innerHTML = message;
        }, 1000);
        setTimeout(function(){
          message = monsterName + " attacks!...";
          document.getElementById("msg").innerHTML = message;
        }, 1500);
        setTimeout (function(){
          if (monsterSucc > 90) {
            //monster critical, AKA bad news for player
            attackDMG = monsterAttack * 2;
            playerHealth = playerHealth - attackDMG;
            message = "Ouch! " + playerName + " took a heavy hit!";
            document.getElementById("msg").innerHTML = message;
            message = "Took " + attackDMG + " damage!";
            document.getElementById("msg1").innerHTML = message;
            if (playerHealth < 0) {
              playerHealth = 0;
            }
            document.getElementById("heroHealth").innerHTML = "HP: " + playerHealth;
          } else if (monsterSucc < 10) {
            //monster misses and looks a bit dumb, kind of like how I feel while programming this
            message = monsterName + " missed!";
            document.getElementById("msg").innerHTML = message;
            message = null;
            document.getElementById("msg1").innerHTML = message;
          } else {
            //just a regular, boring, old attack
            attackDMG = monsterAttack;
            playerHealth = playerHealth - attackDMG;
            message = playerName + " took some damage!";
            document.getElementById("msg").innerHTML = message;
            message = "Took " + attackDMG + " damage!";
            document.getElementById("msg1").innerHTML = message;
          }
          if (playerHealth < 0) {
            playerHealth = 0;
          }
          document.getElementById("heroHealth").innerHTML = "HP: " + playerHealth;
          turnNumber = turnNumber + 1;
        }, 2000);
  


    
        //now check if the player's dead, which is honestly pretty hard for the player to manage to do at this point, i'll be impressed if you manage to kill yourself this early, i guess you can tell i copy-pasted that
        //loser program
        setTimeout (function(){
          if (playerHealth < 1) {
            document.getElementById("msg1").innerHTML = null;
            //haha you just got dunked
            message = "You're a lose!";
            document.getElementById("msg").innerHTML = message;
            console.log(message);
            setTimeout (function(){
              message = "Now re-load the page or something.";
              document.getElementById("msg1").innerHTML = message;
            }, 800);
          } else {
            document.getElementById("attackButton").style.display = "block";
            document.getElementById("runButton").style.display = "block";
          }
        }, 3500);
      }
    }
  }, 2000);
}
//the button that ends the battle after you win, because everybody knows that the battle doesn't end until YOU win
function endBattle() {
  console.log("ended battle");
  //enables menu
  document.getElementById("townButton").style.display = "block";
  //document.getElementById("leaveButton").style.display = "block";
  document.getElementById("dangerButton").style.display = "block";

  deletThisOut = document.getElementById("fight");
  deletThisIn = document.getElementById("monsterPic");
  deletThisOut.removeChild(deletThisIn);

  document.getElementById("msg").innerHTML = null;
  document.getElementById("msg1").innerHTML = null;
  document.getElementById("endButton").style.display = "none";
}

function intoTown() {
  document.getElementById("townButton").style.display = "none";
  document.getElementById("dangerButton").style.display = "none";
  playerHealth = maxHP;
  document.getElementById("msg1").innerHTML = null;
  document.getElementById("msg").innerHTML = playerName + " went into town and had a good rest.";
  setTimeout(function(){
    document.getElementById("msg1").innerHTML = "Resting";
  }, 1000);
  setTimeout(function(){
    document.getElementById("msg1").innerHTML = "Resting.";
  }, 2000);
  setTimeout(function(){
    document.getElementById("msg1").innerHTML = "Resting..";
  }, 3000);
  setTimeout(function(){
    document.getElementById("msg1").innerHTML = "Resting...";
  }, 4000);
  setTimeout(function(){
    document.getElementById("msg").innerHTML = playerName + " was fully healed!";
    document.getElementById("heroHealth").innerHTML = "HP: " + playerHealth;
    document.getElementById("msg1").innerHTML = null;
  }, 4500); 
  document.getElementById("townButton").style.display = "block";
  document.getElementById("dangerButton").style.display = "block";
}
    
  




