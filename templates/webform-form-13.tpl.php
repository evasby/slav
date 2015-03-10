<?php 
  unset($form['submitted']['name']['#theme_wrappers']);
  unset($form['submitted']['phone']['#theme_wrappers']);
  unset($form['actions']['#theme_wrappers']);
  //dpm($form);
?>
<div class="callback">   
<div class="callback_title"><?php print $form['#node']->title; ?></div>
<?php if(isset($form['submitted']['name'])) : ?>
  <div class="callback_inputwrap">
    <div class="callback_label"><?php print $form['submitted']['name']['#title'] ?>:
      <?php if($form['submitted']['name']['#required'] == '1') : ?>
        <sup>*</sup>
      <?php endif; ?>
    </div>
    <?php print drupal_render($form['submitted']['name']); ?>
  </div>
<?php endif; ?>
<?php if(isset($form['submitted']['phone'])) : ?>
  <div class="callback_inputwrap">
    <div class="callback_label"><?php print $form['submitted']['phone']['#title'] ?>:
      <?php if($form['submitted']['phone']['#required'] == '1') : ?>
        <sup>*</sup>
      <?php endif; ?>
    </div>
    <?php print drupal_render($form['submitted']['phone']); ?>
  </div>
<?php endif; ?>
<div class="callback_buttonwrap">
  <?php print drupal_render_children($form); ?>
</div>
</div>