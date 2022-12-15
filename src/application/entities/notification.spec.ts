import { describe, it } from '@jest/globals';

import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('Você tem uma nova mensagem'),
      category: 'social',
      recipientId: 'fake-recipient-id',
    });

    expect(notification).toBeTruthy();
  });
});
