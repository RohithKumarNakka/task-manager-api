const mailgun = require("mailgun-js");

const api_key = process.env.API_KEY;
const domain = process.env.DOMAIN;

const mg = mailgun({
  apiKey: api_key,
  domain: domain,
});

const sendWelcomeEmail = (email, name) => {
  mg.messages().send(
    {
      from: "Excited User <me@samples.mailgun.org>",
      to: email,
      subject: "Thanks for joining us!",
      text: `Welcome ${name}, Happy that you are here!`,
    },
    function (error, body) {
      console.log(body);
    }
  );
};

const sendCancelEmail = (email, name) => {
  mg.messages().send(
    {
      from: "Excited User <me@samples.mailgun.org>",
      to: email,
      subject: "We are sorry for that you are going away from us!",
      text: `Thanks for all the things ${name}, Hoping to see you in future!`,
    },
    function (error, body) {
      console.log(body);
    }
  );
};

module.exports = {
  sendWelcomeEmail,
  sendCancelEmail,
};
