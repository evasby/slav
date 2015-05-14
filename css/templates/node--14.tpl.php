<?php

/**
 * @file
 * Default theme implementation to display a node.
 *
 * Available variables:
 * - $title: the (sanitized) title of the node.
 * - $content: An array of node items. Use render($content) to print them all,
 *   or print a subset such as render($content['field_example']). Use
 *   hide($content['field_example']) to temporarily suppress the printing of a
 *   given element.
 * - $user_picture: The node author's picture from user-picture.tpl.php.
 * - $date: Formatted creation date. Preprocess functions can reformat it by
 *   calling format_date() with the desired parameters on the $created variable.
 * - $name: Themed username of node author output from theme_username().
 * - $node_url: Direct URL of the current node.
 * - $display_submitted: Whether submission information should be displayed.
 * - $submitted: Submission information created from $name and $date during
 *   template_preprocess_node().
 * - $classes: String of classes that can be used to style contextually through
 *   CSS. It can be manipulated through the variable $classes_array from
 *   preprocess functions. The default values can be one or more of the
 *   following:
 *   - node: The current template type; for example, "theming hook".
 *   - node-[type]: The current node type. For example, if the node is a
 *     "Blog entry" it would result in "node-blog". Note that the machine
 *     name will often be in a short form of the human readable label.
 *   - node-teaser: Nodes in teaser form.
 *   - node-preview: Nodes in preview mode.
 *   The following are controlled through the node publishing options.
 *   - node-promoted: Nodes promoted to the front page.
 *   - node-sticky: Nodes ordered above other non-sticky nodes in teaser
 *     listings.
 *   - node-unpublished: Unpublished nodes visible only to administrators.
 * - $title_prefix (array): An array containing additional output populated by
 *   modules, intended to be displayed in front of the main title tag that
 *   appears in the template.
 * - $title_suffix (array): An array containing additional output populated by
 *   modules, intended to be displayed after the main title tag that appears in
 *   the template.
 *
 * Other variables:
 * - $node: Full node object. Contains data that may not be safe.
 * - $type: Node type; for example, story, page, blog, etc.
 * - $comment_count: Number of comments attached to the node.
 * - $uid: User ID of the node author.
 * - $created: Time the node was published formatted in Unix timestamp.
 * - $classes_array: Array of html class attribute values. It is flattened
 *   into a string within the variable $classes.
 * - $zebra: Outputs either "even" or "odd". Useful for zebra striping in
 *   teaser listings.
 * - $id: Position of the node. Increments each time it's output.
 *
 * Node status variables:
 * - $view_mode: View mode; for example, "full", "teaser".
 * - $teaser: Flag for the teaser state (shortcut for $view_mode == 'teaser').
 * - $page: Flag for the full page state.
 * - $promote: Flag for front page promotion state.
 * - $sticky: Flags for sticky post setting.
 * - $status: Flag for published status.
 * - $comment: State of comment settings for the node.
 * - $readmore: Flags true if the teaser content of the node cannot hold the
 *   main body content.
 * - $is_front: Flags true when presented in the front page.
 * - $logged_in: Flags true when the current user is a logged-in member.
 * - $is_admin: Flags true when the current user is an administrator.
 *
 * Field variables: for each field instance attached to the node a corresponding
 * variable is defined; for example, $node->body becomes $body. When needing to
 * access a field's raw values, developers/themers are strongly encouraged to
 * use these variables. Otherwise they will have to explicitly specify the
 * desired field language; for example, $node->body['en'], thus overriding any
 * language negotiation rule that was previously applied.
 *
 * @see template_preprocess()
 * @see template_preprocess_node()
 * @see template_process()
 *
 * @ingroup themeable
 */
