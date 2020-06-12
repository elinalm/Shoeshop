# Shoeshop

* **Elin Alm** [Github](https://github.com/elinalm)

* **Jonathan Dahlgren** [Github](https://github.com/JonathanDahlgren)

* **Simon Beijer** [Github](https://github.com/simonbeijer)

* **Mamta Srinivas** [Github](https://github.com/MS-load) 

* **Emma Andersson** [Github](https://github.com/emmamariagaby)

* **Repo link** [Github repo](https://github.com/elinalm/Shoeshop)


This is a shoeshop created for a project in school. The idea is to sell sport shoes, fancy shoes and street shoes and formal shoes. A customer can add shoes to their cart and order with different delivery options. There are two roles that a user can have on the website, either admin or just a regular customer. The admin can remove a user, change a users password or upgrade the user to be an admin. The customer has to create an account and be logged in to buy shoes. The stock on shoes has a start quantity and will decrease when a customer orders a pair. The admin can change the inventory of a pair of shoes.
The website has a very thought through step by step flow from reading about a product, adding the product to your cart and then through to check out. The checkout flow is also very easy and understandable and follows a logic flow their aswell. 

- Everything in the shop is stored in a mongoose database.
- Every page is responsive and can be used on a mobilescreen. 
- The frontend is React and the backend is express.
- codediagram, er-diagram and a pitch is included in the project. 
- You can log in as an admin. 
- You become an admin by being promoted by an admin.
- You can create a costumer account. 
- No passwords are stored in the chosen password, it is crypted. 
- A costumer can buy products and the inventory is updated after the order is proceeded. 
- The admin can update the quantity on products from the admin client-side. 
- The admin can se a list of all the orders that has been placed. The admin can also mark a order as delivered. 
- The products belongs to at least one category and the page contains of four categories. 
- On the homepage all of the products from all the categories are listed. If you go to one specific category it displays just those shoes.
- A costumer that makes an order must be logged in to make an order.
- The checkout has a form to take all the information about the costumer.
- The costumer can see all the orders she has made and can also see if it is delivered or not. 
- A costumer can choose from three different shipping alternatives. The shipping alternatives are being stored in the mongoose database. 
- The admin can edit which shoe belongs to which category, and the admin can also delete products. 
- The checkout has validation on all of the fields. 

## How we built the project

We have used Express and mongoose for this project. To set it up from the start we did: 
1. ``npm init``
2. ``npm install``
3. ``npm i express``
4. ``npm i mongoose``
5. ``npm i express-fileupload``
6. ``npm i bcrypt``
7. ``npm i react-router-dom``
8. ``npm i cookie-session``
9. ``npm i cors``
10. ``npm i cors``
11. We also used grommet in the frontend ``npm install grommet``


## How to set up the project

To run the project: 
Make sure you have node installed globally. Then do ``npm install`` in client and server folders. 
The server has [http://localhost:5000]. To run the server: ``node server.js``
The frontend has [http://localhost:3000] To run the client: ``npm start``

------------------------



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
