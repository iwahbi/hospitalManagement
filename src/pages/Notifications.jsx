
import React from 'react';
import { List, Avatar } from 'antd';
import { NotificationOutlined } from '@ant-design/icons';

const data = [
  {
    title: 'Appointment Reminder',
    description: 'Your appointment with Dr. Smith is tomorrow at 3:00 PM.',
  },
  {
    title: 'System Update',
    description: 'The system will be undergoing maintenance on Friday.',
  },
];

const Notifications = () => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar icon={<NotificationOutlined />} />}
            title={item.title}
            description={item.description}
          />
        </List.Item>
      )}
    />
  );
};

export default Notifications;