drupal_add_js(drupal_get_path('theme', 'slav') . '/js/konva.min.js');
$path = drupal_get_path('theme', 'slav');
drupal_add_js(array('path' => $path), 'setting');
drupal_add_js(drupal_get_path('theme', 'slav') . '/js/canvas.js');
?>
<div id="node-<?php print $node->nid; ?>" class="<?php print $classes; ?> clearfix"<?php print $attributes; ?>>
  <?php print $user_picture; ?>
  <?php print render($title_prefix); ?>
  <?php if (!$page): ?>
    <h2<?php print $title_attributes; ?>><a href="<?php print $node_url; ?>"><?php print $title; ?></a></h2>
  <?php endif; ?>
  <?php print render($title_suffix); ?>
  <?php if ($display_submitted): ?>
    <div class="submitted">
      <?php print $submitted; ?>
    </div>
  <?php endif; ?>
  <div class="mynode content"<?php print $content_attributes; ?>>
    <?php
      hide($content['comments']);
      hide($content['links']);
      print render($content);
    ?>
  </div>
  <?php if(isset($node->field_image['und'])) :?>
    <div class="gallerynode">
      <?php
        $field_image = field_get_items('node', $node, 'field_image');
        foreach ($field_image as $key => $value) {
          $output  = field_view_value('node', $node, 'field_image', $value, array(
            'type' => 'colorbox',
            'label'=>'hidden',
            'settings' => array(
              'colorbox_node_style'  => 'mythumb',
              'colorbox_image_style' => 'full',
              'colorbox_gallery'     => 'post',
              'colorbox_caption'     => 'auto',
            )
          ));
          print '<div class="gallerynode_item">';
          print render($output);
          print '</div>';
        }
      ?>
    </div>
  <?php endif; ?>
  <?php print render($content['links']); ?>
  <?php print render($content['comments']); ?>
  <?php
