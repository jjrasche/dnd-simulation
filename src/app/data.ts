export const classes = {
    "barbarian": {
        "skills": ["animal handling", "athletics", "intimidation", "nature", "perception", "survival"],
        "numskills": 2
    },
    "bard": {
        "skills": ["athletics", "acrobatics", "sleight of hand", "stealth", "arcana", "history", "investigation", "nature", "religion", "animal handling", "insight", "medicine", "perception", "survival", "deception", "intimidation", "performance", "persuasion"],
        "numskills": 3
    },
    "cleric": {
        "skills": ["history", "insight", "medicine", "persuasion", "religion"],
        "numskills": 2
    },
    "druid": {
        "skills": ["acrobatics", "animal handling", "athletics", "history", "insight", "intimidation", "perception", "survival"],
        "numskills": 2
    },
    "fighter": {
        "skills": ["acrobatics", "athletics", "history", "insight", "religion", "stealth"],
        "numskills": 2
    },
    "paladin": {
        "skills": ["athletics", "insight", "intimidation", "medicine", "persuasion", "religion"],
        "numskills": 2
    },
    "ranger": {
        "skills": ["animal handling", "athletics", "insight", "investigation", "nature", "perception", "stealth", "survival"],
        "numskills": 3
    },
    "rogue": {
        "skills": ["acrobatics", "athletics", "deception", "insight", "intimidation", "investigation", "perception", "performance", "persuasion", "sleight of hand", "stealth"],
        "numskills": 4
    },
    "sorcerer": {
        "skills": ["arcana", "deception", "insight", "intimidation", "persuasion", "religion"],
        "numskills": 2
    },
    "warlock": {
        "skills": ["arcana", "deception", "history", "intimidation", "investigation", "nature", "religion"],
        "numskills": 2
    },
    "wizard": {
        "skills": ["arcana", "history", "insight", "investigation", "medicine", "religion"],
        "numskills": 2
    }
};




export const skills = {
    "acrobatics": {
        "ability": "dexterity",
        "description": "Your Dexterity (Acrobatics) check covers your attempt to stay on your feet in a tricky situation, such as when you’re trying to run across a sheet of ice, balance on a tightrope, or stay upright on a rocking ship’s deck. The DM might also call for a Dexterity (Acrobatics) check to see if you can perform acrobatic stunts, including dives, rolls, somersaults, and flips."
    },
    "animal handling": {
        "ability": "wisdom",
        "description": "Keep a mount from getting spooked, or intuit an animal’s intentions, the DM might call for a Wisdom (Animal Handling) check or to control your mount when you attempt a risky maneuver."
    },
    "arcana": {
        "ability": "intelligence",
        "description": "Your Intelligence (Arcana) check measures your ability to recall lore about spells, magic items, eldritch symbols, magical traditions, the planes of existence, and the inhabitants of those planes."
    },
    "athletics": {
        "ability": "strength",
        "description": "Your Strength (Athletics) check covers difficult situations you encounter while climbing,"
    },
    "deception": {
        "ability": "charisma",
        "description": "Your Charisma (Deception) check determines whether you can convincingly hide the truth, either verbally or through your actions. This deception can encompass everything from misleading others through ambiguity to telling outright lies. Typical situations include trying to fast-talk a guard, con a merchant, earn money through gambling, pass yourself off in a disguise, dull someone’s suspicions with false assurances, or maintain a straight face while telling"
    },
    "history": {
        "ability": "intelligence",
        "description": "Your Intelligence (History) check measures your ability to recall lore about historical events,"
    },
    "insight": {
        "ability": "wisdom",
        "description": "Your Wisdom (Insight) check decides whether you can determine the true intentions of a creature, such as when searching out a lie or predicting someone’s next move. Doing so involves gleaning clues from body language, speech habits, and changes in mannerisms."
    },
    "intimidation": {
        "ability": "charisma",
        "description": "When you attempt to influence someone through overt threats, hostile actions, and physical violence, the DM might ask you to make a Charisma (Intimidation) check. Examples include trying to pry information out of a prisoner, convincing street thugs"
    },
    "investigation": {
        "ability": "intelligence",
        "description": "When you look around for clues and make deductions based on those clues, you make an Intelligence (Investigation) check. You might deduce the location of a hidden object, discern from the appearance of a wound what kind of weapon dealt it, or determine the weakest point in a tunnel that could cause it to collapse. Poring through ancient scrolls in search of a hidden fragment of knowledge might also call for an Intelligence (Investigation) check."
    },
    "medicine": {
        "ability": "wisdom",
        "description": "Your Wisdom (Medicine) check lets you try to stabilize a dying companion or diagnose an illness."
    },
    "nature": {
        "ability": "intelligence",
        "description": "Your Intelligence (Nature) check measures your ability to recall lore about terrain, plants and animals, the weather, and natural cycles."
    },
    "perception": {
        "ability": "wisdom",
        "description": "ourWisdom (Perception)checklets you spot, hear, or otherwise detect the presence of something. It measures your general awareness of your surroundings and the keenness of your senses. Finding a Hidden Object When your character searches for a hidden object such as a secret door or a trap, the DM typically asks you to make a Wisdom (Perception) check. Such acheck can be used to find hidden details or other information and clues that you might otherwise overlook. In most cases, you need to describe where you are looking in order for the DM to determine your chance of success."
    },
    "performance": {
        "ability": "charisma",
        "description": "Your Charisma (Performance) check determines how well you can delight an audience with music, dance, acting, storytelling, or some other form of entertainment."
    },
    "persuasion": {
        "ability": "charisma",
        "description": "When you attempt to influence someone or a group of people with tact, social graces, or good nature, the DM might ask you to make a Charisma (Persuasion) check. Typically, you use persuasion when acting in good faith, to foster friendships, make cordial requests, or exhibit proper etiquette. Examples of persuading others include convincing a chamberlain to let your party see the king, negotiating peace between warring tribes, or inspiring a crowd of townsfolk."
    },
    "religion": {
        "ability": "intelligence",
        "description": "Your Intelligence (Religion) check measures your ability to recall lore about deities, rites and prayers, religious hierarchies, holy symbols, and the practices"
    },
    "sleight of hand": {
        "ability": "dexterity",
        "description": "Whenever you attempt an act of legerdemain or manual trickery, such as planting something on someone else or concealing an object on your person, make a Dexterity (Sleight of Hand) check. The DM might also call for a Dexterity (Sleight of Hand) check to determine whether you can lift a coin purse off another person or slip something out of another person’s pocket."
    },
    "stealth": {
        "ability": "dexterity",
        "description": "Make a Dexterity (Stealth) check when you attempt to conceal yourself from enemies, slink past guards, slip away without being noticed, or sneak up on someone without being seen or heard."
    },
    "survival": {
        "ability": "wisdom",
        "description": "The DM might ask you to make a Wisdom (Survival) check to follow tracks, hunt wild game, guide your group through frozen wastelands, identify signs that owlbears live nearby, predict the weather, or avoid quicksand and other natural hazards."
    },
};

