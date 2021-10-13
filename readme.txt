=== My First Block ===
Contributors:      Justin McKee &lt;thisisjustinmckee@gmail.com&gt;
Tags:              block
Tested up to:      5.8.0
Stable tag:        0.1.0
License:           GPL-2.0-or-later
License URI:       https://www.gnu.org/licenses/gpl-2.0.html

Custom Trout Unlimited Blocks

== Description ==

Provides custom block modifications.

== Installation ==

This section describes how to install the plugin and get it working.

e.g.

1. Upload the plugin files to the `/wp-content/plugins/medium-theory-gutenberg-blocks` directory.

2. Activate the plugin through the 'Plugins' screen in WordPress

== Changelog ==

= 0.1.0 =
* Release


== Creating New Bocks ==

1. Within the /blocks directory run:

$ npx @wordpress/create-block [YOUR-BLOCK-NAME]

2. In medium-theory-gutenberg-blocks.php, require your block:

require_once dirname( __FILE__ ) . '/blocks/[YOUR-BLOCK-NAME]/[YOUR-BLOCK-NAME].php';
