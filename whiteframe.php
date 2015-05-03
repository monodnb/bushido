<?php
/**
* Template name: Whiteframe
*
* @package bushido
*/

get_header(); ?>

<div class="card">
	<div class="optional-header">
		<div class="avatar">
			<img src="<?php echo get_template_directory_uri() . '/img/beautiful-mountains-01.jpg'?>" alt="">
		</div>
		<div class="text">
			<h1 class="title">Beautiful mountains</h1>
			<h2 class="subhead">Can't wait to go hiking!</h2>
		</div>
		<div class="overflow-menu">
			<i class="mdi-navigation-more-vert"></i>
		</div>
	</div>
	<div class="rich-media">
		<img class="lazy" src="<?php echo get_template_directory_uri() . '/img/beautiful-mountains-01.jpg'?>" alt="">
		<div class="scrim bottom"></div>
		<div class="scrim top"></div>
		<h1 class="title">Title on media</h1>
		<div class="actions">
			<div class="action-area right">
				<i class="mdi-toggle-star-outline"></i>
				<i class="mdi-content-send"></i>
			</div>
		</div>
	</div>
	<div class="primary-text">
		<h1 class="title">Primary text title</h1>
		<h2 class="subhead">Subtitle</h2>
	</div>
	<div class="supporting-text">
		<p>Drops of rain could be heard hitting the pane, which made him feel quite sad. "How about if I sleep a little bit longer and forget all this nonsense", he thought, but that was something he was unable to do because he was used to sleeping on his right, and in his present state couldn't get into that position.</p>
	</div>
	<div class="supplemental-actions">
		<div class="action-area">
			<button class="flat">Read More</button>
			<button class="flat">Action 2</button>
		</div>
		<div class="action-area right">
			<i class="mdi-hardware-keyboard-arrow-up"></i>
		</div>
	</div>
</div>
<div class="tab-group">
	<div class="tab-bar">
		<div class="indicator"></div>
		<div class="tab active" tab-rel="1"><h1>Item 1</h1></div>
		<div class="tab" tab-rel="2"><h1>Item 2</h1></div>
		<div class="tab" tab-rel="3"><h1>Item 3</h1></div>
	</div>
	<div class="tab-display">
		<div class="tab-content active" tab-rel="1">
			<div class="paper">
				<div class="supporting-text">
					<span class="title">This is the first tab</span>
					<span class="content">Chambray Carles Terry Gibson balls plaid wolf. Disrupt fashion axe 90's quinoa +1 Neutra. Irony ethnic ennui McSweeney's, semiotics small batch squid direct trade. Readymade salvia Echo Park scenester.</span>
				</div>
			</div>
		</div>
		<div class="tab-content" tab-rel="2">
			<div class="paper">
				<div class="supporting-text">
					<span class="title">Second tab</span>
					<span class="content">Chambray Carles Terry Gibson balls plaid wolf. Disrupt fashion axe 90's quinoa +1 Neutra. Irony ethnic ennui McSweeney's, semiotics small batch squid direct trade. Readymade salvia Echo Park scenester.</span>
				</div>
			</div>
		</div>
		<div class="tab-content" tab-rel="3">
			<div class="paper">
				<div class="supporting-text">
					<span class="title">And, third tab</span>
					<span class="content">Chambray Carles Terry Gibson balls plaid wolf. Disrupt fashion axe 90's quinoa +1 Neutra. Irony ethnic ennui McSweeney's, semiotics small batch squid direct trade. Readymade salvia Echo Park scenester.</span>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="tab-group">
	<div class="tab-bar accented">
		<div class="indicator"></div>
		<div class="tab active" tab-rel="1">
			<h1>Item 1</h1>
		</div>
		<div class="tab" tab-rel="2">
			<h1>Long title for a tab</h1>
		</div>
		<div class="tab" tab-rel="3">
			<h1>Item 3</h1>
		</div>
	</div>
</div>
<div class="tab-group">
	<div class="tab-bar colored">
		<div class="indicator"></div>
		<div class="tab active" tab-rel="1"><h1>Item 1</h1></div>
		<div class="tab" tab-rel="2"><h1>Item 2</h1></div>
		<div class="tab" tab-rel="3"><h1>Item 3</h1></div>
		<div class="tab" tab-rel="2"><h1>Item 4</h1></div>
		<div class="tab" tab-rel="3"><h1>Item 5</h1></div>
	</div>
</div>
<!--<div id="dialog-box">
	<div id="dialog">
		<div class="supporting-text">
			<span class="title">Dialog Box</span>
			<span class="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna wirl aliqua. Up exlaborum incididunt quis nostrud exercitatn.</span>
		</div>
		<div class="actions">
			<button class="flat">Disagree</button>
			<button class="flat">Agree</button>
		</div>
	</div>
</div>-->

<div class="row">
	<div class="paper">
		<div class="supporting-text">
			<span class="title">Paper</span>
			<span class="content">Chambray Carles Terry Gibson balls plaid wolf. Disrupt fashion axe 90's quinoa +1 Neutra. Irony ethnic ennui McSweeney's, semiotics small batch squid direct trade. Readymade salvia Echo Park scenester.</span>
		</div>
	</div>
</div>
<div class="divider"></div>
<div class="card">
	<div class="media">
		<img src="<?php echo get_template_directory_uri() . '/img/tattoos.jpg'?>" alt="">
		<div class="scrim bottom"></div>
		<div class="scrim top"></div>
		<span class="title">Example card</span>
	</div>
</div>
<div class="divider"></div>
<div class="tile">
	<div class="media">
		<img src="<?php echo get_template_directory_uri() . '/img/tattoos.jpg'?>" alt="">
		<div class="scrim bottom"></div>
		<div class="scrim top"></div>
		<span class="title">Example Tile</span>
	</div>
