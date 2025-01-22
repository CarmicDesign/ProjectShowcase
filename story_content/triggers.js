function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6iP3TuJ0fIn":
        Script1();
        break;
      case "6rhU6yEVfGz":
        Script2();
        break;
      case "5sr5VKnd03S":
        Script3();
        break;
      case "6MYzRO5hqXc":
        Script4();
        break;
      case "5mzkhxA69vi":
        Script5();
        break;
      case "5nxJDSrUFxY":
        Script6();
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
  const target = object('5fL1ojkofpK');
const duration = 100;
const easing = 'ease-out';
const id = '5j1muLFnegD';
const growAmount = 0.1;
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
  const target = object('5fL1ojkofpK');
const duration = 100;
const easing = 'ease-out';
const id = '5j1muLFnegD_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('5ZkAJcp1unW');
const duration = 100;
const easing = 'ease-out';
const id = '6r20CGbzhiM';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  const target = object('5ZkAJcp1unW');
const duration = 100;
const easing = 'ease-out';
const id = '6r20CGbzhiM_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script5 = function()
{
  const target = object('5sGn1Ljn2Tk');
const duration = 100;
const easing = 'ease-out';
const id = '6EJLTVSe7xf';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script6 = function()
{
  const target = object('5sGn1Ljn2Tk');
const duration = 100;
const easing = 'ease-out';
const id = '6EJLTVSe7xf_reverse';
const growAmount = 0;
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
