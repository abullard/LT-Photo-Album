# LT-Photo-Album
CLI application to query &amp; display formatted photo metadata from a provided URL with query parameters.

**Notes:**
- Based off the data fetched from the site, this API doesn't return large amounts of data. 
    - Low volumes of data can easily be cached in an array without worrying about space complexity.
    - If we were fetching a huge amount of data, I would have used an Async Generator and streamed the data. Let's say 100 pictures at a time. This would require a refactor of the code at the current moment.
- If I was streaming these photos, I would also add the id query parameter.
    - This would allow me to write more unit tests, where I verify that the id is returned properly, and no extra photos.
    - I could also write unit tests to ensure that only x number of photos were returned. Where x is the number of photos I stream at a time.


To Install & Run:
1. Clone the repository
2. Install NodeJS LTS from [here](https://nodejs.org/en/download/)
3. Run `npm install`
4. Run `node src/main.js <albumId>` where albumId is a positive integer

To Test:
1. Follow Install & Run steps
1. Run `npm test`
