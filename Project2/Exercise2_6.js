const guests = {
  ANTONY: {
    title: "General",
    region: "Rome",
    dietaryPreference: "Vegetarian",
    pastGifts: ["Golden Laurel", "Chariot"]
  },
  CICERO: {
    title: "Orator",
    region: "Arpinum",
    dietaryPreference: "Omnivore",
    pastGifts: ["Scroll of Proverbs", "Quill"]
  },
  BRUTUS: {
    title: "Senator",
    region: "Rome",
    dietaryPreference: "Vegan",
    pastGifts: ["Silver Dagger", "Marble Bust"]
    },
};
guests.CICERO.pastGifts.push("Golden Lyre");
const ANTONYRegion = guests.ANTONY.region;
delete guests.CICERO;
const generalProfile = guests.ANTONY;
generalProfile.region = "Egypt";
//Q1 Because array variables are reference types, ANTONY's region will also be updated to "Egypt".
