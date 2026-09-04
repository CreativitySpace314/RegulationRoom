(()=>{
  const $=s=>document.querySelector(s);
  const cases=[
    {title:'The Missing 10 Minutes',setup:'7:10 PM · Living room. Ava becomes verbally escalated toward a housemate after they enter the shared space.',timeline:[['7:10 PM','Ava raises her voice toward a housemate in the living room.'],['7:11 PM','Ava states, “Get away from me. I don’t want you near me.”'],['7:12 PM','Staff uses a calm tone and supports separation without arguing about what happened.'],['7:15 PM','Ava moves to the hallway and continues pacing.'],['7:19 PM','Ava stops yelling and asks for space.'],['7:22 PM','Ava returns to the living room after the other person has moved to another area.']],items:[['At 7:10 PM, Ava raised her voice toward a housemate in the living room.','observed','note'],['“Get away from me. I don’t want you near me.”','quote','note'],['Staff maintained a calm tone and supported separation of the two individuals.','staff','note'],['Ava moved to the hallway, paced for several minutes, and then asked for space.','response','note'],['By 7:22 PM, Ava had stopped yelling and returned to the living room without further escalation.','outcome','note'],['The television was on during the interaction.','observed','omit'],['Ava had been sitting on the couch before the housemate entered.','observed','omit'],['Ava was being disrespectful.','bad','trash'],['Ava wanted to start drama with the housemate.','bad','trash'],['Staff handled the situation appropriately.','bad','trash']]},
    {title:'What Did Staff Actually Do?',setup:'9:15 PM · Hallway. Jalen shoves staff with open hands while saying, “Get out of my way.” The draft note later says only, “Staff redirected Jalen.”',timeline:[['9:15 PM','Jalen shoves staff with open hands in the hallway.'],['9:15 PM','Jalen states, “Get out of my way.”'],['9:16 PM','Staff disengages immediately and increases distance without physical response.'],['9:18 PM','Jalen walks to his room and closes the door.'],['9:26 PM','Staff checks in from the doorway after Jalen’s voice and pacing have decreased.'],['9:30 PM','Jalen speaks with staff about what could help earlier next time.']],items:[['At 9:15 PM, Jalen shoved staff with open hands in the hallway.','observed','note'],['“Get out of my way.”','quote','note'],['Staff disengaged immediately and increased distance without physical response.','staff','note'],['Jalen walked to his room, closed the door, and remained there for several minutes.','response','note'],['At approximately 9:30 PM, Jalen re-engaged in conversation with staff about earlier coping options.','outcome','note'],['Staff had been completing shift paperwork before the incident.','observed','omit'],['The hallway light was on.','observed','omit'],['Jalen attacked staff.','bad','trash'],['Jalen was out of control.','bad','trash'],['Staff successfully de-escalated Jalen.','bad','trash']]},
    {title:'The Fall Note',setup:'7:40 PM · Hallway. Sienna slips and falls to the floor while walking toward the kitchen.',timeline:[['7:40 PM','Sienna slips in the hallway and falls to the floor.'],['7:41 PM','Sienna states, “I’m okay. I just lost my balance.”'],['7:42 PM','Staff visually checks for injury and asks about pain.'],['7:44 PM','Sienna denies pain and no injury is observed.'],['7:47 PM','Sienna stands and walks to the kitchen without assistance.'],['8:00 PM','Sienna continues normal activity with no new complaint.']],items:[['At 7:40 PM, Sienna slipped in the hallway and fell to the floor.','observed','note'],['“I’m okay. I just lost my balance.”','quote','note'],['Staff visually assessed for injury and asked Sienna about pain.','staff','note'],['Sienna denied pain, and no injury was reported or observed.','response','note'],['Sienna stood, walked to the kitchen without assistance, and had no new complaint by 8:00 PM.','outcome','note'],['Sienna had socks on at the time.','observed','omit'],['Dinner was being prepared in the kitchen.','observed','omit'],['Sienna was clumsy.','bad','trash'],['Sienna fell because she was not paying attention.','bad','trash'],['No big deal.','bad','trash']]},
    {title:'Property Damage',setup:'4:19 PM · Bedroom. Rowan throws their glasses onto the floor during emotional escalation, and the glasses break.',timeline:[['4:19 PM','Rowan raises their voice while pacing in the bedroom.'],['4:19 PM','Rowan throws their glasses onto the floor and states, “I don’t care anymore.”'],['4:20 PM','Staff provides space and does not continue the argument.'],['4:28 PM','Rowan’s voice lowers and pacing slows.'],['4:31 PM','Staff re-engages with Rowan about what happened.'],['4:35 PM','Rowan states, “Next time I’ll put them down instead.”']],items:[['At 4:19 PM, Rowan threw their glasses onto the bedroom floor, causing them to break.','observed','note'],['“I don’t care anymore.”','quote','note'],['Staff provided space and re-engaged once Rowan’s escalation had decreased.','staff','note'],['Rowan’s voice lowered, pacing slowed, and they later spoke with staff about the incident.','response','note'],['Rowan stated, “Next time I’ll put them down instead,” identifying a possible prevention strategy.','outcome','note'],['Rowan had worn the glasses all day.','observed','omit'],['A laundry basket was beside the bed.','observed','omit'],['Rowan does not respect their belongings.','bad','trash'],['Rowan broke the glasses for attention.','bad','trash'],['Rowan learned their lesson.','bad','trash']]},
    {title:'Whose Item Is It?',setup:'6:10 PM · Living room. Malik takes a personal item belonging to a housemate and brings it to his bedroom.',timeline:[['6:10 PM','Malik picks up a housemate’s personal item from the living room.'],['6:11 PM','Malik brings the item to his bedroom.'],['6:13 PM','Staff checks in and asks Malik about the item.'],['6:14 PM','Malik states, “I just wanted it for a bit.”'],['6:16 PM','Staff discusses personal boundaries and asks what Malik wants to do next.'],['6:18 PM','Malik returns the item to the housemate without further issue.']],items:[['At approximately 6:10 PM, Malik took a personal item belonging to a housemate from the living room and brought it to his bedroom.','observed','note'],['“I just wanted it for a bit.”','quote','note'],['Staff remained calm and discussed expectations around personal belongings and boundaries.','staff','note'],['Malik listened to staff and returned the item without further escalation.','response','note'],['By 6:18 PM, the item had been returned and no further conflict occurred.','outcome','note'],['The item had been left on a chair.','observed','omit'],['Malik had been in the living room earlier that afternoon.','observed','omit'],['Malik stole the item.','bad','trash'],['Malik knew better.','bad','trash'],['Malik was trying to upset the housemate.','bad','trash']]},
    {title:'The Medical Detail That Matters',setup:'4:50 PM · Living room. Priya experiences a brief seizure while seated.',timeline:[['4:50 PM','Priya has a seizure while seated in the living room.'],['4:50 PM','The episode lasts approximately 30 seconds.'],['4:51 PM','Staff clears the immediate area and monitors without physical intervention.'],['4:53 PM','Priya is responsive and states, “I’m okay, just tired.”'],['4:58 PM','Priya remains seated and continues responding to staff.'],['5:00 PM','Required notification is completed according to the setting’s process.']],items:[['At approximately 4:50 PM, Priya experienced a seizure lasting about 30 seconds while seated in the living room.','observed','note'],['“I’m okay, just tired.”','quote','note'],['Staff ensured the surrounding area was safe and monitored Priya without physical intervention.','staff','note'],['Priya was responsive after the episode and reported feeling tired.','response','note'],['Required notification was completed, and Priya continued responding to staff afterward.','outcome','note'],['Priya had been watching television beforehand.','observed','omit'],['A blanket was on the couch.','observed','omit'],['Priya had a bad seizure.','bad','trash'],['Priya was fine after.','bad','trash'],['Staff did everything correctly.','bad','trash']]},
    {title:'The Safety Note',setup:'10:30 PM · Living room. Tessa scratches her forearm while visibly distressed and states, “I just want it to stop.”',timeline:[['10:30 PM','Tessa scratches her forearm while sitting in the living room.'],['10:30 PM','Tessa states, “I just want it to stop.”'],['10:31 PM','Staff remains present and follows Tessa’s individualized safety process.'],['10:34 PM','Staff completes the required safety questions.'],['10:36 PM','Tessa states, “No, I’m not trying to kill myself.”'],['10:45 PM','Tessa accepts support and identifies coping options she wants to try.']],items:[['At approximately 10:30 PM, Tessa scratched her forearm while expressing emotional distress.','observed','note'],['“I just want it to stop.”','quote','note'],['Staff remained present, followed Tessa’s individualized safety process, and completed the required safety questions.','staff','note'],['Tessa answered the safety questions and stated, “No, I’m not trying to kill myself.”','response','note'],['Tessa accepted support and identified coping options she wanted to use; required notification was completed.','outcome','note'],['Tessa had been in the living room for most of the evening.','observed','omit'],['Tessa was wearing a sweatshirt.','observed','omit'],['Tessa was attention-seeking.','bad','trash'],['Tessa was suicidal.','bad','trash'],['Tessa was safe because she calmed down.','bad','trash']]},
    {title:'Overnight Gaps',setup:'6:50 AM · Shift change. Incoming staff reads only: “Noah was up a lot overnight.”',timeline:[['1:40 AM','Noah wakes and paces for about five minutes.'],['1:44 AM','Staff completes a brief check-in and keeps the environment low-stimulation.'],['1:47 AM','Noah declines additional support and returns to bed.'],['4:15 AM','Noah wakes and paces again for about five minutes.'],['4:22 AM','Noah returns to bed independently.'],['6:50 AM','Noah is asleep at shift change; the waking pattern was more frequent than usual.']],items:[['Noah woke at 1:40 AM and 4:15 AM and paced for about five minutes each time.','observed','note'],['“My mind won’t shut off, but I’m okay.”','quote','note'],['Staff completed brief check-ins and reduced stimulation per Noah’s usual overnight plan.','staff','note'],['Noah declined additional support both times and returned to bed independently.','response','note'],['Noah was asleep at shift change; incoming staff was told the waking pattern was more frequent than usual.','outcome','note'],['Noah used the bathroom at 3:05 AM.','observed','omit'],['The hallway light was on.','observed','omit'],['Noah was weird all night.','bad','trash'],['Noah kept staff awake unnecessarily.','bad','trash'],['Nothing important happened because Noah went back to bed.','bad','trash']]}
  ];

  const labels={observed:'WHAT HAPPENED',quote:'PERSON’S WORDS',staff:'STAFF ACTION',response:'PERSON’S RESPONSE',outcome:'FOLLOW-THROUGH'};
  const slotIds={observed:'slotObserved',quote:'slotQuote',staff:'slotStaff',response:'slotResponse',outcome:'slotOutcome'};
  const prompts={observed:'Add an observable detail here.',quote:'Use an exact quote when it matters.',staff:'What did staff actually do?',response:'What happened after staff responded?',outcome:'What changed, continued, or needs handed off?'};
  const challenges=[
    {label:'missing timestamps',cases:[0,2,7]},
    {label:'vague staff action',cases:[1,3,5]},
    {label:'judgment vs. behavior',cases:[0,1,3,4]},
    {label:'missing person response',cases:[0,3,5,6]},
    {label:'note ends too soon',cases:[3,6,7]},
    {label:'too much irrelevant detail',cases:[2,4,5]},
    {label:'safety wording',cases:[6]},
    {label:'random challenge',cases:[0,1,2,3,4,5,6,7]}
  ];

  let current=0,sceneIndex=0,sceneComplete=false,placements={},activeChallenge=null;
  const shuffle=a=>{const x=[...a];for(let i=x.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[x[i],x[j]]=[x[j],x[i]]}return x};
  const escape=s=>String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));

  function trashLesson(text){
    const t=text.toLowerCase();
    if(t.includes('disrespectful'))return['LABEL ≠ BEHAVIOR','“Disrespectful” is a label. Two staff may mean completely different things by it.','Replace the label with the raised voice, movement, or exact words you observed.'];
    if(t.includes('start drama')||t.includes('for attention')||t.includes('trying to upset'))return['MOTIVE ≠ FACT','This tells the reader why you think the person acted, but intent was not directly observable.','Document the behavior and quote. If the person explains their reason, document their words.'];
    if(t.includes('handled')||t.includes('successfully de-escalated')||t.includes('everything correctly'))return['EVALUATION ≠ INTERVENTION','This grades staff performance but hides the actual intervention. Another reader cannot tell what staff did.','Name the action: increased distance, remained present, checked for injury, offered space, or followed the individualized plan.'];
    if(t.includes('attacked'))return['LOADED WORD','“Attacked” adds interpretation and can make the event sound broader than what was observed.','Describe the physical action: shoved with open hands, threw an item, struck, kicked, etc.'];
    if(t.includes('out of control')||t.includes('weird'))return['TOO VAGUE','This describes your impression, not the observable behavior. It gives the next reader nothing concrete to picture.','Use what you saw or heard: pacing, shouting, repeated waking, speech changes, distance, or exact actions.'];
    if(t.includes('clumsy'))return['CHARACTER JUDGMENT','A fall is an event; “clumsy” turns it into a trait about the person.','Document the fall, location, client report, assessment, and what happened afterward.'];
    if(t.includes('not paying attention'))return['CAUSE WITHOUT EVIDENCE','You may not know why the fall happened. This turns a guess into a cause.','Document what was observed and anything the person reported about the cause.'];
    if(t.includes('no big deal'))return['MINIMIZES THE EVENT','This removes the information a reviewer needs to understand risk and outcome.','Document the assessment: pain reported or denied, injury observed or not observed, mobility, and follow-up.'];
    if(t.includes('does not respect'))return['CHARACTER STATEMENT','This makes a global statement about the person instead of documenting one event.','Describe what happened to the item and the person’s words or later problem-solving.'];
    if(t.includes('learned their lesson')||t.includes('knew better'))return['MIND-READING','We cannot document what someone learned, knew, or understood unless they demonstrate or state it.','Document what the person actually said, chose, returned, or identified for next time.'];
    if(t.includes('stole'))return['LEGAL/INTENT LABEL','“Stole” may imply intent that was not established in the scene.','Describe that the person took another person’s item without permission and what happened next.'];
    if(t.includes('bad seizure'))return['VAGUE SEVERITY','“Bad” does not tell a reviewer what was observed or how long it lasted.','Use observable medical details: duration, position, responsiveness, client report, staff action, and required notifications.'];
    if(t.includes('fine after'))return['“FINE” HIDES DATA','“Fine” compresses several important observations into one vague word.','Say whether the person was responsive, what they reported, what staff observed, and what follow-up occurred.'];
    if(t.includes('attention-seeking'))return['MOTIVE ≠ FACT','This labels the purpose of a behavior without evidence and can bias the next staff response.','Document the behavior, exact statement, staff safety response, and person’s response.'];
    if(t.includes('was suicidal'))return['CONCLUSION TOO SOON','One statement or self-harm behavior does not automatically establish the full level of suicide risk.','Preserve the exact statement and document the required safety questions, responses, and individualized safety process.'];
    if(t.includes('safe because')||t.includes('calmed down'))return['CALM ≠ SAFE','A quieter appearance does not by itself establish safety or resolve risk.','Document the safety assessment/process, the person’s answers, current support needs, and handoff.'];
    if(t.includes('kept staff awake'))return['STAFF-CENTERED JUDGMENT','This frames the person as a burden and assumes the waking was unnecessary.','Document the waking times, behavior, staff check-ins, person response, and change from baseline.'];
    if(t.includes('nothing important happened'))return['DISMISSES CHANGE','A person returning to bed does not erase a meaningful change from their usual pattern.','Document the pattern and why it mattered for the next shift.'];
    return['NOT A FACT YET','This wording adds judgment, motive, or a conclusion that was not directly established.','Replace it with what you saw, heard, did, or what the person directly reported.'];
  }

  function omitLesson(text){
    const t=text.toLowerCase();
    if(t.includes('television')||t.includes('blanket')||t.includes('laundry basket')||t.includes('hallway light')||t.includes('dinner'))return['TRUE ≠ RELEVANT','This may be completely accurate, but it does not explain the incident, staff response, outcome, or handoff.','Leave it out unless it directly affected the event.'];
    if(t.includes('socks'))return['CONTEXT NEEDS A REASON','Socks could matter in some falls, but this case gives no evidence that footwear contributed.','Include it only when it helps explain the event or is required by the incident process.'];
    if(t.includes('before')||t.includes('earlier'))return['BACKGROUND CAN BECOME CLUTTER','A true detail from earlier in the shift is not automatically useful to this event.','Keep background only when it changes how the reader understands what happened.'];
    return['TRUE, BUT DOES IT HELP?','Documentation is not a transcript of the entire shift. Extra facts can bury the important facts.','Keep details that explain the event, intervention, response, outcome, or necessary follow-up.'];
  }

  function noteLesson(kind){return{observed:['ANCHOR THE EVENT','A specific time, place, and observable action lets someone who was not there picture what actually happened.'],quote:['USE THE PERSON’S WORDS','An exact quote can preserve meaning that labels like “upset,” “aggressive,” or “suicidal” may distort.'],staff:['SHOW THE INTERVENTION','“Supported,” “redirected,” or “de-escalated” are incomplete unless the note says what staff actually did.'],response:['INTERVENTION → RESPONSE','The note should show what happened after staff acted. That is how the next reader knows whether support was accepted, declined, or changed anything.'],outcome:['CLOSE THE LOOP','Do not end the note at the peak of the incident. Include what changed, continued, was reported, or still needs follow-up.']}[kind]||['USEFUL DETAIL','This detail helps reconstruct the event.']}

  function renderCases(){
    const list=$('#caseList');
    list.innerHTML=cases.map((c,i)=>`<button class="case-btn ${i===current&&!activeChallenge?'active':''}" data-case="${i}"><span class="num">${String(i+1).padStart(2,'0')}</span><b>${c.title}</b></button>`).join('')+`<button class="case-btn generator-btn ${activeChallenge?'active':''}" id="caseGenerator"><span class="num">🎯</span><b>Challenge Me</b></button>`;
    list.querySelectorAll('[data-case]').forEach(b=>b.addEventListener('click',()=>{activeChallenge=null;current=Number(b.dataset.case);resetCase();renderCase()}));
    $('#caseGenerator').addEventListener('click',()=>{$('#generatorPanel').hidden=false});
  }

  function renderScene(){
    const c=cases[current],moment=c.timeline[sceneIndex],btn=$('#nextMoment');
    $('#currentMoment').innerHTML=`<div class="moment-time">${moment[0]}</div><div class="moment-text">${moment[1]}</div>`;
    $('#sceneProgress').textContent=`Moment ${sceneIndex+1} of ${c.timeline.length}`;
    btn.hidden=false;btn.disabled=false;
    if(sceneIndex<c.timeline.length-1){btn.textContent='WHAT HAPPENED NEXT? →';btn.classList.remove('done')}else{btn.textContent='START DOCUMENTING →';btn.classList.add('done')}
  }

  function nextScene(){
    const c=cases[current];
    if(sceneIndex<c.timeline.length-1){sceneIndex++;renderScene();return}
    sceneComplete=true;
    $('#workspace').hidden=false;
    $('#nextMoment').hidden=true;
    renderEvidence();renderSlots();updateCounts();
    $('#workspace').scrollIntoView({behavior:'smooth',block:'start'});
  }

  function renderEvidence(){
    const tray=$('#evidenceTray');
    tray.innerHTML=shuffle(cases[current].items.map((it,i)=>({it,i}))).map(({it,i})=>`<article class="evidence-card" draggable="true" data-card="${i}" tabindex="0"><p>${it[0]}</p><small>Where does this belong?</small><div class="tap-actions"><button type="button" data-action="observed">+ happened</button><button type="button" data-action="quote">+ words</button><button type="button" data-action="staff">+ staff</button><button type="button" data-action="response">+ response</button><button type="button" data-action="outcome">+ follow-through</button><button type="button" data-action="trash">🗑 not documentation</button><button type="button" data-action="omit">📎 leave out</button></div></article>`).join('');
    tray.querySelectorAll('.evidence-card').forEach(card=>{
      const id=Number(card.dataset.card);
      card.addEventListener('dragstart',e=>{card.classList.add('dragging');e.dataTransfer.setData('text/plain',String(id));e.dataTransfer.effectAllowed='move'});
      card.addEventListener('dragend',()=>card.classList.remove('dragging'));
      card.addEventListener('click',e=>{if(!e.target.closest('button'))card.classList.toggle('expanded')});
      card.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();card.classList.toggle('expanded')}});
      card.querySelectorAll('.tap-actions button').forEach(b=>b.addEventListener('click',e=>{e.stopPropagation();place(id,b.dataset.action);card.classList.remove('expanded')}));
    });paintCards();
  }

  function setupDrops(){document.querySelectorAll('[data-drop]').forEach(zone=>{zone.addEventListener('dragover',e=>{e.preventDefault();zone.classList.add('dragover')});zone.addEventListener('dragleave',()=>zone.classList.remove('dragover'));zone.addEventListener('drop',e=>{e.preventDefault();zone.classList.remove('dragover');const id=Number(e.dataTransfer.getData('text/plain'));if(Number.isInteger(id))place(id,zone.dataset.drop)})})}

  function place(id,target){
    placements[id]=target;$('#draftOutput').hidden=true;
    const item=cases[current].items[id],expected=item[2];
    if(target==='trash'){const [tag,why]=trashLesson(item[0]);$('#caseFeedback').innerHTML=expected==='trash'?`<b>🗑️ ${tag}</b><br>${why}`:`<b>🧐 HOLD UP.</b><br>This may be a useful fact. You can keep it here for now, but the reviewer will ask you to defend that choice.`}
    else if(target==='omit'){const [tag,why]=omitLesson(item[0]);$('#caseFeedback').innerHTML=expected==='omit'?`<b>📎 ${tag}</b><br>${why}`:`<b>🧐 DOES THE NOTE STILL MAKE SENSE?</b><br>You left out a detail that may help reconstruct the event.`}
    else{const [tag,why]=noteLesson(target);$('#caseFeedback').innerHTML=`<b>✍️ ${tag}</b><br>${why}`}
    renderSlots();paintCards();updateCounts();
  }

  function renderSlots(){Object.entries(slotIds).forEach(([kind,id])=>{const el=$('#'+id),vals=Object.entries(placements).filter(([,p])=>p===kind).map(([i])=>cases[current].items[Number(i)][0]),wrap=el.closest('.note-slot');if(vals.length){el.innerHTML=vals.map(v=>`<div class="slot-piece">${v}</div>`).join('');wrap.classList.add('filled')}else{el.textContent=prompts[kind];wrap.classList.remove('filled')}})}
  function paintCards(){document.querySelectorAll('.evidence-card').forEach(card=>{card.classList.remove('used','trashed','omitted');const p=placements[Number(card.dataset.card)];if(p&&p!=='trash'&&p!=='omit')card.classList.add('used');if(p==='trash')card.classList.add('trashed');if(p==='omit')card.classList.add('omitted')})}
  function updateCounts(){const vals=Object.values(placements);$('#trashCount').textContent=vals.filter(x=>x==='trash').length;$('#omitCount').textContent=vals.filter(x=>x==='omit').length}

  function makeIssue(it,i,actual){
    const expected=it[2];
    if(expected==='note'){
      if(!actual){const [,why]=noteLesson(it[1]);return{tag:'MISSING PIECE',line:it[0],why,tryInstead:`Add this under ${labels[it[1]]}.`,fix:it[1],i}}
      if(actual==='trash'||actual==='omit'){const [,why]=noteLesson(it[1]);return{tag:'YOU DROPPED A USEFUL DETAIL',line:it[0],why,tryInstead:`Move it to ${labels[it[1]]}.`,fix:it[1],i}}
      if(actual!==it[1]){const [,why]=noteLesson(it[1]);return{tag:'RIGHT DETAIL · WRONG HOME',line:it[0],why,tryInstead:`Move this from ${labels[actual]} to ${labels[it[1]]}.`,fix:it[1],i}}
    }
    if(expected==='trash'&&actual&&actual!=='trash'){const [tag,why,alt]=trashLesson(it[0]);return{tag,line:it[0],why,tryInstead:alt,fix:'trash',i}}
    if(expected==='omit'&&actual&&actual!=='omit'){const [tag,why,alt]=omitLesson(it[0]);return{tag,line:it[0],why,tryInstead:alt,fix:'omit',i}}
    return null;
  }

  function challengePriority(issue){
    if(!activeChallenge)return 1;
    const t=(issue.tag+' '+issue.why).toLowerCase(),c=activeChallenge.toLowerCase();
    if(c.includes('timestamp')&&(/time|when|anchor/.test(t)))return 0;
    if(c.includes('staff action')&&(/staff|intervention/.test(t)))return 0;
    if(c.includes('judgment')&&(/label|motive|judgment|loaded|mind-reading|character/.test(t)))return 0;
    if(c.includes('person response')&&(/response/.test(t)))return 0;
    if(c.includes('ends too soon')&&(/follow-through|close the loop|outcome/.test(t)))return 0;
    if(c.includes('irrelevant')&&(/relevant|clutter|background/.test(t)))return 0;
    if(c.includes('safety')&&(/safe|suicid|risk/.test(t)))return 0;
    return 1;
  }

  function review(){
    const c=cases[current],issues=[];
    c.items.forEach((it,i)=>{const issue=makeIssue(it,i,placements[i]);if(issue)issues.push(issue)});
    issues.sort((a,b)=>challengePriority(a)-challengePriority(b));
    const order=['observed','quote','staff','response','outcome'];
    const text=order.flatMap(kind=>Object.entries(placements).filter(([,p])=>p===kind).map(([i])=>c.items[Number(i)][0])).join(' ');
    $('#draftText').textContent=text||'No documentation has been built yet.';$('#draftOutput').hidden=false;
    if(!text)$('#reviewText').innerHTML='<b>🔎 REVIEWER WOULD QUESTION:</b><div class="coach-empty">There is nothing to review yet. Build enough of the record that another person could reconstruct the moment.</div>';
    else if(!issues.length)$('#reviewText').innerHTML='<b>✅ REVIEWER CHECK:</b><div class="coach-success"><strong>THIS ONE HOLDS UP.</strong><span>Observable event ✓</span><span>Staff action ✓</span><span>Person response ✓</span><span>Follow-through ✓</span><small>You documented the moment without turning assumptions into facts.</small></div>';
    else $('#reviewText').innerHTML='<b>🔎 REVIEWER WOULD QUESTION:</b>'+(activeChallenge?`<p class="review-intro">🎯 Challenge focus: <strong>${escape(activeChallenge)}</strong></p>`:'<p class="review-intro">Not just <em>what</em> is off — here is <em>why</em> it matters.</p>')+issues.slice(0,6).map(issue=>`<article class="coach-card"><span class="coach-tag">${escape(issue.tag)}</span><q>${escape(issue.line)}</q><div class="coach-why"><strong>WHY?</strong>${escape(issue.why)}</div><div class="coach-try"><strong>TRY THIS:</strong>${escape(issue.tryInstead)}</div><button type="button" class="coach-fix" data-fix="${escape(issue.fix)}" data-i="${issue.i}">FIX THIS ↗</button></article>`).join('')+(issues.length>6?`<p class="more-issues">+ ${issues.length-6} more item${issues.length-6===1?'':'s'} to revisit.</p>`:'');
    $('#reviewText').querySelectorAll('.coach-fix').forEach(btn=>btn.addEventListener('click',()=>{place(Number(btn.dataset.i),btn.dataset.fix);review()}));
    $('#caseFeedback').innerHTML=issues.length?`<b>🔎 CASE COACH:</b><br>${issues.length} thing${issues.length===1?'':'s'} worth revisiting. Use the red-pen cards below to repair the note.`:'<b>✅ CASE COACH:</b><br>Your record tells the story without making the reader guess.';
    $('#draftOutput').scrollIntoView({behavior:'smooth',block:'nearest'});
  }

  function resetRecord(){placements={};$('#draftOutput').hidden=true;$('#reviewText').innerHTML='';$('#draftText').textContent='';$('#caseFeedback').innerHTML='<b>YOUR TURN.</b><br>Build the record, then send it to review.';renderSlots();updateCounts();renderEvidence()}
  function resetCase(){sceneIndex=0;sceneComplete=false;placements={};$('#workspace').hidden=true;$('#draftOutput').hidden=true;$('#reviewText').innerHTML='';$('#draftText').textContent='';$('#nextMoment').hidden=false;$('#nextMoment').disabled=false}
  function renderCase(){const c=cases[current];$('#caseBadge').textContent=activeChallenge?`CHALLENGE · ${activeChallenge.toUpperCase()}`:`CASE FILE ${String(current+1).padStart(2,'0')}`;$('#caseTitle').textContent=c.title;$('#caseSetup').textContent=c.setup;renderCases();renderScene()}

  function init(){
    renderCase();setupDrops();
    $('#nextMoment').addEventListener('click',nextScene);
    $('#restartScene').addEventListener('click',()=>{resetCase();renderScene()});
    $('#resetCase').addEventListener('click',resetRecord);
    $('#reviewCase').addEventListener('click',review);
    const panel=$('#generatorPanel'),close=()=>panel.hidden=true;
    $('#closeGenerator').addEventListener('click',close);panel.addEventListener('click',e=>{if(e.target===panel)close()});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!panel.hidden)close()});
    $('#topicBubbles').innerHTML=challenges.map(c=>`<button type="button">${c.label}</button>`).join('');
    $('#topicBubbles').querySelectorAll('button').forEach((b,i)=>b.addEventListener('click',()=>{const ch=challenges[i];activeChallenge=ch.label;current=ch.cases[Math.floor(Math.random()*ch.cases.length)];resetCase();close();renderCase()}));
  }
  init();
})();