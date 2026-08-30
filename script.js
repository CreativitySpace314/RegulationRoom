let ropePosition = 50;
let round = 0;
let activeScenario = 'trauma';

const knot = document.getElementById('knot');
const quote = document.getElementById('ropeQuote');
const stage = document.getElementById('stageDirection');
const status = document.getElementById('interactionStatus');
const stack = document.getElementById('choiceStack');
const coaching = document.getElementById('inlineCoaching');
const coachingText = document.getElementById('coachingText');
const personLabel = document.querySelector('.conversation-person .mini-label');

function clamp(n,min,max){return Math.min(Math.max(n,min),max)}
function moveRope(delta){
  ropePosition = clamp(ropePosition + Number(delta), 14, 88);
  knot.style.left = ropePosition + '%';
}

const scenarioLibrary = {
  trauma: {
    label:'TRAUMA HISTORY',
    person:'MAYA',
    color:'#ffb36b',
    note:'Trauma history is context, not a prediction. Pay attention to control, proximity, blocked exits, tone, and signs that the person feels trapped.',
    rounds:[
      {
        stage:'Maya is upset and moving toward the hallway. You are standing between Maya and the doorway.',
        quote:'“Get out of my way.”',
        options:[
          {text:'“You need to calm down before you go anywhere.”',shift:17,coach:'You added control while physically occupying the exit. Even if you meant to create safety, the interaction may now feel more trapping.',next:{stage:'Maya looks at the doorway, then back at you. Her shoulders rise and her voice gets louder.',quote:'“MOVE. I said get away from me!”'}},
          {text:'Step out of the doorway, angle your body, and say, “I’ll give you space. I’m right here if you want me.”',shift:-14,coach:'You reduced pressure without disappearing. Space, position, and choice can matter as much as the words.',next:{stage:'Maya moves into the hallway, then stops several feet away. Her breathing is still fast, but she is no longer squared up with you.',quote:'“Just don’t come near me right now.”'}},
          {text:'“I’m not doing anything to you. You’re overreacting.”',shift:20,coach:'Correcting the person’s emotional response can add shame and make the threat response stronger.',next:{stage:'Maya points toward the doorway and backs away from you.',quote:'“You don’t get to tell me how I feel!”'}}
        ]
      },
      {
        options:[
          {text:'“Okay. I’ll stay back. Do you want quiet, or do you want me to stay where you can see me?”',shift:-12,coach:'You respected the request for space and offered a simple choice without forcing connection.',next:{stage:'Maya looks down the hallway and takes a longer breath.',quote:'“Just stay there.”'}},
          {text:'Follow Maya so you can keep talking through the problem.',shift:15,coach:'Following closely can recreate the sense of being pursued or cornered. More engagement is not always more supportive.',next:{stage:'Maya turns quickly when she hears you following.',quote:'“Why are you following me?!”'}},
          {text:'“Fine. I’ll leave you alone then.”',shift:6,coach:'Giving space can help, but a sharp or rejecting tone can turn space into abandonment. Your paraverbal communication matters.',next:{stage:'Maya looks away and stops responding.',quote:'“Whatever.”'}}
        ]
      }
    ]
  },

  schizophrenia: {
    label:'SCHIZOPHRENIA',
    person:'DEVON',
    color:'#7fe3ff',
    note:'Do not argue someone out of a fixed belief. Validate the emotion, stay reality-based, reduce pressure, and assess what the person needs for safety.',
    rounds:[
      {
        stage:'Devon pushes the dinner plate away and watches you closely.',
        quote:'“You put something in my food. I know what you’re doing.”',
        options:[
          {text:'“That is not true. Nobody poisoned anything.”',shift:13,coach:'You challenged the belief directly. Facts may be accurate, but arguing can turn the interaction into a contest over whose reality wins.',next:{stage:'Devon pulls the plate farther away and narrows their eyes.',quote:'“Of course you’d say that. You’re part of it.”'}},
          {text:'“That sounds frightening. I don’t see anything showing the food was tampered with. We can set it aside while we figure out what feels safest.”',shift:-13,coach:'You validated fear without confirming the belief, stayed reality-based, and reduced pressure around eating.',next:{stage:'Devon keeps watching the plate but stops pushing it away.',quote:'“So you’re not going to make me eat it?”'}},
          {text:'“If you don’t eat, that’s your choice.”',shift:7,coach:'It avoids arguing, but it may land as dismissive. Connection can be maintained without forcing agreement.',next:{stage:'Devon looks away from you and folds their arms.',quote:'“Nobody cares anyway.”'}}
        ]
      },
      {
        options:[
          {text:'“No. I’m not going to force you. I do want to make sure you have something you feel safe eating.”',shift:-11,coach:'You lowered coercion, stayed focused on the immediate need, and kept the relationship open.',next:{stage:'Devon looks toward the kitchen.',quote:'“Could I get something still sealed?”'}},
          {text:'“You have to eat something, so pick up the fork.”',shift:17,coach:'A command increases control at the exact point the person is expressing fear and mistrust.',next:{stage:'Devon stands up abruptly.',quote:'“Stay away from me.”'}},
          {text:'Explain why the belief is a symptom of schizophrenia.',shift:14,coach:'Teaching about diagnosis in the middle of distress is unlikely to help and can feel invalidating or shaming.',next:{stage:'Devon shakes their head and steps away from the table.',quote:'“You think I’m crazy.”'}}
        ]
      }
    ]
  },

  bpd: {
    label:'BPD',
    person:'RILEY',
    color:'#ff89c6',
    note:'Do not reduce the person to a diagnosis. In this scenario, the useful skills are validation, consistency, clear limits, and avoiding rejection or a win/lose struggle.',
    rounds:[
      {
        stage:'You told Riley you would come back after dinner, but another urgent situation delayed you.',
        quote:'“I knew you’d leave too. Everybody does.”',
        options:[
          {text:'“That’s not fair. I was dealing with an emergency.”',shift:14,coach:'You defended your intention before acknowledging the impact. Being factually right does not always reduce the emotional pull.',next:{stage:'Riley laughs sharply and looks away.',quote:'“There’s always an excuse.”'}},
          {text:'“I said I’d come back and I was late. I can see why that hit hard. I’m here now.”',shift:-13,coach:'You acknowledged what happened and the emotion without promising unlimited availability or abandoning boundaries.',next:{stage:'Riley’s eyes stay on the floor, but their voice drops.',quote:'“I thought you forgot.”'}},
          {text:'“I can’t be available every second.”',shift:16,coach:'The boundary may be true, but introducing it this way can sound like rejection when the person is already reacting to perceived abandonment.',next:{stage:'Riley stands and pushes the chair back.',quote:'“Then just leave.”'}}
        ]
      },
      {
        options:[
          {text:'“I didn’t forget. I should have updated you. Next time I can tell you if I’m delayed.”',shift:-11,coach:'Accountability plus a realistic future plan supports repair without making a promise you cannot keep.',next:{stage:'Riley looks up at you.',quote:'“Okay. Just tell me next time.”'}},
          {text:'“See? You’re calmer now. This didn’t have to be a big deal.”',shift:13,coach:'Pointing out that the reaction was unnecessary can reopen shame and invalidate the experience just as regulation starts returning.',next:{stage:'Riley’s face tightens again.',quote:'“Forget I said anything.”'}},
          {text:'Promise you will never be late again.',shift:7,coach:'Reassurance can feel good in the moment, but an unrealistic promise creates another rupture later. Consistency beats overpromising.',next:{stage:'Riley watches you carefully.',quote:'“You swear?”'}}
        ]
      }
    ]
  },

  id: {
    label:'INTELLECTUAL DISABILITY',
    person:'ELI',
    color:'#d7ff38',
    note:'Adjust language to the person, not the label. Processing time, concrete wording, visual supports, and one-step choices may reduce overload.',
    rounds:[
      {
        stage:'The usual van is late. Eli has asked when it is coming several times and is speaking louder each time.',
        quote:'“WHEN VAN? You said VAN!”',
        options:[
          {text:'Give a long explanation about scheduling, staffing, and transportation delays.',shift:14,coach:'Too much language can increase processing demand when the person is already distressed.',next:{stage:'Eli covers their ears and interrupts.',quote:'“STOP. VAN NOW!”'}},
          {text:'“Van is late.” Pause. “We wait here or sit by the window. You choose.”',shift:-13,coach:'Short, concrete language plus a simple choice reduces processing load while preserving predictability.',next:{stage:'Eli looks toward the window.',quote:'“Window. Van come?”'}},
          {text:'“I already told you. Stop asking.”',shift:18,coach:'The repeated question may be communication of uncertainty, not deliberate defiance. Correction adds frustration without adding clarity.',next:{stage:'Eli hits the arm of the chair with an open hand.',quote:'“VAN! VAN! VAN!”'}}
        ]
      },
      {
        options:[
          {text:'“Yes. Van still coming. I will tell you when I see it.”',shift:-10,coach:'Concrete reassurance answers the same underlying question without adding extra information.',next:{stage:'Eli sits near the window and continues watching outside.',quote:'“You tell me.”'}},
          {text:'Ask Eli to repeat back the full transportation plan.',shift:10,coach:'Testing comprehension in the middle of distress adds demand. Regulation comes before teaching.',next:{stage:'Eli looks confused and starts pacing again.',quote:'“I don’t know!”'}},
          {text:'“If you ask again, you’ll need to go to your room.”',shift:19,coach:'A consequence turns uncertainty into a power struggle and does not address the need beneath the repeated question.',next:{stage:'Eli yells and moves away from you.',quote:'“NO ROOM!”'}}
        ]
      }
    ]
  },

  autism: {
    label:'AUTISM + ID',
    person:'NOAH',
    color:'#b68cff',
    note:'Look for sensory load, communication differences, transition difficulty, and processing demand. Less language and less stimulation may be more helpful than more prompting.',
    rounds:[
      {
        stage:'The TV is loud, two people are talking nearby, and it is time to transition to a scheduled activity. Noah is covering their ears.',
        quote:'“NO. NO. NO GO.”',
        options:[
          {text:'Move closer and explain why the activity is important.',shift:15,coach:'More proximity and more language can add sensory and processing load when the person is already overwhelmed.',next:{stage:'Noah turns away, presses hands harder over their ears, and rocks faster.',quote:'“STOP TALKING!”'}},
          {text:'Lower the TV, reduce nearby talking, step back, and show the visual for what happens next.',shift:-14,coach:'You changed the environment before demanding more regulation from the person.',next:{stage:'Noah looks at the visual and stops yelling.',quote:'“Five minutes?”'}},
          {text:'“You know the schedule. We do this every day.”',shift:12,coach:'Familiarity does not erase current overload. The problem may be capacity in this moment, not knowledge of the routine.',next:{stage:'Noah drops the visual and turns away.',quote:'“NO!”'}}
        ]
      },
      {
        options:[
          {text:'“Five minutes.” Set the timer and step back.',shift:-11,coach:'A concrete transition cue gives predictability without adding unnecessary language.',next:{stage:'Noah watches the timer and keeps hands lowered.',quote:'“Timer then go.”'}},
          {text:'“No, now. We are already late.”',shift:17,coach:'Urgency on the staff side can increase rigidity and distress on the person’s side.',next:{stage:'Noah drops to the floor and covers their ears again.',quote:'“NO GO!”'}},
          {text:'Keep repeating the direction until Noah complies.',shift:16,coach:'Repetition can become pressure when the barrier is regulation rather than understanding.',next:{stage:'Noah starts yelling over your words.',quote:'“STOP STOP STOP!”'}}
        ]
      }
    ]
  },

  smi: {
    label:'SMI · MEDICATION REFUSAL',
    person:'TAYLOR',
    color:'#ffd166',
    note:'Medication refusal is not automatically a power contest. Stay within policy, preserve informed choice where applicable, and separate immediate safety needs from the urge to win compliance.',
    rounds:[
      {
        stage:'At medication time, Taylor looks at the cup and pushes it back toward you.',
        quote:'“I’m not taking it. Stop asking me.”',
        options:[
          {text:'“You have to. It’s on your medication list.”',shift:16,coach:'You turned the interaction toward compliance before understanding the concern.',next:{stage:'Taylor pushes the chair back.',quote:'“You can’t make me.”'}},
          {text:'“Okay. I hear no right now. Is there something about the medication you want me to know?”',shift:-11,coach:'You acknowledged the refusal and opened space for information while staying within your role.',next:{stage:'Taylor looks at the medication cup.',quote:'“It makes me feel awful in the morning.”'}},
          {text:'“If you refuse, I have to document it.”',shift:8,coach:'Documentation may be true, but leading with it can sound like a threat or consequence instead of support.',next:{stage:'Taylor folds their arms.',quote:'“Go ahead. Write whatever you want.”'}}
        ]
      },
      {
        options:[
          {text:'“Thanks for telling me. I can document that concern and follow the medication-refusal process. Do you want a minute before I ask again?”',shift:-10,coach:'You kept the process intact while treating the concern as meaningful information.',next:{stage:'Taylor nods and stays seated.',quote:'“Yeah. Give me a minute.”'}},
          {text:'Argue that the prescriber knows what is best.',shift:14,coach:'Appealing to authority may intensify the control struggle and does not address the side effect concern.',next:{stage:'Taylor stands and walks away from the medication area.',quote:'“I said NO.”'}},
          {text:'Tell Taylor they are being noncompliant.',shift:18,coach:'Labeling the person can add shame and conflict. Describe the choice and follow the appropriate process instead.',next:{stage:'Taylor turns back toward you angrily.',quote:'“Don’t call me that.”'}}
        ]
      }
    ]
  },

  psychosis: {
    label:'PSYCHOSIS',
    person:'SAM',
    color:'#65d6c3',
    note:'Observe before interpreting. Stay calm, avoid confirming or debating unusual perceptions, and focus on distress, functioning, and immediate safety.',
    rounds:[
      {
        stage:'Sam is scanning the ceiling and hallway and whispering under their breath.',
        quote:'“They’re watching me. They know I’m here.”',
        options:[
          {text:'“Who is watching you? Tell me exactly where they are.”',shift:9,coach:'Detailed questioning can unintentionally deepen focus on the unusual belief when the immediate need is regulation and safety.',next:{stage:'Sam looks quickly toward the hallway.',quote:'“You can’t see them? They’re right there.”'}},
          {text:'“I can see this feels unsafe to you. I’m not seeing anyone watching us. Would a quieter room help?”',shift:-13,coach:'You validated the fear, stayed reality-based, and offered an environmental support.',next:{stage:'Sam looks toward the quieter room and lowers their voice.',quote:'“Can you come with me?”'}},
          {text:'“There is literally nobody there.”',shift:13,coach:'Direct contradiction can create an argument over perception and increase mistrust.',next:{stage:'Sam backs away slightly.',quote:'“You’re lying.”'}}
        ]
      },
      {
        options:[
          {text:'“Yes. I can walk with you. We can keep some space and go somewhere quieter.”',shift:-11,coach:'You supported safety and reduced stimulation without confirming the belief.',next:{stage:'Sam walks with you toward the quieter area.',quote:'“Okay. Just don’t let anyone come in.”'}},
          {text:'“Only if you admit nobody is actually watching you.”',shift:18,coach:'Requiring agreement with your interpretation turns support into a power struggle.',next:{stage:'Sam stops walking.',quote:'“Forget it.”'}},
          {text:'Promise that nobody will ever come into the room.',shift:7,coach:'Avoid promises you cannot guarantee. Offer what you can actually control.',next:{stage:'Sam looks at you closely.',quote:'“You promise?”'}}
        ]
      }
    ]
  },

  dual: {
    label:'DUAL DIAGNOSIS',
    person:'CASEY',
    color:'#ff8c84',
    note:'When cognitive/communication needs and mental-health symptoms overlap, simplify the interaction. Do not assume refusal means the person fully understood the request or is intentionally challenging staff.',
    rounds:[
      {
        stage:'You have asked Casey several questions about getting ready. Casey is staring at the floor and rubbing their hands together.',
        quote:'“NO. Stop asking me!”',
        options:[
          {text:'Ask the questions again, one after another, so you can get an answer.',shift:16,coach:'More questions increase demand when processing is already overloaded.',next:{stage:'Casey puts both hands over their face.',quote:'“I DON’T KNOW!”'}},
          {text:'Pause. Then ask one concrete question: “Shoes now, or two minutes?”',shift:-13,coach:'You reduced language, added processing time, and offered a manageable choice.',next:{stage:'Casey looks at the shoes by the door.',quote:'“Two minutes.”'}},
          {text:'“You need to cooperate. We’re trying to help you.”',shift:15,coach:'Calling for cooperation does not reduce cognitive demand or distress and may make the interaction feel adversarial.',next:{stage:'Casey pushes the shoes away with a foot.',quote:'“NO!”'}}
        ]
      },
      {
        options:[
          {text:'“Okay. Two minutes.” Then stop talking and give the time.',shift:-11,coach:'You honored the choice and removed extra demands. Silence can be an intervention too.',next:{stage:'After a short pause, Casey reaches for the shoes.',quote:'“I do it.”'}},
          {text:'Use the two minutes to explain every step that comes next.',shift:12,coach:'The person asked for reduced demand. Filling the pause with more information takes that regulation space away.',next:{stage:'Casey drops the shoe and looks away.',quote:'“Stop.”'}},
          {text:'Tell Casey the two minutes are over early because you are running late.',shift:17,coach:'Changing the agreement can increase mistrust and restart the struggle.',next:{stage:'Casey pulls the shoes close but does not put them on.',quote:'“You said two!”'}}
        ]
      }
    ]
  }
};

