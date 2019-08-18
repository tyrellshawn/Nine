const express = require('express');
const request = require('request');

const _ = require('lodash');

const router = express.Router();

// TODO: Get the correct SECRET_KEY

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

router.post('initiateTransfer', (req, res) => {
    const body = _.pick(req.body, ['balance', 'reason', 'amount', 'recipient']);
    request.post({
            headers: {'Authorization': 'Bearer SECRET_KEY'},
            url: 'https://api.paystack.co/transfer',
            body: {'source': body.balance, 'reason': body.reason, 'amount': body.amount, 'recipient': body.recipient},
        }, (error, response, body) => {
            if (!!error) {
                return res.status(response.statusCode).send(`An error occured. ${error}`)
            }
            return res.status(response.statusCode).send(response)
        });
});

router.post('chargeAuthorization', (req, res) => {
    const body = _.pick(req.body, ['authorization_code', 'email', 'amount']);
    request.post({
            headers: {'Authorization': 'Bearer SECRET_KEY', 'Content-Type': 'application/json'},
            url: 'https://api.paystack.co/transfer',
            body: {'authorization_code': body.authorization_code, 'email': body.email, 'amount': body.amount},
        }, (error, response, body) => {
            if (!!error) {
                return res.status(response.statusCode).send(`An error occured. ${error}`)
            }
            return res.status(response.statusCode).send(response)
        });
});

router.post('createCustomer', (req, res) => {
    const body = _.pick(req.body, ['email']);
    request.post({
            headers: {'Authorization': 'Bearer SECRET_KEY', 'Content-Type': 'application/json'},
            url: 'https://api.paystack.co/customer',
            body: {'email': body.email},
        }, (error, response, body) => {
            if (!!error) {
                return res.status(response.statusCode).send(`An error occured. ${error}`)
            }
            return res.status(response.statusCode).send(response)
        });
});

router.post('listCustomers', (req, res) => {
    const body = _.pick(req.body, ['email']);
    request.get({
            headers: {'Authorization': 'Bearer SECRET_KEY'},
            url: 'https://api.paystack.co/customer',
        }, (error, response, body) => {
            if (!!error) {
                return res.status(response.statusCode).send(`An error occured. ${error}`)
            }
            return res.status(response.statusCode).send(response)
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