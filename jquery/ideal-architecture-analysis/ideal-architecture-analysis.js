/**
 * @file
 * Script-ideal-architecture-analysis.js.
 *
 * Scripts specific to the Ideal Architecture Analysis page.
 */

(function ($) {
  
  $(function () {

    /**
     * Useful variables.
     */

    // General.
    var pageIntro = $('.ideal-architecture-analysis .page-section--banner');

    // HubSpot form ID - Ideal Architecture Analysis.
    var formHubSpotID = 'x'; // Sensitive information hidden.

    // Form.
    var formSection = $('.page-section--form');
    var formIntro = formSection.find('.field-items').first().children('.field-item:nth-of-type(1)');
    var formWrapper = formSection.find('.field-items').first().children('.field-item:nth-of-type(2)');
    var formSpinner = formSection.find('.field-items').first().children('.field-item:last-of-type');
    var formCookieMessage = $('.ideal-architecture-analysis .page-section--form-cookie-message');

    // Questions to track answers from for customized analysis results.
    var formQuestions = [
      $('.hs_is_it_important_to_be_able_to_leverage_any_technology_platforms_you_wish_'),
      $('.hs_my_company_would_feel_comfortable_developing_parts_of_our_system_and_technology_as_needed_'),
      $('.hs_my_site_needs_to_deliver_personalization_to_the_following_degree_'),
      $('.hs_what_is_your_company_s_financial_capabilities_for_investment_in_technology_')
    ];
    var formAnswerA = 0;
    var formAnswerB = 0;
    var formAnswerC = 0;

    // Results.
    var resultsSection = $('.page-section--results');

    /**
     * Update tracked answer totals.
     */

    formWrapper.on('change', 'input', function () {
      // Reset count to 0.
      formAnswerA = 0;
      formAnswerB = 0;
      formAnswerC = 0;

      // Loop through tracked questions and update totals.
      $.each(formQuestions, function (index, value) {
        if ($(value.selector).find('.hs-form-radio:nth-of-type(1)').find('input').is(':checked')) {
          formAnswerA++;
        }
        if ($(value.selector).find('.hs-form-radio:nth-of-type(2)').find('input').is(':checked')) {
          formAnswerB++;
        }
        if ($(value.selector).find('.hs-form-radio:nth-of-type(3)').find('input').is(':checked')) {
          formAnswerC++;
        }
      });
    });

    /**
     * On form submit, show results.
     */

    window.addEventListener('message', function (event) {
      if (event.data.type === 'hsFormCallback' && event.data.eventName === 'onFormSubmit' && event.data.id === formHubSpotID) {
        // Submit event to Google Analytics.
        if (window.ga && ga.create) {
          ga('send', {
            hitType: 'event',
            eventCategory: 'Ideal Architecture Analysis Interaction',
            eventAction: 'Progress',
            eventLabel: 'Form Completed',
            transport: 'beacon'
          });
        }

        // Hide banner, start button, form intro, form section, and cookie message.
        pageIntro.hide();
        formIntro.hide();
        formCookieMessage.hide();
        formWrapper.hide();

        // Show loading animation.
        formSpinner.show();

        // Scroll to top of section.
        $('html, body').animate({
          scrollTop: formSpinner.offset().top - 200
        }, 'slow');

        // Hide form section show results container.
        formSection.delay(2000).fadeOut();
        resultsSection.delay(2400).fadeIn();

        // Use questions count calucated above to show desired result information.
        var windowWidth = $(window).width();

        if (formAnswerB >= 2) {
          // Show B - Experience-led.
          resultsSection.find('.result-b-title').show();

          if (windowWidth < 992) {
            // Mobile.
            $('.panel-group a[id*="tab-experience-led"].collapsed').click();
          }
          else {
            // Desktop.
            $('.nav-tab:not(active) a[id*="tab-experience-led"]').click();
          }

          return false;
        }
        else if (formAnswerC >= 2) {
          // Show C - API-led.
          resultsSection.find('.result-c-title').show();

          if (windowWidth < 992) {
            // Mobile.
            $('.panel-group a[id*="tab-api-led"].collapsed').click();
          }
          else {
            // Desktop.
            $('.nav-tab:not(active) a[id*="tab-api-led"]').click();
          }

          return false;
        }
        else {
          // Show A - Commerce-led.
          resultsSection.find('.result-a-title').show();
        }
      }
    });

    /**
     * Cookies: Store values for returning visitors.
     *
     * Uses js-cookie plugin. See https://github.com/js-cookie/js-cookie for usage examples.
     */
    window.addEventListener('message', function (event) {
      if (Cookies && event.data.type === 'hsFormCallback' && event.data.eventName === 'onFormReady' && event.data.id === formHubSpotID) {
        // Useful variables.
        var formElement = $('form[data-form-id="' + formHubSpotID + '"]');
        var formCookieReset = $('.ideal-architecture-analysis').find('a[href="#reset-cookie"]');
        var formInputValuesObj = {};
        var formCookieValues = Cookies.get('acromedia_arch_analysis_values');

        // For returning users, show cookie message and pre-populate form with values stored in cookie.
        if (formCookieValues !== undefined) {
          // Show cookie message.
          formCookieMessage.fadeIn();

          // Reset cookie button.
          if (formCookieReset.length) {
            formCookieReset.click(function (event) {
              event.preventDefault();

              // Reset cookie.
              Cookies.remove('acromedia_arch_analysis_values');

              // Clear radio values and enable any disabled radios.
              formElement.find('input[type=radio]:checked').prop("checked", false);
              formElement.find('input[type=checkbox]:checked').prop("checked", false);

              // Hide cookie message.
              formCookieMessage.delay(500).slideUp();
            });
          }

          // Cookie returns as string like this: {"elementId":"elementValue","elementId":"elementValue",...}.
          // Remove {}, change default "," separator to "|" and split into array.
          var formCookieValuesArray = formCookieValues.replace('{', '').replace('}', '').replace(/","/g, '"|"').split('|');

          // Loop through array to set values.
          $.each(formCookieValuesArray, function (key, value) {
            // Value returns string like this: "elementGroupName":"elementValue".
            // Split into array, get values, and create selector.
            var elementValues = value.split(':');
            var targetInputId = elementValues[0];
            var targetInputValue = elementValues[1];
            var element = $("input[id=" + targetInputId + "][value=" + targetInputValue + "]");

            // Populate form value.
            // Slight delay needed to overcome HubSpot clearing values initially if previously completed.
            setTimeout(function () {
              element.click();
              }, 1000
            );

          });
        }

        // On radio input change, set value in cookie.
        formSection.on('change', 'input', function () {
          var formInputChecked = formElement.find('input[type=radio]:checked, input[type=checkbox]:checked');

          // Push checked values into formInputValuesObj object.
          formInputChecked.each(function () {
            var inputId = $(this).attr('id');
            var inputValue = $(this).val();

            formInputValuesObj[inputId] = inputValue;
          });

          // Set cookie with formRadioValuesObj object values.
          Cookies.set('acromedia_arch_analysis_values', formInputValuesObj, { expires: 30 });
        });
      }
    });

  });
})(jQuery);
