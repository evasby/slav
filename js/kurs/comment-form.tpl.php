<div class="comment_wrapper">
  <?php 
    // Скрываем от вывода некоторые элементы
    hide($form['subject']); // Убираем заголовок комментария
    hide($form['comment_body']['und'][0]['format']); // Убираем fieldset  с форматами ввода 
    hide($form['actions']['preview']); // Убираем кнопку "Предпросмотр"
  ?>
  <div class="comment_author">
    <?php 
      // Выводим поле автора комментария
      print render($form['author']); 
    ?>
  </div>
  <div class="comment_body">
    <?php 
      // Выводим textarea  для ввода тела комментария
      print render($form['comment_body']); 
    ?>
  </div>
  <div class="comment_actions">
    <?php 
      // Выводим кнопку "Сохранить"
      print render($form['actions']); 
    ?>
  </div>
  <?php 
    // Выводим все остальные элементы формы (hidden etc.)
    print drupal_render_children($form); 
  ?>
</div>