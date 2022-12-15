import { Notification } from '@application/entities/notification';
import { NotificationsRepository } from '@application/repositories/notifications-repository';

export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  public notifications: Notification[];

  constructor() {
    this.notifications = [];
  }

  async findById(notificationId: string): Promise<Notification | null> {
    const notification = this.notifications.find(
      (findNotification) => findNotification.id === notificationId,
    );

    if (!notification) {
      return null;
    }

    return notification;
  }

  async save(notification: Notification): Promise<void> {
    const notificationIndex = this.notifications.findIndex(
      (findNotification) => findNotification.id === notification.id,
    );

    if (notificationIndex >= 0) {
      this.notifications[notificationIndex] = notification;
    }
  }

  async create(notification: Notification): Promise<void> {
    this.notifications.push(notification);
  }
}
