(()=> {
const $=s=>document.querySelector(s);
const video=$('#simulationVideo');
if(!video)return;

const videos={
 one:'https://www.youtube.com/embed/NyUqhbPD2tc?start=33&rel=0&controls=1&enablejsapi=1&playsinline=1',
 two:'https://www.youtube.com/embed/HpF3gNifrGY?start=619&rel=0&controls=1&enablejsapi=1&playsinline=1'
};

const tasks=[
{
 title:'Fill out the appointment form.',
 copy:'The information you need is right here. Keep the simulation playing if you can.',
 body:`<div class="task-scene"><h4>APPOINTMENT REMINDER</h4><p><b>Jordan Ellis</b></p><p>Tuesday · 10:15 AM</p><p>Riverside Clinic · Suite 204</p><p>Bring photo ID + insurance card.</p></div><div class="task-form"><label>Appointment time<input type="text" placeholder="enter the time"></label><label>Suite<input type="text" placeholder="enter suite number"></label><label>What do you need to bring?<input type="text" placeholder="enter the items"></label></div>`
},
{
 title:'Follow the directions in order.',
 copy:'Do each step while the simulation continues. You can look back at the directions.',
 body:`<div class="instruction-strip"><span>1. Type <b>4821</b> in the box.</span><span>2. Select <b>Tuesday</b>.</span><span>3. Check “I have my ID.”</span></div><div class="task-form"><label>Code<input type="text" maxlength="4"></label><label>Day<select><option>Choose…</option><option>Monday</option><option>Tuesday</option><option>Wednesday</option></select></label><label><input type="checkbox" style="width:auto;margin-right:8px">I have my ID.</label></div>`
},
{
 title:'Figure out what this message needs from you.',
 copy:'Someone has sent you an ordinary text. Read it and decide what you actually need to do.',
 body:`<div class="message-bubble"><b>Sam</b>“Hey — the ride will be there at 9:35 instead of 9:50. Please be by the front entrance. You don’t need to call me back unless that won’t work.”</div><div class="task-options"><button data-answer="good">Be at the front entrance by 9:35</button><button data-answer="close">Call Sam at 9:35</button><button data-answer="close">Wait inside until 9:50</button><button data-answer="close">Go to the back entrance at 9:35</button></div>`
},
{
 title:'Get ready to leave.',
 copy:'Choose the things you actually need based on the appointment reminder—not everything that could be useful.',
 body:`<div class="task-options two-col" data-multi><button data-item="id">Photo ID</button><button data-item="insurance">Insurance card</button><button data-item="book">Book</button><button data-item="charger">Phone charger</button><button data-item="snack">Snack</button><button data-item="mail">Mail</button></div><div class="task-feedback" style="display:block;margin-top:12px">Choose what the appointment specifically asked you to bring.</div>`
},
{
 title:'Someone asks you while you are still trying to leave.',
 copy:'Pick the response that feels closest to what you would actually say in the moment.',
 body:`<div class="person-line"><span>OTHER PERSON</span><blockquote style="font-size:27px">“Hey, before you go — what suite are you supposed to check in at?”</blockquote></div><div class="task-options"><button data-answer="good">Suite 204.</button><button data-answer="close">I think 240?</button><button data-answer="close">I don’t know. Stop asking me.</button><button data-answer="close">Wait, what?</button></div>`
},
{
 title:'Write down what you need to remember.',
 copy:'Use your own words. This is not graded.',
 body:`<div class="task-scene"><h4>BEFORE YOU WALK OUT</h4><p>Write yourself a quick note with the appointment time, where you are going, and what you need to bring.</p></div><div class="task-form"><textarea rows="6" placeholder="write the note you would leave yourself"></textarea></div>`
}
];

let current=0;
const progress=$('#taskProgress'),title=$('#taskTitle'),copy=$('#taskCopy'),body=$('#taskBody'),feedback=$('#taskFeedback'),next=$('#taskNext'),finish=$('#finishExperience');

function yt(command){try{video.contentWindow.postMessage(JSON.stringify({event:'command',func:command,args:[]}), '*')}catch(e){}}
$('#pauseVideo').onclick=()=>yt('pauseVideo');
$('#resumeVideo').onclick=()=>yt('playVideo');

function renderProgress(){progress.innerHTML=tasks.map((_,i)=>`<span class="${i<current?'done':i===current?'active':''}"></span>`).join('')}
function wireTask(){
 body.querySelectorAll('[data-answer]').forEach(btn=>btn.onclick=()=>{
   body.querySelectorAll('[data-answer]').forEach(x=>x.classList.remove('selected'));
   btn.classList.add('selected');feedback.hidden=false;
   feedback.textContent=btn.dataset.answer==='good'
     ?'You pulled out the needed information while other input was competing for your attention.'
     :'That detail got mixed up or became harder to access. Keep going—there is no reset.';
 });
 body.querySelectorAll('[data-multi] button').forEach(btn=>btn.onclick=()=>btn.classList.toggle('selected'));
}
function renderTask(){
 const t=tasks[current];
 $('#taskKicker').textContent=`ACTIVITY ${current+1} OF ${tasks.length}`;
 title.textContent=t.title;copy.textContent=t.copy;body.innerHTML=t.body;feedback.hidden=true;
 renderProgress();wireTask();next.hidden=current===tasks.length-1;finish.hidden=current!==tasks.length-1;
}
document.querySelectorAll('.video-choice').forEach(btn=>btn.onclick=()=>{
 document.querySelectorAll('.video-choice').forEach(x=>x.classList.remove('active'));btn.classList.add('active');
 video.src=videos[btn.dataset.video];current=0;renderTask();
});
next.onclick=()=>{if(current<tasks.length-1){current++;renderTask()}};
finish.onclick=()=>{yt('pauseVideo');$('#audioLab').hidden=true;$('#silenceScreen').hidden=false;$('#silenceScreen').scrollIntoView({behavior:'smooth',block:'center'})};
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