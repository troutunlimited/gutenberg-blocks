<?php

add_action( 'after_setup_theme', 'mtheory_add_image_sizes' );
function mtheory_add_image_sizes() {
  add_theme_support( 'post-thumbnails' );
  add_image_size( 'sm_3x2', 480, 320, TRUE );
  add_image_size( 'md_3x2', 768, 512, TRUE );
  add_image_size( 'lg_3x2', 1140, 760, TRUE );
  add_image_size( 'xl_3x2', 1920, 1280, TRUE );
}

add_filter( 'image_size_names_choose', 'myprefix_custom_image_sizes' );
function myprefix_custom_image_sizes( $size_names ) {

    // Add new image sizes to array.
    $new_size_names = array(
        'sm_3x2'    => esc_html__( '3:2 Small', 'card' ),
        'md_3x2'    => esc_html__( '3:2 Medium', 'card' ),
        'lg_3x2'    => esc_html__( '3:2 Large', 'card' ),
        'xl_3x2'    => esc_html__( '3:2 Extra Large', 'card' ),
    );

    // Combine the two arrays.
    $size_names = array_merge( $new_size_names, $size_names );
    return $size_names;
}
