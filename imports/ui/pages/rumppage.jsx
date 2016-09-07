import React, { Component, PropTypes } from 'react'
import { FacebookButton, FacebookCount } from 'react-social'
import { TwitterButton, RedditButton, GooglePlusButton, TumblrButton } from 'react-social'

import Vote from '../components/vote.jsx'
import Uline from '../components/uline.jsx'
import Ubar from '../components/ubar.jsx'
import Wline from '../components/wline.jsx'
import Wbar from '../components/wbar.jsx'

let url = "https://github.com";

export const Rumppage = (props) => 
<div className="container-fluid" id="theR">
<div className="container-fluid secondary">
    <h1>Rump.</h1>
    <img className="pagegif img-responsive" id="rumpgif" src={"../../images/RumpTalk4.gif"} alt="rump is a butthead who says unthinking uncaring and dangerous things"/>
    <ul id="rumplist">
    <li>"I can almost believe that you are of another world," she said, "for otherwise such ignorance were inexplicable.  
Do you really mean that you do not know that the Sagoths are the creatures of the Mahars&mdash;the mighty Mahars who 
think they own Pellucidar and all that walks or grows upon its surface, or creeps or burrows beneath, or swims within 
its lakes and oceans, or flies through its air?  Next you will be telling me that you never before heard of the Mahars!"

I was loath to do it, and further incur her scorn; but there was no alternative if I were to absorb knowledge, 
so I made a clean breast of my pitiful ignorance as to the mighty Mahars.  She was shocked.  But she did her very best 
to enlighten me, though much that she said was as Greek would have been to her.  She described the Mahars largely by 
comparisons.  In this way they were like unto thipdars, in that to the hairless lidi.
	</li>
    <li>About all I gleaned of them was that they were quite hideous, had wings, and webbed feet; lived in cities built 
beneath the ground; could swim under water for great distances, and were very, very wise.  The Sagoths were their weapons
 of offense and defense, and the races like herself were their hands and feet&mdash;they were the slaves and servants 
 who did all the manual labor.  The Mahars were the heads&mdash;the brains&mdash;of the inner world.  I longed to see this
  wondrous race of supermen.
  Perry learned the language with me.  When we halted, as we occasionally did, though sometimes the halts seemed ages apart,
 he would join in the conversation, as would Ghak the Hairy One, he who was chained just ahead of Dian the Beautiful.  Ahead
 f Ghak was Hooja the Sly One.  He too entered the conversation occasionally.  Most of his remarks were directed toward Dian
 the Beautiful.  It didn't take half an eye to see that he had developed a bad case; but the girl appeared totally oblivious
 to his thinly veiled advances.  Did I say thinly veiled? There is a race of men in New Zealand, or Australia, I have 
 forgotten which, who indicate their preference for the lady of their affections by banging her over the head with a bludgeon.
   By comparison with this method Hooja's lovemaking might be called thinly veiled.  At first it caused me to blush violently 
   although I have seen several Old Years out at Rectors, and in other less fashionable places off Broadway, and in Vienna, 
   and Hamburg
  </li>
  <li>But the girl!  She was magnificent.  It was easy to see that she considered herself as entirely above and apart from her
