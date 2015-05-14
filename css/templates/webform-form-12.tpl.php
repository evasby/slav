<?php 
  unset($form['submitted']['name']['#theme_wrappers']);
  unset($form['submitted']['phone']['#theme_wrappers']);
  unset($form['submitted']['email']['#theme_wrappers']);
  unset($form['submitted']['message']['#theme_wrappers']);
  unset($form['actions']['#theme_wrappers']);
?>
<?php if(isset($form['submitted']['name'])) : ?>
	<div class="feedback_inputwrap">
		<div class="feedback_label"><?php print $form['submitted']['name']['#title'] ?>:
			<?php if($form['submitted']['name']['#required'] == '1') : ?>
				<sup>*</sup>
			<?php endif; ?>
		</div>
		<?php print drupal_render($form['submitted']['name']); ?>
	</div>
<?php endif; ?>
<?php if(isset($form['submitted']['phone'])) : ?>
	<div class="feedback_inputwrap">
		<div class="feedback_label"><?php print $form['submitted']['phone']['#title'] ?>:
			<?php if($form['submitted']['phone']['#required'] == '1') : ?>
				<sup>*</sup>
			<?php endif; ?>
		</div>
	  <?php print drupal_render($form['submitted']['phone']); ?>
	</div>
<?php endif; ?>
<?php if(isset($form['submitted']['email'])) : ?>
	<div class="feedback_inputwrap">
		<div class="feedback_label"><?php print $form['submitted']['email']['#title'] ?>:
			<?php if($form['submitted']['email']['#required'] == '1') : ?>
				<sup>*</sup>
			<?php endif; ?>
		</div>
	  <?php print drupal_render($form['submitted']['email']); ?>
	</div>
<?php endif; ?>
<?php if(isset($form['submitted']['message'])) : ?>
	<div class="feedback_textareawrap">
		<div class="feedback_label"><?php print $form['submitted']['message']['#title'] ?>:
			<?php if($form['submitted']['message']['#required'] == '1') : ?>
				<sup>*</sup>
			<?php endif; ?>
		</div>
	  <?php print drupal_render($form['submitted']['message']); ?>
	</div>
<?php endif; ?>
<div class="feedback_buttonwrap">
  <?php print drupal_render_children($form); ?>
</div>