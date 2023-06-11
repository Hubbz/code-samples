# Ideal Architecture Analysis - jQuery

This is a jQuery script that I wrote to enhance the experience of an analysis webform built using the Drupal webform module. 

The first `Useful variables` section sets up some specific variables used in the document.

The second `Update tracked answer totals` section listens for changes to the form and updates the totals for each answer. Users can select answer A, B, or C for each question. The totals are updated in real time as the user selects their choices.

The third `On form submit, show results` section handles what happens when the form is submitted. It sends an event to Google Analytics for tracking purposes. It hides the form results and shows a loading spinner to simulate "thinking". Finally, it shows the results of the form with information based on answer totals.

At the bottom of the document, a cookie is created that saves the users answers so that they can be recalled should the user leave the page and come back.