const express = require('express');
const request = require('request');
const paystack = require('paystack')('secret_key');
const _ = require('lodash');

const router = express.Router();

// TODO: Get the correct SECRET_KEY
// TODO: Change requests to use current Paystack api
router.get('resolveBVN', (req, res) => {
    request.get({
        headers: {'Authorization' : 'Bearer SECRET_KEY'},
        url: 'https://api.paystack.co/bank/resolve_bvn/21212917741',
      }, (error, response, body) => {
          if (!!error) {
            return res.status(response.statusCode).send(`An error occured. ${error}`)
          }
          return res.status(response.statusCode).send(body)
      });
});

router.get('resolveAccountNumber', (req, res) => {
    const body = _.pick(req.body, ['accountNumber', 'bankCode']);
    request.get({
        headers: {'Authorization' : 'Bearer SECRET_KEY'},
        url: `https://api.paystack.co/bank/resolve?accountNumber=${body.accountNumber}&${body.bankCode}`,
      }, (error, response, body) => {
          if (!!error) {
            return res.status(response.statusCode).send(`An error occured. ${error}`)
          }
          return res.status(response.statusCode).send(body)
      });
})


/** Paystack API */
router.post('transaction/initialize', (req, res) => {
    const body = _.pick(req.body, ['reference', 'amount', 'email', 'plan']);

    paystack.transactions.initialize(body)
        .then(function(body) {
            return res.send(body);
        })
        .catch(function(error) {
            return res.send(`An error occured occured. ${error}`);
        });
});

router.post('transaction/charge', (req, res) => {
    const body = _.pick(req.body, ['reference', 'authorization_code', 'email', 'amount']);

    paystack.transactions.charge(body)
        .then(function(body) {
            return res.send(body);
        })
        .catch(function(error) {
            return res.send(`An error occured occured. ${error}`);
        });
});

router.get('/transaction/:id', (req, res) => {
    const customerId = req.params.id;

    paystack.transactions.initialize(customerId)
        .then(function(body) {
            return res.send(body);
        })
        .catch(function(error) {
            return res.send(`An error occured occured. ${error}`);
        });
});

router.get('/customer/:id', (req, res) => {
    const customerId = req.params.id;

    paystack.customer.get(customerId)
        .then(function(body) {
            return res.send(body);
        })
        .catch(function(error) {
            return res.send(`An error occured occured when customer id ${id}. ${error}`);
        });
});

router.patch('/customer/:id', (req, res) => {
    const body = _.pick(req.body, ['first_name', 'last_name', 'email', 'phone']);
    const customerId = req.params.id;

    paystack.customer.update(customerId, body)
        .then(function(body) {
            return res.send(body);
        })
        .catch(function(error) {
            return res.send(`An error occured occured when customer id ${id}. ${error}`);
        });
});

router.get('/customer/list', (req, res) => {
    paystack.customer.list()
        .then(function(body) {
            return res.send(body);
        })
        .catch(function(error) {
            return res.send(`An error occured. ${error}`);
        });
});

router.post('/create/customer', (req, res) => {
    const body = _.pick(req.body, ['email', 'first_name', 'last_name', 'phone']);
    paystack.customer.create ({
        email: body.email,
        first_name: body.first_name,
        last_name: body.last_name,
        phone: body.phone
    })
        .then(function(body) {
            return res.send(body);
        })
        .catch(function(error) {
            return res.send(`An error occured while creating customers. ${error}`);
        });
});

// request.get({
//     // headers: {'Authorization' : 'Bearer SECRET_KEY'},
//     url:     'http://www.google.com',
//     }, function(error, response, body){
//         console.error(`Error: ${error}`);
//         console.log('Status Code:', response && response.statusCode);
//         // console.log(`Body: ${body}`)
//     });
module.exports = router;