?>
  <div id="canvas"></div>
  <div class="hide">
  	<?php $block = module_invoke('webform', 'block_view', 'client-block-15'); ?>
    <?php print render($block['content']); ?>
    <div id="term15" class="object"><?php $term = taxonomy_term_load(15); ?>
      <div class="object_title"></div>
      <div class="object_inner">
        <div class="object_text">
          <div class="object_head"><?php print $term->name; ?></div>
          <?php print $term->description; ?>
          <a href="?inline=true#webform-ajax-wrapper-15" class="object_link colorbox-inline">Получить коммерческое предложение</a>
        </div>
        <div class="object_image">
          <?php $field_image = field_get_items('taxonomy_term', $term, 'field_image');
          $output  = field_view_value('taxonomy_term', $term, 'field_image', $field_image[0], array(
            'type' => 'image',
            'settings' => array(
              'image_link' => 'none',
            ),
          ));
          print render($output); ?>
        </div>
      </div>
    </div>
    <div id="term16" class="object"><?php $term = taxonomy_term_load(16); ?>
      <div class="object_title"></div>
      <div class="object_inner">
        <div class="object_text">
          <div class="object_head"><?php print $term->name; ?></div>
          <?php print $term->description; ?>
          <a href="?inline=true#webform-ajax-wrapper-15" class="object_link colorbox-inline">Получить коммерческое предложение</a>
        </div>
        <div class="object_image">
          <?php $field_image = field_get_items('taxonomy_term', $term, 'field_image');
          $output  = field_view_value('taxonomy_term', $term, 'field_image', $field_image[0], array(
            'type' => 'image',
            'settings' => array(
              'image_link' => 'none',
            ),
          ));
          print render($output); ?>
        </div>
      </div>
    </div>
    <div id="term17" class="object"><?php $term = taxonomy_term_load(17); ?>
      <div class="object_title"></div>
      <div class="object_inner">
        <div class="object_text">
          <div class="object_head"><?php print $term->name; ?></div>
          <?php print $term->description; ?>
          <a href="?inline=true#webform-ajax-wrapper-15" class="object_link colorbox-inline">Получить коммерческое предложение</a>
        </div>
        <div class="object_image">
          <?php $field_image = field_get_items('taxonomy_term', $term, 'field_image');
          $output  = field_view_value('taxonomy_term', $term, 'field_image', $field_image[0], array(
            'type' => 'image',
            'settings' => array(
              'image_link' => 'none',
            ),
          ));
          print render($output); ?>
        </div>
      </div>
    </div>
    <div id="term18" class="object"><?php $term = taxonomy_term_load(18); ?>
      <div class="object_title"></div>
      <div class="object_inner">
        <div class="object_text">
          <div class="object_head"><?php print $term->name; ?></div>
          <?php print $term->description; ?>
          <a href="?inline=true#webform-ajax-wrapper-15" class="object_link colorbox-inline">Получить коммерческое предложение</a>
        </div>
        <div class="object_image">
          <?php $field_image = field_get_items('taxonomy_term', $term, 'field_image');
          $output  = field_view_value('taxonomy_term', $term, 'field_image', $field_image[0], array(
            'type' => 'image',
            'settings' => array(
              'image_link' => 'none',
            ),
          ));
          print render($output); ?>
        </div>
      </div>
    </div>
    <div id="term19" class="object"><?php $term = taxonomy_term_load(19); ?>
      <div class="object_title"></div>
      <div class="object_inner">
        <div class="object_text">
          <div class="object_head"><?php print $term->name; ?></div>
          <?php print $term->description; ?>
          <a href="?inline=true#webform-ajax-wrapper-15" class="object_link colorbox-inline">Получить коммерческое предложение</a>
        </div>
        <div class="object_image">
          <?php $field_image = field_get_items('taxonomy_term', $term, 'field_image');
          $output  = field_view_value('taxonomy_term', $term, 'field_image', $field_image[0], array(
            'type' => 'image',
            'settings' => array(
              'image_link' => 'none',
            ),
          ));
          print render($output); ?>
        </div>
      </div>
    </div>
    <div id="term20" class="object"><?php $term = taxonomy_term_load(20); ?>
      <div class="object_title"></div>
      <div class="object_inner">
        <div class="object_text">
          <div class="object_head"><?php print $term->name; ?></div>
          <?php print $term->description; ?>
          <a href="?inline=true#webform-ajax-wrapper-15" class="object_link colorbox-inline">Получить коммерческое предложение</a>
        </div>
        <div class="object_image">
          <?php $field_image = field_get_items('taxonomy_term', $term, 'field_image');
          $output  = field_view_value('taxonomy_term', $term, 'field_image', $field_image[0], array(
            'type' => 'image',
            'settings' => array(
              'image_link' => 'none',
            ),
          ));
          print render($output); ?>
        </div>
      </div>
    </div>
    <div id="term21" class="object"><?php $term = taxonomy_term_load(21); ?>
      <div class="object_title"></div>
      <div class="object_inner">
        <div class="object_text">
          <div class="object_head"><?php print $term->name; ?></div>
          <?php print $term->description; ?>
          <a href="?inline=true#webform-ajax-wrapper-15" class="object_link colorbox-inline">Получить коммерческое предложение</a>
        </div>
        <div class="object_image">
          <?php $field_image = field_get_items('taxonomy_term', $term, 'field_image');
          $output  = field_view_value('taxonomy_term', $term, 'field_image', $field_image[0], array(
            'type' => 'image',
            'settings' => array(
              'image_link' => 'none',
            ),
          ));
          print render($output); ?>
        </div>
      </div>
    </div>
    <div id="term22" class="object"><?php $term = taxonomy_term_load(22); ?>
      <div class="object_title"></div>
      <div class="object_inner">
        <div class="object_text">
          <div class="object_head"><?php print $term->name; ?></div>
          <?php print $term->description; ?>
          <a href="?inline=true#webform-ajax-wrapper-15" class="object_link colorbox-inline">Получить коммерческое предложение</a>
        </div>
        <div class="object_image">
          <?php $field_image = field_get_items('taxonomy_term', $term, 'field_image');
          $output  = field_view_value('taxonomy_term', $term, 'field_image', $field_image[0], array(
            'type' => 'image',
            'settings' => array(
              'image_link' => 'none',
            ),
          ));
          print render($output); ?>
        </div>
      </div>
    </div>
    <div id="term23" class="object"><?php $term = taxonomy_term_load(23); ?>
      <div class="object_title"></div>
      <div class="object_inner">
        <div class="object_text">
          <div class="object_head"><?php print $term->name; ?></div>
          <?php print $term->description; ?>
          <a href="?inline=true#webform-ajax-wrapper-15" class="object_link colorbox-inline">Получить коммерческое предложение</a>
        </div>
        <div class="object_image">
          <?php $field_image = field_get_items('taxonomy_term', $term, 'field_image');
          $output  = field_view_value('taxonomy_term', $term, 'field_image', $field_image[0], array(
            'type' => 'image',
            'settings' => array(
              'image_link' => 'none',
            ),
          ));
          print render($output); ?>
        </div>
      </div>
    </div>
    <div id="term24" class="object"><?php $term = taxonomy_term_load(24); ?>
      <div class="object_title"></div>
      <div class="object_inner">
        <div class="object_text">
          <div class="object_head"><?php print $term->name; ?></div>
          <?php print $term->description; ?>
          <a href="?inline=true#webform-ajax-wrapper-15" class="object_link colorbox-inline">Получить коммерческое предложение</a>
        </div>
        <div class="object_image">
          <?php $field_image = field_get_items('taxonomy_term', $term, 'field_image');
          $output  = field_view_value('taxonomy_term', $term, 'field_image', $field_image[0], array(
            'type' => 'image',
            'settings' => array(
              'image_link' => 'none',
            ),
          ));
          print render($output); ?>
        </div>
      </div>
    </div>
    <div id="term25" class="object"><?php $term = taxonomy_term_load(25); ?>
      <div class="object_title"></div>
      <div class="object_inner">
        <div class="object_text">
          <div class="object_head"><?php print $term->name; ?></div>
          <?php print $term->description; ?>
          <a href="?inline=true#webform-ajax-wrapper-15" class="object_link colorbox-inline">Получить коммерческое предложение</a>
        </div>
        <div class="object_image">
          <?php $field_image = field_get_items('taxonomy_term', $term, 'field_image');
          $output  = field_view_value('taxonomy_term', $term, 'field_image', $field_image[0], array(
            'type' => 'image',
            'settings' => array(
              'image_link' => 'none',
            ),
          ));
          print render($output); ?>
        </div>
      </div>
    </div>
    <div id="term26" class="object"><?php $term = taxonomy_term_load(26); ?>
      <div class="object_title"></div>
      <div class="object_inner">
        <div class="object_text">
          <div class="object_head"><?php print $term->name; ?></div>
          <?php print $term->description; ?>
          <a href="?inline=true#webform-ajax-wrapper-15" class="object_link colorbox-inline">Получить коммерческое предложение</a>
        </div>
        <div class="object_image">
          <?php $field_image = field_get_items('taxonomy_term', $term, 'field_image');
          $output  = field_view_value('taxonomy_term', $term, 'field_image', $field_image[0], array(
            'type' => 'image',
            'settings' => array(
              'image_link' => 'none',
            ),
          ));
          print render($output); ?>
        </div>
      </div>
    </div>
    <div id="term27" class="object"><?php $term = taxonomy_term_load(27); ?>
      <div class="object_title"></div>
      <div class="object_inner">
        <div class="object_text">
          <div class="object_head"><?php print $term->name; ?></div>
          <?php print $term->description; ?>
          <a href="?inline=true#webform-ajax-wrapper-15" class="object_link colorbox-inline">Получить коммерческое предложение</a>
        </div>
        <div class="object_image">
          <?php $field_image = field_get_items('taxonomy_term', $term, 'field_image');
          $output  = field_view_value('taxonomy_term', $term, 'field_image', $field_image[0], array(
            'type' => 'image',
            'settings' => array(
              'image_link' => 'none',
            ),
          ));
          print render($output); ?>
        </div>
      </div>
    </div>
    <div id="term28" class="object"><?php $term = taxonomy_term_load(28); ?>
      <div class="object_title"></div>
      <div class="object_inner">
        <div class="object_text">
          <div class="object_head"><?php print $term->name; ?></div>
          <?php print $term->description; ?>
          <a href="?inline=true#webform-ajax-wrapper-15" class="object_link colorbox-inline">Получить коммерческое предложение</a>
        </div>
        <div class="object_image">
          <?php $field_image = field_get_items('taxonomy_term', $term, 'field_image');
          $output  = field_view_value('taxonomy_term', $term, 'field_image', $field_image[0], array(
            'type' => 'image',
            'settings' => array(
              'image_link' => 'none',
            ),
          ));
          print render($output); ?>
        </div>
      </div>
    </div>
    <div id="term29" class="object"><?php $term = taxonomy_term_load(29); ?>
      <div class="object_title"></div>
      <div class="object_inner">
        <div class="object_text">
          <div class="object_head"><?php print $term->name; ?></div>
          <?php print $term->description; ?>
          <a href="?inline=true#webform-ajax-wrapper-15" class="object_link colorbox-inline">Получить коммерческое предложение</a>
        </div>
        <div class="object_image">
          <?php $field_image = field_get_items('taxonomy_term', $term, 'field_image');
          $output  = field_view_value('taxonomy_term', $term, 'field_image', $field_image[0], array(
            'type' => 'image',
            'settings' => array(
              'image_link' => 'none',
            ),
          ));
          print render($output); ?>
        </div>
      </div>
    </div>
  </div>
</div>