present surroundings and company.  She talked with me, and with Perry, and with the taciturn Ghak because we were respectful;
 but she couldn't even see Hooja the Sly One, much less hear him, and that made him furious.  He tried to get one of the 
 Sagoths to move the girl up ahead of him in the slave gang, but the fellow only poked him with his spear and told him that 
 e had selected the girl for his own property&mdash;that he would buy her from the Mahars as soon as they reached Phutra.  
 Phutra, it seemed, was the city of our destination.
  </li>
    </ul>
{/*    <p>Again she looked her incredulity.</p>

<p>"I can almost believe that you are of another world," she said, "for otherwise such ignorance were inexplicable.  
Do you really mean that you do not know that the Sagoths are the creatures of the Mahars&mdash;the mighty Mahars who 
think they own Pellucidar and all that walks or grows upon its surface, or creeps or burrows beneath, or swims within 
its lakes and oceans, or flies through its air?  Next you will be telling me that you never before heard of the Mahars!"</p>

<p>I was loath to do it, and further incur her scorn; but there was no alternative if I were to absorb knowledge, 
so I made a clean breast of my pitiful ignorance as to the mighty Mahars.  She was shocked.  But she did her very best 
to enlighten me, though much that she said was as Greek would have been to her.  She described the Mahars largely by 
comparisons.  In this way they were like unto thipdars, in that to the hairless lidi.</p>

<p>About all I gleaned of them was that they were quite hideous, had wings, and webbed feet; lived in cities built 
beneath the ground; could swim under water for great distances, and were very, very wise.  The Sagoths were their weapons
 of offense and defense, and the races like herself were their hands and feet&mdash;they were the slaves and servants 
 who did all the manual labor.  The Mahars were the heads&mdash;the brains&mdash;of the inner world.  I longed to see this
  wondrous race of supermen.</p>

<p>Perry learned the language with me.  When we halted, as we occasionally did, though sometimes the halts seemed ages apart,
 he would join in the conversation, as would Ghak the Hairy One, he who was chained just ahead of Dian the Beautiful.  Ahead
 f Ghak was Hooja the Sly One.  He too entered the conversation occasionally.  Most of his remarks were directed toward Dian
 the Beautiful.  It didn't take half an eye to see that he had developed a bad case; but the girl appeared totally oblivious
 to his thinly veiled advances.  Did I say thinly veiled? There is a race of men in New Zealand, or Australia, I have 
 forgotten which, who indicate their preference for the lady of their affections by banging her over the head with a bludgeon.
   By comparison with this method Hooja's lovemaking might be called thinly veiled.  At first it caused me to blush violently 
   although I have seen several Old Years out at Rectors, and in other less fashionable places off Broadway, and in Vienna, 
   and Hamburg.</p>

   

<p>But the girl!  She was magnificent.  It was easy to see that she considered herself as entirely above and apart from her
present surroundings and company.  She talked with me, and with Perry, and with the taciturn Ghak because we were respectful;
 but she couldn't even see Hooja the Sly One, much less hear him, and that made him furious.  He tried to get one of the 
 Sagoths to move the girl up ahead of him in the slave gang, but the fellow only poked him with his spear and told him that 
 e had selected the girl for his own property&mdash;that he would buy her from the Mahars as soon as they reached Phutra.  
 Phutra, it seemed, was the city of our destination.</p>

<p>After passing over the first chain of mountains we skirted a salt sea, upon whose bosom swam countless horrid things.
 Seal-like creatures there were with long necks stretching ten and more feet above their enormous bodies and whose snake 
 heads were split with gaping mouths bristling with countless fangs.  There were huge tortoises too, paddling about among
  these other reptiles, which Perry said were Plesiosaurs of the Lias.  I didn't question his veracity&mdash;they might have
  een most anything.</p>

<p>Dian told me they were tandorazes, or tandors of the sea, and that the other, and more fearsome reptiles, which 
occasionally rose from the deep to do battle with them, were azdyryths, or sea-dyryths&mdash;Perry called them Ichthyosaurs.
  They resembled a whale with the head of an alligator.</p>*/}
</div>
<div className="pagevote"> 
    <Vote />
</div>
<div className='data'>
	   <div className="uline">
			<Uline linedat={props.linedat} width={props.ulsizer}/>
		</div>
		<div className="ubar">
			<Ubar bardat={props.bardat} width={props.ubsizer}/>
		</div>
		<div className="wline">
			<Wline linedat={props.wlinedat} width={props.wlsizer}/>
		</div>
		<div className="wbar">
			<Wbar wbardat={props.wbardat} width={props.wbsizer}/>
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