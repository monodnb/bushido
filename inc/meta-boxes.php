<?php
/**
 * Registering meta boxes
 *
 * All the definitions of meta boxes are listed below with comments.
 * Please read them CAREFULLY.
 *
 * You also should read the changelog to know what has been changed before updating.
 *
 * For more information, please visit:
 * @link http://www.deluxeblogtips.com/meta-box/
 */

	/**
	 * prefix of meta keys (optional)
	 * Use underscore (_) at the beginning to make keys hidden
	 * Alt.: You also can make prefix empty to disable it
	 */
	// Better has an underscore as last sign
	$prefix = 'bsd_';
	
	global $meta_boxes;

	$meta_boxes = array();
	

	/* ----------------------------------------------------- */
	// Page Settings
	/* ----------------------------------------------------- */

	$meta_boxes[] = array(
		'id' => 'pagesettings',
		'title' => 'Page Settings',
		'pages' => array( 'page' ),
		'context' => 'normal',
		'priority' => 'high',

		// List of meta fields
		'fields' => array(

			array(
				'name'		=> 'Open as a Separate Page',
				'id'		=> $prefix . 'separate_page',
				'type' => 'checkbox',
				// Value can be 0 or 1
				'std'  => 0,
			),

			array(
				'name' => 'Disable Page Title',
				'id'   => $prefix . "disable_title",
				'type' => 'checkbox',
				// Value can be 0 or 1
				'std'  => 0,
			),
			
			array(
				'name' 		=> 'Menu Icon',
				'desc' 		=> 'Paste your FontAwesome <i> tag for the icon',
				'id'   		=> $prefix . "menu_icon",
				'clone'		=> false,
				'type'		=> 'text',
				'std'		=> ''
			),

			array(
				'name'		=> 'Alternate Page Title',
				'id'		=> $prefix . "alt_title",
				'clone'		=> false,
				'type'		=> 'text',
				'std'		=> ''
			),

			array(
				'name'		=> 'Page Subtitle',
				'id'		=> $prefix . "subtitle",
				'clone'		=> false,
				'type'		=> 'textarea',
				'std'		=> ''
			),	

			array(
				'name'		=> 'Disable section from menu',
				'id'		=> $prefix . 'disable_section_from_menu',
				'type' => 'checkbox',
				// Value can be 0 or 1
				'std'  => 0,
			),
		)
	);
	
	/* ----------------------------------------------------- */
	// Portfolio Settings
	/* ----------------------------------------------------- */
	
    $type_array = array('Image Slider','External Link','Youtube Video', 'Soundcloud Audio');

	// Project Info
	$meta_boxes[] = array(
		// Meta box id, UNIQUE per meta box. Optional since 4.1.5
		'id' => 'workinfo',

		// Meta box title - Will appear at the drag and drop handle bar. Required.
		'title' => __( 'Work Info', 'bsd' ),

		// Post types, accept custom post types as well - DEFAULT is array('post'). Optional.
		'pages' => array( 'portfolio' ),

		// Where the meta box appear: normal (default), advanced, side. Optional.
		'context' => 'normal',

		// Order of meta box: high (default), low. Optional.
		'priority' => 'high',

		// Auto save: true, false (default). Optional.
		'autosave' => true,

		// List of meta fields
		'fields' => array(
			// CUSTOM PROJECT TITLE
			array(
				// Field name - Will be used as label
				'name'  => __( 'Title', 'bsd' ),
				// Field ID, i.e. the meta key
				'id'    => 'workcustomtitle',
				// Field description (optional)
				'desc'  => __( 'Add a custom title to this project. Leave blank to use the default title instead', 'bsd' ),
				'type'  => 'text',
				// Default value (optional)
				'std'   => __( '', 'bsd' ),
				// CLONES: Add to make the field cloneable (i.e. have multiple value)
				'clone' => false,
			),
			
			// TEXTAREA
			array(
				'name' => __( 'Description', 'bsd' ),
				'desc' => __( 'Custom description for this project. Leave blank to use the excerpt', 'bsd' ),
				'id'   => 'workcustomdescription',
				'type' => 'textarea',
				'cols' => 20,
				'rows' => 3,
			),
		),
	);
    
    // Project Type Selection
	$meta_boxes[] = array(
		'id' => 'worktypeselector',
		'title' => __( 'Project Type', 'bsd' ),
        'pages' => array( 'portfolio' ),
		'context' => 'normal',
		'priority' => 'low',
		'autosave' => true,

		// List of meta fields
        'fields' => array(
			// IMAGE ADVANCED (WP 3.5+)
			array(
				'name'     => __( 'Select', 'bsd' ),
                'desc'     => __( 'Select type for this project and complete it`s respective box below', 'bsd' ),
				'id'       => 'worktype',
				'type'     => 'select',
				// Array of 'value' => 'Label' pairs for select box
				'options'  => $type_array,
				// Select multiple values, optional. Default is false.
				'multiple'    => false,
				// 'std'         => 'value2', // Default value, optional
				'placeholder' => __( 'Select an Item', 'bsd' ),
			),
        ),
	);

	// Image Slider Project
	$meta_boxes[] = array(
		'id' => 'imageworktype',
		'title' => __( 'Image Slider Project', 'bsd' ),
        'pages' => array( 'portfolio' ),
		'context' => 'normal',
		'priority' => 'low',

		// List of meta fields
        'fields' => array(
			// IMAGE ADVANCED (WP 3.5+)
			array(
				'name' => __( 'Slider Images', 'bsd' ),
                'desc' => __( 'Upload or select up to 25 images for the project slideshow. <br> Upload or select one to display a single image. <br><strong>Note:</strong> The grid thumbnail will be the Featured Image.', 'bsd' ),
				'id'   => "worksliderimages",
				'type' => 'image_advanced',
				'max_file_uploads' => 25,
			),
        ),
	);
    
    // External Link Project
	$meta_boxes[] = array(
		'id' => 'externalworktype',
		'title' => __( 'External Link Project', 'bsd' ),
        'pages' => array( 'portfolio' ),
		'context' => 'normal',
		'priority' => 'low',
		'autosave' => true,

		// List of meta fields
        'fields' => array(
			// IMAGE ADVANCED (WP 3.5+)
			array(
				'name' => __( 'URL', 'bsd' ),
                'desc' => __( 'Paste the URL for the chosen content', 'bsd' ),
				'id'   => "workexternallinkurl",
				'type' => 'text',
                'cols' => "20",
                'std'  => "",
			),
        ),
	);
    
    // Youtube Project
	$meta_boxes[] = array(
		'id' => 'youtubeworktype',
		'title' => __( 'Youtube Video Project', 'bsd' ),
        'pages' => array( 'portfolio' ),
		'context' => 'normal',
		'priority' => 'low',
		'autosave' => true,

		// List of meta fields
        'fields' => array(
			// IMAGE ADVANCED (WP 3.5+)
			array(
				'name' => __( 'Video ID', 'bsd' ),
                'desc' => __( 'Paste the ID of the video (E.g. http://www.youtube.com/watch?v=<strong>bvLaTupw-hk</strong>) <br><strong>Note:</strong> The grid thumbnail will be the Featured Image.', 'bsd' ),
				'id'   => "workyoutubeid",
				'type' => 'text',
                'cols' => "20",
                'std'  => "",
			),
        ),
	);

    
    // Soundcloud Project
	$meta_boxes[] = array(
		'id' => 'soundcloudworktype',
		'title' => __( 'Soundcloud Audio', 'bsd' ),
        'pages' => array( 'portfolio' ),
		'context' => 'normal',
		'priority' => 'low',
		'autosave' => true,

		// List of meta fields
        'fields' => array(
			// IMAGE ADVANCED (WP 3.5+)
			array(
				'name' => __( 'Iframe Embed Code', 'bsd' ),
                'desc' => __( 'Paste the iframe embed code for the selected soundcloud player (<strong>NOT</strong> the "Wordpress code") <br><strong>Note:</strong> The grid thumbnail will be the Featured Image.', 'bsd' ),
				'id'   => "worksoundcloudiframe",
				'type' => 'textarea',
                'std'  => "",
                'cols' => "20",
                'rows' => "8"
			),
        ),
	);
    

/********************* META BOX REGISTERING ***********************/

/**
 * Register meta boxes
 *
 * @return void
 */
function bsd_register_meta_boxes()
{
	global $meta_boxes;

	// Make sure there's no errors when the plugin is deactivated or during upgrade
	if ( class_exists( 'RW_Meta_Box' ) )
	{
		foreach ( $meta_boxes as $meta_box )
		{
			new RW_Meta_Box( $meta_box );
		}
	}
}

// Hook to 'admin_init' to make sure the meta box class is loaded before
// (in case using the meta box class in another plugin)
// This is also helpful for some conditionals like checking page template, categories, etc.
add_action( 'admin_init', 'bsd_register_meta_boxes' );