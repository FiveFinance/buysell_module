# TradeDesk Stock Order Microservice

TradeDesk's Stock Order Microservice is the frontend component that allows users to buy/sell shares on a specific stock page.

The component was built using React.js, Express/Node, MySQL (static data for development), and the microservice makes API queries to the `/stocks` and `/accounts` API.

There are a breadth of event handlers on the form that display both textual, numerical and visual data to the user, both static and dynamic. Additional features include client-side validation for input fields to ensure data integrity upfront, several subtle transition animations, dropdown menus, etc.

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

  - [Company Info](https://github.com/FiveFinance/about_info_module)
  - [Ratings History](https://github.com/FiveFinance/ratings_history_module)
  - [Price Chart](https://github.com/menintights/stock-chart)


## Requirements

See package.json file for details.


## About TradeDesk

> TradeDesk is an stock trading platform. It is a project started in April 2019 meant to mimic the frontend behavior of other stock trading platforms. Upon completion of the frontend development, the team moved on to other individual projects.
