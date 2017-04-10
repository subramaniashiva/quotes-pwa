/*
  API routes
  The application rely on this file to get the API path
*/
const API = {
	root: 'https://quotesondesign.com',
  path: {
    randomQuote: '/wp-json/posts?filter[orderby]=rand',
    popularQuote: '/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=10'
  }
}
export default API;
