<?php
/**
 * Enqueue Scripts.
 *
 * @package primary-cat
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

add_action( 'enqueue_block_editor_assets', 'primary_cat_settings_script_enqueue' );
/**
 * Enqueue Primary Category settings panel script.
 */
function primary_cat_settings_script_enqueue() {

	wp_enqueue_script(
		'primary-cat-settings-js',
		plugin_dir_url( __FILE__ ) . 'assets/js/primary-category-settings-panel.min.js',
		array(
			'wp-plugins',
			'wp-edit-post',
			'wp-element'
		)
	);
}
