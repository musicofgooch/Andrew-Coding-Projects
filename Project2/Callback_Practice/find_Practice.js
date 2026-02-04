const mythicalCreatures = [
	{name: "Dragon", type: "Fire", lastSeen: "Volcano Valley"},
	{name: "Mermaid", type: "Water", lastSeen: "Coral Caves"},
	{name: "Unicorn", type: "Land", lastSeen: "Enchanted Forest"},
	{name: "Griffin", type: "Air", lastSeen: "Highwind Mountains"},
	{name: "Kraken", type: "Water", lastSeen: "Abyssal Depths"}
];

const waterFirst = mythicalCreatures.find(
    function(creature){
        return creature.type === "Water";
    });

    console.log(waterFirst.name)

const grifind = mythicalCreatures.findIndex(
    function(creature){
        return creature.name === "Griffin"
    }
);

console.log(grifind);

const EnchantedCreature = mythicalCreatures.find(
    function(creature){
        return creature.lastSeen === "Enchanted Forest"
    }
);

console.log(EnchantedCreature.name);
