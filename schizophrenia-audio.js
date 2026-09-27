(()=> {
const $=s=>document.querySelector(s);
const video=$('#simulationVideo');
if(!video)return;

const videos={
 one:'https://www.youtube.com/embed/NyUqhbPD2tc?start=100&rel=0&controls=1&enablejsapi=1&playsinline=1',
 two:'https://www.youtube.com/embed/HpF3gNifrGY?start=619&rel=0&controls=1&enablejsapi=1&playsinline=1'
};

const tasks=[
{
 title:'Complete the appointment form.',
 copy:'Pull the information from the reminder and fill in every field while the simulation plays.',
 body:`<div class="task-scene"><h4>APPOINTMENT REMINDER</h4><p><b>Jordan Ellis</b></p><p>Tuesday · 10:15 AM</p><p>Riverside Clinic · Suite 204</p><p>Bring photo ID + insurance card.</p></div><div class="task-form" data-required-form><label>Name<input data-required type="text" placeholder="full name"></label><label>Day<input data-required type="text" placeholder="day"></label><label>Appointment time<input data-required type="text" placeholder="time"></label><label>Location<input data-required type="text" placeholder="clinic name"></label><label>Suite<input data-required type="text" placeholder="suite number"></label><label>Items to bring<input data-required type="text" placeholder="what do you need?"></label></div>`
},
{
 title:'Follow the written directions.',
 copy:'Complete each instruction in order. Next stays locked until all three are done.',
 body:`<div class="instruction-strip"><span>1. Enter <b>4821</b>.</span><span>2. Choose <b>Tuesday</b>.</span><span>3. Confirm you have your ID.</span></div><div class="task-form" data-required-form><label>Code<input data-required type="text" maxlength="4" placeholder="4-digit code"></label><label>Day<select data-required><option value="">Choose…</option><option>Monday</option><option>Tuesday</option><option>Wednesday</option></select></label><label><input data-required-check type="checkbox" style="width:auto;margin-right:8px">I have my ID.</label></div>`
},
{
 title:'Respond to the message.',
 copy:'Read the text and fill out the action form.',
 body:`<div class="message-bubble"><b>Sam</b>“Hey — the ride will be there at 9:35 instead of 9:50. Please be by the front entrance. You don’t need to call me back unless that won’t work.”</div><div class="task-form" data-required-form><label>New pickup time<input data-required type="text" placeholder="time"></label><label>Where should you wait?<input data-required type="text" placeholder="location"></label><label>Do you need to call Sam back?<select data-required><option value="">Choose…</option><option>No, unless the change will not work</option><option>Yes, always call back</option></select></label></div>`
},
{
 title:'Pack for the appointment.',
 copy:'Select the items the reminder specifically told you to bring.',
 body:`<div class="task-options two-col" data-required-multi data-needed="id,insurance"><button type="button" data-item="id">Photo ID</button><button type="button" data-item="insurance">Insurance card</button><button type="button" data-item="book">Book</button><button type="button" data-item="charger">Phone charger</button><button type="button" data-item="snack">Snack</button><button type="button" data-item="mail">Mail</button></div><div class="task-feedback" style="display:block;margin-top:12px">Choose the items the appointment actually asked for.</div>`
},
{
 title:'Answer while someone is talking to you.',
 copy:'The simulation keeps playing. Type your answer instead of choosing from a list.',
 body:`<div class="person-line"><span>OTHER PERSON</span><blockquote style="font-size:27px">“Before we go — what suite are you supposed to check in at?”</blockquote></div><div class="task-form" data-required-form><label>Your answer<input data-required type="text" placeholder="type what you would say"></label></div>`
},
{
 title:'Leave yourself a usable reminder.',
 copy:'Write a note you could actually use later. Include the appointment time, location and what to bring.',
 body:`<div class="task-form" data-required-form><label>Reminder note<textarea data-required rows="7" placeholder="write your reminder here"></textarea></label></div>`
}
];

let current=0;
const progress=$('#taskProgress'),title=$('#taskTitle'),copy=$('#taskCopy'),body=$('#taskBody'),feedback=$('#taskFeedback'),next=$('#taskNext'),finish=$('#finishExperience');

function yt(command){try{video.contentWindow.postMessage(JSON.stringify({event:'command',func:command,args:[]}), '*')}catch(e){}}
$('#pauseVideo').onclick=()=>yt('pauseVideo');
$('#resumeVideo').onclick=()=>yt('playVideo');

function renderProgress(){progress.innerHTML=tasks.map((_,i)=>`<span class="${i<current?'done':i===current?'active':''}"></span>`).join('')}
function requiredComplete(){
 const fields=[...body.querySelectorAll('[data-required]')];
 const checks=[...body.querySelectorAll('[data-required-check]')];
 const multi=body.querySelector('[data-required-multi]');
 const fieldsOkay=fields.every(el=>String(el.value||'').trim().length>0);
 const checksOkay=checks.every(el=>el.checked);
 let multiOkay=true;
 if(multi){
   const needed=(multi.dataset.needed||'').split(',').filter(Boolean);
   const selected=[...multi.querySelectorAll('button.selected')].map(b=>b.dataset.item);
   multiOkay=needed.every(x=>selected.includes(x));
 }
 return fieldsOkay&&checksOkay&&multiOkay;
}
function updateNext(){
 const done=requiredComplete();
 if(current===tasks.length-1){finish.hidden=false;finish.disabled=!done;next.hidden=true}
 else{next.hidden=false;next.disabled=!done;finish.hidden=true}
 if(done){feedback.hidden=false;feedback.textContent='Task complete. You can move on when you’re ready.'}
}
function wireTask(){
 body.querySelectorAll('input,textarea').forEach(el=>{
   el.setAttribute('autocomplete','off');
   el.addEventListener('paste',e=>{e.preventDefault();feedback.hidden=false;feedback.textContent='Type this one in yourself — the point is practicing while the audio competes for your attention.';});
   el.addEventListener('drop',e=>e.preventDefault());
   el.addEventListener('input',updateNext);el.addEventListener('change',updateNext);
 });
 body.querySelectorAll('select').forEach(el=>el.addEventListener('change',updateNext));
 body.querySelectorAll('[data-required-multi] button').forEach(btn=>btn.onclick=()=>{btn.classList.toggle('selected');updateNext()});
}
function renderTask(){
 const t=tasks[current];
 $('#taskKicker').textContent=`ACTIVITY ${current+1} OF ${tasks.length}`;
 title.textContent=t.title;copy.textContent=t.copy;body.innerHTML=t.body;feedback.hidden=true;
 renderProgress();wireTask();updateNext();
}
document.querySelectorAll('.video-choice').forEach(btn=>btn.onclick=()=>{
 document.querySelectorAll('.video-choice').forEach(x=>x.classList.remove('active'));btn.classList.add('active');
 video.src=videos[btn.dataset.video];current=0;renderTask();
});
next.onclick=()=>{if(requiredComplete()&&current<tasks.length-1){current++;renderTask()}};
finish.onclick=()=>{if(!requiredComplete())return;yt('pauseVideo');$('#audioLab').hidden=true;$('#silenceScreen').hidden=false;$('#silenceScreen').scrollIntoView({behavior:'smooth',block:'center'})};
$('#continueDebrief').onclick=()=>{$('#silenceScreen').hidden=true;$('#afterAudio').hidden=false;$('#afterAudio').scrollIntoView({behavior:'smooth',block:'start'})};
$('#resetAudio').onclick=()=>{current=0;$('#afterAudio').hidden=true;$('#audioLab').hidden=false;video.src=video.src;renderTask();$('#audioLab').scrollIntoView({behavior:'smooth',block:'start'})};

const reflections={
 reread:'Rereading can mean attention is being pulled in more than one direction—not that someone does not care.',
 memory:'Working memory can become crowded. From the outside, that may look like “not listening” even when someone is trying hard to keep up.',
 irritated:'Irritation can build when the brain is already handling competing input before another demand is added.',
 rushed:'Rushing can be a way to escape overload. Finishing quickly does not necessarily mean the task felt easy.',
 distracted:'Losing your place is easy to misread as lack of effort. Sometimes the task is competing with much more than we can see.',
 voices:'Your attention followed the most intrusive input. “Just ignore it” can be an unrealistic instruction.',
 stopped:'Needing to pause or stop is information too. Reducing stimulation or breaking a task down can be useful support.',
 fine:'A short, voluntary simulation may be easy for you. That still cannot tell us how another person experiences involuntary symptoms.'
};
document.querySelectorAll('[data-reflect]').forEach(btn=>btn.onclick=()=>{btn.classList.toggle('active');$('#reflectionResult').textContent=reflections[btn.dataset.reflect]});

const support={
 repeat:'Repeating the same information with frustration adds pressure without reducing the person’s cognitive load.',
 write:'You kept the expectation the same while reducing how much the person has to hold in working memory.',
 attention:'This assumes the problem is effort. If attention is already overloaded, more pressure may make processing harder.',
 voices:'Exploring what someone is experiencing can sometimes be useful, but this moment may call for something simpler first: reduce load, give clear information and support the immediate task.'
};
document.querySelectorAll('[data-support]').forEach(btn=>btn.onclick=()=>{
 document.querySelectorAll('[data-support]').forEach(x=>x.classList.remove('active'));btn.classList.add('active');
 $('#supportFeedback').hidden=false;$('#supportFeedback').innerHTML=`<b>NOTICE WHAT YOUR RESPONSE ADDS</b><p>${support[btn.dataset.support]}</p>`;
});
renderTask();
})();