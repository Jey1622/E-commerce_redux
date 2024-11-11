const orderModel = require("../models/ordeerModel");
const nodemailer = require("nodemailer");
require("dotenv").config();

exports.createOrder = async (req, res, next) => {
  const cartItems = req.body;
  console.log(typeof cartItems);
  console.log(cartItems.email);
  const emailId=cartItems.email;
  const amount = cartItems.product
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);
  const status = "pending";

  const order = await orderModel.create({ cartItems, amount, status });

  const transpoter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "jeyaramanapr22@gmail.com",
      pass: process.env.pass,
    },
  });
  const mailOptions = {
    from: "jeyaramanapr22@gmail.com",
    to: emailId,
    subject: "order conformed",
    html: `
  <ul>
  <li>product : ${cartItems.product.name}</li>
  <li>price : ${cartItems.product.price}</li>
  <li>quantity : ${cartItems.product.quantity}</li>
  <li>Total amount : ${amount}</li>
  </ul>
  `,
  };
  transpoter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`email sent : ${info.response}`);
    }
  });
  transpoter.close();

  console.log(amount, "amount");

  res.json({
    success: true,
    order,
  });
};
