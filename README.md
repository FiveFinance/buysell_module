# TradeDesk Stock Order Microservice

TradeDesk's Stock Order Microservice is the frontend component that allows users to buy/sell shares on a specific stock page. [Click here to interact with a deployed version of this component](http://bit.ly/tradedesk-order-module).

The component was built using React.js, Express/Node, MySQL (static data for development and demo purposes), and the microservice makes API queries to the `/stocks` and `/accounts` API.

There are a breadth of event handlers on the form that display textual and numerical data to the user, both static and dynamic. Additional features include client-side validation for input fields to ensure data integrity upfront, several subtle transition animations, dropdown menus, etc.

The order component is optimized for page load time performance, taking the load time from 21.0s down to 0.4s: 
- Minification and compression (brotli & gzip) of static files reduced payload sizes and script parse time.
- Fonts files are prioritized to serve WOFF2 format to browsers that support it with fallback for the majority of browsers. This resulted in 33%+ file-size reduction over other formats.
- Text data is predisplayed with the [`font-display`](https://developers.google.com/web/updates/2016/02/font-display) property prior to receiving the font payload to improve the perception of speed.
- Achieved the max score of 100 on Google's PageSpeed Insight Tool. See the [PageSpeed Insight report](https://developers.google.com/speed/pagespeed/insights/?url=http%3A%2F%2Fec2-54-183-100-147.us-west-1.compute.amazonaws.com%2Fstocks%2Faapl%2F&tab=desktop) on this component for more details. 

This component is hosted on an EC2 t2.micro instance. If the project timeline was extended with additional budget, I would've explored enabling https to take advantage of [brotli](https://medium.com/@yoavweiss/well-the-technical-reason-for-brotli-being-https-only-is-that-otherwise-there-s-a-very-high-508f15f0ad95) compression, CDN/Redis caching, upgrading the instance, and a few other performant options I'll be happy to discuss more in detail.

### Stock Order Microservice main:<br />
<img src="https://cl.ly/d1c641691f6f/Image%202019-05-21%20at%208.26.41%20PM.png" alt="Order window defaults to buy state." width="300px" height="510px">
<br />

### Order type dropdown highlights and renders brand color on hover:<br />
<img src="https://cl.ly/019c70e16f87/Screen%20Recording%202019-05-21%20at%2008.30%20PM.gif" alt="Dropdown will show all four order types for buy/sell side and highlight upon hover.">
<br />

### Switching to sell orders changes rendering state:<br />
<img src="https://cl.ly/1861ce4de6e3/Screen%20Recording%202019-05-21%20at%2008.32%20PM.gif" alt="Hovering over Reviews Stars renders an animated Ratings Graphic.">
<br />

### Expiration dropdown allows users to choose expiry option per order:<br />
<img src="https://cl.ly/3dda5903c7d4/Screen%20Recording%202019-05-21%20at%2008.35%20PM.gif" alt="Dropdown options for Expiration field">
<br />



## Related Microservices

  - [Price Chart](https://github.com/menintights/stock-chart)
  - [Company Info](https://github.com/FiveFinance/about_info_module)
  - [Ratings History](https://github.com/FiveFinance/ratings_history_module)
  - [All modules together](http://trade-desk.herokuapp.com/AAPL)


## About TradeDesk

> TradeDesk is an stock trading platform. It is a project started in April 2019 meant to mimic the frontend behavior of other stock trading platforms. Upon completion of the frontend development, the team moved on to other individual projects.
