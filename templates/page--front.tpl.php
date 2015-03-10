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

    <!--<div class="slider">

      <img src="<?php //print $base_path . $directory; ?>/image/slide1.jpg" alt="">

      <div class="slider_text">

        <h1>Акция</h1>

        <p>Приглашаем всех желающих принять участие в презентации нашего гостиничного комплекса «Меркур». Презентация состоится 01.02.2015 года,  с 9-00 до 16-00 в апартотеле «Комфорт» по адресу г.Минск, ул.Щорса, д.1, 3 й этаж. </p>

        <p>Звоните, ответим на все вопросы 8-029-658-62-58,8-017-289-18-90</p>

      </div>

    </div>-->

    <div class="slider">

      <img src="<?php print $base_path . $directory; ?>/image/slide1.jpg" alt="">

      <div class="slider_text">

        <?php $frontslider = module_invoke('views', 'block_view', 'front-block_1'); ?>

        <?php print render($frontslider['content']); ?>

      </div>

    </div>

    <div class="title">

      <?php $block = block_load('block', '1'); ?>

      <h1><?php print $block->title; ?></h1>

      <div class="title_border"></div>

    </div>

    <?php
      global $user;

      // Check to see if $user has the administrator role.
      if (in_array('administrator', array_values($user->roles))) {
        // Do something.
        print '<a class="colorbox-inline" href="http://slavd.webformat.by/?width=295&height=326&inline=true#webform-ajax-wrapper-13">Вызвать</a>';
        
        //print '<a data-theme="theme1" class="colorbox-inline" href="http://slavd.webformat.by/?width=295&height=326&inline=true#webform-ajax-wrapper-13">Вызвать2</a>';
        //print '<link id="theme1" class="colorboxTheme" rel="stylesheet" type="text/css" href="'.$base_path . $directory.'/css/colorbox.css">';
      }
    ?>

    <!--<a class="colorbox-inline" href="http://slavd.webformat.by/?width=400&height=400&inline=true#webform-ajax-wrapper-13">Вызвать</a>-->

    <?php render($page['content']) ?>

    <?php print $messages; ?>

    <?php if ($tabs): ?><div class="tabs"><?php print render($tabs); ?></div><?php endif; ?>

    <div class="article_text">

      <?php $main = module_invoke('block', 'block_view', '1'); ?>

      <?php print render($main['content']); ?>

    </div>

    <div class="gallery">

      <?php $frontimages = module_invoke('views', 'block_view', 'front-block'); ?>

      <?php print render($frontimages['content']); ?>

    </div>

    <div class="quote">

      <?php $main = module_invoke('block', 'block_view', '2'); ?>

      <?php print render($main['content']); ?>

    </div>

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