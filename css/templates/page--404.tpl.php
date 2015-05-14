<div class="inner">
  <div class="siteerror">
    <?php print $breadcrumb; ?>
    <?php if ($title) : ?>
    <h1><?php print $title; ?></h1>
    <?php endif; ?>
    <?php render($page['content']) ?>
    <div class="siteerror_inner">
      <div class="siteerror_left">
        <?php $main = module_invoke('system', 'block_view', 'main'); ?>
        <?php print render($main['content']); ?>
      </div>
      <div class="siteerror_right">
        <div class="siteerror_head">Возможно, вы искали:</div>
        <nav>
          <?php $tmenu = module_invoke('menu', 'block_view', 'menu-top'); ?>
          <?php print render($tmenu['content']); ?>
        </nav>
      </div>
    </div>
    <?php if ($tabs): ?><div class="tabs"><?php print render($tabs); ?></div><?php endif; ?>
  </div>
</div>
<footer class="footer">
  <div class="footer_top">
    <div class="footer_logo">
      <a href="/">Славичи</a>
    </div>
    <div class="footer_contacts">
      <div class="footer_title">Контакты:</div>
      <div class="footer_info">
        <div class="footer_phone"><div class="footer_icon"></div>
          <?php $output = module_invoke('block', 'block_view', '4'); ?>
          <?php print render($output['content']); ?>
        </div>
        <div class="footer_wrap">
          <div class="footer_address"><div class="footer_icon"></div>
            <?php $output = module_invoke('block', 'block_view', '3'); ?>
            <?php print render($output['content']); ?>
          </div>
          <div class="footer_skype"><div class="footer_icon"></div>Skype: 
            <?php $output = module_invoke('block', 'block_view', '5'); ?>
            <?php print render($output['content']); ?>
          </div>
          <div class="footer_email">E-mail: 
            <?php $output = module_invoke('block', 'block_view', '8'); ?>
            <?php print render($output['content']); ?>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="footer_bottom">
    <a href="https://webformat.by/" class="webformat"><?php print t('Студия "Веб Формат"'); ?></a>
  </div>
</footer>
<div class="hide">
  <?php $block = module_invoke('webform', 'block_view', 'client-block-13'); ?>
  <?php print render($block['content']); ?>
</div>