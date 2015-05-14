<?php $address = block_load('block', '3'); ?>
<?php $phone = block_load('block', '4'); ?>
<?php $skype = block_load('block', '5'); ?>
<?php $email = block_load('block', '8'); ?>
<?php drupal_add_js('https://maps.googleapis.com/maps/api/js?v=3.exp'); ?>
<?php drupal_add_js(drupal_get_path('theme', 'slav') . '/js/map2.js'); ?>
<header class="header">
  <div class="inner">
    <div class="header_top">
      <div class="header_slang">Офисы и торговые помещения в самом центре минска!<span>Место имеет значение!</span></div>
      <div class="header_logo"><a class="header_link" href="/">Славичи</a></div>
      <div class="header_phone"><span></span>
      <?php $output = module_invoke('block', 'block_view', '7'); ?>
      <?php print render($output['content']); ?>
      <a class="colorbox-inline" href="/?inline=true#webform-ajax-wrapper-13">Заказать звонок</a></div>
    </div>
    <nav class="menu">
      <?php $tmenu = module_invoke('menu', 'block_view', 'menu-top'); ?>
      <?php print render($tmenu['content']); ?>
    </nav>
  </div>
</header>
<div class="inner">
  <article class="article">
    <?php print $breadcrumb; ?>
    <?php render($page['content']) ?>
    <?php print $messages; ?>
    <div class="contacts">
      <div class="feedback">   
        <div class="feedback_title"><?php print $node->title; ?></div>     
        <?php $main = module_invoke('system', 'block_view', 'main'); ?>
        <?php print render($main['content']); ?>
      </div>
      <div class="info">
        <div class="info_title">cооо "Славичи"</div>
        <div class="info_item">
          <div class="info_icon info_icon__address"></div>
          <div class="info_head"><?php print $address->title; ?>:</div>
          <?php $output = module_invoke('block', 'block_view', '3'); ?>
          <?php print render($output['content']); ?>
        </div>
        <div class="info_item">
          <div class="info_icon info_icon__phone"></div>
          <div class="info_head"><?php print $phone->title; ?>:</div>
          <?php $output = module_invoke('block', 'block_view', '4'); ?>
          <?php print render($output['content']); ?>
        </div>       
        <div class="info_item">
          <div class="info_icon info_icon__skype"></div>
          <div class="info_head"><?php print $skype->title; ?>:</div>
          <?php $output = module_invoke('block', 'block_view', '5'); ?>
          <?php print render($output['content']); ?>
        </div>
        <div class="info_item">
          <div class="info_head"><?php print $email->title; ?>:</div>
          <?php $output = module_invoke('block', 'block_view', '8'); ?>
          <?php print render($output['content']); ?>
        </div>
      </div>  
    </div>
    <div class="map" id="map"></div>
    <?php if ($tabs): ?><div class="tabs"><?php print render($tabs); ?></div><?php endif; ?>
  </article>
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
          <div class="footer_skype"><div class="footer_icon"></div><?php print $skype->title; ?>: 
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