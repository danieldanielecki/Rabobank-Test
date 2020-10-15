# Author's notes

The credit card validation works, with these notes:

- Month's values acceptable only between 01 and 12
- Year's values are acceptable only between 2020 and 2029
- Credit Card's numbers could've been done only the _real_ ones, such as [https://stackoverflow.com/a/61875882/11127383](https://stackoverflow.com/a/61875882/11127383), however the assignment didn't neither ask for this nor for writing credit card numbers with spaces in between

Other notes:

- Basic JSDoc has been used
- The Angular 4 starting app didn't work for me on a separated branch anyways, therefore the app has been upgraded to newest version of Angular, as of today, that's Angular 10
- Instead of raw test, a SweetAlert2 has been used once validation is successful
- Unless the form is not fully valid, the user cannot submit anything
- Due to the upper two points, the unit tests have been (very) sligthly modified
- Instead of Bootstrap, Angular Material has been used
- Basic responsiveness works by using Angular Grid-Layout
- For Angular Material-elements, MaterialModule has been created
- I've created `app.component.css` to follow good practices and not style in global `styles.css` :)
