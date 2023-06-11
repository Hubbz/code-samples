# Search Toggle - jQuery

This script is to toggle between search bars that were embedded in both the website header and a search result page sidebar. The way the site was built, each of those regions contained 2 search bars; one for products and one for resources. There was a toggle button that would switch between the two, basically hiding one and showing the other. 

**I needed to make sure of a few things:**

First, I needed to make sure that toggle worked on both search bar regions so that they always remained in sync. 

Second, I also needed to ensure that the correct search bar was displayed based on the page being viewed so that the product search showed on product pages and the resource search showed on other pages.

Finally, there were ajax facet filters for filtering the results on the page. When a filter was selected, I needed to make sure that the correct search bar remained.