export const backgrounds = {
    "acolyte": {
        "skills": ["insight", "religion"],
        "numlanguages": 2,
        "equipment": {
            "description": "a holy symbol (a gift to you when you entered the priesthood), a prayer book or prayer wheel, 5 sticks of incense, vestments, a set of common clothes, and a belt pouch containing 15 gp",
            "gp": 15
        },
    },
    "charlatan": {
        "skills": ["deception", "sleight of hand"],
        "tools": ["disguise kit", "forgery kit"],
        "equipment": {
            "description": "a set of fine clothes, a disguise kit, tools of the con of your choice (ten stoppered bottles filled with colored liquid, a set of weighted dice, a deck of marked cards, or a signet ring of an imaginary duke), and a belt pouch containing 15 gp",
            "gp": 15,
            "kit": "disguise"
        },
    },
    "criminal": {
        "skills": ["deception", "stealth"],
        "tools": ["one type of gaming set"],
        "equipment": {
            "description": "a crowbar, a set of dark common clothes including a hood, and a belt pouch containing 15 gp",
            "gp": 15
        },
    },
    "entertainer": {
        "skills": ["acrobatics", "performance"],
        "tools": ["disguise kit", "one type of musical instrument"],
        "equipment": {
            "description": "a musical instrument (one of your choice), the favor of an admirer (love letter, lock of hair, or trinket), a costume, and a belt pouch containing 15 gp",
            "gp": 15
        },
    },
    "folk hero": {
        "skills": ["animal handling", "survival"],
        "tools": ["one type of artisan’s tools", "vehicles (land)"],
        "equipment": {
            "description": "a set of artisan’s tools (one of your choice), a shovel, an iron pot, a set of common clothes, and a belt pouch containing 10 gp",
            "gp": 10
        },
    },
    "guild artisan": {
        "skills": ["insight", "persuasion"],
        "tools": ["one type of artisan’s tools"],
        "numlanguages": 1,
        "equipment": {
            "description": "a set of artisan’s tools (one of your choice),a letter of introduction from your guild, a set of traveler’s clothes, and a belt pouch containing 15 gp",
            "gp": 15
        },
    },
    "hermit": {
        "skills": ["medicine", "religion"],
        "tools": ["herbalism kit"],
        "numlanguages": 1,
        "equipment": {
            "description": "a scroll case stuffed full of notes from your studies or prayers, a winter blanket, a set of common clothes, an herbalism kit, and 5 gp",
            "gp": 5,
            "kit": "herbalism"
        },
    },
    "noble": {
        "skills": ["history", "persuasion"],
        "tools": ["one type of gaming set", "thieves’ tools"],
        "numlanguages": 1,
        "equipment": {
            "description": "a set of fine clothes, a signet ring, a scroll of pedigree, and a purse containing 25 gp",
            "gp": 25
        },
    },
    "outlander": {
        "skills": ["athletics", "survival"],
        "tools": ["one type of musical instrument"],
        "numlanguages": 1,
        "equipment": {
            "description": "a staff, a hunting trap, a trophy from an animal you killed, a set of traveler’s clothes, and a belt pouch containing 10 gp",
            "gp": 10
        },
    },
    "sage": {
        "skills": ["arcana", "history"],
        "numlanguages": 2,
        "equipment": {
            "description": "a bottle of black ink, a quill, a small knife, a letter from a dead colleague posing a question you have not yet been able to answer, a set of com m on clothes, and a belt pouch containing 10 gp",
            "gp": 10
        },
    },
    "sailor": {
        "skills": ["athletics", "perception"],
        "tools": ["navigator’s tools", "vehicles (water)"],
        "equipment": {
            "description": "a belaying pin (club), 50 feet of silk rope, a lucky charm such as a rabbit foot or a small stone with a hole in the center (or you may roll for a random trinket on the trinkets table in chapter 5), a set of com m on clothes, and a belt pouch containing 10 gp",
            "gp": 10
        },
    },
    "soldier": {
        "skills": ["athletics", "intimidation"],
        "tools": ["one type of gaming set", "vehicles (land)"],
        "equipment": {
            "description": "an insignia of rank, a trophy taken from a fallen enemy (a dagger, broken blade, or piece of a banner), a set of bone dice or deck of cards, a set of com m on clothes, and a belt pouch containing 10 gp",
            "gp": 10
        },
    },
    "urchin": {
        "skills": ["sleight of hand", "stealth"],
        "tools": ["disguise kit", "thieves’ tools"],
        "equipment": {
            "description": "a small knife, a map of the city you grew up in, a pet mouse, a token to remember your parents by, a set of common clothes, and a belt pouch containing 10 gp",
            "gp": 10,
        }
    }
};

