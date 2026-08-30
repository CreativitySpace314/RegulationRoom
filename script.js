let ropePosition = 50;
const knot = document.getElementById('knot');
const feedback = document.getElementById('ropeFeedback');
const toast = document.getElementById('toast');

function clamp(n,min,max){return Math.min(Math.max(n,min),max)}
function updateRope(delta){
  ropePosition = clamp(ropePosition + Number(delta), 14, 88);
  knot.style.left = ropePosition + '%';
}
function showToast(message){
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(window.toastTimer);
  window.toastTimer=setTimeout(()=>toast.classList.remove('show'),3600);
}

document.querySelectorAll('.choice').forEach(btn=>{
  btn.addEventListener('click',()=>{
    updateRope(btn.dataset.shift);
    feedback.textContent=btn.dataset.feedback;
    feedback.style.color=Number(btn.dataset.shift)>0?'#ff8c84':'#d7ff38';
    if(Number(btn.dataset.shift)>=15) showToast('🪢 YOU GRABBED THE ROPE. Notice your side of the interaction.');
    else if(Number(btn.dataset.shift)<0) showToast('✓ You reduced the pull without dropping the boundary.');
    else showToast('Notice it: did this response reduce pressure or add more?');
  });
});

document.querySelectorAll('.tool-chip').forEach(btn=>{
  btn.addEventListener('click',()=>{
    updateRope(btn.dataset.reset);
    feedback.textContent='You regulated your side first. That gives the interaction more room to change.';
    feedback.style.color='#d7ff38';
    showToast('Back toward center. Your regulation is part of the intervention.');
  });
});

const scenarioNames={
  meds:'Medication refusal selected. Next: choose the person’s support profile.',
  paranoia:'Psychosis / paranoia selected. Next: choose the person’s support profile.',
  verbal:'Verbal escalation selected. Next: choose the person’s support profile.',
  leaving:'Leaving / elopement selected. Next: choose the person’s support profile.',
  shutdown:'Shutdown / refusal selected. Next: choose the person’s support profile.',
  peer:'Peer conflict selected. Next: choose the person’s support profile.',
  selfharm:'Self-harm statements selected. Next: choose the person’s support profile.',
  routine:'Routine change selected. Next: choose the person’s support profile.'
};
document.querySelectorAll('.scenario-card').forEach(card=>{
  card.addEventListener('click',()=>{
    showToast(scenarioNames[card.dataset.scenario]);
    setTimeout(()=>document.querySelector('#diagnoses').scrollIntoView({behavior:'smooth'}),450);
  });
});

document.querySelectorAll('.notice-grid button').forEach(btn=>{
  btn.addEventListener('click',()=>showToast('Challenge Mode is coming next: observation before interpretation.'));
});