function getScenario(){ return scenarioLibrary[activeScenario]; }

function renderRound(){
  const scenario = getScenario();
  const current = scenario.rounds[Math.min(round, scenario.rounds.length - 1)];
  personLabel.textContent = `${scenario.person} · ${scenario.label}`;
  personLabel.style.color = scenario.color;
  status.innerHTML = `<span class="status-pill">ROUND ${Math.min(round + 1, scenario.rounds.length)} OF ${scenario.rounds.length}</span><strong>${round >= scenario.rounds.length ? 'Interaction complete' : 'What do you do?'}</strong>`;
  stack.innerHTML = '';
  current.options.forEach(option => {
    const btn = document.createElement('button');
    btn.className = 'choice';
    btn.textContent = option.text;
    btn.addEventListener('click', () => choose(option));
    stack.appendChild(btn);
  });
}

function choose(option){
  const scenario = getScenario();
  moveRope(option.shift);
  coaching.hidden = false;
  coachingText.textContent = option.coach;
  coaching.classList.toggle('warning', option.shift > 5);
  coaching.classList.toggle('good', option.shift < 0);
  stage.textContent = option.next.stage;
  quote.textContent = option.next.quote;
  round++;
  if(round < scenario.rounds.length){
    setTimeout(renderRound, 280);
  } else {
    stack.innerHTML = '<button class="choice restart-choice">Run this scenario again</button>';
    const switchBtn = document.createElement('button');
    switchBtn.className = 'choice restart-choice';
    switchBtn.textContent = 'Choose a different scenario';
    switchBtn.addEventListener('click', () => document.querySelector('#scenarios').scrollIntoView({behavior:'smooth'}));
    stack.appendChild(switchBtn);
    stack.querySelector('button').addEventListener('click', resetRopeScenario);
    status.innerHTML = '<span class="status-pill">DEBRIEF</span><strong>What happened on your side of the rope?</strong>';
  }
}

