<!DOCTYPE html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <?php print $head; ?>
  <title><?php print $head_title; ?></title>
  <!--[if lt IE 9]>
    <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
  <![endif]-->
  <?php print $styles; ?>
  <?php print $scripts; ?>  
  <!--[if lt IE 10]> 
    <script type="text/javascript" src="/sites/all/themes/alvista/js/jquery.placeholder.js"></script>
    <script type="text/javascript" src="/sites/all/themes/alvista/js/placeholder.js"></script>
  <![endif]-->
</head>
<body class="<?php print $classes; ?>" <?php print $attributes;?>>
  <div id="skip-link">
    <a href="#main-container" class="element-invisible element-focusable"><?php print t('Skip to main content'); ?></a>
  </div>
  <?php print $page; ?>
</body>
</html>