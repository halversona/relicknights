const buttonFlip = document.getElementById("cardFlip");
const image = document.getElementById("cardImg");

// Rules
const rules = {
  rule1:
    "When a squad with Coordinated Attack attacks an enemy unit, the damage of the attack is increased by X for each additional model in the squad that has LoS to the target. For melee attacks additional models must be engaged with the target.",
  rule2:
    " A unit with Defensive Formation gains a bonus to its Armor equal to the number of command tokens on it.",
  rule3: "A unit with Thrusters gains Fly during its follow-up move.",
};
const ruleNames = {
  rule1: "Coordinate Attack X",
  rule2: " Defensive Formation",
  rule3: "Thruster",
};
const ruleName = document.getElementById("ruleName");
const ruleInfo = document.getElementById("ruleInfo");

function showRuleInfo(ruleId) {
  console.log(ruleId);
  // Clear any previous text.
  ruleInfo.textContent = "";
  ruleName.textContent = "";

  // If the rule that was previously clicked is visible, hide it.
  if (ruleInfo.dataset.currentRule === ruleId) {
    ruleInfo.dataset.currentRule = "";
    return;
  }

  ruleInfo.textContent = rules[ruleId];
  ruleName.textContent = ruleNames[ruleId];
  ruleInfo.dataset.currentRule = ruleId;

  ruleInfo.scrollIntoView({ behavior: "smooth", block: "start" });
}

rule1.addEventListener("click", () => showRuleInfo("rule1"));
rule2.addEventListener("click", () => showRuleInfo("rule2"));
rule3.addEventListener("click", () => showRuleInfo("rule3"));

// Image sources to easier coding and flipping.
// Will need to adjust this to using the card name when selected when that feature is implented
const cardFront = "/cards/blackDiamond/blackDragonsFront.png";
const cardBack = "/cards/blackDiamond/blackDragonsBack.png";

buttonFlip.addEventListener("click", () => {
  console.log("click");
  // Checking to see what image is currently loaded and flipping
  if (image.src.includes(cardFront)) {
    image.src = cardBack;
  } else {
    image.src = cardFront;
  }
});
