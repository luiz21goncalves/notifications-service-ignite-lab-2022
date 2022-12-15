import { describe, it } from '@jest/globals';

import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { SendNotification } from './send-notification';

describe('SendNotification', () => {
  it('should be able to send a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const sendNotification = new SendNotification(notificationsRepository);

    const { notification } = await sendNotification.execute({
      content: 'Você tem uma nova mensagem',
      category: 'social',
      recipientId: 'fake-recipient-id',
    });

    const notifications = notificationsRepository.notifications;

    expect(notifications).toHaveLength(1);
    expect(notifications.at(0)).toStrictEqual(notification);
  });
});
