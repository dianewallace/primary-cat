<?php
/**
 * Functions to register client-side assets (scripts and stylesheets) for the
 * Gutenberg block.
 *
 * @package primary-cat
 */

declare(strict_types=1);

defined( 'ABSPATH' ) or exit();

add_action( 'admin_enqueue_scripts', 'primary_cat_assets' );
/**
 * Enqueue Gutenberg block assets for backend editor.
 *
 * @since 1.0.0
 */
function primary_cat_assets() {
	global $post;
	$dir = dirname( __FILE__ );

	$index_js = 'block.build.js';
	wp_enqueue_script(
		'primary-cat-block',
		plugins_url( $index_js, __FILE__ ),
		array(
			'wp-blocks',
			'wp-i18n',
			'wp-element',
			'wp-components',
			'wp-editor',
		),
		filemtime( "$dir/$index_js" )
	);
}

add_action( 'init', 'primary_cat_block_init' );
/**
 * Register Primary Category block.
 *
 * @since 1.0.0
 */
function primary_cat_block_init() {
	// Skip block registration if Gutenberg is not enabled/merged.
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	register_meta(
		'post',
		'_dw_primary_category',
		array(
			'show_in_rest'  => true,
			'auth_callback' => function () {
				return current_user_can( 'edit_posts' );
			}
		)
	);

	register_block_type( 'primary-cat/get-primary-cat', array(
		'attributes'      => array(
			'heading'  => array(
				'type'    => 'string',
				'default' => __( 'Posts by Primary Category', 'primary-cat' )
			),
			'post_ids' => array(
				'type'    => 'array',
				'default' => []
			),
			'cat_id' => array(
				'type'    => 'integer',
				'default' => 0
			),
		),
		'editor_script'   => 'primary-cat-block',
		'render_callback' => 'render_primary_cat_block'
	) );
}
