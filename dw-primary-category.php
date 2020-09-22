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

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'blocks/init.php';
