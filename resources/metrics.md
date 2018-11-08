# Metrics

## Combat

### Deal Damage
Average combat damage done per encounter
- duration: short (1), medium (3), long (7)
- opponent hardiness: low AC (11), high AC (20)
- affecting stats: proficiency bonus, weapon, ability score

### Take Damage
Average number rounds survive
- attack type: magic, melee, range
- damage type
- challenge rating: 1/4, 1, 3, 5, 10, 20
affecting stats: AC, HP, Saving Throw Proficiencies, (Resistance, Vulnerability, Immunity)

### Heal
Average healing done per encounter
- duration: short (1), medium (3), long (7)
- party size: small(3), large (7)

## Choices affecting this metric:
- attack roll (proficiency bonus, weapon(magical), ability score)
- damage roll (weapon, ability score)


- finesse: help in non-combat situations
	- dificulty class: easy (10), hard (20), nearly impossible (30)
		- informational (int, wis): arcana, history, investigation, nature, religion, insight
		- influence (cha) : deception, intimidation, persuasion
		- interaction (wis, dex): medicine, perception, sleight of hand, stealth, survival, acrobatics, performance
	- num languages
	- num societies allowed in
		- acolyte: places and people who share your religion...
		- criminal: criminal contact --> get information



decision variables
- (10) race
- (10) class
	- default ability score effects
- (5)(10) ability (str, const, dex, int, char, wis) (-5, -4, -3, -2, -1, +1, +2, +3, +4, +5)
	- standard set (15, 14, 13, 12, 10, 8)
	- point buy, start at 8, get 27 points 
		8	-->  0
		9	-->  1
		10	-->  2
		11	-->  3
		12	-->  4
		13	-->  5
		14	-->  7
		15	-->  9
- skills 
	- 
- background