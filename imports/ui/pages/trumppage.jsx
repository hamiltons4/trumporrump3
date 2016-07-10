import React, { Component, PropTypes } from 'react'
import { FacebookButton, FacebookCount } from "react-social"
import { TwitterButton, RedditButton, GooglePlusButton, TumblrButton } from 'react-social'

import Vote from '../components/vote.jsx'
import Uline from '../components/uline.jsx'
import Ubar from '../components/ubar.jsx'
import Wline from '../components/wline.jsx'
import Wbar from '../components/wbar.jsx'

let url = "https://github.com";

export const Trumppage = (props) => 
<div className="container-fluid" id="theT">
<div className="container-fluid secondary">
  <h1>Trump!</h1>
  <ul id="trumplist">
    <li>I've had twelve years to think about it. And if I had it to do over again, I would have grabbed the phaser and pointed
   it at you instead of them. I'll alert the crew. Could someone survive inside a transporter buffer for 75 years? Earl Grey tea,
    watercress sandwiches... and Bularian canapés? Are you up for promotion? Wait a minute - you've been declared dead. You can't 
    give orders around here. Fate protects fools, little children and ships named Enterprise. Captain, why are we out here chasing 
    omets? Some days you get the bear, and some days the bear gets you. Maybe if we felt any human loss as keenly as we feel one of
     those close to us, human history would be far less bloody. Computer, lights up! The Enterprise computer system is controlled
      by three primary main processor cores, cross-linked with a redundant melacortz ramistat, fourteen kiloquad interface modules.
       You did exactly what you had to do. You considered all your options, you tried every alternative and then you made the hard 
       choice. Then maybe you should consider this: if anything happens to them, Starfleet is going to want a full investigation. 
       I'm afraid I still don't understand, sir. Fear is the true enemy, the only enemy. A surprise party? Mr. Worf, I hate surprise 
       arties. I would *never* do that to you.</li>

    <li>Now we know what they mean by 'advanced' tactical training. When has justice ever been as 
     simple as a rule book? About four years. I got tired of hearing how young I looked. I can't. As much as I care about you, 
     my first duty is to the ship. What? We're not at all alike! Talk about going nowhere fast. Your shields were failing, sir. 
    Commander William Riker of the Starship Enterprise. Worf, It's better than music. It's jazz. Sure. You'd be surprised how far
    a hug goes with Geordi, or Worf. Mr. Crusher, ready a collision course with the Borg ship. Ensign Babyface! Now, how the 
    hell do we defeat an enemy that knows us better than we know ourselves? You enjoyed that. A lot of things can change in twelve
     years, Admiral. The unexpected is our normal routine. Well, I'll say this for him - he's sure of himself. How long can two 
     people talk about nothing? Did you come here for something in particular or just general Riker-bashing? But the probability
      of making a six is no greater than that of rolling a seven. I suggest you drop it, Mr. Data. Travel time to the nearest
     starbase? I'll be sure to note that in my log.</li>
  </ul>
  {/*<p>I've had twelve years to think about it. And if I had it to do over again, I would have grabbed the phaser and pointed
   it at you instead of them. I'll alert the crew. Could someone survive inside a transporter buffer for 75 years? Earl Grey tea,
    watercress sandwiches... and Bularian canapés? Are you up for promotion? Wait a minute - you've been declared dead. You can't 
    give orders around here. Fate protects fools, little children and ships named Enterprise. Captain, why are we out here chasing 
    omets? Some days you get the bear, and some days the bear gets you. Maybe if we felt any human loss as keenly as we feel one of
     those close to us, human history would be far less bloody. Computer, lights up! The Enterprise computer system is controlled
      by three primary main processor cores, cross-linked with a redundant melacortz ramistat, fourteen kiloquad interface modules.
       You did exactly what you had to do. You considered all your options, you tried every alternative and then you made the hard 
       choice. Then maybe you should consider this: if anything happens to them, Starfleet is going to want a full investigation. 
       I'm afraid I still don't understand, sir. Fear is the true enemy, the only enemy. A surprise party? Mr. Worf, I hate surprise 
       arties. I would *never* do that to you. and attack the Romulans. When has justice ever been as simple as a rule book? And 
    blowing into maximum warp speed, you appeared for an instant to be in two places at once. Yes, absolutely, I do indeed concur,
    wholeheartedly! Congratulations - you just destroyed the Enterprise. Yesterday I did not know how to eat gagh. My oath is
    between Captain Kargan and myself. Your only concern is with how you obey my orders. Or do you prefer the rank of prisoner 
    to that of lieutenant? The look in your eyes, I recognize it. You used to have it for me. Shields up! Rrrrred alert! Our
     neural pathways have become accustomed to your sensory input patterns. Mr. Worf, you sound like a man who's asking his friend
     if he can start dating his sister. Now we know what they mean by 'advanced' tactical training. When has justice ever been as 
     simple as a rule book? About four years. I got tired of hearing how young I looked. I can't. As much as I care about you, 
     my first duty is to the ship. What? We're not at all alike! Talk about going nowhere fast. Your shields were failing, sir. 
    Commander William Riker of the Starship Enterprise. Worf, It's better than music. It's jazz. Sure. You'd be surprised how far
    a hug goes with Geordi, or Worf. Mr. Crusher, ready a collision course with the Borg ship. Ensign Babyface! Now, how the 
    hell do we defeat an enemy that knows us better than we know ourselves? You enjoyed that. A lot of things can change in twelve
     years, Admiral. The unexpected is our normal routine. Well, I'll say this for him - he's sure of himself. How long can two 
     people talk about nothing? Did you come here for something in particular or just general Riker-bashing? But the probability
      of making a six is no greater than that of rolling a seven. I suggest you drop it, Mr. Data. Travel time to the nearest
     starbase? I'll be sure to note that in my log. Maybe if we felt any human loss as keenly as we feel one of those close to us, 
     human history would be far less bloody. Is it my imagination, or have tempers become a little frayed on the ship lately? Why 
     don't we just give everybody a promotion and call it a night - 'Commander'? We finished our first sensor sweep of the neutral
     zone. I recommend you don't fire until you're within 40,000 kilometers. I'd like to think that I haven't changed those things, 
     sir.</p>
     <p>I've had twelve years to think about it. And if I had it to do over again, I would have grabbed the phaser and pointed
   it at you instead of them. I'll alert the crew. Could someone survive inside a transporter buffer for 75 years? Earl Grey tea,
    watercress sandwiches... and Bularian canapés? Are you up for promotion? Wait a minute - you've been declared dead. You can't 
    give orders around here. Fate protects fools, little children and ships named Enterprise. Captain, why are we out here chasing 
    omets? Some days you get the bear, and some days the bear gets you. Maybe if we felt any human loss as keenly as we feel one of
     those close to us, human history would be far less bloody. Computer, lights up! The Enterprise computer system is controlled
      by three primary main processor cores, cross-linked with a redundant melacortz ramistat, fourteen kiloquad interface modules.
       You did exactly what you had to do. You considered all your options, you tried every alternative and then you made the hard 
       choice. Then maybe you should consider this: if anything happens to them, Starfleet is going to want a full investigation. 
       I'm afraid I still don't understand, sir. Fear is the true enemy, the only enemy. A surprise party? Mr. Worf, I hate surprise 
       arties. I would *never* do that to you. and attack the Romulans. When has justice ever been as simple as a rule book? And 
    blowing into maximum warp speed, you appeared for an instant to be in two places at once. Yes, absolutely, I do indeed concur,
    wholeheartedly! Congratulations - you just destroyed the Enterprise. Yesterday I did not know how to eat gagh. My oath is
    between Captain Kargan and myself. Your only concern is with how you obey my orders. Or do you prefer the rank of prisoner 
    to that of lieutenant? The look in your eyes, I recognize it. You used to have it for me. Shields up! Rrrrred alert! Our
     neural pathways have become accustomed to your sensory input patterns. Mr. Worf, you sound like a man who's asking his friend
     if he can start dating his sister. Now we know what they mean by 'advanced' tactical training. When has justice ever been as 
     simple as a rule book? About four years. I got tired of hearing how young I looked. I can't. As much as I care about you, 
     my first duty is to the ship. What? We're not at all alike! Talk about going nowhere fast. Your shields were failing, sir. 
    Commander William Riker of the Starship Enterprise. Worf, It's better than music. It's jazz. Sure. You'd be surprised how far
    a hug goes with Geordi, or Worf. Mr. Crusher, ready a collision course with the Borg ship. Ensign Babyface! Now, how the 
    hell do we defeat an enemy that knows us better than we know ourselves? You enjoyed that. A lot of things can change in twelve
     years, Admiral. The unexpected is our normal routine. Well, I'll say this for him - he's sure of himself. How long can two 
     people talk about nothing? Did you come here for something in particular or just general Riker-bashing? But the probability
      of making a six is no greater than that of rolling a seven. I suggest you drop it, Mr. Data. Travel time to the nearest
     starbase? I'll be sure to note that in my log. Maybe if we felt any human loss as keenly as we feel one of those close to us, 
     human history would be far less bloody. Is it my imagination, or have tempers become a little frayed on the ship lately? Why 
     don't we just give everybody a promotion and call it a night - 'Commander'? We finished our first sensor sweep of the neutral
     zone. I recommend you don't fire until you're within 40,000 kilometers. I'd like to think that I haven't changed those things, 
     sir.</p>
     <p>I've had twelve years to think about it. And if I had it to do over again, I would have grabbed the phaser and pointed
   it at you instead of them. I'll alert the crew. Could someone survive inside a transporter buffer for 75 years? Earl Grey tea,
    watercress sandwiches... and Bularian canapés? Are you up for promotion? Wait a minute - you've been declared dead. You can't 
    give orders around here. Fate protects fools, little children and ships named Enterprise. Captain, why are we out here chasing 
    omets? Some days you get the bear, and some days the bear gets you. Maybe if we felt any human loss as keenly as we feel one of
     those close to us, human history would be far less bloody. Computer, lights up! The Enterprise computer system is controlled
      by three primary main processor cores, cross-linked with a redundant melacortz ramistat, fourteen kiloquad interface modules.
       You did exactly what you had to do. You considered all your options, you tried every alternative and then you made the hard 
       choice. Then maybe you should consider this: if anything happens to them, Starfleet is going to want a full investigation. 
       I'm afraid I still don't understand, sir. Fear is the true enemy, the only enemy. A surprise party? Mr. Worf, I hate surprise 
       arties. I would *never* do that to you. and attack the Romulans. When has justice ever been as simple as a rule book? And 
    blowing into maximum warp speed, you appeared for an instant to be in two places at once. Yes, absolutely, I do indeed concur,
    wholeheartedly! Congratulations - you just destroyed the Enterprise. Yesterday I did not know how to eat gagh. My oath is
    between Captain Kargan and myself. Your only concern is with how you obey my orders. Or do you prefer the rank of prisoner 
    to that of lieutenant? The look in your eyes, I recognize it. You used to have it for me. Shields up! Rrrrred alert! Our
     neural pathways have become accustomed to your sensory input patterns. Mr. Worf, you sound like a man who's asking his friend
     if he can start dating his sister. Now we know what they mean by 'advanced' tactical training. When has justice ever been as 
     simple as a rule book? About four years. I got tired of hearing how young I looked. I can't. As much as I care about you, 
     my first duty is to the ship. What? We're not at all alike! Talk about going nowhere fast. Your shields were failing, sir. 
    Commander William Riker of the Starship Enterprise. Worf, It's better than music. It's jazz. Sure. You'd be surprised how far
    a hug goes with Geordi, or Worf. Mr. Crusher, ready a collision course with the Borg ship. Ensign Babyface! Now, how the 
    hell do we defeat an enemy that knows us better than we know ourselves? You enjoyed that. A lot of things can change in twelve
     years, Admiral. The unexpected is our normal routine. Well, I'll say this for him - he's sure of himself. How long can two 
     people talk about nothing? Did you come here for something in particular or just general Riker-bashing? But the probability
      of making a six is no greater than that of rolling a seven. I suggest you drop it, Mr. Data. Travel time to the nearest
     starbase? I'll be sure to note that in my log. Maybe if we felt any human loss as keenly as we feel one of those close to us, 
     human history would be far less bloody. Is it my imagination, or have tempers become a little frayed on the ship lately? Why 
     don't we just give everybody a promotion and call it a night - 'Commander'? We finished our first sensor sweep of the neutral
     zone. I recommend you don't fire until you're within 40,000 kilometers. I'd like to think that I haven't changed those things, 
     sir.</p>*/}
  </div>
  <div className="pagevote"> 
  <Vote />
  </div>
  <div className='data'>
	   <div className="uline">
			<Uline linedat={props.linedat}/>
		</div>
		<div className="ubar">
			<Ubar bardat={props.bardat}/>
		</div>
		<div className="wline">
			<Wline linedat={props.wlinedat}/>
		</div>
		<div className="wbar">
			<Wbar wbardat={props.wbardat}/>
		</div>
  </div>
  <div className="foot">
			<div className="buttonholder">
				<FacebookButton url={url} className="btn btn-facebook">
					<i className="fa fa-facebook"></i>
					{" "}
					<FacebookCount url={url} />
				</FacebookButton>
				<TwitterButton url={url} className="btn btn-twitter">
					<i className="fa fa-twitter"></i>
				</TwitterButton>
				<RedditButton url={url} className="btn btn-reddit">
					<i className="fa fa-reddit-alien"></i>
				</RedditButton>
				<GooglePlusButton url={url} className="btn btn-google-plus">
					<i className="fa fa-google-plus"></i>
				</GooglePlusButton>
			</div>
			{/*
			<TumblrButton className="btn btn-tumblr">
				{"Tumblr"}
			</TumblrButton>
			*/}
	</div>  
</div>




