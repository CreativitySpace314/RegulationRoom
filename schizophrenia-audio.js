(()=> {
const $=s=>document.querySelector(s);
const shell=$('#immersiveShell');
if(!shell)return;

const scenes=[
{
key:'message',label:'READ',place:'KITCHEN · 8:41 AM',title:'Your phone buzzes.',copy:'You are supposed to meet someone later this morning. Read the message carefully.',
task:`<div class="message-card distort-text" data-alt="Appointment moved to 10:50. Bring your ID."><b>NEW MESSAGE</b><p>Appointment is at <strong>10:15 AM</strong>. Bring your <strong>ID</strong>.</p></div><div class="scene-prompt">You will need this information again later.</div>`,
button:'got it — keep going →',level:.38,visual:'alert'
},
{
key:'memory',label:'REMEMBER',place:'BEDROOM · 8:45 AM',title:'Grab what you need.',copy:'Someone gives you one more instruction while you are getting ready.',
task:`<div class="instruction-card"><span>HOLD ONTO THIS</span><strong>Bring your ID, medication list and insurance card.</strong></div><div class="task-choice-row"><button data-pick>check my bag</button><button data-pick>look for my shoes</button><button data-pick>check the clock</button></div>`,
button:'continue →',level:.58,visual:'shadow'
},
{
key:'recall',label:'RECALL',place:'HALLWAY · 8:49 AM',title:'What were the three things?',copy:'No trick. Just try to pull the instruction back up.',
task:`<div class="memory-options"><button data-answer="good">ID + medication list + insurance card</button><button data-answer="close">ID + phone + insurance card</button><button data-answer="close">wallet + medication list + keys</button><button data-answer="close">ID + appointment card + insurance card</button></div>`,
button:'keep moving →',level:.76,visual:'shadow'
},
{
key:'social',label:'LISTEN',place:'FRONT ROOM · 8:52 AM',title:'Someone asks you a simple question.',copy:'They are talking while the other voices continue underneath them.',
task:`<div class="person-line"><span>SUPPORT PERSON</span><blockquote style="font-size:29px">“Before we go — was your appointment at 10:15 or 10:50?”</blockquote></div><div class="task-choice-row"><button data-answer="good">10:15</button><button data-answer="close">10:50</button><button data-answer="close">I don’t know</button></div>`,
button:'continue →',level:.9,visual:'text'
},
{
key:'uncertainty',label:'UNCERTAINTY',place:'BY THE DOOR · 8:55 AM',title:'Two people are talking quietly.',copy:'You cannot hear the full conversation. Your brain still wants to make sense of it.',
task:`<div class="scene-prompt">One voice in the recording suggests they are talking about you. You do not actually have enough information to know that.</div><div class="task-choice-row"><button data-pick>I keep packing</button><button data-pick>I try to listen harder</button><button data-pick>I want to leave</button><button data-pick>I ask what they said</button></div>`,
button:'almost done →',level:1,visual:'shadow'
},
{
key:'leave',label:'LEAVE',place:'ENTRYWAY · 8:58 AM',title:'Time to go.',copy:'One last check before you walk out.',
task:`<div class="appointment-card"><span>WHAT TIME WAS THE APPOINTMENT?</span><div class="task-choice-row"><button data-answer="good">10:15 AM</button><button data-answer="close">10:50 AM</button><button data-answer="close">11:15 AM</button></div></div><div class="scene-prompt">There is no score. Notice how certain—or uncertain—you feel.</div>`,
button:'finish →',level:.92,visual:'alert'
}
];

const humanVoices=new Audio();
humanVoices.loop=true;humanVoices.preload='auto';humanVoices.playsInline=true;
let audioReady=false,current=0,running=false,startTime=0,clockId=null,levelId=null,currentLevel=.35,targetLevel=.35,userVolume=.78,muted=false,answered=false;

const track=$('#morningTrack'),scenePanel=$('#scenePanel'),sceneCount=$('#sceneCount'),scenePlace=$('#scenePlace'),sceneTitle=$('#sceneTitle'),sceneCopy=$('#sceneCopy'),sceneTask=$('#sceneTask'),sceneNext=$('#sceneNext'),sceneFeedback=$('#sceneFeedback'),audioStatus=$('#audioStatus'),audioTimer=$('#audioTimer'),voiceMeter=$('#voiceMeter'),muteVoices=$('#muteVoices'),voiceVolume=$('#voiceVolume'),voiceVolumeValue=$('#voiceVolumeValue');

async function ensureAudio(){
 if(audioReady)return;
 const r=await fetch('assets/empathy-clear-v3.txt?v=1',{cache:'no-store'});
 if(!r.ok)throw new Error('audio');
 humanVoices.src='data:audio/mpeg;base64,'+(await r.text()).trim();
 audioReady=true;
}
function buildTrack(){track.innerHTML=scenes.map((s,i)=>`<span data-i="${i}">${s.label}</span>`).join('')}
function applyVolume(){
 const level=Math.max(.18,Math.min(1,currentLevel));
 humanVoices.volume=muted?0:Math.min(1,userVolume*level);
 voiceMeter.style.width=`${Math.round(level*100)}%`;
 muteVoices.textContent=muted?'🔇 voices muted':'🔊 voices on';
}
function updateElapsed(){if(!running)return;const sec=Math.floor((Date.now()-startTime)/1000);audioTimer.textContent=`${Math.floor(sec/60)}:${String(sec%60).padStart(2,'0')}`}
function startMotion(){clearInterval(levelId);levelId=setInterval(()=>{const wobble=(Math.random()-.5)*.15;currentLevel+=(targetLevel+wobble-currentLevel)*.24;currentLevel=Math.max(.2,Math.min(1,currentLevel));applyVolume()},650)}
function visualMode(mode){
 const world=$('.immersive-world');
 world.classList.remove('visual-load','text-shift','alert-flash');
 if(mode==='shadow')world.classList.add('visual-load');
 if(mode==='text')world.classList.add('text-shift');
 if(mode==='alert'){world.classList.add('alert-flash');setTimeout(()=>world.classList.remove('alert-flash'),2600)}
}
function wireScene(){
 answered=false;
 sceneFeedback.hidden=true;
 sceneTask.querySelectorAll('[data-pick]').forEach(b=>b.onclick=()=>{sceneTask.querySelectorAll('[data-pick]').forEach(x=>x.classList.remove('selected'));b.classList.add('selected');answered=true});
 sceneTask.querySelectorAll('[data-answer]').forEach(b=>b.onclick=()=>{sceneTask.querySelectorAll('[data-answer]').forEach(x=>x.classList.remove('selected'));b.classList.add('selected');answered=true;sceneFeedback.hidden=false;sceneFeedback.textContent=b.dataset.answer==='good'?'You caught it. Keep going while the competing input continues.':'That information slipped or became uncertain. No reset—keep going.'});
}
function renderScene(){
 const s=scenes[current];targetLevel=s.level;currentLevel=Math.max(currentLevel,s.level-.18);
 sceneCount.textContent=`${String(current+1).padStart(2,'0')} / ${String(scenes.length).padStart(2,'0')}`;
 scenePlace.textContent=s.place;sceneTitle.textContent=s.title;sceneCopy.textContent=s.copy;sceneTask.innerHTML=s.task;sceneNext.textContent=s.button;
 [...track.children].forEach((el,i)=>{el.classList.toggle('active',i===current);el.classList.toggle('done',i<current)});
 wireScene();visualMode(s.visual);applyVolume();
 audioStatus.textContent=currentLevel>.82?'Competing input is high. Keep working at your own pace.':'The voices remain underneath the task.';
}
async function launch(){
 $('#audioLab').hidden=true;shell.hidden=false;window.scrollTo({top:shell.offsetTop-10,behavior:'smooth'});
 try{await ensureAudio();running=true;startTime=Date.now();humanVoices.currentTime=0;await humanVoices.play();clockId=setInterval(updateElapsed,1000);startMotion();renderScene()}
 catch(e){running=false;audioStatus.textContent='The audio track did not load. Refresh and try again, or continue without audio.';renderScene()}
}
function stopSounds(){clearInterval(levelId);levelId=null;humanVoices.pause();humanVoices.currentTime=0}
function finish(stopped=false){
 running=false;clearInterval(clockId);clockId=null;stopSounds();shell.hidden=true;$('#silenceScreen').hidden=false;window.scrollTo({top:$('#silenceScreen').offsetTop,behavior:'smooth'});
 $('#silenceScreen p').textContent=stopped?'You stopped the experience. Notice what made you want the input to end.':'Notice the quiet.';
}
function reset(){
 stopSounds();running=false;current=0;audioTimer.textContent='0:00';$('#afterAudio').hidden=true;$('#silenceScreen').hidden=true;shell.hidden=true;$('#audioLab').hidden=false;$('#skipNote').hidden=true;document.querySelectorAll('[data-reflect]').forEach(x=>x.classList.remove('active'));$('#reflectionResult').textContent='Choose what fit your experience.';window.scrollTo({top:$('#audioLab').offsetTop-20,behavior:'smooth'});
}
$('#launchExperience').onclick=launch;
$('#skipExperience').onclick=()=>{$('#skipNote').hidden=false;$('#skipNote').scrollIntoView({behavior:'smooth',block:'center'})};
$('#stopAudio').onclick=()=>finish(true);
$('#continueDebrief').onclick=()=>{$('#silenceScreen').hidden=true;$('#afterAudio').hidden=false;$('#afterAudio').scrollIntoView({behavior:'smooth',block:'start'})};
$('#resetAudio').onclick=reset;
sceneNext.onclick=()=>{if(current<scenes.length-1){current++;renderScene()}else finish(false)};
muteVoices.onclick=()=>{muted=!muted;applyVolume();audioStatus.textContent=muted?'Voices muted. You can keep going.':'Voices back on.'};
voiceVolume.oninput=()=>{userVolume=Number(voiceVolume.value)/100;voiceVolumeValue.value=`${voiceVolume.value}%`;muted=userVolume===0;applyVolume()};

const reflections={reread:'Rereading can be a clue that attention is being pulled away from the task—not that someone “doesn’t care.”',memory:'Working memory gets crowded. From the outside, that can look like not listening even when someone is trying hard to keep up.',irritated:'Irritation can build before anyone else has even asked the next question. Extra demands may land differently when cognitive load is already high.',rushed:'Rushing can be a way to escape overload. Finishing fast does not always mean the task felt easy.',suspicious:'When information feels incomplete or uncertain, the brain may work hard to create meaning. Arguing usually adds more pressure.',voices:'Attention followed the most intrusive input. “Just ignore it” may be far harder than it sounds.',stopped:'Wanting the task to end is information. Reducing stimulation or breaking the task down can be support—not “giving in.”',fine:'That matters too. A short voluntary exercise may be easy for you. It still cannot represent the intensity, meaning or persistence of another person’s experience.'};
document.querySelectorAll('[data-reflect]').forEach(b=>b.onclick=()=>{b.classList.toggle('active');$('#reflectionResult').textContent=reflections[b.dataset.reflect]});

const support={repeat:'Repeating the same information with more frustration may increase pressure without making it easier to process.',write:'You reduced working-memory demand without changing the expectation. The appointment time stays the same; your approach became easier to use.',attention:'This assumes the problem is effort. If attention is already overloaded, more pressure can make the task harder.',voices:'Sometimes asking about the experience can be useful—but not every difficult moment requires exploring the content of hallucinations. First respond to the immediate need: clarity, regulation and the task in front of you.'};
document.querySelectorAll('[data-support]').forEach(b=>b.onclick=()=>{document.querySelectorAll('[data-support]').forEach(x=>x.classList.remove('active'));b.classList.add('active');$('#supportFeedback').hidden=false;$('#supportFeedback').innerHTML=`<b>NOTICE WHAT YOUR RESPONSE ADDS</b><p>${support[b.dataset.support]}</p>`});

window.addEventListener('pagehide',stopSounds);
buildTrack();renderScene();applyVolume();
})();