function resetRopeScenario(){
  const scenario = getScenario();
  ropePosition = 50;
  round = 0;
  knot.style.left = '50%';
  stage.textContent = scenario.rounds[0].stage;
  quote.textContent = scenario.rounds[0].quote;
  coaching.hidden = false;
  coaching.classList.remove('warning','good');
  coachingText.textContent = scenario.note;
  renderRound();
}

function loadScenario(key, shouldScroll = true){
  if(!scenarioLibrary[key]) return;
  activeScenario = key;
  document.querySelectorAll('.scenario-card').forEach(card => {
    card.classList.toggle('selected', card.dataset.scenario === key);
  });
  resetRopeScenario();
  if(shouldScroll){
    document.querySelector('#rope').scrollIntoView({behavior:'smooth', block:'start'});
  }
}

document.querySelectorAll('.tool-chip').forEach(btn => {
  btn.addEventListener('click', () => {
    moveRope(btn.dataset.reset);
    coaching.hidden = false;
    coaching.classList.remove('warning');
    coaching.classList.add('good');
    coachingText.textContent = 'You regulated your side first. That creates more room for the interaction to change.';
  });
});

document.querySelectorAll('.scenario-card').forEach(card => {
  card.addEventListener('click', () => loadScenario(card.dataset.scenario));
});

document.querySelectorAll('.notice-grid button').forEach(btn => {
  btn.addEventListener('click', () => btn.classList.toggle('selected'));
});

loadScenario('trauma', false);
