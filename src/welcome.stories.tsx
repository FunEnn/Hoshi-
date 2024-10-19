import React from 'react';
import { Meta } from '@storybook/react';

// 欢迎组件
const WelcomePage = () => {
  return (
    <>
      <h1>欢迎来到 Hoshi 组件库</h1>
      <h3>安装试试</h3>
      <code>npm install ennhoshi --save</code>
    </>
  );
};

// 欢迎组件的故事
const WelcomeStory = () => <WelcomePage />;

export default {
  title: 'Welcome page',
  component: WelcomePage,
  parameters: {
    info: { disable: true },
  },
} as Meta;

// 导出故事
export const Welcome = WelcomeStory;