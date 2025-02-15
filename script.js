function monsterPopulation() {
    alert("Hey! You're that cool hero guy right? Well, I'm gonna be your sidekick for now! What I can do is help you calcolate the amount of monsters you need to defeat, is that good?")

    let initialPopulation = parseFloat(prompt("Okay! Then, what is the initial population of the monsters?: "));
    let rateOfGrowth = parseFloat(prompt("What is the monsters' rate of growth? (e.g., 0.05 for 5%): "));
    let timeHours = parseFloat(prompt("How much time has passed? (hours): "));

    let finalPopulation = Math.round(initialPopulation * Math.pow(Math.E, (rateOfGrowth * timeHours)));

    let locationOfMonster = prompt("Where is the monster currently?: ").toUpperCase();
    let nameOfMonster = prompt("What are their names?: ").toUpperCase();

    let theMonsterNation = locationOfMonster.concat(" ", nameOfMonster);

    document.getElementById('result').innerHTML = "After " + timeHours + " hours, the population of " + theMonsterNation + " has risen to " + finalPopulation + "!";
}
