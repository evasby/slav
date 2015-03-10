/**
 * My custom filter handler
 */
class kurs_handler_filter_mycustomfilter extends views_handler_filter {
  function query() {
    $this->ensure_my_table();
    $this->query->add_where_expression($this->options['group'], "{$this->table_alias}.changed > {$this->table_alias}.created");
  }
}