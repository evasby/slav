<?php
/*function slav_preprocess_node(&$vars) {
  if ($vars['type'] == 'node_type' && $vars['view_mode'] == 'full') {
    variable_set('colorbox_style', 'default');
  } else {
    variable_set('colorbox_style', 'stockholmsyndrome');
  }
}*/
function slav_preprocess_page(&$variables, $hook) {
  if (isset($variables['node']->type)) {
    $nodetype = $variables['node']->type;
    $variables['theme_hook_suggestions'][] = 'page__' . $nodetype;
  }
}
function slav_menu_tree__menu_top($variables) {
  if (preg_match("/\menu_list__l2\b/i", $variables['tree'])){
    return '<ul class="menu_list">' . $variables['tree'] . '</ul>';
  } else {
    return '<ul class="menu_list menu_list__l2">' . $variables['tree'] . '</ul>';
  }
}
function slav_menu_link__menu_top(array $variables) {
  $element = $variables['element'];
  $sub_menu = '';
   
  // т.к. нам нужно обернуть только ссылки первого уровня,
  // переопределяем функцию, которая будет рендерить остальные
  if ($element['#below']) {
    foreach ($element['#below'] as $key => $val) {
      if (is_numeric($key)) {
        $element['#below'][$key]['#theme'] = 'menu_link__menu_products_inner';
      }
    }
    $sub_menu = drupal_render($element['#below']);
  }
  
  if (isset($element['#attributes']['class'][0]) and $element['#attributes']['class'][0] != 'active-trail') { unset($element['#attributes']['class'][0]); }
  if (isset($element['#attributes']['class'][1]) and $element['#attributes']['class'][1] != 'active-trail') { unset($element['#attributes']['class'][1]); }
  //unset($element['#attributes']['class'][1]);
  $element['#attributes']['class'][] = 'menu_item';
  if ($variables['element']['#href'] == current_path() || ($variables['element']['#href'] == '<front>' && drupal_is_front_page())) {
    $element['#attributes']['class'][] = 'menu_item__active';
    $output = l($element['#title'], $element['#href'], array('attributes' => array('class' => array('menu_link', 'menu_link__active'))));
  } else {
    $output = l($element['#title'], $element['#href'], array('attributes' => array('class' => array('menu_link'))));
  } 
  if (isset($element['#attributes']['class'][1])){ 
    if ($element['#attributes']['class'][1] == 'active-trail') {
      unset($element['#attributes']['class'][1]);
      $output = l($element['#title'], $element['#href'], array('attributes' => array('class' => array('menu_link', 'menu_link__active'))));
    }
  }
  return '<li' . drupal_attributes($element['#attributes']) . '>' . $output . $sub_menu . "</li>\n";
}
function slav_menu_link__menu_products_inner($variables) {
  $element = $variables['element'];
  $sub_menu = '';
   
  if ($element['#below']) {
    $sub_menu = drupal_render($element['#below']);
  }
  unset($element['#attributes']['class'][0]);
  unset($element['#attributes']['class'][1]);
  $element['#attributes']['class'][] = 'menu_item';
  $element['#attributes']['class'][] = 'menu_item__l2';
  $output = l($element['#title'], $element['#href'], array('attributes' => array('class' => array('menu_link', 'menu_link__l2'))));
  return '<li' . drupal_attributes($element['#attributes']) . '>' . $output . $sub_menu . "</li>\n";
}
function slav_pager($variables) {
  $tags = $variables['tags'];
  $element = $variables['element'];
  $parameters = $variables['parameters'];
  $quantity = $variables['quantity'];
  global $pager_page_array, $pager_total;
  // Calculate various markers within this pager piece:
  // Middle is used to "center" pages around the current page.
  $pager_middle = ceil($quantity / 2);
  // current is the page we are currently paged to
  $pager_current = $pager_page_array[$element] + 1;
  // first is the first page listed by this pager piece (re quantity)
  $pager_first = $pager_current - $pager_middle + 1;
  // last is the last page listed by this pager piece (re quantity)
  $pager_last = $pager_current + $quantity - $pager_middle;
  // max is the maximum page number
  $pager_max = $pager_total[$element];
  // End of marker calculations.
  // Prepare for generation loop.
  $i = $pager_first;
  if ($pager_last > $pager_max) {
    // Adjust "center" if at end of query.
    $i = $i + ($pager_max - $pager_last);
    $pager_last = $pager_max;
  }
  if ($i <= 0) {
    // Adjust "center" if at start of query.
    $pager_last = $pager_last + (1 - $i);
    $i = 1;
  }
  // End of generation loop preparation.
  //$li_first = theme('pager_first', array('text' => (isset($tags[0]) ? $tags[0] : t('« first')), 'element' => $element, 'parameters' => $parameters));
  $li_first = theme('pager_first', array('text' => 'В начало', 'element' => $element, 'parameters' => $parameters));
  $li_previous = theme('mypager_previous', array('text' => (isset($tags[1]) ? $tags[1] : t('‹ previous')), 'element' => $element, 'interval' => 1, 'parameters' => $parameters));
  $li_next = theme('pager_next', array('text' => (isset($tags[3]) ? $tags[3] : t('next ›')), 'element' => $element, 'interval' => 1, 'parameters' => $parameters));
  //$li_last = theme('pager_last', array('text' => (isset($tags[4]) ? $tags[4] : t('last »')), 'element' => $element, 'parameters' => $parameters));
  //$li_last = theme('pager_last', array('text' => $pager_max, 'element' => $element, 'parameters' => $parameters));
  $li_last = theme('pager_last', array('text' => 'В конец', 'element' => $element, 'parameters' => $parameters));
  if ($pager_total[$element] > 1) {
    if ($li_first) {
      $items[] = array(
        'class' => array('mypager_item', 'mypager_item__first'),
        'data' => $li_first,
      );
    }
    if ($li_previous) {
      $items[] = array(
        'class' => array('mypager_item', 'mypager-previous'),
        'data' => $li_previous,
      );
    }
    // When there is more than one page, create the pager list.
    if ($i != $pager_max) {
      if ($i > 1) {
        $items[] = array(
          'class' => array('mypager_item', 'mypager-ellipsis'),
          'data' => '…',
        );
      }
      // Now generate the actual pager piece.
      for (; $i <= $pager_last && $i <= $pager_max; $i++) {
        if ($i < $pager_current) {
          $items[] = array(
            'class' => array('mypager_item'),
            'data' => theme('pager_previous', array('text' => $i, 'element' => $element, 'interval' => ($pager_current - $i), 'parameters' => $parameters)),
          );
        }
        if ($i == $pager_current) {
          $items[] = array(
            'class' => array('mypager_item', 'mypager_item__current'),
            'data' => $i,
          );
        }
        if ($i > $pager_current) {
          $items[] = array(
            'class' => array('mypager_item'),
            'data' => theme('pager_next', array('text' => $i, 'element' => $element, 'interval' => ($i - $pager_current), 'parameters' => $parameters)),
          );
        }
      }
      if ($i < $pager_max) {
        $items[] = array(
          'class' => array('mypager_item', 'mypager-ellipsis'),
          'data' => '…',
        );
      }
    }
    // End generation.
    if ($li_next) {
      $items[] = array(
        'class' => array('mypager_item', 'mypager-next'),
        'data' => $li_next,
      );
    }
    if ($li_last) {
      $items[] = array(
        'class' => array('mypager_item', 'mypager_item__last'),
        'data' => $li_last,
      );
    }
    return theme('item_list', array(
      'items' => $items,
      'attributes' => array('class' => array('pager', 'mypager_list')),
    ));
  }
}
function slav_item_list($variables) {
  $items = $variables['items'];
  $title = $variables['title'];
  $type = $variables['type'];
  $attributes = $variables['attributes'];
  // Only output the list container and title, if there are any list items.
  // Check to see whether the block title exists before adding a header.
  // Empty headers are not semantic and present accessibility challenges.
  if(isset($variables['attributes']['class']['1']) and $variables['attributes']['class']['1'] == 'mypager_list'){
    $output = '<div class="mypager">';
  } else {
    $output = '<div class="item-list">';
  }
  if (isset($title) && $title !== '') {
    $output .= '<h3>' . $title . '</h3>';
  }
  if (!empty($items)) {
    $output .= "<$type" . drupal_attributes($attributes) . '>';
    $num_items = count($items);
    $i = 0;
    foreach ($items as $item) {
      $attributes = array();
      $children = array();
      $data = '';
      $i++;
      if (is_array($item)) {
        foreach ($item as $key => $value) {
          if ($key == 'data') {
            $data = $value;
          }
          elseif ($key == 'children') {
            $children = $value;
          }
          else {
            $attributes[$key] = $value;
          }
        }
      }
      else {
        $data = $item;
      }
      if (count($children) > 0) {
        // Render nested list.
        $data .= theme_item_list(array('items' => $children, 'title' => NULL, 'type' => $type, 'attributes' => $attributes));
      }
      //if ($i == 1) {
      //  $attributes['class'][] = 'pager_item__first';
      //}
      //if ($i == $num_items) {
      //  $attributes['class'][] = 'pager_item__last';
      //}
      $output .= '<li' . drupal_attributes($attributes) . '>' . $data . "</li>\n";
    }
    $output .= "</$type>";
  }
  $output .= '</div>';
  return $output;
}
function berlis_form_webform_client_form_alter(&$form, &$form_state) {
  if ($form['#form_id'] == 'webform_client_form_3') {
    //$form['#attributes']['class'][] = 'feedback';
    //$form['submitted']['name']['#attributes']['class'][] = 'feedback_input';
    $form['submitted']['name']['#attributes']['placeholder'][] = 'Имя';
    //$form['submitted']['email']['#attributes']['class'][] = 'feedback_input';
    $form['submitted']['email']['#attributes']['placeholder'][] = 'E-mail';
    $form['submitted']['phone']['#attributes']['placeholder'][] = 'Телефон';
    //$form['submitted']['message']['#attributes']['class'][] = 'feedback_text';
    $form['submitted']['message']['#attributes']['placeholder'][] = 'Сообщение';
    $form['actions']['submit']['#attributes']['class'][] = 'form_button';
    $form['actions']['submit']['#attributes']['id'] = 'edit-webform-ajax-submit-'.$form['#node']->nid;
  }
}
function berlis_textarea($variables) {
  $element = $variables['element'];
  element_set_attributes($element, array('id', 'name', 'cols', 'rows'));
  _form_set_class($element, array('form-textarea'));
  $output = '<textarea' . drupal_attributes($element['#attributes']) . '>' . check_plain($element['#value']) . '</textarea>';
  return $output;
}
/*function berlis_views_ajax_data_alter(&$commands, $view) {
  if ($view->name == 'gallery') {
    foreach ($commands as $k=>$c) {
      if ($c['command'] == 'viewsScrollTop') {
        unset($commands[$k]);
        break;
      }
    }
  }
}*/


