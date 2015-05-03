<!-- Start Projects Grid -->

	<?php
        global $bsdfw;
		$paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
		$port_args = array(
			'post_type' 				=> 'portfolio',
			'posts_per_page' 			=> $bsdfw['opt-visible-projects'],
			'post_status' 				=> 'publish',
			'orderby' 					=> 'menu_order',
			'order' 					=> 'ASC',
			'paged' 					=> $paged
		);	
	?>

	<?php $wp_query = new WP_Query( $port_args ); ?>

	<?php if ( $wp_query->have_posts() ) : ?>
	<!-- the loop -->
	<?php while ( $wp_query->have_posts() ) : $wp_query->the_post(); ?>

	<?php
        $title= str_ireplace('"', '', trim(get_the_title()));
        $desc= str_ireplace('"', '', trim(get_the_content()));
        $image_id = get_post_thumbnail_id();
        $permalink = get_permalink();
        $image_url = wp_get_attachment_image_src($image_id,'card', true);
	?>

<div class="cell">
<div class="tile">
	<div class="media">
		<img src="<?php echo $image_url[0] ?>" alt="">
		<div class="scrim bottom"></div>
		<div class="scrim top"></div>
		<span class="title"><?php echo $title ?></span>
	</div>
</div>
</div>
	<?php endwhile; ?>

<?php wp_reset_postdata(); ?>
<?php else : ?>
    <p><?php _e( 'Sorry, no posts matched your criteria.' ); ?></p>
<?php endif; ?>
<!-- End Projects Grid -->
