


//Implement an RPG game with heroes or monsters. Heroes and monsters fight each other.
//Create at least 2 classes: Hero and Monster, each class with at least 2 properties: 
// health and attack. Each class has a method to attack the other class.



//I will create a JavaScript file with name RPG_games.js.
//Inside this fileI will define two classes: Hero and Monster.

//The Hero class will have two properties: health and attack along with one method called fightToProtect().

//The Monster class will also have two properties: health and attack, along with one method called fightToKill().

/*

You can add more classes and functions if you want to. Some suggestions:
- Create a function fight that alternates turns for the hero and the monster
- Add more stats (defense, speed, magic attack, magic defense)
- Add an attribute that tells if the character is alive
- Add different types of heroes and monsters
- Make the attack method partially random
- Add a dungeon class

I feel a little confused and I feel a little confused with the functions in this program. 
I followed the instructions, but I think I might have gone in a different direction. 
with the functions in this program. 
I followed the instructions, but I think I might have gone in a different direction.

I feel a little confused and not very confident about this code yet with the functions in this program.
 I followed the instructions but I think I might have gone in a different direction.

*/ 

class Hero{

    h_health;
    h_attack;

    constructor(hero_health,hero_attack){

        this.h_health = hero_health;
        this.h_attack = hero_attack;
    }

    fightToProtect(monster){
        console.log("Hero attacks monster");
        monster_obj.m_health = monster_obj.m_health-this.h_attack;
        console.log("monster's health at present----"+ monster_obj.m_health);

    }




}




class Monster{

    m_health;
    m_attack;

    constructor(monster_health,monster_attack){

        this.m_health = monster_health;
        this.m_attack = monster_attack;
    }

    fightToKill(hero){
        console.log('Monster attacks Hero');
        hero_obj.h_health = hero_obj.h_health-this.m_attack;
        console.log("Hero's health at present ----"+ hero_obj.h_health);
    }



}


const hero_obj = new Hero(200, 30); //passing argumnts with more values to show hero stronger with strong health and strong attacks
const monster_obj = new Monster(100, 10);//passing argumnts with less values to show monster weak

hero_obj.fightToProtect(monster_obj); // hero attacks monster  frist round 
monster_obj.fightToKill(hero_obj); // monster attacks hero  frist round 








