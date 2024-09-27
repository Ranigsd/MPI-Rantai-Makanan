function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5eJKdFGhTQC":
        Script1();
        break;
      case "5xoh5rgjEuu":
        Script2();
        break;
      case "5VB3vH6INgi":
        Script3();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  const target = object('6jly3BNhuUf');
const duration = 750;
const easing = 'ease-out';
const id = '5o77mrbIQQx';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('6jly3BNhuUf');
const duration = 750;
const easing = 'ease-out';
const id = '6dMPtJVw8Hc';
const shrinkAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('6jly3BNhuUf');
const duration = 750;
const easing = 'ease-out';
const id = '5o77mrbIQQx';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

};