</div>
<div class="divider"></div>
<div class="paper">
<div class="title">Chips</div>
<div class="chip closed">
	<div class="media">
		<img src="<?php echo get_template_directory_uri() . '/img/tattoos.jpg'?>" alt="">
	</div>
	<span class="title">Design Minutes</span>
</div>
<div class="divider right-inset"></div>
<div class="chip focused">
	<div class="media">
		<img src="<?php echo get_template_directory_uri() . '/img/tattoos.jpg'?>" alt="">
	</div>
	<span class="title">Design Minutes</span>
</div>
<div class="divider right-inset"></div>
<div class="chip pressed">
	<div class="media">
		<img src="<?php echo get_template_directory_uri() . '/img/tattoos.jpg'?>" alt="">
	</div>
	<span class="title">Design Minutes</span>
</div>
<div class="divider right-inset"></div>
<div class="chip activated">
	<div class="media">
		<img src="<?php echo get_template_directory_uri() . '/img/tattoos.jpg'?>" alt="">
	</div>
	<span class="title">Design Minutes</span>
</div>
</div>
<div class="divider"></div>
<ul class="lines-list resting-shadow">
	<li class="two-line activated">
		<div class="avatar">
			<img src="https://lh4.googleusercontent.com/-w7nPWJY6tDs/UpG4K2vL3hI/AAAAAAAAAOk/KHxTcltiIT8/s256-no/e7adcb27-6a29-442a-a89f-7d7090fab55a" alt="">
		</div>
		<div class="supporting-text">
			<span class="title">Achim Elena</span>
			<span class="content">ninja.record@gmail.com</span>
		</div>
		<div class="action svg-ic_more_vert_24px"></div>
	</li>
	<li class="single-line">
		<div class="avatar">
			<img src="https://lh3.googleusercontent.com/-3Fs-upEx5Ww/U-x3ln-413I/AAAAAAAABo4/jMQEc5GOymE/s207-p-no/IMG_85711479585865.jpeg" alt="">
		</div>
		<div class="supporting-text">
			<span class="title">Achim Ionut</span>
		</div>
		<div class="action svg-ic_more_vert_24px"></div>
	</li>
	<li class="two-line">
		<div class="avatar">
			<img src="https://lh3.googleusercontent.com/-b3fB9ECHqzk/VD3ewXI2kjI/AAAAAAAAABE/VYP_GKYL6Bs/w467-h468-no/1460031_10201680346348933_344205151_n.jpg" alt="">
		</div>
		<div class="supporting-text">
			<span class="title">Achim Andrei</span>
			<span class="content">andrei.achim.bogdanel@gmail.com</span>
		</div>
		<div class="action svg-ic_more_vert_24px"></div>
	</li>
	<li class="three-line">
		<div class="avatar">
			<img src="https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xfp1/v/t1.0-1/p160x160/11044578_10153169926139603_4963306465180959726_n.jpg?oh=35b09ce8cd37402ac0340b6dedbac093&oe=55B31A42&__gda__=1436203989_e16f0d077599dee3d3f505f0577bd780" alt="">
		</div>
		<div class="supporting-text">
			<span class="title">Achim Carmen Gabriela</span>
			<span class="content">cami_a18@gmail.com</span>
			<span class="content">+40727914957</span>
		</div>
		<div class="action svg-ic_more_vert_24px"></div>
	</li>
</ul>
<div class="divider"></div>
<div class="paper">
<div class="title">Controls</div>
<div class="row">
	<div class="s3 col">
		<div class="checkbox"></div>
	</div>
	<div class="s3 col">
		<div class="checkbox checked"></div>
	</div>
	<div class="s3 col">
		<div class="radio-button">
			<div class="outer-border"></div>
			<div class="inner-circle"></div>
		</div>
	</div>
	<div class="s3 col">
		<div class="radio-button on">
			<div class="outer-border"></div>
			<div class="inner-circle"></div>
		</div>
	</div>
</div>
<div class="divider full-bleed"></div>
<div class="row">
	<div class="s3 col">
		<div class="switch">
			<div class="switch-bar"></div>
			<div class="switch-button"></div>
		</div>
	</div>
	<div class="s3 col">
		<div class="switch on">
			<div class="switch-bar"></div>
			<div class="switch-button"></div>
		</div>
	</div>
	<div class="s3 col">
		<div class="switch disabled">
			<div class="switch-bar"></div>
			<div class="switch-button"></div>
		</div>
	</div>
	<div class="s3 col">
		<div class="switch on disabled">
			<div class="switch-bar"></div>
			<div class="switch-button"></div>
		</div>
	</div>
</div>
<div class="divider full-bleed"></div>
<div class="row">
	<div class="slider">
		<div class="slider-bar"></div>
		<div class="slider-button"></div>
		<div class="slider-pin"></div>
	</div>
</div>
<div class="divider full-bleed"></div>
<div class="row">
	<div class="slider">
		<div class="slider-bar"></div>
		<div class="slider-button pin" value="15"></div>
	</div>
</div>
</div>
<div class="divider"></div>
<div class="paper">
	<div class="title">Text Fields</div>
	<input type="text" placeholder="With placeholder">
	<input type="text" placeholder="With label" label="Label">
	<input type="text" placeholder="With label" label="Label" value="Default value">
	<input type="text" placeholder="With label" value="Disabled" disabled>
	<textarea placeholder="With label"></textarea>
</div>

</br>
</br>
</br>
</br>
</br>
</br>
</br>
</br>
</br>
</br>
<?php get_footer(); ?>
