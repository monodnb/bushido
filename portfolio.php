<?php
/* Template Name: Portfolio */
get_header(); ?>

<?php
global $bsdfw;
?>

<div id="portfolio" data-role="page">
	<div class="paper-sheet">
		<div class="grid-list gs1 gm2 gl4">
			<?php
				switch($bsdfw['opt-projects-display']) {
					case '1' : get_template_part('inc/portfolio/default-portfolio'); break;
					case '2' : get_template_part('inc/portfolio/push-down-portfolio'); break;
					case '3' : get_template_part('inc/portfolio/slide-in-portfolio'); break;
					case '4' : get_template_part('inc/portfolio/lightbox-portfolio'); break;
					case '5' : get_template_part('inc/portfolio/single-page-portfolio'); break;
					default  : get_template_part('inc/portfolio/default-portfolio'); break;
				}
			?>
		</div>
	</div>
	<div id="works-pagination" class="paper=sheet" max-num-pages="<?php echo $wp_query->max_num_pages; ?>">
	   <?php next_posts_link(); ?>
	</div>
	<div id="card-content" class="paper-sheet full grey lighten-5 invisible"></div>
</div>

<?php get_footer(); ?>