function berlis_select_as_links($vars) {
  $element = $vars['element'];
  $output = '';
  $name = $element['#name'];
  // Collect selected values so we can properly style the links later.
  $selected_options = array();
  //if (empty($element['#value'])) {
    //if (!empty($element['#default_values'])) {
      //$selected_options[] = $element['#default_values'];
  if (strlen((string) $element['#value']) == 0) {
    if (!empty($element['#default_value'])) {
      $selected_options[] = $element['#default_value'];
    }
  }
  else {
    $selected_options[] = $element['#value'];
  }
  // Add to the selected options specified by Views whatever options are in the
  // URL query string, but only for this filter.
  $urllist = parse_url(request_uri());
  if (isset($urllist['query'])) {
    $query = array();
    parse_str(urldecode($urllist['query']), $query);
    foreach ($query as $key => $value) {
      if ($key != $name) {
        continue;
      }
      if (is_array($value)) {
        // This filter allows multiple selections, so put each one on the
        // selected_options array.
        foreach ($value as $option) {
          $selected_options[] = $option;
        }
      }
      else {
        $selected_options[] = $value;
      }
    }
  }
  // Clean incoming values to prevent XSS attacks.
  if (is_array($element['#value'])) {
    foreach ($element['#value'] as $index => $item) {
      unset($element['#value'][$index]);
      $element['#value'][check_plain($index)] = check_plain($item);
    }
  }
  elseif (is_string($element['#value'])) {
    $element['#value'] = check_plain($element['#value']);
  }
  // Go through each filter option and build the appropriate link or plain text.
  foreach ($element['#options'] as $option => $elem) {
    if (!empty($element['#hidden_options'][$option])) {
      continue;
    }
    // Check for Taxonomy-based filters.
    if (is_object($elem)) {
      $slice = array_slice($elem->option, 0, 1, TRUE);
      list($option, $elem) = each($slice);
    }
    // Check for optgroups.  Put subelements in the $element_set array and add
    // a group heading. Otherwise, just add the element to the set.
    $element_set = array();
    if (is_array($elem)) {
      $element_set = $elem;
    }
    else {
      $element_set[$option] = $elem;
    }
    $links = array();
    $multiple = !empty($element['#multiple']);
    // If we're in an exposed block, we'll get passed a path to use for the
    // Views results page.
    $path = '';
    if (!empty($element['#bef_path'])) {
      $path = $element['#bef_path'];
    }
    foreach ($element_set as $key => $value) {
      $element_output = '';
      // Custom ID for each link based on the <select>'s original ID.
      $id = drupal_html_id($element['#id'] . '-' . $key);
      $elem = array(
        '#id' => $id,
        '#markup' => '',
        '#type' => 'bef-link',
        '#name' => $id,
      );
      /*if (array_search($key, $selected_options) === FALSE) {
        $elem['#children'] = l($value, bef_replace_query_string_arg($name, $key, $multiple, FALSE, $path));
        //$output .= theme('form_element', array('element' => $elem));
        $element_output = theme('form_element', array('element' => $elem));
          if ($element['#name'] == 'sort_bef_combine' && !empty($element['#settings']['toggle_links'])) {
            $sort_pair = explode(' ', $key);
            if (count($sort_pair) == 2) {
              // Highlight the link if it is the selected sort_by (can be either
              // asc or desc, it doesn't matter).
             if (strpos($selected_options[0], $sort_pair[0]) === 0) {
                $element_output = str_replace('form-item', 'form-item selected', $element_output);
              }
            }*/
      
      $link_options = array();
      // Add "active" class to the currently active filter link.
      if (in_array((string) $key, $selected_options)) {
        $link_options['attributes'] = array('class' => 'active');
      }
      $url = bef_replace_query_string_arg($name, $key, $multiple, FALSE, $path);
      $elem['#children'] = l($value, $url, $link_options);
      $element_output = theme('form_element', array('element' => $elem));
      if ($element['#name'] == 'sort_bef_combine' && !empty($element['#settings']['toggle_links'])) {
        $sort_pair = explode(' ', $key);
        if (count($sort_pair) == 2) {
          // Highlight the link if it is the selected sort_by (can be either
          // asc or desc, it doesn't matter).
         if (strpos($selected_options[0], $sort_pair[0]) === 0) {
            $element_output = str_replace('form-item', 'form-item selected', $element_output);
          }
        /*} else {
        $elem['#children'] = l($value, bef_replace_query_string_arg($name, $key, $multiple, TRUE, $path));
        _form_set_class($elem, array('bef-select-as-links-selected'));
        //$output .= str_replace('form-item', 'form-item selected', theme('form_element', array('element' => $elem)));
        $element_output = str_replace('form-item', 'form-item selected', theme('form_element', array('element' => $elem)));*/
        }
      }
      $output .= $element_output;
    }
  }
  $properties = array(
    '#description' => isset($element['#bef_description']) ? $element['#bef_description'] : '',
    '#children' => $output,
  );
  //$output = '<div class="qwerty bef-select-as-links">';
  $output = '<div class="bef-select-as-links">';
  $output .= theme('form_element', array('element' => $properties));
  // Add attribute that hides the select form element.
  $vars['element']['#attributes']['style'] = 'display: none;';
  $output .= theme('select', array('element' => $vars['element']));
  if (!empty($element['#value'])) {
    if (is_array($element['#value'])) {
      foreach ($element['#value'] as $value) {
        //$output .= '<input type="hidden" name="' . $name . '[]" value="' . $value . '" />';
        $output .= '<input type="hidden" class="bef-new-value" name="' . $name . '[]" value="' . $value . '" />';
      }
    }
    else {
      //$output .= '<input type="hidden" name="' . $name . '" value="' . $element['#value'] . '" />';
      $output .= '<input type="hidden" class="bef-new-value" name="' . $name . '" value="' . $element['#value'] . '" />';
    }
  }
  $output .= '</div>';
  return $output;
}

