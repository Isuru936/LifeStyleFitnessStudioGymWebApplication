import express from 'express';
import { createMessage, getNotifications, markNotificationAsRead } from '../controllers/Notification.controller.js';

const router = express.Router();

router.post('/create-notification', createMessage);
router.get('/notifications', getNotifications);
router.put('/notifications/:id', markNotificationAsRead);

export default router;
