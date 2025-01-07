import React, { useState } from 'react'
import type { StoryObj } from '@storybook/react'
import { Switch } from './Switch'
import { SwitchProps } from "./Switch"
import StoryTemplate from '@kt-cloud-front/ui/common/StoryTemplate'
import {userEvent, within} from "@storybook/test";
import { expect } from '@storybook/jest';

const colorOptions = ['primary', 'secondary', 'success', 'error', 'warning'] as const
const sizeOptions = ['small', 'medium', 'large'] as const

interface IMeta {
  title: string;
  component: object
  parameters: object
  tags: string[]
  args?: object
  argTypes: object
  render?: any
}

const meta: IMeta = {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs',
    // '!dev'
  ],
  argTypes: {
    color: {
      description: 'switch의 색상을 설정합니다.',
      control: { type: 'select' },
    },
    size: {
      description: 'switch의 크기를 설정합니다.',
      control: { type: 'select' },
    },
  }
}

export default meta

type Story = StoryObj<SwitchProps>

export const Default: Story = {
  args: {

  },
  render: (args) => {
    const [checked, setChecked] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setChecked(e.target.checked);
    };

    return (
      <Switch
        {...args}
        checked={checked}
        onChange={handleChange}
        label={checked ? 'Checked' : 'Unchecked'}
      />
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const switchInput = canvas.getByRole('switch', { name: 'Unchecked' });

    // 클릭 전 checked=false 인지 확인
    await expect(switchInput).not.toBeChecked();

    // switch 클릭
    await userEvent.click(switchInput);

    // 클릭 후 checked=true 변경 확인
    await expect(switchInput).toBeChecked();

    // 클릭 후 레이블이 "Checked"로 변경되었는지 확인
    const label = canvas.getByText('Checked'); // DOM에서 텍스트가 'Checked'인 요소를 찾음
    await expect(label).toBeInTheDocument(); // 찾은 요소(label)가 DOM에 존재하는지 확인
  },
}

export const Color: Story = {
  render: () => {
    const colorGroup = colorOptions.map((color) => (
      <Switch label={color} color={color} name={color} onChange={(e) => { console.log(e.target) }} defaultChecked/>
    ))
    return <StoryTemplate items={colorGroup} />
  },
}

export const Size: Story = {
  render: () => {
    const sizeGroup = sizeOptions.map((size) => (
      <Switch label={size} name={size} size={size}/>
    ))
    return <StoryTemplate items={sizeGroup} />
  },
}

export const Disabled: Story = {
  render: () => {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: '40px',
        margin: '40px',
        alignItems: 'center',
      }}>
        <Switch disabled label={'disabled'} checked/>
        <Switch disabled label={'disabled'}/>
      </div>
    )
  }
}