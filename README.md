# Angular Ecommerce Web App

I made this project to learn and understand the basics of both Angular and MySQL. It was not fun at first but once I got the hang of it it was quite pleasant. In addition to Angular and MySQL, this project is built using Ant Design for its UI and SwiperJS for its carousels. The backend is built using Node.js, Express.js, Joi for input validation, and JWT for authentication. I did want to provide a demo link for now there will be instructions on how to set up this project on your local machine.

<br/>

![](1.gif)
![](2.gif)

## Functionality

The application allows you to browse the home page for products, check out each of the details of the product and add them to your cart for a later checkout.

Adding products to your cart will make a notification pop up and indicate that the product was added successfully.

You are able to see a preview of the cart on the top bar or even navigate into a more detailed cart page.

The checkout process is a multi-page form that at the end allows you to place an order that will later be shown on the order history page.

<br/>

## Getting Started

The app can be installed by cloning the git repository

```
git clone https://github.com/michaelparkadze/angular-ecommerce-app.git folder-name
```

Then cd into both directories and run npm install

```
cd folder-name
cd backend
npm run install
cd.. // return to folder-name
cd client
npm run install
```

<br/>

After the entire installation you need to run the server and the client by running this commands each in its own directory

**backend**

```
npm run dev
```

**client**

```
ng serve
```

<br/>

## Prerequisites

You will need to have node and npm installed. In addition you will need a MySQL server running in order to have full functionality of the application

<br/>

## Environment Variables

Create a folder called env in the root of the backend directory and create a development.env file.

**Change DB variables to match your MySQL setup**

```
PORT=5000
DB_HOST='localhost'
DB_USER='root'
DB_PASSWORD=''
DB_NAME='myapp'
```
