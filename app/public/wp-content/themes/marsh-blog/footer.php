<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Marsh Blog
 */

/**
 *
 * @hooked marsh_blog_footer_start
 */
do_action( 'marsh_blog_action_before_footer' );

/**
 * Hooked - marsh_blog_footer_top_section -10
 * Hooked - marsh_blog_footer_section -20
 */
do_action( 'marsh_blog_action_footer' );

/**
 * Hooked - marsh_blog_footer_end. 
 */
do_action( 'marsh_blog_action_after_footer' );

wp_footer(); ?>

</body>  
</html>