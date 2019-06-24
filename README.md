# Hub-park-run

The purpose of this script is to assist with scraping data from the Park run website. The results data is used to create Park Run articles for the Digital Hub https://github.com/ministryofjustice/digital-hub

**To run the script and cypress testing use the following terminal command**

`CYPRESS_URL=https://example.com/parkrun npm run parkRunScript`

The parkrun script creates an html file in the top level of the project called **ParkRunResults.html** The results data can then be copied from this file and pasted into the Drupul CMS.

When you create the article in Drupal, ensure the **source** button has been selected and the text format is set to full html before you paste in the results data.
