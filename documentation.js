(()=>{
  const $=s=>document.querySelector(s);
  const cases=[
    {
      title:'The Missing 12 Minutes',
      setup:'6:42 PM · Kitchen. Keira has just ended a difficult phone call with a family member. Staff checks in to see whether she wants company or space.',
      timeline:[
        ['6:42 PM','Keira sits at the kitchen table after the call.'],
        ['6:44 PM','Staff checks in and asks whether Keira wants company or space.'],
        ['6:45 PM','Keira pushes the chair back and says, “Please stop asking me questions. I need a minute.”'],
        ['6:46 PM','Staff lowers their voice, acknowledges the request for space, and moves to another area.'],
        ['6:51 PM','Keira says from the hallway, “I’m not mad at you. I’m just overwhelmed.”'],
        ['6:58 PM','Keira returns to the kitchen and asks staff to sit with her.']
      ],
      items:[
        ['Keira pushed the chair back and walked toward the hallway.','observed','note'],
        ['“Please stop asking me questions. I need a minute.”','quote','note'],
        ['Staff lowered their voice, acknowledged Keira’s request for space, and moved to another area.','staff','note'],
        ['Keira remained in the hallway and later stated, “I’m not mad at you. I’m just overwhelmed.”','response','note'],
        ['At 6:58 PM, Keira returned to the kitchen and asked staff to sit with her.','outcome','note'],
        ['Keira had been sitting quietly at the kitchen table before staff checked in.','observed','omit'],
        ['A family member had called Keira earlier that evening.','observed','omit'],
        ['Keira was disrespectful to staff.','bad','trash'],
        ['Keira wanted attention.','bad','trash'],
        ['Staff handled it appropriately.','bad','trash'],
        ['Keira calmed down.','bad','trash']
      ]
    },
    {
      title:'The Quote That Changes It',
      setup:'5:28 PM · Entryway. Marisol ends a tense phone call, puts on her shoes, and stands near the front door.',
      timeline:[
        ['5:28 PM','Marisol ends the phone call and walks toward the entryway.'],
        ['5:29 PM','She puts on her shoes and picks up her keys.'],
        ['5:30 PM','She states, “I need some air. I can’t think in here right now.”'],
        ['5:31 PM','Staff asks whether she wants privacy on the porch or company nearby.'],
        ['5:33 PM','Marisol chooses the porch and asks staff to stay inside.'],
        ['5:46 PM','Marisol comes back inside and asks for water.']
      ],
      items:[
        ['Marisol put on her shoes, picked up her keys, and stood near the front door.','observed','note'],
        ['“I need some air. I can’t think in here right now.”','quote','note'],
        ['Staff asked whether Marisol wanted privacy on the porch or company nearby.','staff','note'],
        ['Marisol chose to sit on the porch and asked staff to remain inside.','response','note'],
        ['At 5:46 PM, Marisol returned inside and asked for water.','outcome','note'],
        ['Marisol had been on the phone for 17 minutes.','observed','omit'],
        ['The weather was warm and clear.','observed','omit'],
        ['Marisol was trying to elope.','bad','trash'],
        ['Marisol was being dramatic after the phone call.','bad','trash'],
        ['Staff prevented Marisol from leaving.','bad','trash']
      ]
    },
    {
      title:'Where Did Staff Go?',
      setup:'7:10 PM · Living room. Nia asks about tomorrow’s appointment several times while checking the clock.',
      timeline:[
        ['7:10 PM','Nia asks whether the appointment is still scheduled.'],
        ['7:18 PM','Nia asks again and checks the wall clock.'],
        ['7:24 PM','Staff shows Nia the written appointment time beside her phone.'],
        ['7:28 PM','Nia reads the written time and sits on the couch.'],
        ['7:35 PM','Nia asks one more question, then refers back to the written time.'],
        ['8:05 PM','The written schedule remains beside Nia’s phone.']
      ],
      items:[
        ['Nia asked about the appointment three times between 7:10 PM and 7:24 PM while repeatedly checking the clock.','observed','note'],
        ['“Did anyone call and change it? I don’t want to miss it.”','quote','note'],
        ['Staff showed Nia the written appointment time and placed it beside her phone.','staff','note'],
        ['Nia read the written time, sat on the couch, and referred back to it when she asked again.','response','note'],
        ['The written appointment time remained beside Nia’s phone for later reference.','outcome','note'],
        ['Nia had asked about the appointment earlier in the afternoon.','observed','omit'],
        ['The television was on during the interaction.','observed','omit'],
        ['Staff provided emotional support.','bad','trash'],
        ['Nia was obsessive about the appointment.','bad','trash'],
        ['Nia finally understood.','bad','trash']
      ]
    },
    {
      title:'The Timeline Tangle',
      setup:'8:16 PM · Kitchen. Mateo and a housemate are arguing about a shared item. Several details were documented out of order.',
      timeline:[
        ['8:16 PM','Mateo and a housemate are speaking loudly near the kitchen table.'],
        ['8:17 PM','Mateo throws a plastic cup toward the floor and says, “I’m done talking about this.”'],
        ['8:18 PM','Staff asks both people to use separate spaces for now.'],
        ['8:19 PM','Mateo walks to his bedroom and closes the door.'],
        ['8:37 PM','Mateo returns to the kitchen and speaks with staff.'],
        ['8:42 PM','No further argument occurs.']
      ],
      items:[
        ['At 8:17 PM, Mateo threw a plastic cup toward the floor during a verbal disagreement.','observed','note'],
        ['“I’m done talking about this.”','quote','note'],
        ['Staff asked both people to use separate spaces and paused the conversation.','staff','note'],
        ['Mateo walked to his bedroom and closed the door.','response','note'],
        ['At 8:37 PM, Mateo returned to the kitchen and spoke with staff without resuming the argument.','outcome','note'],
        ['The cup was blue.','observed','omit'],
        ['The other person had used the item earlier that day.','observed','omit'],
        ['Mateo caused the whole problem.','bad','trash'],
        ['The housemate provoked Mateo.','bad','trash'],
        ['Staff fixed the situation.','bad','trash']
      ]
    },
    {
      title:'Too Much Information',
      setup:'6:32 PM · Bedroom. Elena drops her glasses forcefully onto the floor during an upsetting conversation, and one lens breaks.',
      timeline:[
        ['6:30 PM','Elena is talking with staff in her bedroom.'],
        ['6:32 PM','Elena drops her glasses forcefully onto the floor. One lens breaks.'],
        ['6:33 PM','Staff asks Elena to stay clear of the broken pieces while the area is made safe.'],
        ['6:35 PM','Elena remains away from the broken glass.'],
        ['6:51 PM','Elena tells staff she can set her glasses on the dresser when she feels overwhelmed.'],
        ['7:00 PM','Incoming staff is told the glasses are unusable and replacement follow-up is needed.']
      ],
      items:[
        ['Elena dropped her glasses forcefully onto the bedroom floor and one lens broke.','observed','note'],
        ['“Just leave them there. I don’t want to talk right now.”','quote','note'],
        ['Staff asked Elena to stay clear of the broken pieces and removed them once the area was safe.','staff','note'],
        ['Elena remained away from the broken pieces while staff cleared the area.','response','note'],
        ['Elena later identified placing her glasses on the dresser when overwhelmed; incoming staff was told replacement follow-up was needed.','outcome','note'],
        ['Elena ate pasta at 5:45 PM.','observed','omit'],
        ['A comedy show was playing in the living room.','observed','omit'],
        ['Elena had talked about laundry earlier.','observed','omit'],
        ['Elena does not respect her belongings.','bad','trash'],
        ['Elena broke the glasses for attention.','bad','trash']
      ]
    },
    {
      title:'The Note That Ends Too Soon',
      setup:'9:10 AM · Bedroom. Theo says he does not want to shower before breakfast and asks staff to check back later.',
      timeline:[
        ['9:10 AM','Staff asks Theo whether he wants support with his morning routine.'],
        ['9:11 AM','Theo says, “Not now. Ask me after breakfast.”'],
        ['9:12 AM','Staff acknowledges the request and leaves the room.'],
        ['9:35 AM','Theo gets up and eats breakfast.'],
        ['9:48 AM','Theo tells staff he is ready to revisit the shower.'],
        ['10:05 AM','Theo showers after one reminder.']
      ],
      items:[
        ['At 9:11 AM, Theo remained in bed and declined showering before breakfast.','observed','note'],
        ['“Not now. Ask me after breakfast.”','quote','note'],
        ['Staff acknowledged the request and told Theo they would check back after breakfast.','staff','note'],
        ['After breakfast, Theo told staff he was ready to revisit the shower.','response','note'],
        ['At 10:05 AM, Theo showered after one reminder.','outcome','note'],
        ['Theo ate cereal for breakfast.','observed','omit'],
        ['Theo stayed in bed until 9:30 AM.','observed','omit'],
        ['Theo was lazy.','bad','trash'],
        ['Theo was noncompliant with hygiene.','bad','trash'],
        ['Staff gave up when Theo refused.','bad','trash']
      ]
    },
    {
      title:'The Safety Handoff',
      setup:'9:22 PM · Living room. Bri is tearful after a phone call and asks staff to stay nearby.',
      timeline:[
        ['9:22 PM','Bri ends the call and remains seated near staff.'],
        ['9:23 PM','Bri states, “I don’t want to be alone right now.”'],
        ['9:24 PM','Staff remains present and follows Bri’s individualized safety process.'],
        ['9:29 PM','Bri answers the required safety questions and asks staff to keep sitting nearby.'],
        ['9:41 PM','Bri remains engaged with staff.'],
        ['10:00 PM','Incoming staff receives the exact statement, safety-check outcome, and current support approach.']
      ],
      items:[
        ['Bri was tearful after the phone call and remained seated near staff.','observed','note'],
        ['“I don’t want to be alone right now.”','quote','note'],
        ['Staff remained with Bri, completed the required safety check, and followed Bri’s individualized safety process.','staff','note'],
        ['Bri answered the safety questions and asked staff to continue sitting nearby.','response','note'],
        ['Incoming staff received Bri’s exact statement, safety-check outcome, and current support approach.','outcome','note'],
        ['Bri had spoken with the same person earlier that week.','observed','omit'],
        ['Bri drank water during the conversation.','observed','omit'],
        ['Bri was suicidal.','bad','trash'],
        ['Bri was safe because she calmed down.','bad','trash'],
        ['Bri was attention-seeking.','bad','trash']
      ]
    },
    {
      title:'Overnight Gaps',
      setup:'6:50 AM · Shift change. Incoming staff reads only: “Owen was up a lot overnight.”',
      timeline:[
        ['1:40 AM','Owen wakes and paces for about five minutes.'],
        ['1:44 AM','Staff completes a brief check-in and keeps the environment low-stimulation.'],
        ['1:47 AM','Owen declines additional support and returns to bed.'],
        ['4:15 AM','Owen wakes and paces again for about five minutes.'],
        ['4:22 AM','Owen returns to bed independently.'],
        ['6:50 AM','Owen is asleep at shift change. The waking pattern was more frequent than usual.']
      ],
      items:[
        ['Owen woke at 1:40 AM and 4:15 AM and paced for about five minutes each time.','observed','note'],
        ['“My mind won’t shut off, but I’m okay.”','quote','note'],
        ['Staff completed brief check-ins and reduced stimulation per Owen’s usual overnight plan.','staff','note'],
        ['Owen declined additional support both times and returned to bed independently.','response','note'],
        ['Owen was asleep at shift change; incoming staff was told the waking pattern was more frequent than usual.','outcome','note'],
        ['Owen used the bathroom at 3:05 AM.','observed','omit'],
        ['The hallway light was on.','observed','omit'],
        ['Owen was weird all night.','bad','trash'],
        ['Owen kept staff awake unnecessarily.','bad','trash'],
        ['Nothing important happened because Owen went back to bed.','bad','trash']
      ]
    }
  ];

  const labels={observed:'WHAT HAPPENED',quote:'PERSON’S WORDS',staff:'STAFF ACTION',response:'PERSON’S RESPONSE',outcome:'FOLLOW-THROUGH'};
  const slotIds={observed:'slotObserved',quote:'slotQuote',staff:'slotStaff',response:'slotResponse',outcome:'slotOutcome'};
  const prompts={observed:'Drop an observable detail here.',quote:'Use an exact quote when it matters.',staff:'What did staff actually do?',response:'What happened after staff responded?',outcome:'What changed, continued, or needs handed off?'};
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
    box.innerHTML=cases[current].timeline.map((t,i)=>`<article class="time-card ${i===2?'quote':''}"><b>${t[0]}</b><p>${t[1]}</p></article>`).join('');
  }

  function renderEvidence(){
    const tray=$('#evidenceTray');
    const items=shuffle(cases[current].items.map((it,i)=>({it,i})));
    tray.innerHTML=items.map(({it,i})=>`<article class="evidence-card" draggable="true" data-card="${i}" tabindex="0"><p>${it[0]}</p><small>Tap for options · drag on desktop</small><div class="tap-actions"><button type="button" data-action="observed">+ happened</button><button type="button" data-action="quote">+ words</button><button type="button" data-action="staff">+ staff</button><button type="button" data-action="response">+ response</button><button type="button" data-action="outcome">+ follow-through</button><button type="button" data-action="trash">🗑 trash</button><button type="button" data-action="omit">📎 leave out</button></div></article>`).join('');
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

      const topics=['timeline gaps','vague staff response','judgment words','too much detail','refusal follow-through','safety handoff','overnight pattern','random'];
      $('#topicBubbles').innerHTML=topics.map(t=>`<button type="button">${t}</button>`).join('');
      $('#topicBubbles').querySelectorAll('button').forEach((b,i)=>b.addEventListener('click',()=>{
        const map=[0,2,3,4,5,6,7,Math.floor(Math.random()*cases.length)];
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