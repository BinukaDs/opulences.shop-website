require("dotenv").config();

const express = require("express");
const app = express();
const session = require("express-session");
const bodyParser = require("body-parser");
const Buffer = require("buffer");
const stripe = require("stripe")(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);
const cors = require("cors");
require("dotenv").config();

const crypto = require("crypto");
const CLIENT_URL = process.env.CLIENT_URL;

function generateSecret() {
  return crypto.randomBytes(64).toString("hex");
}

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(bodyParser.raw());
app.use(
  cors({
    origin: "https://opulences-shop-website.vercel.app",
  
  })
);

app.use(
  session({
    secret: generateSecret(),
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

async function sendMail({ to, name, subject }, { product, amount }) {
  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;
  const nodemailer = require("nodemailer");
  let transactionDate = new Date().toLocaleString();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });

  try {
    const testResult = await transporter.verify();
    console.log("Connected to email server", testResult);
  } catch (err) {
    console.error(err);
  }

  try {
    const sendResult = await transporter.sendMail({
      from: SMTP_EMAIL,
      to: to,
      subject,
      html: `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Hello, World!</title>
          <link rel="stylesheet" href="styles.css" />
        </head>
        <body>
            <p id="currentTime"></p>
            <script src="script.js"></script>
        </body>
      </html><!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Email Template</title>
          <style>
              body {
                  margin: 0;
                  padding: 0;
                  font-family: Arial, sans-serif;
                  background-color: #f0f0f0; /* Background color */
              }
      
              .container {
                  width: 80%;
                  max-width: 600px;
                  margin: 0 auto;
                  background-color: #ffffff; /* Poster background color */
                  padding: 20px;
                  border-radius: 10px;
                  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
                  text-align: center; /* Centered text */
              }
      
              h2 {
                  color: black;
                  font-size: 24px;
                  margin-bottom: 20px;
              }
      
              p {
                  color: #666666;
                  font-size: 16px;
                  line-height: 1.6;
              }
      
              .button {
                  display: inline-block;
                  background-color: #007bff; /* Button color */
                  color: #FFFFFF;
                  text-decoration: none;
                  padding: 10px 20px;
                  border-radius: 5px;
                  margin-top: 20px;
              }

              .button2 {
                display: inline-block;
                background-color: #1E1E1E; /* Button color */
                color: #FFFFFF;
                text-decoration: none;
                padding: 10px 20px;
                border-radius: 5px;
                margin-top: 20px;
            }
              
              .transaction-details {
                  text-align: center;
                  justify-content: center;
                  align-items: start;
                  margin-bottom: 20px;
                  
              }
      
              
      
              .transaction-details p {
                  margin: 0;
              }
      
              .button:hover {
                  background-color: #0056b3; /* Button hover color */
              }
          </style>
      </head>
      <body>
          <div class="container">
              <img src="https://drive.google.com/thumbnail?id=1-qeZRqWCjVw0p5rlUrkdVuHhXLLSB9yH&sz=w50" width="50px" height="50px"/>
              <h2>Hello! ${name},</h2>
              <p>Your Transaction at <strong>Opulences.shop</strong>  Was Successful! Thank you for Joining Us!. Now you can join our discord server using the Button below. Let's Begin!</p>
              <h3>Transaction Details:</h3>
              <div class="transaction-details">
                <div><p><strong>Name:</strong> ${name}</p></div>
                <div><p><strong>Date:</strong> ${transactionDate}</p></div>    
                <div><p><strong>Amount:</strong> € ${amount / 100}</p></div>
                <div><p><strong>Product:</strong> ${product}</p> </div>
              </div>
              <a href="#" class="button" style="color:#FFFFFF">Join Discord Server</a><br />
              <a href="#" class="button2" style="color:#FFFFFF">Watch Video</a>
          </div>
          <footer style="left: 0; bottom: 0; width: 100%; background-color: #f8f9fa; color: black; text-align: center;">
            <p>Copyright &copy; 2024 Opulences.shop</p>
          </footer>
      </body>
      </html>`,
    });
    console.log("Email sent", sendResult);
  } catch (err) {
    console.error(err);
  }
}

app.use((req, res, next) => {
  if (req.originalUrl === "/webhook") {
    next();
  } else {
    bodyParser.json()(req, res, next);
  }
});

app.post("/create-checkout-session", async (req, res) => {
  console.log("create-checkout-session hit!");
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      billing_address_collection: "required",
      line_items: req.body.item.map((item) => {
        return {
          price_data: {
            currency: "EUR",
            product_data: {
              name: item.name,
            },
            unit_amount: item.price * 100,
          },
          quantity: 1,
        };
      }),
      success_url: `${process.env.CLIENT_URL}/success/{CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.CLIENT_URL}/`,
    });

    if (session) {
      req.session.transactionSuccessful = false;
    }
    res.json({ id: session.id, url: session.url });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post(
  "/webhook",
  bodyParser.raw({ type: "application/json" }),
  async (req, res) => {
    console.log("webhook hit!");
    let event;
    const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;
    // Verify the event came from Stripe
    try {
      const sig = req.headers["stripe-signature"];
      event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
      if (event.type === "checkout.session.completed") {
        const session = event.data.object;
        console.log("Checkout session completed", session);
        const lineItems = await stripe.checkout.sessions.listLineItems(
          session.id
        );
        // console.log("Line items", lineItems);
        //const customer = await stripe.customers.retrieve(session.customer);

        const email = session.customer_details.email;
        const name = session.customer_details.name;
        const product = lineItems.data[0].description;
        const amount = lineItems.data[0].amount_total;
        const customer = await stripe.customers.create({
          email: email,
          name: name,
        });

        console.log("Customer created: ", customer.id);
        console.log("Product: ", product);
        console.log("Amount: ", amount);
        sendMail(
          {
            to: email,
            name: name,
            subject: `Your Transaction at Opulences.shop Was Successful!`,
          },
          { product: product, amount: amount }
        );
      }
    } catch (err) {
      console.log(`❌ Error message: ${err.message}`);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    console.log("✅ Success:", event.id);
    res.json({ received: true });
  }
);

app.get("/success", (req, res) => {
  console.log("success hit!");
  if (!req.session.transactionSuccessful) {
    res.redirect("/"); // redirect to home page if the transaction was not successful
  } else {
    req.session.transactionSuccessful = false;
    res.sendFile(path.join(__dirname, "success"));
  }
});

app.get("/", (req, res) => {
  res.send("Hello from server!");
});

// app.use(bodyParser.raw());
app.listen(3001);
