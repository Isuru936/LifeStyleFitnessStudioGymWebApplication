const Message = require('../models/Message');

// Create a new message
const createMessage = async (req, res) => {
  try {
    const { subject, message, date } = req.body;
    const newMessage = new Message({
      subject,
      message,
      date
    });
    await newMessage.save();
    res.status(201).json({ message: 'Message created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating message', error: error.message });
  }
};

module.exports = { createMessage };
