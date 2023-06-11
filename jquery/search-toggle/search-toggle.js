/**
 * Search Toggle.
 */

(function ($, Drupal) {

  Drupal.behaviors.searchToggle = {
    attach: function (context, settings) {
      $(once('searchAutocomplete', '.js-search-toggle', context)).each(function () {
        var $pageUrlPath = window.location.pathname;
        var $this = $(this);
        var $toggleLink = $this.find('.js-search-toggle__active-item');
        var $dropdown = $this.find('.js-search-toggle__dropdown');
        var $dropdownLinks = $dropdown.find('a');

        $toggleLink.click(function (e) {
          e.preventDefault();
        });

        // Set active search block and label.
        // Example: setActiveSearch('Products', 0);
        function setActiveSearch (activeLabel, activeIndex) {
          $('.js-search-toggle').each(function () {
            var $this = $(this);
            var $toggleLink = $this.find('.js-search-toggle__active-item');
            var $dropdown = $this.find('.js-search-toggle__dropdown');
            var $searchForms = $this.next('.js-search-toggle-forms:not(.js-search-toggle-forms--sorting)');

            // Make the right label, dropdown item and search block visible.
            $toggleLink.html(activeLabel);
            $dropdown.children('li').removeClass('active').eq(activeIndex).addClass('active');
            $searchForms.find('.search-api-site-search').hide().eq(activeIndex).show();

            // Make sure the dropdown is hidden and then remove the display style
            // so user can properly access menu on hover.
            $dropdown.hide();
            setTimeout(function () {
              $dropdown.css('display', '');
            }, 100);
          });
        }

        // Set active search based on url when page loads, or default to resources.
        if (
          $pageUrlPath.includes('/search-products')
          || $pageUrlPath.includes('/products')
          || $pageUrlPath.includes('/cart')
          || $pageUrlPath.includes('/checkout')
          || $pageUrlPath.includes('/user')
          || $pageUrlPath === '/'
          || $pageUrlPath === '/wheretobuy'
        ) {
          setActiveSearch('Products', 0);
        }
        else {
          setActiveSearch('Resources', 1);
        }

        // Set active search when a dropdown link is clicked.
        $dropdownLinks.click(function (e) {
          e.preventDefault();
          var $this = $(this);
          var $clickedLabel = $this.html();
          var $clickedIndex = $this.parent('li').index();

          setActiveSearch($clickedLabel, $clickedIndex);
        });

        // Maintain active search when ajax filter are applied or removed.
        $(document).ajaxComplete(function (event, xhr, settings){
          if (settings.url.includes('product_search')) {
            setActiveSearch('Products', 0);
          }
          if (settings.url.includes('site_search')) {
            setActiveSearch('Resources', 1);
          }
        });
      });
    }
  };

})(jQuery, Drupal, once);
