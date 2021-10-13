<?php

/**
 * Theme support for Gutenberg blocks
 */
function mtheory_add_gutenberg_theme_support() {
  // Custom theme colors
  // function theory_add_gutenberg_default_colors() {
  //   add_theme_support(
  //     'editor-color-palette',
  //     array(
  //       array(
  //         'name'    => 'White',
  //         'slug'    => 'white',
  //         'color'   => '#FFFFFF',
  //       ),
  //       array(
  //         'name'    => 'Black',
  //         'slug'    => 'black',
  //         'color'   => '#000000',
  //       ),
  //       array(
  //         'name'    => 'Pink',
  //         'slug'    => 'pink',
  //         'color'   => '#FF4444',
  //       ),
  //     )
  //   );
  // }
  // add_action( 'init', 'theory_add_gutenberg_default_colors');

  // Add Support for Wide Gutenberg Blocks
  // but only if on the Single Column template
  // Note: reload required when editing pages
  if(get_page_template_slug( $_GET['post'] ) === 'template-full-width.php') {
    add_theme_support( 'align-wide' );
  }

  // Custom Block Editor Units
  // Allow the post author to select other CSS units than "px"
  add_theme_support( 'custom-units' );

  // disable custom colors
  //add_theme_support( 'disable-custom-colors' );

}
add_action( 'after_setup_theme', 'mtheory_add_gutenberg_theme_support' );
