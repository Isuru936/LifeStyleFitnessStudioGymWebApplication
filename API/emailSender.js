import nodemailer from "nodemailer";

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "falconblue2002@gmail.com",
    pass: "tigg ocil gaqh lgdb",
  },
});

// Function to send email
const sendEmail = async (userEmail, subject, html) => {
  try {
    // Define email options
    const mailOptions = {
      from: "falconblue2002@gmail.com",
      to: userEmail,
      subject: subject,
      html: html,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
    return info;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

// Define route for sending email
const sendEmailRoute = async (req, res) => {
  const { userEmail, subject, html } = req.body;

  try {
    // Call the sendEmail function with userEmail as the recipient
    await sendEmail(userEmail, subject, html);

    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Error sending email");
  }
};

export { sendEmail, sendEmailRoute };
