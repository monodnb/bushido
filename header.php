<?php
/**
 * The header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="content">
 *
 * @package bushido
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="profile" href="http://gmpg.org/xfn/11">
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="hfeed site">
	<a class="skip-link screen-reader-text" href="#content"><?php _e( 'Skip to content', 'bushido' ); ?></a>

	<header id="header">
		<div id="toolbar" class="grey lighten-4"></div>
	</header><!-- #header -->

	<?php global $bsdfw;
		switch($bsdfw['opt-layout']) {
			case '1' : $containerClass = "layout fullwidth"; break;
			case '2' : $containerClass = "layout"; break;
			default : $containerClass = "layout"; break;
		}
	?>

	<div id="content-area" class="<?php echo $containerClass ?>">
