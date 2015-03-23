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

<div class="card-hero">
    <img class="hero-image" src="<?php echo $image_featured_url[0] ?>">
    <div class="card-hero-overlay"></div>
    <div class="hero-action"></div>
</div>

<div class="row card-panel card-info">
    <?php the_title( '<div class="card-panel-section"><span class="card-title">', '</span></div>' ); ?>
    <div class="card-panel-section"><span class="card-content"><?php echo the_content(); ?></span></div>
</div><!-- .entry-header -->

<div class="row card-panel entry-meta">
    <?php bushido_posted_on(); ?>
</div><!-- .entry-meta -->

<div class="row card-panel comments">
    <?php
        // If comments are open or we have at least one comment, load up the comment template
        if ( comments_open() || get_comments_number() ) :
            comments_template();
        endif;
    ?>
</div>
