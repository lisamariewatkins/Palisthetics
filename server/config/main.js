module.exports = {
  // Secret key for JWT signing and encryption
  'secret': 'super secret passphrase',
  // Database connection information
  'database': 'mongodb://127.0.0.1:27017/palisthetics',
  // Setting port for server
  'port':  process.env.PORT || 3000,
  // Configuring Mailgun API for sending transactional email
  'mailgun_priv_key': 'mailgun private key here',
  // Configuring Mailgun domain for sending transactional email
  'mailgun_domain': 'mailgun domain here',
  // Mailchimp API key
  'mailchimpApiKey': 'mailchimp api key here',
  // Stripe API key
  'stripeApiKey': 'stripe api key goes here'
}
