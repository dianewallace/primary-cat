<?php
/**
 * Render callback functions for Primary Category blocks.
 *
 * @package primary-cat
 */

declare(strict_types=1);

defined( 'ABSPATH' ) or exit();

/**
 * Render display posts by primary category block.
 *
 * @param $attributes Gutenberg block attributes.
 *
 * @return string HTML markup.
 */
function render_primary_cat_block( $attributes ) {

	$heading = $attributes['heading'];
	$posts = get_posts( array(
		'include' => $attributes['post_ids']
	) );
	$content = '';

	if ( $posts ) {
		foreach ( $posts as $post ) {
			$content .= '<h2><a href="' . esc_url( get_permalink( $post->ID ) ) . '">' . esc_html( $post->post_title ) . '</h2>';
			$content .= '<div>' . esc_html( $post->post_excerpt ) . '</div>';
		}
		wp_reset_postdata();
	}

	return '<div><h1>' . $heading . '</h1><div>' . $content . '</div></div>';
}
