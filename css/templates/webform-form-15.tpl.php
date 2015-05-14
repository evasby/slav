<?php 
  unset($form['submitted']['name']['#theme_wrappers']);
  unset($form['submitted']['phone']['#theme_wrappers']);
  unset($form['submitted']['email']['#theme_wrappers']);
  unset($form['submitted']['object']['#theme_wrappers']);
  unset($form['actions']['#theme_wrappers']);
?>
<div class="comm">   
  <div class="comm_title"><?php print $form['#node']->title; ?></div>
  <div class="comm_descr">
  <?php
    $node = node_load($form['#node']->vid);
    $field_descr = field_get_items('node', $node, 'field_descr');
    foreach ($field_descr as $key=>$value) {
      $output  = field_view_value('node', $node, 'field_descr', $field_descr[$key]);
      print render($output);
    }
  ?>
  </div>
  <?php if(isset($form['submitted']['name'])) : ?>
    <div class="comm_inputwrap">
      <div class="comm_label"><?php print $form['submitted']['name']['#title'] ?>:
        <?php if($form['submitted']['name']['#required'] == '1') : ?>
          <sup>*</sup>
        <?php endif; ?>
      </div>
      <?php print drupal_render($form['submitted']['name']); ?>
    </div>
  <?php endif; ?>
  <?php if(isset($form['submitted']['phone'])) : ?>
    <div class="comm_inputwrap">
      <div class="comm_label"><?php print $form['submitted']['phone']['#title'] ?>:
        <?php if($form['submitted']['phone']['#required'] == '1') : ?>
          <sup>*</sup>
        <?php endif; ?>
      </div>
      <?php print drupal_render($form['submitted']['phone']); ?>
    </div>
  <?php endif; ?>
  <?php if(isset($form['submitted']['email'])) : ?>
    <div class="comm_inputwrap">
      <div class="comm_label"><?php print $form['submitted']['email']['#title'] ?>:
        <?php if($form['submitted']['email']['#required'] == '1') : ?>
          <sup>*</sup>
        <?php endif; ?>
      </div>
      <?php print drupal_render($form['submitted']['email']); ?>
    </div>
  <?php endif; ?>
  <?php if(isset($form['submitted']['object'])) : ?>
    <div class="comm_hidden">
      <?php print drupal_render($form['submitted']['object']); ?>
    </div>
  <?php endif; ?>
  <div class="comm_buttonwrap">
    <?php print drupal_render_children($form); ?>
  </div>
</div>