<?php
/**
 * Add meta fields support in rest API for posts.
 *
 * @package primary-cat
 */
declare(strict_types=1);

defined( 'ABSPATH' ) or exit();


if( ! function_exists( 'primary_cat_post_meta_request_params' ) ) :

	add_filter( 'rest_post_query', 'post_meta_request_params', 99, 2 );
	/**
	 * Add meta fields support in rest API for post.
	 */
	function primary_cat_post_meta_request_params( $args, $request )
	{
		$args += array(
			'meta_key'   => $request['meta_key'],
			'meta_value' => $request['meta_value'],
			'meta_query' => $request['meta_query'],
		);

		return $args;
	}
endif;
