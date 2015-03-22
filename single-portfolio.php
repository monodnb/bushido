<?php
/**
 * The template for displaying portfolio posts.
 *
 * @package bushido
 */
get_header(); ?>

<?php
	global $bsdfw;
?>

<?php while ( have_posts() ) : the_post(); 

    $title= str_ireplace('"', '', trim(get_the_title()));
	$desc= str_ireplace('"', '', trim(get_the_content()));
	$external_content = rwmb_meta('workexternallinkurl');
    $portfolio_type = rwmb_meta('worktype');?>

<div class="revealed-card">
		<?php switch($portfolio_type) {
			case '0' : get_template_part( 'content', 'slider' ); break;
			case '1' : get_template_part( 'content', 'external' ); break;
			case '2' : get_template_part( 'content', 'youtube' ); break;
			case '3' : get_template_part( 'content', 'soundcloud' ); break;	
			default : get_template_part( 'content', 'slider' ); break;		
		}?>
</div>
<?php endwhile; // end of the loop. ?>
<?php wp_footer(); ?>