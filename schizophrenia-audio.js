(()=>{
const oldStart=document.getElementById('startAudio');
if(!oldStart)return;
function fresh(id){const old=document.getElementById(id);if(!old)return null;const n=old.cloneNode(true);old.replaceWith(n);return n}
const startAudio=fresh('startAudio'),stopAudio=fresh('stopAudio'),hideInstruction=fresh('hideInstruction'),revealInstruction=fresh('revealInstruction'),resetAudio=fresh('resetAudio');
const audioTimer=document.getElementById('audioTimer'),audioStatus=document.getElementById('audioStatus'),afterAudio=document.getElementById('afterAudio'),memoryInstruction=document.getElementById('memoryInstruction'),recallReveal=document.getElementById('recallReveal'),recallInput=document.getElementById('recallInput'),doingBox=document.getElementById('doingBox');
const fragments=[
 'they know','you are doing it wrong','why are you here','they are talking about you','everyone can tell','do not look at them','they noticed','do not trust them','they are laughing at you','you forgot something','they can hear you','you do not belong here','what are you doing','they are watching','do not answer','they know what you are thinking','something is wrong','they can see it','you should leave','keep quiet','they heard that','they are waiting','you messed it up','everyone noticed'
];
let seconds=120,timer=null,refill=null,ctx=null,sources=[],running=false,voiceIndex=0;
function drawTimer(){audioTimer.textContent=`${Math.floor(seconds/60)}:${String(seconds%60).padStart(2,'0')}`}
function voices(){return ('speechSynthesis'in window)?window.speechSynthesis.getVoices():[]}
function utter(text,soft=false){const u=new SpeechSynthesisUtterance(text);const vs=voices();if(vs.length){voiceIndex=(voiceIndex+1)%Math.min(vs.length,6);u.voice=vs[voiceIndex]}u.rate=soft?.72+Math.random()*.16:.88+Math.random()*.22;u.pitch=soft?.62+Math.random()*.18:.68+Math.random()*.42;u.volume=soft?.12+Math.random()*.07:.24+Math.random()*.13;return u}
function keepQueueFull(){if(!running||!('speechSynthesis'in window))return;/* Browser speech synthesis is serial, so keep very short fragments queued while the continuous murmur bed fills the gaps. */
 if(!speechSynthesis.speaking&&!speechSynthesis.pending){for(let i=0;i<7;i++){const soft=i%3!==0;speechSynthesis.speak(utter(fragments[Math.floor(Math.random()*fragments.length)],soft))}}
}
function startVoiceBed(){try{ctx=ctx||new(window.AudioContext||window.webkitAudioContext)();if(ctx.state==='suspended')ctx.resume();
 const master=ctx.createGain();master.gain.value=.028;master.connect(ctx.destination);
 const makeBed=(freq,pan,rate)=>{const b=ctx.createBuffer(1,ctx.sampleRate*2,ctx.sampleRate),d=b.getChannelData(0);for(let i=0;i<d.length;i++)d[i]=Math.random()*2-1;const src=ctx.createBufferSource();src.buffer=b;src.loop=true;const bp=ctx.createBiquadFilter();bp.type='bandpass';bp.frequency.value=freq;bp.Q.value=1.1;const g=ctx.createGain();g.gain.value=.45;const lfo=ctx.createOscillator(),lg=ctx.createGain();lfo.frequency.value=rate;lg.gain.value=.12;lfo.connect(lg).connect(g.gain);let tail=g;if(ctx.createStereoPanner){const p=ctx.createStereoPanner();p.pan.value=pan;g.connect(p);tail=p}tail.connect(master);src.connect(bp).connect(g);src.start();lfo.start();sources.push(src,lfo)};
 makeBed(520,-.65,.8);makeBed(930,.55,1.15);makeBed(1450,-.2,.55);
}catch(e){}}
function stopAll(){if(refill){clearInterval(refill);refill=null}if('speechSynthesis'in window)speechSynthesis.cancel();sources.forEach(s=>{try{s.stop()}catch(e){}});sources=[]}
function finish(early=false){running=false;if(timer){clearInterval(timer);timer=null}stopAll();doingBox?.classList.remove('running');startAudio.disabled=false;stopAudio.disabled=true;afterAudio.hidden=false;audioStatus.textContent=early?'Stopped early. Notice what happened to your attention before you stopped.':'Two minutes complete. What stayed with you?'}
startAudio.onclick=()=>{if(running)return;seconds=120;drawTimer();running=true;afterAudio.hidden=true;recallReveal.hidden=true;recallInput.value='';memoryInstruction.style.visibility='visible';hideInstruction.textContent='hide instruction';startAudio.disabled=true;stopAudio.disabled=false;doingBox?.classList.add('running');audioStatus.textContent='Continuous murmur + stylized voice fragments are playing. Keep the volume comfortable and stop anytime.';startVoiceBed();keepQueueFull();refill=setInterval(keepQueueFull,350);timer=setInterval(()=>{seconds--;drawTimer();if(seconds<=0)finish(false)},1000)};
stopAudio.onclick=()=>finish(true);
hideInstruction.onclick=()=>{const h=memoryInstruction.style.visibility==='hidden';memoryInstruction.style.visibility=h?'visible':'hidden';hideInstruction.textContent=h?'hide instruction':'show instruction'};
revealInstruction.onclick=()=>{recallReveal.hidden=false};
resetAudio.onclick=()=>{finish(true);seconds=120;drawTimer();afterAudio.hidden=true;memoryInstruction.style.visibility='visible';hideInstruction.textContent='hide instruction';audioStatus.textContent='Audio is off. Your answers stay on this page only.';['taskName','taskColor','taskFood','taskGroceries','recallInput'].forEach(id=>{const el=document.getElementById(id);if(el)el.value=''})};
window.addEventListener('pagehide',stopAll);drawTimer();
})();