export const damageType = {
    "Acid": {
        "description": "The corrosive spray of a black dragon’s breath and the dissolving enzymes secreted by a black pudding deal acid damage.",
    },
    "Bludgeoning": {
        "description": "Blunt force attacks—hammers, falling, constriction, and the like—deal bludgeoning damage.",
    },
    "Cold": {
        "description": "The infernal chill radiating from an ice devil’s spear and the frigid blast of a white dragon’s breath deal cold damage.",
    },
    "Fire": {
        "description": "Red dragons breathe fire, and many spells conjure flames to deal fire damage.",
    },
    "Force": {
        "description": "Force is pure magical energy focused into a damaging form. Most effects that deal force damage are spells, including magic missile and spiritual weapon.",
    },
    "Lightning": {
        "description": "A lightning bolt spell and a blue dragon’s breath deal lightning damage.",
    },
    "Necrotic": {
        "description": "Necrotic damage, dealt by certain undead and a spell such as chill touch, withers matter and even the soul.",
    },
    "Piercing": {
        "description": "Puncturing and impaling attacks, including spears and monsters’ bites, deal piercing damage.",
    },
    "Poison": {
        "description": "Venomous stings and the toxic gas of a green dragon’s breath deal poison damage.",
    },
    "Psychic": {
        "description": "Mental abilities such as a mind flayer’s psionic blast deal psychic damage.",
    },
    "Radiant": {
        "description": "Radiant damage, dealt by a cleric’s flame strike spell or an angel’s smiting weapon, sears the flesh like fire and overloads the spirit with power.",
    },
    "Slashing": {
        "description": "Swords, axes, and monsters’ claws deal slashing damage.",
    },
    "Thunder": {
        "description": "A concussive burst of sound, such as the effect of the thunderwave spell, deals thunder damage.",
    }
}
































