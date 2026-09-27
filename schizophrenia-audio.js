(()=> {
const $=s=>document.querySelector(s);
const video=$('#simulationVideo');
if(!video)return;

const videos={
 one:'https://www.youtube.com/embed/NyUqhbPD2tc?start=33&rel=0',
 two:'https://www.youtube.com/embed/HpF3gNifrGY?start=619&rel=0'
};

const tasks=[
 {title:'Read this and remember it.',copy:'Do not pause the simulation unless you need to.',body:`<div class="task-card"><span>APPOINTMENT</span><strong>10:15 AM</strong><small>Bring your photo ID.</small></div>`},
 {title:'Hold onto three things.',copy:'Read the list once. Keep the video playing.',body:`<div class="task-card"><span>BRING WITH YOU</span><strong>ID · medication list · insurance card</strong></div>`},
 {title:'What were the three things?',copy:'Pick what you remember.',body:`<div class="task-options"><button data-answer="good">ID + medication list + insurance card</button><button data-answer="close">ID + phone + insurance card</button><button data-answer="close">wallet + medication list + keys</button><button data-answer="close">ID + appointment card + insurance card</button></div>`},
 {title:'Read a simple message.',copy:'Keep listening to the simulation while you read.',body:`<div class="task-card"><span>TEXT MESSAGE</span><strong>“I’ll meet you by the front entrance at 9:40.”</strong></div><label style="display:block;margin-top:12px;font-weight:700">Where are you meeting?<input type="text" placeholder="type your answer"></label>`},
 {title:'One more memory check.',copy:'What time was the appointment from the first task?',body:`<div class="task-options"><button data-answer="good">10:15 AM</button><button data-answer="close">9:40 AM</button><button data-answer="close">10:50 AM</button><button data-answer="close">11:15 AM</button></div>`},
 {title:'Finish one ordinary task.',copy:'Type three grocery items while the simulation continues.',body:`<textarea rows="5" placeholder="1.&#10;2.&#10;3."></textarea><div class="task-card" style="margin-top:10px"><small>The point is not whether the list is “good.” Notice how much effort it takes to keep your place.</small></div>`}
];

let current=0;
const progress=$('#taskProgress'),title=$('#taskTitle'),copy=$('#taskCopy'),body=$('#taskBody'),feedback=$('#taskFeedback'),next=$('#taskNext'),finish=$('#finishExperience');

function renderProgress(){progress.innerHTML=tasks.map((_,i)=>`<span class="${i<current?'done':i===current?'active':''}"></span>`).join('')}
function wireAnswers(){
 body.querySelectorAll('[data-answer]').forEach(btn=>btn.onclick=()=>{
   body.querySelectorAll('[data-answer]').forEach(x=>x.classList.remove('selected'));
   btn.classList.add('selected');
   feedback.hidden=false;
   feedback.textContent=btn.dataset.answer==='good'?'You held onto it this time. Notice what it took to keep that information available.':'That information slipped or got mixed with something else. No reset—keep going.';
 });
}
function renderTask(){
 const t=tasks[current];
 $('#taskKicker').textContent=`TASK ${current+1} OF ${tasks.length}`;
 title.textContent=t.title;copy.textContent=t.copy;body.innerHTML=t.body;feedback.hidden=true;
 renderProgress();wireAnswers();
 next.hidden=current===tasks.length-1;
 finish.hidden=current!==tasks.length-1;
}
document.querySelectorAll('.video-choice').forEach(btn=>btn.onclick=()=>{
 document.querySelectorAll('.video-choice').forEach(x=>x.classList.remove('active'));
 btn.classList.add('active');video.src=videos[btn.dataset.video];
 current=0;renderTask();
});
next.onclick=()=>{if(current<tasks.length-1){current++;renderTask();}};
finish.onclick=()=>{$('#audioLab').hidden=true;$('#silenceScreen').hidden=false;$('#silenceScreen').scrollIntoView({behavior:'smooth',block:'center'});};
$('#continueDebrief').onclick=()=>{$('#silenceScreen').hidden=true;$('#afterAudio').hidden=false;$('#afterAudio').scrollIntoView({behavior:'smooth',block:'start'});};
$('#resetAudio').onclick=()=>{current=0;$('#afterAudio').hidden=true;$('#audioLab').hidden=false;video.src=video.src;renderTask();$('#audioLab').scrollIntoView({behavior:'smooth',block:'start'});};

const reflections={
 reread:'Rereading can be a sign that attention is being pulled away from the task—not that someone does not care.',
 memory:'Working memory can become crowded. From the outside, that may look like “not listening” even when someone is trying hard to keep up.',
 irritated:'Irritation matters. Competing input can use up patience before another person has even asked the next question.',
 rushed:'Rushing can be a way to escape overload. Finishing quickly does not necessarily mean the task felt easy.',
 distracted:'Losing your place is easy to misread as lack of effort. Sometimes the task is competing with much more than we can see.',
 voices:'Your attention followed the most intrusive input. “Just ignore it” can be an unrealistic instruction.',
 stopped:'Wanting the task to end is information. Reducing stimulation or breaking the task down can be useful support.',
 fine:'That matters too. A short, voluntary simulation may be easy for you. That does not tell us how another person experiences involuntary symptoms.'
};
document.querySelectorAll('[data-reflect]').forEach(btn=>btn.onclick=()=>{btn.classList.toggle('active');$('#reflectionResult').textContent=reflections[btn.dataset.reflect]});

const support={
 repeat:'Repeating the same information with frustration adds pressure without reducing the person’s cognitive load.',
 write:'You kept the expectation the same while reducing the amount the person has to hold in working memory.',
 attention:'This assumes the problem is effort. If attention is already overloaded, more pressure may make processing harder.',
 voices:'Exploring the experience can sometimes be useful, but the immediate need here is simpler: reduce load, give clear information and support the task in front of the person.'
};
document.querySelectorAll('[data-support]').forEach(btn=>btn.onclick=()=>{
 document.querySelectorAll('[data-support]').forEach(x=>x.classList.remove('active'));btn.classList.add('active');
 $('#supportFeedback').hidden=false;$('#supportFeedback').innerHTML=`<b>NOTICE WHAT YOUR RESPONSE ADDS</b><p>${support[btn.dataset.support]}</p>`;
});
renderTask();
})();