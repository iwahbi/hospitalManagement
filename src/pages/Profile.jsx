
import React, { useState } from 'react';
import { Form, Input, Button, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const Profile = () => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const [profileImage, setProfileImage] = useState(null);

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    // Handle profile update logic here
  };

  const uploadProps = {
    beforeUpload: file => {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
      }
      return isJpgOrPng && isLt2M;
    },
    onChange: info => {
      if (info.file.status === 'done') {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, imageUrl => setProfileImage(imageUrl));
      }
    },
  };

  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  return (
    <Form
      form={form}
      name="profile"
      onFinish={onFinish}
      initialValues={{
        name: 'John Doe',
        email: 'john.doe@example.com',
      }}
      scrollToFirstError
    >
      <Form.Item
        name="name"
        label={t('profile')}
        rules={[
          {
            required: true,
            message: 'Please input your name!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="email"
        label={t('profile')}
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="profileImage"
        label="Profile Image"
        valuePropName="fileList"
        getValueFromEvent={e => {
          if (Array.isArray(e)) {
            return e;
          }
          return e && e.fileList;
        }}
      >
        <Upload {...uploadProps}>
          <Button icon={<UploadOutlined />}>Upload</Button>
        </Upload>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          {t('save')}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Profile;
