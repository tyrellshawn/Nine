const express = require('express');
const request = require('request');
const testKey = 'pk_test_cyTPLxjAYAkWZv0W1Dl7yo8T00U1xsjcWC';
const stripe = require('stripe')(testKey);

const router = express.Router();
//Create A stripe Customer and recieve the Token as the Response
router.post('/create/stripe_customer', (req, res) => {
  const body = _.pick(req.body, ['email', 'first_name', 'last_name', 'phone']);
  stripe.customers
    .create({
      description: 'Customer for jenny.rosen@example.com',
      source: 'tok_visa' // obtained with Stripe.js
    })
    .then(function(body) {
      return res.send(body);
    })
    .catch(function(error) {
      return res.send(`An error occured while creating customers. ${error}`);
    });
});

//Retrieve the Details of a Stripe Customer with The ID as a Param
router.get('/customer/get_stripe_customer/:id', (req, res) => {
  const customerId = req.params.id;

  stripe.customer
    .get(customerId)
    .then(function(body) {
      return res.send(body);
    })
    .catch(function(error) {
      return res.send(
        `An error occured occured when customer id ${id}. ${error}`
      );
    });
});
//Updates the Details of a Stripe Customer with The ID as a Param
router.post('/customer/update_stripe_customer/:id', (req, res) => {
  const body = _.pick(req.body, ['first_name', 'last_name', 'email', 'phone']);
  const customerId = req.params.id;

  stripe.customer
    .update(customerId, body)
    .then(function(body) {
      return res.send(body);
    })
    .catch(function(error) {
      return res.send(
        `An error occured occured when customer id ${id}. ${error}`
      );
    });
});
