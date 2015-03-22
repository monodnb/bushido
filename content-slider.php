<?php
/**
 * @package bushido
 */
$slider_content = rwmb_meta('worksliderimages', 'type=file');
global $bsdfw;
?>


<?php
	$image_id = get_post_thumbnail_id();
	$image_featured_url = wp_get_attachment_image_src($image_id,'featured', true);
?>

<div class="revealed-card-hero">
    <img class="responsive-image" src="<?php echo $image_featured_url[0] ?>">
</div>

<div class="revealed-card-title">
    <?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
</div><!-- .entry-header -->

<div class="revealed-card-description">
    <?php the_content(); ?>
</div><!-- .entry-content -->

<div class="entry-meta">
    <?php bushido_posted_on(); ?>
</div><!-- .entry-meta -->

