# LT-Photo-Album
CLI application to query &amp; display formatted photo metadata from a provided URL with query parameters.

To Install & Run:
1. Clone the repository
2. Install NodeJS LTS from [here](https://nodejs.org/en/download/)
3. Run `npm install`
4. Run `node main.js <albumId>` where albumId is a positive integer.

Notes:
* Based off the data fetched from the site, this API doesn't return large amounts of data. 
 * Low volumes of data can easily be cached in an array without worrying about space complexity.
 * If we were fetching a huge amount of data, I would have used an Async Generator and streamed the data, let's say 100 pictures at a time. This would require a decent refactor.
