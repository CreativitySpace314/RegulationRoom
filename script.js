let ropePosition = 50;
let round = 0;
const knot = document.getElementById('knot');
const quote = document.getElementById('ropeQuote');
const stage = document.getElementById('stageDirection');
const status = document.getElementById('interactionStatus');
const stack = document.getElementById('choiceStack');
const coaching = document.getElementById('inlineCoaching');
const coachingText = document.getElementById('coachingText');

function clamp(n,min,max){return Math.min(Math.max(n,min),max)}
function moveRope(delta){
  ropePosition = clamp(ropePosition + Number(delta), 14, 88);
  knot.style.left = ropePosition + '%';
}

const rounds = [
  {
    stage:'Jordan throws a plastic cup onto the floor and keeps pacing.',
    quote:'“You people never listen to me!”',
    options:[
      {text:'“Stop yelling. I already answered you.”',shift:18,coach:'You grabbed the rope. You matched the struggle instead of reducing it.',next:{stage:'Jordan stops and turns toward you, voice louder.',quote:'“See? You never listen. You just tell me what to do!”'}},
      {text:'“You’re frustrated and you want an answer. I’m listening.”',shift:-10,coach:'You loosened your grip. You acknowledged the emotion without arguing about the behavior.',next:{stage:'Jordan slows down but is still visibly tense.',quote:'“Then why does nobody tell me what’s going on?”'}},
      {text:'Explain the entire situation again.',shift:8,coach:'More information can sound helpful, but too many words can add pressure when someone is already activated.',next:{stage:'Jordan talks over you halfway through the explanation.',quote:'“I DON’T CARE. Stop talking at me!”'}}
    ]
  },
  {
    options:[
      {text:'“Because this is the rule. You need to accept that.”',shift:16,coach:'You tightened the rope around being right. The boundary may still matter, but this wording invites a win/lose fight.',next:{stage:'Jordan folds their arms and plants their feet.',quote:'“Make me.”'}},
      {text:'“I can tell you what I know, or we can take a minute first. Your choice.”',shift:-12,coach:'You kept structure while returning some control. Choice can reduce the need to pull.',next:{stage:'Jordan exhales and looks away.',quote:'“Just tell me what you know.”'}},
      {text:'“Calm down and then we’ll talk.”',shift:10,coach:'The intention is to wait for regulation, but “calm down” can feel dismissive and may increase the pull.',next:{stage:'Jordan laughs sharply and shakes their head.',quote:'“Oh, now I’m the problem?”'}}
    ]
  },
  {
    options:[
      {text:'“I’m not going to argue with you.”',shift:6,coach:'This can be useful, but tone matters. If it lands as dismissal, the person may feel shut out rather than supported.',next:{stage:'Jordan looks toward the hallway and mutters under their breath.',quote:'“Whatever. Forget it.”'}},
      {text:'“Here’s what I know right now. The plan hasn’t changed. I’ll update you when I know more.”',shift:-10,coach:'Clear, brief, and grounded. You stayed honest without overexplaining or making promises you cannot keep.',next:{stage:'Jordan stops pacing and leans against the wall.',quote:'“Okay. Just tell me when you know.”'}},
      {text:'“You need to stop before this becomes a bigger problem.”',shift:18,coach:'You added threat and prediction to an already tense moment. That usually makes the rope tighter.',next:{stage:'Jordan steps closer, jaw tight.',quote:'“What are you gonna do about it?”'}}
    ]
  }
];

function renderRound(){
  const current = rounds[Math.min(round, rounds.length-1)];
  status.innerHTML = `<span class="status-pill">ROUND ${Math.min(round+1,rounds.length)}</span><strong>${round >= rounds.length ? 'Interaction complete' : 'What do you say?'}</strong>`;
  stack.innerHTML='';
  current.options.forEach(option=>{
    const btn=document.createElement('button');
    btn.className='choice';
    btn.textContent=option.text;
    btn.addEventListener('click',()=>choose(option));
    stack.appendChild(btn);
  });
}

function choose(option){
  moveRope(option.shift);
  coaching.hidden=false;
  coachingText.textContent=option.coach;
  coaching.classList.toggle('warning', option.shift > 5);
  coaching.classList.toggle('good', option.shift < 0);
  stage.textContent=option.next.stage;
  quote.textContent=option.next.quote;
  round++;
  if(round < rounds.length){
    setTimeout(renderRound, 250);
  } else {
    stack.innerHTML='<button class="choice restart-choice">Run the interaction again</button>';
    stack.querySelector('button').addEventListener('click',resetRopeScenario);
    status.innerHTML='<span class="status-pill">DEBRIEF</span><strong>Where did you feel yourself pull?</strong>';
  }
}

function resetRopeScenario(){
  ropePosition=50; round=0; knot.style.left='50%';
  stage.textContent=rounds[0].stage;
  quote.textContent=rounds[0].quote;
  coaching.hidden=true;
  coaching.classList.remove('warning','good');
  renderRound();
}

document.querySelectorAll('.tool-chip').forEach(btn=>{
  btn.addEventListener('click',()=>{
    moveRope(btn.dataset.reset);
    coaching.hidden=false;
    coaching.classList.remove('warning');
    coaching.classList.add('good');
    coachingText.textContent='You regulated your side first. That creates more room for the interaction to change.';
  });
});

document.querySelectorAll('.scenario-card').forEach(card=>{
  card.addEventListener('click',()=>{
    document.querySelectorAll('.scenario-card').forEach(c=>c.classList.remove('selected'));
    card.classList.add('selected');
  });
});

document.querySelectorAll('.notice-grid button').forEach(btn=>{
  btn.addEventListener('click',()=>btn.classList.toggle('selected'));
});

resetRopeScenario();
