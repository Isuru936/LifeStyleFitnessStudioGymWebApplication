import Message from '../models/Notification.model.js';

const createMessage = async (req, res) => {
  try {
    const { subject, message } = req.body;
    const newMessage = new Message({
      subject,
      message
    });
    await newMessage.save();
    res.status(201).json({ message: 'Message created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating message', error: error.message });
  }
};

const getNotifications = async (req, res) => {
  try {
    const notifications = await Message.find();
    res.status(200).json({ notifications });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching notifications', error: error.message });
  }
};

const markNotificationAsRead = async (req, res) => {
  try {
    const { id } = req.params;
    await Message.findByIdAndUpdate(id, { read: true });
    res.status(200).json({ message: 'Notification marked as read' });
  } catch (error) {
    res.status(500).json({ message: 'Error marking notification as read', error: error.message });
  }
};

export { createMessage, getNotifications, markNotificationAsRead };
