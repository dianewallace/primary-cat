<?php
/**
 * Plugin Name: Primary Category
 * Plugin URI:  https://github.com/dianewallace/primary-cat
 * Description: A WordPress plugin that allows publishers to designate a primary category for posts.
 * Author: Diane Wallace
 * Author URI: http://dianewallace.co.uk
 * Version: 1.0.0
 * License: GPL2+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package primary-cat
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'PRIMARY_CAT_URL', plugin_dir_url( __FILE__ ) );
define( 'PRIMARY_CAT_DIR', plugin_dir_path( __FILE__ ) );

/**
 * Enqueue Scripts.
 */
require_once PRIMARY_CAT_DIR . 'includes/enqueue-scripts.php';

/**
 *
 */
require_once PRIMARY_CAT_DIR . 'includes/rest-api-meta-fields-support.php';

/**
 * Block Initializer.
 */
require_once PRIMARY_CAT_DIR . 'blocks/init.php';

/**
 * Render Blocks.
 */
require_once PRIMARY_CAT_DIR . 'blocks/views/render-primary-cat-block.php';
