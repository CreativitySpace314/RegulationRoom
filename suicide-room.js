(()=>{
  const room=document.querySelector('#suicide-room');
  if(!room)return;
  const q=s=>room.querySelector(s);

  const cases={
    quiet:{label:'The quiet comment',desc:'A quiet statement opens the door to a direct conversation about suicide.',person:'MAYA',steps:[
      {stage:'NOTICE',dir:'Maya has been quieter than usual after a hard phone call.',quote:'“I don’t really want to be here anymore.”',side:'Treat the statement as an invitation. You do not need certainty before checking in.',choices:[
        {text:'“You’ve had a rough night. Do you want to talk about it?”',score:2,feedback:'That opens connection, but the meaning is still unclear.',reaction:'“Maybe. I just don’t want to keep doing this.”'},
        {text:'“Maya, sometimes when people say they don’t want to be here anymore, they’re thinking about suicide. Are you thinking about suicide?”',score:-8,feedback:'NICE MOVE. You named the invitation and asked directly.',reaction:'“Yeah. I have been thinking about suicide.”'},
        {text:'“Don’t say things like that. You’re going to be okay.”',score:10,feedback:'Reassurance can shut the door before you understand what Maya meant.',reaction:'“Never mind. I shouldn’t have said anything.”',recover:'“I came in too fast. I do want to hear you. When you said you don’t want to be here, were you talking about suicide?”'},
        {text:'Avoid the word suicide because you are afraid it could put the idea in her head.',score:12,feedback:'Avoiding the question leaves the most important information unknown.',reaction:'“You look freaked out. Forget it.”',recover:'“I’m not going anywhere. I want to ask clearly: are you thinking about suicide?”'}]},
      {stage:'ASK',dir:'Maya tells you the thoughts have been present tonight.',quote:'“Yeah. I’ve thought about suicide. I just want everything to stop.”',side:'Stay calm and ask one thing at a time.',choices:[
        {text:'“Thank you for telling me. Help me understand what tonight has been like.”',score:-8,feedback:'NICE MOVE. You kept the conversation human.',reaction:'“Everything piled up. I feel exhausted and trapped.”'},
        {text:'Rapid-fire every risk question you can think of.',score:9,feedback:'The information may matter, but pacing and connection matter too.',reaction:'“Can you slow down? I can’t answer all of that.”',recover:'“You’re right. One thing at a time. What feels hardest right now?”'},
        {text:'“But you don’t really want to die, right?”',score:11,feedback:'This asks Maya to reassure you.',reaction:'“I don’t know what you want me to say.”',recover:'“You don’t have to reassure me. I want the real answer.”'},
        {text:'“As long as you don’t say that again, we’re okay.”',score:13,feedback:'This makes disclosure sound like the problem.',reaction:'“But I HAVE been thinking about suicide. That’s what I’m trying to tell you.”',recover:'“Thank you for correcting me. I’m listening now.”'}]},
      {stage:'UNDERSTAND',dir:'Maya says the thoughts feel intense but she wants help getting through tonight.',quote:'“I don’t want to die. I just don’t want to feel like this.”',side:'Listen for danger and for what still connects Maya to safety.',choices:[
        {text:'Ask what has helped before, who Maya trusts, and what would make the next few hours safer.',score:-9,feedback:'NICE MOVE. You are building from Maya’s own supports.',reaction:'“My sister helps. And I don’t want to be alone tonight.”'},
        {text:'Assume she is safe because she says she does not want to die.',score:8,feedback:'Wanting to live matters, but it does not answer the current safety need.',reaction:'“I still don’t feel safe being by myself.”',recover:'“I hear that. Let’s talk about what would help right now.”'},
        {text:'Tell her she should be grateful people care.',score:10,feedback:'Gratitude is not a safety intervention and can add shame.',reaction:'“I know people care. That doesn’t make this stop.”',recover:'“You’re right. I want to understand what would help tonight.”'},
        {text:'Make decisions without telling Maya what you are doing.',score:12,feedback:'Safety action can still be transparent whenever possible.',reaction:'“Wait. What are you doing?”',recover:'“I should have told you. I want to keep you involved.”'}]},
      {stage:'SAFETY',dir:'Maya can participate in staying safe if she is not alone and can use her existing supports.',quote:'“I think I can get through tonight if I’m not by myself.”',side:'Make safety-for-now concrete: what, when, how and who.',choices:[
        {text:'Work with Maya on next steps using her individualized plan and the procedures for the setting.',score:-10,feedback:'NICE MOVE. Safety became specific without taking away Maya’s voice.',reaction:'“Okay. Can we call my sister together?”'},
        {text:'“Great. Then you’re okay.” Return to normal duties.',score:10,feedback:'A calmer moment does not erase the disclosure.',reaction:'“Wait… I said I don’t want to be alone.”',recover:'“You’re right. I moved too fast. I’m staying while we put the plan in place.”'},
        {text:'Make every decision for Maya because safety is more important than choice.',score:7,feedback:'Safety can require firm action, but collaboration still matters.',reaction:'“Can I at least know what’s happening?”',recover:'“Yes. Let’s go through the next steps together.”'},
        {text:'Ask Maya to promise she will not do anything and leave it there.',score:12,feedback:'A promise is not a substitute for a real plan or follow-through.',reaction:'“I can promise, but I still don’t want to be alone.”',recover:'“That tells me we still need a real plan for tonight.”'}]},
      {stage:'CONNECT',dir:'The immediate plan is in place.',quote:'“Are you going to treat me different now?”',side:'Relationship is part of safety. Honesty should not cost connection.',choices:[
        {text:'“I’m glad you told me. I’ll keep you informed about what happens next.”',score:-10,feedback:'NICE MOVE. You preserved trust while keeping follow-through in place.',reaction:'“Okay. I was scared to tell anyone.”'},
        {text:'“That depends on whether you say things like this again.”',score:13,feedback:'That can teach Maya to hide suicidal thoughts next time.',reaction:'“Then maybe I shouldn’t tell people.”',recover:'“No. I want you to tell someone. I’m sorry I made honesty sound like a problem.”'},
        {text:'“We already dealt with it. Let’s move on.”',score:7,feedback:'The immediate danger may be easing, but the relationship still matters.',reaction:'“I just wanted to know if you’re mad.”',recover:'“I’m not mad. I’m glad you told me.”'},
        {text:'“I’m telling everyone so they know to watch you.”',score:11,feedback:'Share safety information according to role and need, not as punishment.',reaction:'“Everyone?”',recover:'“I said that badly. I’ll only share what needs to be shared for support and safety.”'}]}
    ]},

    more:{label:'More support is needed',desc:'You do not know where this conversation is going yet. Start by noticing invitations and let Alex tell you more.',person:'ALEX',steps:[
      {stage:'NOTICE',kind:'notice',dir:'Alex has been pacing since an argument. They sit down, rub their face, stare at the floor, and their usual joking stops.',quote:'“I’m so tired. I can’t keep doing this.”',side:'First job: notice what changed. Warning signs and invitations tell you to check in; they do not tell you the answer.',signs:[
        {text:'Pacing after a difficult argument',invitation:true},
        {text:'Becoming unusually quiet / change from baseline',invitation:true},
        {text:'“I’m so tired. I can’t keep doing this.”',invitation:true},
        {text:'Rubbing their face and staring at the floor',invitation:true},
        {text:'Alex is wearing a black sweatshirt',invitation:false},
        {text:'Alex sat down in the living room',invitation:false}
      ]},
      {stage:'EXPLORE',dir:'You have several invitations, but you still do not know what Alex means.',quote:'“I’m so tired. I can’t keep doing this.”',side:'Get curious before deciding what “this” means.',choices:[
        {text:'“You sound exhausted. What feels like too much right now?”',score:-8,feedback:'NICE MOVE. You explored Alex’s words before deciding what they meant.',reaction:'“Everything. The fighting. Feeling like I keep screwing everything up. I’m tired of waking up to the same thing.”'},
        {text:'“What do you mean you can’t do this anymore?”',score:-6,feedback:'Good. An open question gives Alex room to tell you what “this” means.',reaction:'“All of it. I’m exhausted. I don’t want another day like this.”'},
        {text:'“Come on, you’ve gotten through worse.”',score:8,feedback:'This reassures before you understand the invitation.',reaction:'“That doesn’t mean I want to keep doing it.”',recover:'“You’re right. I jumped to reassurance. What feels like too much right now?”'},
        {text:'Change the subject because Alex has not said “suicide.”',score:11,feedback:'People do not always begin with a direct suicide statement.',reaction:'“Never mind. I was trying to tell you something.”',recover:'“I want to hear it. When you say you can’t keep doing this, what do you mean?”'}]},
      {stage:'ASK',dir:'Alex has now said they are exhausted, do not want another day like this, and are tired of waking up to the same pain.',quote:'“I just want it all to stop.”',side:'The invitations are getting clearer. Name what you heard and ask directly.',choices:[
        {text:'“Alex, you’ve said you’re exhausted, you don’t want another day like this, and you want it all to stop. Sometimes when people feel that way, they’re thinking about suicide. Are you thinking about dying by suicide?”',score:-10,feedback:'NICE MOVE. You connected the question to Alex’s own words and asked directly.',reaction:'Alex is quiet, then nods. “Yeah. I’ve been thinking about suicide.”'},
        {text:'“You’re not going to do anything stupid, are you?”',score:12,feedback:'This adds judgment and pressures Alex to reassure you.',reaction:'“Forget it.”',recover:'“That came out wrong. I’m concerned because of what you’ve been saying. Are you thinking about suicide?”'},
        {text:'Keep asking general questions because saying “suicide” might put the idea in Alex’s head.',score:13,feedback:'Avoiding the word can make Alex work harder to disclose what is already happening.',reaction:'“I feel like I’m trying to tell you without actually saying it.”',recover:'“I hear that. I’m going to ask directly: are you thinking about suicide?”'},
        {text:'“You just need some sleep. Let’s talk tomorrow.”',score:11,feedback:'Exhaustion does not explain away the invitations Alex has given you.',reaction:'“I don’t know if I want there to be a tomorrow.”',recover:'“Thank you for saying that. Are you thinking about suicide?”'}]},
      {stage:'UNDERSTAND',dir:'Alex answers yes. The direct question opened the conversation instead of ending it.',quote:'“Yeah. I’ve been thinking about suicide. I don’t want to scare anybody, but I don’t trust myself alone tonight.”',side:'Now the level of concern has changed. Stay with Alex and understand what support is needed now.',choices:[
        {text:'“Thank you for telling me. I’m staying with you. We need more support tonight, and I want to keep you involved in what happens next.”',score:-10,feedback:'NICE MOVE. You took the disclosure seriously without making Alex regret telling you.',reaction:'“Okay. I don’t want to be alone with this.”'},
        {text:'“Promise me you won’t do anything.”',score:10,feedback:'A promise does not answer the safety need Alex just identified.',reaction:'“I can promise, but I literally just told you I don’t trust myself alone.”',recover:'“You’re right. A promise isn’t enough here. I’m staying with you while we get more support.”'},
        {text:'Give Alex privacy so they can calm down.',score:13,feedback:'Space can help in many situations. Here, Alex specifically says being alone feels unsafe.',reaction:'“Wait. Please don’t leave me.”',recover:'“I’m staying. We can give you privacy without leaving you alone.”'},
        {text:'“Okay, then you’re definitely going to the hospital.”',score:8,feedback:'Do not make help sound like an automatic consequence of disclosure.',reaction:'“Is that the only thing that happens when I tell the truth?”',recover:'“No. I moved too far ahead. We need more support, and I want you involved in the safest next step.”'}]},
      {stage:'SAFETY',dir:'Alex is willing to accept more help and asks you to stay during the handoff.',quote:'“Can you stay with me while we call someone?”',side:'This is where the Safety-for-Now lens becomes useful: prevent, protect, promote and prepare.',choices:[
        {text:'Stay with Alex and connect with appropriate crisis or clinical support, such as 988, while following the setting’s procedures.',score:-12,feedback:'NICE MOVE. You increased support while preserving connection and involving Alex.',reaction:'“Okay. Let’s call.”'},
        {text:'Hand Alex the phone and leave.',score:7,feedback:'Connection matters during a vulnerable handoff.',reaction:'“Wait. I asked if you could stay.”',recover:'“Yes. I’m staying with you while we make the call.”'},
        {text:'Tell Alex that calling 988 is the consequence for saying they are suicidal.',score:14,feedback:'Crisis support should never be framed as punishment for disclosure.',reaction:'“So I get punished for telling the truth?”',recover:'“No. I said that wrong. This is about adding support, not punishing you.”'},
        {text:'Jump automatically to emergency response even though Alex is participating in safety and asking for help.',score:8,feedback:'Match the level of response to the current safety information and setting procedures.',reaction:'“I’m talking to you and asking for help. Why are you skipping straight there?”',recover:'“You’re right to ask. Let’s use the appropriate crisis support and keep reassessing safety.”'}]},
      {stage:'CONNECT',dir:'Alex is connected with more support.',quote:'“Are you mad that I told you?”',side:'What Alex remembers can affect whether they tell someone next time.',choices:[
        {text:'“No. I’m glad you told me. You deserved to be taken seriously and included.”',score:-10,feedback:'NICE MOVE. That protects future help-seeking and preserves dignity.',reaction:'“Okay. I was afraid everyone would freak out.”'},
        {text:'“You gave me no choice.”',score:12,feedback:'This adds blame to a safety intervention.',reaction:'“That makes me wish I hadn’t told you.”',recover:'“I’m sorry. Telling me was the right thing. My job is to respond safely without blaming you.”'},
        {text:'“Next time, tell someone sooner.”',score:6,feedback:'Earlier disclosure can help, but this can sound critical after a vulnerable moment.',reaction:'“I did tell someone. I told you.”',recover:'“You’re right. And I’m glad you did.”'},
        {text:'“It’s over now. Don’t think about it.”',score:8,feedback:'The handoff may be happening, but the person still deserves closure and connection.',reaction:'“It doesn’t feel over to me.”',recover:'“That makes sense. I’m still here while the next support takes over.”'}]}
    ]},

    emergency:{label:'Safety cannot be maintained',desc:'Devon directly reports immediate danger and inability to stay safe.',person:'DEVON',steps:[
      {stage:'NOTICE',dir:'Devon is visibly distressed and comes directly to you.',quote:'“I’m scared I’m going to kill myself tonight.”',side:'This is already a direct safety statement. Stay present and act on the urgency.',choices:[
        {text:'“I’m really glad you told me. I’m staying with you while we get more help.”',score:-10,feedback:'NICE MOVE. Connection and action can happen together.',reaction:'“Please don’t leave me.”'},
        {text:'“You don’t mean that.”',score:13,feedback:'Do not minimize a direct statement of danger.',reaction:'“I do mean it. That’s why I told you.”',recover:'“I believe you. I’m staying with you and getting help now.”'},
        {text:'“Calm down first and then we’ll talk.”',score:10,feedback:'Safety cannot wait for calm.',reaction:'“I’m telling you because I’m not calm and I’m scared.”',recover:'“You’re right. We can act on safety while you’re scared.”'},
        {text:'Leave without explaining where you are going.',score:8,feedback:'Get help, but maintain connection or ensure another support person stays present.',reaction:'“Wait—where are you going?”',recover:'“I’m getting more help, and I’m making sure you’re not alone.”'}]},
      {stage:'ASK',dir:'Devon says the danger feels immediate.',quote:'“I don’t think I can keep myself safe.”',side:'You have enough information to recognize immediate danger; do not turn the moment into endless questioning.',choices:[
        {text:'“Thank you for telling me. I’m staying with you. We’re getting emergency help now, and I’ll tell you what’s happening.”',score:-12,feedback:'NICE MOVE. You were clear about the safety action and stayed connected.',reaction:'“Okay. Just don’t leave me alone.”'},
        {text:'Keep asking questions until Devon calms down.',score:12,feedback:'The goal is not to question someone into calm when they report immediate danger.',reaction:'“I already told you I don’t feel safe.”',recover:'“You’re right. I have enough to know we need emergency help now.”'},
        {text:'Ask Devon to promise they can wait while you finish another task.',score:14,feedback:'Immediate danger cannot be managed by a promise or routine delay.',reaction:'“I don’t know if I can promise that.”',recover:'“Then I’m staying here and getting emergency help now.”'},
        {text:'Argue that Devon has too much to live for.',score:9,feedback:'Reasons for living can matter, but arguing does not replace immediate safety action.',reaction:'“I know people care. I’m still scared.”',recover:'“I hear you. We’re acting on safety now.”'}]},
      {stage:'UNDERSTAND',dir:'Devon remains unable to participate in a safer plan.',quote:'“I need somebody to help me stay alive right now.”',side:'Safety action has to lead. Keep communication calm and transparent.',choices:[
        {text:'Activate the appropriate emergency response for the setting and keep Devon informed and accompanied as much as possible.',score:-12,feedback:'NICE MOVE. Emergency action does not require abandoning connection.',reaction:'“Okay. Tell me what’s happening.”'},
        {text:'Wait to see if Devon changes their mind.',score:14,feedback:'Immediate danger and inability to maintain safety require action.',reaction:'“Please help me.”',recover:'“I am. I’m activating emergency support now.”'},
        {text:'Threaten emergency services if Devon does not calm down.',score:14,feedback:'Emergency response is a safety action, not a threat or punishment.',reaction:'“So I’m in trouble?”',recover:'“No. You’re not in trouble. We’re getting help because you told me you’re in danger.”'},
        {text:'Tell Devon there is nothing else you can do.',score:14,feedback:'There is a next step: activate the appropriate emergency response and maintain connection.',reaction:'“Then why did I tell you?”',recover:'“Telling me mattered. It lets us act to keep you safe.”'}]},
      {stage:'SAFETY',dir:'Emergency support is being activated.',quote:'“What’s going to happen to me?”',side:'Be honest about what you know and avoid promises you cannot make.',choices:[
        {text:'Explain the next step you know, acknowledge what you do not know, and stay connected through the handoff.',score:-10,feedback:'NICE MOVE. Transparency can reduce the feeling that safety is being done to the person.',reaction:'“Okay. Just keep telling me what’s happening.”'},
        {text:'“I don’t know. It’s out of my hands now.”',score:9,feedback:'You may not control the outcome, but you can still support the transition.',reaction:'“That makes this scarier.”',recover:'“I don’t know every next step, but I’ll tell you what I do know.”'},
        {text:'Promise Devon a specific outcome you cannot control.',score:12,feedback:'Do not promise an outcome you cannot control.',reaction:'“Are you sure?”',recover:'“I shouldn’t promise that. I can promise to keep you informed.”'},
        {text:'Stop talking because the emergency team will handle it.',score:8,feedback:'A handoff does not have to feel like abandonment.',reaction:'“Can you at least tell me what’s happening?”',recover:'“Yes. I’ll keep you informed while we transition.”'}]},
      {stage:'CONNECT',dir:'Before the transition, Devon checks the meaning of what just happened.',quote:'“Do you think I did the right thing telling you?”',side:'What the person remembers can affect whether they seek help again.',choices:[
        {text:'“Yes. Telling me gave us a chance to get you more support and keep you safe.”',score:-11,feedback:'NICE MOVE. You reinforced disclosure and help-seeking.',reaction:'“Okay. I’m glad I said something.”'},
        {text:'“I guess. Look what happened though.”',score:11,feedback:'This can make emergency help feel like punishment for honesty.',reaction:'“That makes me wish I kept it to myself.”',recover:'“I don’t want that to be the lesson. Telling me was the right move.”'},
        {text:'“We’ll see.”',score:8,feedback:'The person deserves a clear, supportive answer.',reaction:'“That doesn’t make me want to tell someone next time.”',recover:'“Then let me be clear: yes, you did the right thing telling me.”'},
        {text:'“You made this a big deal.”',score:14,feedback:'The danger made it serious; the disclosure made help possible.',reaction:'“Sorry.”',recover:'“You do not need to apologize for asking for help.”'}]}
    ]}
  };

  let current='quiet',step=0;
  const framework=q('#safetyFramework');

  function updateTrack(){
    const c=cases[current];
    q('#srTrack').innerHTML=c.steps.map((x,i)=>`<span class="${i===step?'active':i<step?'done':''}">${i+1}. ${x.stage}</span>`).join('');
  }

  function updateFramework(){
    if(framework) framework.hidden=!(current==='more' && step>=4);
  }

  function renderNoticePicker(m){
    const wrap=q('#srChoices');
    wrap.innerHTML='<p class="notice-instruction"><strong>What caught your attention?</strong> Choose every detail that feels like an invitation to check in.</p>';
    const selected=new Set();
    m.signs.forEach((sign,i)=>{
      const b=document.createElement('button');
      b.type='button'; b.className='invitation'+(sign.invitation?'':' distractor'); b.textContent=sign.text;
      b.onclick=()=>{selected.has(i)?selected.delete(i):selected.add(i);b.classList.toggle('selected',selected.has(i));};
      wrap.appendChild(b);
    });
    const submit=document.createElement('button');
    submit.type='button'; submit.className='notice-submit'; submit.textContent='What did I notice? →';
    submit.onclick=()=>{
      const invitations=[...selected].filter(i=>m.signs[i].invitation).length;
      const distractors=[...selected].filter(i=>!m.signs[i].invitation).length;
      const fb=q('#srFeedback'); fb.hidden=false;
      if(invitations>=3 && distractors===0){
        fb.classList.remove('warn'); q('#srFeedbackTitle').textContent='✦ YES. THOSE ARE INVITATIONS.';
        q('#srFeedbackText').innerHTML='You noticed a <strong>change from baseline</strong>, visible distress, recent conflict, and language like <strong>“I can’t keep doing this.”</strong><br><br>None of those details prove Alex is suicidal. Together, they give you a reason to slow down and check in.';
      }else{
        fb.classList.add('warn'); q('#srFeedbackTitle').textContent='👀 LOOK AGAIN AT THE CHANGE';
        q('#srFeedbackText').innerHTML='The strongest invitations are the <strong>change from baseline</strong>, pacing after distress, becoming unusually quiet, and Alex saying <strong>“I’m so tired. I can’t keep doing this.”</strong><br><br>Ordinary details like clothing or simply sitting down are not warning signs by themselves.';
      }
      q('#srDirection').textContent='You have noticed the invitations. Now find out what they mean instead of assuming.';
      q('#srQuote').textContent='“I’m so tired. I can’t keep doing this.”';
      wrap.innerHTML='';
      const next=q('#srNext'); next.textContent='Explore what Alex means →'; next.onclick=advance;
    };
    wrap.appendChild(submit);
  }

  function render(){
    const c=cases[current],m=c.steps[step];
    q('#srCaseTitle').textContent=c.label; q('#srCaseDesc').textContent=c.desc; q('#srPerson').textContent=c.person;
    q('#srDirection').textContent=m.dir; q('#srQuote').textContent=m.quote; q('#srSide').textContent=m.side;
    q('#srFeedback').hidden=true; q('#srFeedback').classList.remove('warn');
    if(m.kind==='notice') renderNoticePicker(m); else {
      q('#srChoices').innerHTML='';
      m.choices.forEach(ch=>{const b=document.createElement('button');b.type='button';b.textContent=ch.text;b.onclick=()=>choose(ch);q('#srChoices').appendChild(b);});
    }
    updateTrack(); updateFramework();
    room.querySelectorAll('.suicide-cases button').forEach(b=>b.classList.toggle('active',b.dataset.case===current));
  }

  function choose(ch){
    const fb=q('#srFeedback'); fb.hidden=false; fb.classList.toggle('warn',ch.score>4);
    q('#srFeedbackTitle').textContent=ch.score<=-7?'✦ NICE MOVE. STAY WITH THE PERSON.':'👀 THE CONVERSATION CHANGED';
    q('#srFeedbackText').innerHTML=`${ch.feedback}<br><br><strong>${cases[current].person}:</strong> ${ch.reaction}`;
    q('#srDirection').textContent=ch.score>4?'Your response landed. The conversation is not over. You can recover from here.':'The conversation keeps moving.';
    q('#srQuote').textContent=ch.reaction; q('#srChoices').innerHTML='';
    const next=q('#srNext');
    if(ch.score>4&&ch.recover){next.textContent='Repair and keep going →';next.onclick=()=>renderRecovery(ch);}else{next.textContent=step<cases[current].steps.length-1?'Keep going →':'Choose another path ↻';next.onclick=advance;}
  }

  function renderRecovery(ch){
    q('#srFeedback').hidden=true; q('#srDirection').textContent='You get another opening. Repair the moment instead of restarting the scenario.'; q('#srQuote').textContent=ch.reaction;
    q('#srSide').textContent='A clumsy response does not end the relationship. Own it, clarify, and keep the person talking.'; q('#srChoices').innerHTML='';
    const good=document.createElement('button'); good.type='button'; good.textContent=ch.recover;
    good.onclick=()=>{q('#srFeedback').hidden=false;q('#srFeedback').classList.remove('warn');q('#srFeedbackTitle').textContent='✦ NICE RECOVERY. YOU STAYED IN IT.';q('#srFeedbackText').textContent='You corrected your approach without making the person start over. Repair is part of the skill.';const next=q('#srNext');next.textContent=step<cases[current].steps.length-1?'Keep going →':'Choose another path ↻';next.onclick=advance;};
    const avoid=document.createElement('button'); avoid.type='button'; avoid.textContent='Avoid the topic and move on.';
    avoid.onclick=()=>{q('#srFeedback').hidden=false;q('#srFeedback').classList.add('warn');q('#srFeedbackTitle').textContent='👀 NOTICE THE LOST OPENING';q('#srFeedbackText').textContent='Avoiding the topic may make future disclosure harder. The scenario still continues, but the rupture comes with you.';const next=q('#srNext');next.textContent=step<cases[current].steps.length-1?'Keep going anyway →':'Choose another path ↻';next.onclick=advance;};
    q('#srChoices').append(good,avoid);
  }

  function advance(){
    if(step<cases[current].steps.length-1){step++;render();}
    else{step=0;render();window.scrollTo({top:room.offsetTop,behavior:'smooth'});}
  }

  room.querySelectorAll('.suicide-cases button').forEach(b=>b.addEventListener('click',()=>{current=b.dataset.case;step=0;render();}));
  render();
})();