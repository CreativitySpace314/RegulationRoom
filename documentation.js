(()=>{
  const $=s=>document.querySelector(s);
  const cases=[
    {
      title:'The Missing 10 Minutes',
      setup:'7:10 PM · Living room. Ava becomes verbally escalated toward a housemate after they enter the shared space.',
      timeline:[
        ['7:10 PM','Ava raises her voice toward a housemate in the living room.'],
        ['7:11 PM','Ava states, “Get away from me. I don’t want you near me.”'],
        ['7:12 PM','Staff uses a calm tone and supports separation without arguing about what happened.'],
        ['7:15 PM','Ava moves to the hallway and continues pacing.'],
        ['7:19 PM','Ava stops yelling and asks for space.'],
        ['7:22 PM','Ava returns to the living room after the other person has moved to another area.']
      ],
      items:[
        ['At 7:10 PM, Ava raised her voice toward a housemate in the living room.','observed','note'],
        ['“Get away from me. I don’t want you near me.”','quote','note'],
        ['Staff maintained a calm tone and supported separation of the two individuals.','staff','note'],
        ['Ava moved to the hallway, paced for several minutes, and then asked for space.','response','note'],
        ['By 7:22 PM, Ava had stopped yelling and returned to the living room without further escalation.','outcome','note'],
        ['The television was on during the interaction.','observed','omit'],
        ['Ava had been sitting on the couch before the housemate entered.','observed','omit'],
        ['Ava was being disrespectful.','bad','trash'],
        ['Ava wanted to start drama with the housemate.','bad','trash'],
        ['Staff handled the situation appropriately.','bad','trash']
      ]
    },
    {
      title:'What Did Staff Actually Do?',
      setup:'9:15 PM · Hallway. Jalen shoves staff with open hands while saying, “Get out of my way.” The draft note later says only, “Staff redirected Jalen.”',
      timeline:[
        ['9:15 PM','Jalen shoves staff with open hands in the hallway.'],
        ['9:15 PM','Jalen states, “Get out of my way.”'],
        ['9:16 PM','Staff disengages immediately and increases distance without physical response.'],
        ['9:18 PM','Jalen walks to his room and closes the door.'],
        ['9:26 PM','Staff checks in from the doorway after Jalen’s voice and pacing have decreased.'],
        ['9:30 PM','Jalen speaks with staff about what could help earlier next time.']
      ],
      items:[
        ['At 9:15 PM, Jalen shoved staff with open hands in the hallway.','observed','note'],
        ['“Get out of my way.”','quote','note'],
        ['Staff disengaged immediately and increased distance without physical response.','staff','note'],
        ['Jalen walked to his room, closed the door, and remained there for several minutes.','response','note'],
        ['At approximately 9:30 PM, Jalen re-engaged in conversation with staff about earlier coping options.','outcome','note'],
        ['Staff had been completing shift paperwork before the incident.','observed','omit'],
        ['The hallway light was on.','observed','omit'],
        ['Jalen attacked staff.','bad','trash'],
        ['Jalen was out of control.','bad','trash'],
        ['Staff successfully de-escalated Jalen.','bad','trash']
      ]
    },
    {
      title:'The Fall Note',
      setup:'7:40 PM · Hallway. Sienna slips and falls to the floor while walking toward the kitchen.',
      timeline:[
        ['7:40 PM','Sienna slips in the hallway and falls to the floor.'],
        ['7:41 PM','Sienna states, “I’m okay. I just lost my balance.”'],
        ['7:42 PM','Staff visually checks for injury and asks about pain.'],
        ['7:44 PM','Sienna denies pain and no injury is observed.'],
        ['7:47 PM','Sienna stands and walks to the kitchen without assistance.'],
        ['8:00 PM','Sienna continues normal activity with no new complaint.']
      ],
      items:[
        ['At 7:40 PM, Sienna slipped in the hallway and fell to the floor.','observed','note'],
        ['“I’m okay. I just lost my balance.”','quote','note'],
        ['Staff visually assessed for injury and asked Sienna about pain.','staff','note'],
        ['Sienna denied pain, and no injury was reported or observed.','response','note'],
        ['Sienna stood, walked to the kitchen without assistance, and had no new complaint by 8:00 PM.','outcome','note'],
        ['Sienna had socks on at the time.','observed','omit'],
        ['Dinner was being prepared in the kitchen.','observed','omit'],
        ['Sienna was clumsy.','bad','trash'],
        ['Sienna fell because she was not paying attention.','bad','trash'],
        ['No big deal.','bad','trash']
      ]
    },
    {
      title:'Property Damage',
      setup:'4:19 PM · Bedroom. Rowan throws their glasses onto the floor during emotional escalation, and the glasses break.',
      timeline:[
        ['4:19 PM','Rowan raises their voice while pacing in the bedroom.'],
        ['4:19 PM','Rowan throws their glasses onto the floor and states, “I don’t care anymore.”'],
        ['4:20 PM','Staff provides space and does not continue the argument.'],
        ['4:28 PM','Rowan’s voice lowers and pacing slows.'],
        ['4:31 PM','Staff re-engages with Rowan about what happened.'],
        ['4:35 PM','Rowan states, “Next time I’ll put them down instead.”']
      ],
      items:[
        ['At 4:19 PM, Rowan threw their glasses onto the bedroom floor, causing them to break.','observed','note'],
        ['“I don’t care anymore.”','quote','note'],
        ['Staff provided space and re-engaged once Rowan’s escalation had decreased.','staff','note'],
        ['Rowan’s voice lowered, pacing slowed, and they later spoke with staff about the incident.','response','note'],
        ['Rowan stated, “Next time I’ll put them down instead,” identifying a possible prevention strategy.','outcome','note'],
        ['Rowan had worn the glasses all day.','observed','omit'],
        ['A laundry basket was beside the bed.','observed','omit'],
        ['Rowan does not respect their belongings.','bad','trash'],
        ['Rowan broke the glasses for attention.','bad','trash'],
        ['Rowan learned their lesson.','bad','trash']
      ]
    },
    {
      title:'Whose Item Is It?',
      setup:'6:10 PM · Living room. Malik takes a personal item belonging to a housemate and brings it to his bedroom.',
      timeline:[
        ['6:10 PM','Malik picks up a housemate’s personal item from the living room.'],
        ['6:11 PM','Malik brings the item to his bedroom.'],
        ['6:13 PM','Staff checks in and asks Malik about the item.'],
        ['6:14 PM','Malik states, “I just wanted it for a bit.”'],
        ['6:16 PM','Staff discusses personal boundaries and asks what Malik wants to do next.'],
        ['6:18 PM','Malik returns the item to the housemate without further issue.']
      ],
      items:[
        ['At approximately 6:10 PM, Malik took a personal item belonging to a housemate from the living room and brought it to his bedroom.','observed','note'],
        ['“I just wanted it for a bit.”','quote','note'],
        ['Staff remained calm and discussed expectations around personal belongings and boundaries.','staff','note'],
        ['Malik listened to staff and returned the item without further escalation.','response','note'],
        ['By 6:18 PM, the item had been returned and no further conflict occurred.','outcome','note'],
        ['The item had been left on a chair.','observed','omit'],
        ['Malik had been in the living room earlier that afternoon.','observed','omit'],
        ['Malik stole the item.','bad','trash'],
        ['Malik knew better.','bad','trash'],
        ['Malik was trying to upset the housemate.','bad','trash']
      ]
    },
    {
      title:'The Medical Detail That Matters',
      setup:'4:50 PM · Living room. Priya experiences a brief seizure while seated.',
      timeline:[
        ['4:50 PM','Priya has a seizure while seated in the living room.'],
        ['4:50 PM','The episode lasts approximately 30 seconds.'],
        ['4:51 PM','Staff clears the immediate area and monitors without physical intervention.'],
        ['4:53 PM','Priya is responsive and states, “I’m okay, just tired.”'],
        ['4:58 PM','Priya remains seated and continues responding to staff.'],
        ['5:00 PM','Required notification is completed according to the setting’s process.']
      ],
      items:[
        ['At approximately 4:50 PM, Priya experienced a seizure lasting about 30 seconds while seated in the living room.','observed','note'],
        ['“I’m okay, just tired.”','quote','note'],
        ['Staff ensured the surrounding area was safe and monitored Priya without physical intervention.','staff','note'],
        ['Priya was responsive after the episode and reported feeling tired.','response','note'],
        ['Required notification was completed, and Priya continued responding to staff afterward.','outcome','note'],
        ['Priya had been watching television beforehand.','observed','omit'],
        ['A blanket was on the couch.','observed','omit'],
        ['Priya had a bad seizure.','bad','trash'],
        ['Priya was fine after.','bad','trash'],
        ['Staff did everything correctly.','bad','trash']
      ]
    },
    {
      title:'The Safety Note',
      setup:'10:30 PM · Living room. Tessa scratches her forearm while visibly distressed and states, “I just want it to stop.”',
      timeline:[
        ['10:30 PM','Tessa scratches her forearm while sitting in the living room.'],
        ['10:30 PM','Tessa states, “I just want it to stop.”'],
        ['10:31 PM','Staff remains present and follows Tessa’s individualized safety process.'],
        ['10:34 PM','Staff completes the required safety questions.'],
        ['10:36 PM','Tessa states, “No, I’m not trying to kill myself.”'],
        ['10:45 PM','Tessa accepts support and identifies coping options she wants to try.']
      ],
      items:[
        ['At approximately 10:30 PM, Tessa scratched her forearm while expressing emotional distress.','observed','note'],
        ['“I just want it to stop.”','quote','note'],
        ['Staff remained present, followed Tessa’s individualized safety process, and completed the required safety questions.','staff','note'],
        ['Tessa answered the safety questions and stated, “No, I’m not trying to kill myself.”','response','note'],
        ['Tessa accepted support and identified coping options she wanted to use; required notification was completed.','outcome','note'],
        ['Tessa had been in the living room for most of the evening.','observed','omit'],
        ['Tessa was wearing a sweatshirt.','observed','omit'],
        ['Tessa was attention-seeking.','bad','trash'],
        ['Tessa was suicidal.','bad','trash'],
        ['Tessa was safe because she calmed down.','bad','trash']
      ]
    },
    {
      title:'Overnight Gaps',
      setup:'6:50 AM · Shift change. Incoming staff reads only: “Noah was up a lot overnight.”',
      timeline:[
        ['1:40 AM','Noah wakes and paces for about five minutes.'],
        ['1:44 AM','Staff completes a brief check-in and keeps the environment low-stimulation.'],
        ['1:47 AM','Noah declines additional support and returns to bed.'],
        ['4:15 AM','Noah wakes and paces again for about five minutes.'],
        ['4:22 AM','Noah returns to bed independently.'],
        ['6:50 AM','Noah is asleep at shift change; the waking pattern was more frequent than usual.']
      ],
      items:[
        ['Noah woke at 1:40 AM and 4:15 AM and paced for about five minutes each time.','observed','note'],
        ['“My mind won’t shut off, but I’m okay.”','quote','note'],
        ['Staff completed brief check-ins and reduced stimulation per Noah’s usual overnight plan.','staff','note'],
        ['Noah declined additional support both times and returned to bed independently.','response','note'],
        ['Noah was asleep at shift change; incoming staff was told the waking pattern was more frequent than usual.','outcome','note'],
        ['Noah used the bathroom at 3:05 AM.','observed','omit'],
        ['The hallway light was on.','observed','omit'],
        ['Noah was weird all night.','bad','trash'],
        ['Noah kept staff awake unnecessarily.','bad','trash'],
        ['Nothing important happened because Noah went back to bed.','bad','trash']
      ]
    }
  ];

  const labels={observed:'WHAT HAPPENED',quote:'PERSON’S WORDS',staff:'STAFF ACTION',response:'PERSON’S RESPONSE',outcome:'FOLLOW-THROUGH'};
  const slotIds={observed:'slotObserved',quote:'slotQuote',staff:'slotStaff',response:'slotResponse',outcome:'slotOutcome'};
  const prompts={observed:'Add an observable detail here.',quote:'Use an exact quote when it matters.',staff:'What did staff actually do?',response:'What happened after staff responded?',outcome:'What changed, continued, or needs handed off?'};
  let current=0;
  let placements={};

  const shuffle=a=>{
    const x=[...a];
    for(let i=x.length-1;i>0;i--){
      const j=Math.floor(Math.random()*(i+1));
      [x[i],x[j]]=[x[j],x[i]];
    }
    return x;
  };

  function renderCases(){
    const list=$('#caseList');
    list.innerHTML=cases.map((c,i)=>`<button class="case-btn ${i===current?'active':''}" data-case="${i}"><span class="num">${String(i+1).padStart(2,'0')}</span><b>${c.title}</b></button>`).join('')+`<button class="case-btn generator-btn" id="caseGenerator"><span class="num">🎲</span><b>Random Case</b></button>`;
    list.querySelectorAll('[data-case]').forEach(b=>b.addEventListener('click',()=>{
      current=Number(b.dataset.case);
      reset(false);
      renderCase();
    }));
    const generator=$('#caseGenerator');
    if(generator) generator.addEventListener('click',()=>{$('#generatorPanel').hidden=false;});
  }

  function renderTimeline(){
    const box=$('#timeline');
    box.innerHTML=cases[current].timeline.map(t=>`<article class="time-card"><b>${t[0]}</b><p>${t[1]}</p></article>`).join('');
  }

  function renderEvidence(){
    const tray=$('#evidenceTray');
    const items=shuffle(cases[current].items.map((it,i)=>({it,i})));
    tray.innerHTML=items.map(({it,i})=>`<article class="evidence-card" draggable="true" data-card="${i}" tabindex="0"><p>${it[0]}</p><small>Choose where this belongs.</small><div class="tap-actions"><button type="button" data-action="observed">+ happened</button><button type="button" data-action="quote">+ words</button><button type="button" data-action="staff">+ staff</button><button type="button" data-action="response">+ response</button><button type="button" data-action="outcome">+ follow-through</button><button type="button" data-action="trash">🗑 trash</button><button type="button" data-action="omit">📎 leave out</button></div></article>`).join('');
    tray.querySelectorAll('.evidence-card').forEach(card=>{
      const id=Number(card.dataset.card);
      card.addEventListener('dragstart',e=>{
        card.classList.add('dragging');
        e.dataTransfer.setData('text/plain',String(id));
        e.dataTransfer.effectAllowed='move';
      });
      card.addEventListener('dragend',()=>card.classList.remove('dragging'));
      card.addEventListener('click',e=>{
        if(e.target.closest('button')) return;
        card.classList.toggle('expanded');
      });
      card.addEventListener('keydown',e=>{
        if(e.key==='Enter'||e.key===' '){e.preventDefault();card.classList.toggle('expanded');}
      });
      card.querySelectorAll('.tap-actions button').forEach(b=>b.addEventListener('click',e=>{
        e.stopPropagation();
        place(id,b.dataset.action);
        card.classList.remove('expanded');
      }));
    });
    paintCards();
  }

  function setupDrops(){
    document.querySelectorAll('[data-drop]').forEach(zone=>{
      zone.addEventListener('dragover',e=>{e.preventDefault();zone.classList.add('dragover');});
      zone.addEventListener('dragleave',()=>zone.classList.remove('dragover'));
      zone.addEventListener('drop',e=>{
        e.preventDefault();
        zone.classList.remove('dragover');
        const id=Number(e.dataTransfer.getData('text/plain'));
        if(Number.isInteger(id)) place(id,zone.dataset.drop);
      });
    });
  }

  function place(id,target){
    placements[id]=target;
    const expected=cases[current].items[id][2];
    if(target==='trash'){
      $('#caseFeedback').textContent=expected==='trash'?'🗑️ Sent to NOT DOCUMENTATION. The review will confirm whether that choice holds up.':'🧐 You trashed something that may be factual or useful. The review will challenge that choice.';
    }else if(target==='omit'){
      $('#caseFeedback').textContent=expected==='omit'?'📎 Left out. True does not always mean relevant.':'🧐 You left something out that may matter. The review will check whether the note still makes sense.';
    }else{
      $('#caseFeedback').textContent=`✍️ Added to ${labels[target]}. The review will check both the wording and where you placed it.`;
    }
    renderSlots();
    paintCards();
    updateCounts();
  }

  function renderSlots(){
    Object.entries(slotIds).forEach(([kind,id])=>{
      const el=$('#'+id);
      const vals=Object.entries(placements)
        .filter(([,p])=>p===kind)
        .map(([i])=>cases[current].items[Number(i)][0]);
      const wrap=el.closest('.note-slot');
      if(vals.length){
        el.innerHTML=vals.map(v=>`<div class="slot-piece">${v}</div>`).join('');
        wrap.classList.add('filled');
      }else{
        el.textContent=prompts[kind];
        wrap.classList.remove('filled');
      }
    });
  }

  function paintCards(){
    document.querySelectorAll('.evidence-card').forEach(card=>{
      card.classList.remove('used','trashed','omitted');
      const p=placements[Number(card.dataset.card)];
      if(p&&p!=='trash'&&p!=='omit') card.classList.add('used');
      if(p==='trash') card.classList.add('trashed');
      if(p==='omit') card.classList.add('omitted');
    });
  }

  function updateCounts(){
    const vals=Object.values(placements);
    $('#trashCount').textContent=vals.filter(x=>x==='trash').length;
    $('#omitCount').textContent=vals.filter(x=>x==='omit').length;
  }

  function reset(clearUI=true){
    placements={};
    $('#draftOutput').hidden=true;
    $('#caseFeedback').textContent='Open the case. Read the timeline. Then start sorting.';
    if(clearUI){
      renderSlots();
      updateCounts();
      paintCards();
    }
  }

  function review(){
    const c=cases[current];
    const problems=[];
    c.items.forEach((it,i)=>{
      const expected=it[2];
      const actual=placements[i];
      if(expected==='note'){
        if(!actual) problems.push(`Missing a useful detail: “${it[0]}”`);
        else if(actual==='trash'||actual==='omit') problems.push(`You ${actual==='trash'?'trashed':'left out'} a detail that likely belongs in the note.`);
        else if(actual!==it[1]) problems.push(`“${it[0]}” may belong under ${labels[it[1]]}, not ${labels[actual]}.`);
      }
      if(expected==='trash'&&actual&&actual!=='trash') problems.push(`“${it[0]}” is judgment, motive, or an unsupported conclusion.`);
      if(expected==='omit'&&actual&&actual!=='omit') problems.push(`“${it[0]}” is true, but probably does not help explain this moment.`);
    });

    const order=['observed','quote','staff','response','outcome'];
    const text=order.flatMap(kind=>Object.entries(placements)
      .filter(([,p])=>p===kind)
      .map(([i])=>c.items[Number(i)][0])).join(' ');

    $('#draftText').textContent=text||'No documentation has been built yet.';
    $('#draftOutput').hidden=false;
    if(!text){
      $('#reviewText').textContent='🕳️ There is nothing to review yet. Add the details that actually tell the story.';
    }else if(!problems.length){
      $('#reviewText').innerHTML='<b>✅ STRONG CASE RECORD.</b><br>You kept the observable facts, staff action, person response, and follow-through while leaving assumptions and irrelevant details out.';
    }else{
      $('#reviewText').innerHTML='<b>🔎 REVIEWER WOULD QUESTION:</b><br>'+problems.slice(0,5).map(x=>'• '+x).join('<br>')+(problems.length>5?'<br>• …and a few more.':'');
    }
    $('#caseFeedback').textContent=`🔎 Review found ${problems.length} thing${problems.length===1?'':'s'} worth another look.`;
    $('#draftOutput').scrollIntoView({behavior:'smooth',block:'nearest'});
  }

  function renderCase(){
    const c=cases[current];
    $('#caseBadge').textContent=`CASE FILE ${String(current+1).padStart(2,'0')}`;
    $('#caseTitle').textContent=c.title;
    $('#caseSetup').textContent=c.setup;
    renderCases();
    renderTimeline();
    renderEvidence();
    renderSlots();
    updateCounts();
  }

  function init(){
    try{
      renderCase();
      setupDrops();
      $('#resetCase').addEventListener('click',()=>{reset(false);renderEvidence();renderSlots();updateCounts();});
      $('#reviewCase').addEventListener('click',review);

      const panel=$('#generatorPanel');
      const close=()=>{panel.hidden=true;};
      $('#closeGenerator').addEventListener('click',close);
      panel.addEventListener('click',e=>{if(e.target===panel) close();});
      document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!panel.hidden) close();});

      const topics=['verbal escalation','physical aggression','fall / injury','property damage','unusual occurrence','medical event','safety note','overnight pattern','random'];
      $('#topicBubbles').innerHTML=topics.map(t=>`<button type="button">${t}</button>`).join('');
      $('#topicBubbles').querySelectorAll('button').forEach((b,i)=>b.addEventListener('click',()=>{
        const map=[0,1,2,3,4,5,6,7,Math.floor(Math.random()*cases.length)];
        current=map[i];
        reset(false);
        close();
        renderCase();
      }));
    }catch(err){
      console.error('Documentation room failed to initialize:',err);
      const tray=$('#evidenceTray');
      if(tray) tray.innerHTML='<div class="render-error"><b>⚠️ The case did not load correctly.</b><br>Please refresh this page. If this message remains, the room needs a code fix.</div>';
      const feedback=$('#caseFeedback');
      if(feedback) feedback.textContent='The interactive case did not finish loading.';
    }
  }

  init();
})();