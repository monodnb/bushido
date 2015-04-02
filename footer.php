<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after
 *
 * @package bushido
 */
?>

	</div><!-- #content -->

	<div class="bottom-sheet-overlay"></div>
	<div id="bottom-sheet">
	<div class="bs-container">
		<div class="bs-media">
			<img src="<?php echo get_template_directory_uri() . '/img/nl2-960x960.jpg'?>" alt="">
			<div class="bs-scrim bottom"></div>
			<div class="bs-scrim top"></div>
			<span class="bs-title">Material Design</span>
			<div class="bs-actions">
				<i class="action mdi-action-favorite-outline"></i>
				<i class="action mdi-social-share"></i>
				<i class="action mdi-navigation-more-vert"></i>
			</div>
		</div>
		<div class="bs-content">
			<div class="row">
				<div class="s12 col">
					<div class="card">
						<div class="card-support-text truncated">
							<span>Lorem ipsum dolor sit amet, mazim fuisset ea usu, vim dolorem salutandi ex. Feugiat dolorum no mel, ei pro mentitum salutatus, ea nonumy aliquip philosophia qui. Fabellas molestiae constituto est id, quem sint eleifend ex ius, postea erroribus ocurreret duo in. Eam facilis eleifend praesent ei.

Reque porro cu ius, putant delicata mea te. Vim an falli urbanitas, sit no regione similique, mucius conceptam cum ne. Nam natum ferri an. Cum simul mediocrem in, nibh dicat ad eum. Ne his numquam molestiae. Vel autem ullum aeque id, facer quidam ocurreret nec ut, electram assentior scribentur usu in. Per convenire imperdiet at, clita numquam definiebas ad cum.

Docendi ancillae splendide vel ut, et sit impetus perpetua adolescens. Senserit periculis urbanitas ea pro, eum essent adipiscing percipitur te, pri rebum eligendi ea. Mei sonet necessitatibus ne. Has in enim quando.

Vix te principes consectetuer. An soleat probatus honestatis has, solet aliquando temporibus te vix. Et eam petentium intellegebat, cu nec congue soluta delectus. No petentium argumentum quo, eius contentiones at nec, eum et zril dissentiet. An vel ridens facilis. Nullam semper evertitur an sit.</span>
						</div>
						<div class="card-actions">
							<div class="seemore action">See More</div>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="s12 col">
					<div class="card">
						<div class="card-support-text">
							<?php
								// If comments are open or we have at least one comment, load up the comment template
								if ( comments_open() || get_comments_number() ) :
									comments_template();
								endif;
							?>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="s12 col">
					<div class="card">
						<div class="card-support-text">
							<?php
								// If comments are open or we have at least one comment, load up the comment template
								if ( comments_open() || get_comments_number() ) :
									comments_template();
								endif;
							?>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	</div>

	<footer id="footer"></footer><!-- #footer -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
