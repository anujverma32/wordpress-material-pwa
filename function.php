<?php

/*
  Plugin Name: Wordpress Material PWA
  Plugin URI: TODO
  Description: This plugin add the features of a PWA developed with Material Design.
  Version: 1.0.0
  Author: Anuj Verma
  Author URI: TODO
  License: GPLv2 or later
*/

if (!class_exists('WORDPRESS_MATERIAL_PWA')) {
  /**
   *  Entry class for the plugin
   */
  class WORDPRESS_MATERIAL_PWA
  {

    function __construct()
    {
      $this->declare_variables();
      register_activation_hook( WMP_MAIN_PLUGIN_FILE, array($this, 'plugin_activated'));
      register_deactivation_hook( WMP_MAIN_PLUGIN_FILE, array($this, 'plugin_deactivated'));
      add_action( 'init', array($this, 'add_routes') );
      $this->init();
    }

    public function declare_variables() {
      define('WMP_VERSION', '1.0.0');
      define('WMP_PLUGIN_DIR', plugin_dir_path(__FILE__));
      define('WMP_PLUGIN_URL', plugins_url('', __FILE__ ));
      define('WMP_MAIN_PLUGIN_FILE', __FILE__);
    }

    public function plugin_activated() {
      $this->add_routes();
      flush_rewrite_rules(true);
    }

    public function plugin_deactivated() {
      flush_rewrite_rules(true);
    }

    public function add_routes() {
      add_rewrite_rule('wpmpwa/(.*)', 'wp-content/plugins/wordpress_material_pwa/frontend/material_pwa/build/$1');
    }

    public function init() {
      if (is_admin()) {
        // TODO
      } else {
        $this->check_client();
      }
    }

    public function check_client() {
      if (!class_exists('Mobile_Detect')) {
        require_once WMP_PLUGIN_DIR.'libs/'.'Mobile_Detect.php';
      }
      $detect = new Mobile_Detect;
      if ( $detect->isMobile() ) {
        add_action( 'plugins_loaded', array($this, 'load_PWA') );
      }
    }

    public function load_PWA() {
      add_filter("stylesheet", array($this, "app_theme"), 11);
      add_filter("template", array($this, "app_theme"), 11);

      add_filter('theme_root', array($this, 'app_theme_root' ), 11);
      add_filter('theme_root_uri', array($this, 'app_theme_root' ), 11);
    }

    /**
     * Return the theme name
     */
    public function app_theme() {
      return 'material_pwa/build';
    }

    /**
    * Return path to the mobile themes folder
    */
    public function app_theme_root() {
      return WMP_PLUGIN_DIR . 'frontend';
		}
  }
}

return new WORDPRESS_MATERIAL_PWA;
