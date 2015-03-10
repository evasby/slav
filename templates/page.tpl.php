<header class="header">
  <div class="inner">
    <div class="header_top">
      <div class="header_slang">Офисы и торговые помещения в самом центре минска!<span>Место имеет значение!</span></div>
      <div class="header_logo"><a class="header_link" href="/">Славичи</a></div>
      <div class="header_phone"><span></span>+375 (17) 289 90 92<br>+375 (29) 658 62 58<a class="colorbox-inline" href="http://slavd.webformat.by/?width=295&height=326&inline=true#webform-ajax-wrapper-13">Заказать звонок</a></div>
    </div>
    <nav class="menu">
      <?php $tmenu = module_invoke('menu', 'block_view', 'menu-top'); ?>
      <?php print render($tmenu['content']); ?>
    </nav>
  </div>
</header>
<div class="inner">
  <article class="article">
    <?php if ($title) : ?>
      <div class="title">
        <h1><?php print $title; ?></h1>
        <div class="title_border"></div>
      </div>
    <?php endif; ?>
    <?php render($page['content']) ?>
    <?php print $messages; ?>
    <?php $main = module_invoke('system', 'block_view', 'main'); ?>
    <?php print render($main['content']); ?>
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
        <div class="footer_phone"><div class="footer_icon"></div>+375 (17) 289 90 92<br>+375 (17) 289 18 90<br>+375 (29) 658 62 58</div>
        <div class="footer_wrap">
          <div class="footer_address"><div class="footer_icon"></div>г. Минск, ул. Забицкая, 9-42</div>
          <div class="footer_skype"><div class="footer_icon"></div>Skype: Slavichi.Slavichi</div>
        </div>
      </div>
    </div>
  </div>
  <div class="footer_bottom">
    <a href="https://webformat.by/" class="webformat">Студия "Веб Формат"</a>  
  </div>
</footer>
<div class="hide">
  <?php $block = module_invoke('webform', 'block_view', 'client-block-13'); ?>
  <?php print render($block['content']); ?>
</div>