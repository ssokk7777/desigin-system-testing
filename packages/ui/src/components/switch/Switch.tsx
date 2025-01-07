import React, {useState} from 'react'
import './switch.scss'

export interface SwitchProps {
  color?: 'primary' | 'secondary' | 'error' | 'success' | 'warning'
  checked?: boolean
  defaultChecked?: boolean
  disabled?: boolean
  label?: string
  name?: string
  size?: 'small' | 'medium' | 'large'
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Switch = (
  {
     color = 'primary',
     checked,
     defaultChecked = false,
     disabled = false,
     label,
     name,
     size = 'medium',
     onChange,
     ...props
  }: SwitchProps) => {

  // 내부 상태로 checked 값을 관리
  const [internalChecked, setInternalChecked] = useState<boolean>(defaultChecked ?? false)
  const isControlled = checked !== undefined;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(!isControlled) {
      setInternalChecked(e.target.checked) // 내부 상태 업데이트
    }
    if (onChange) {
      onChange(e)
    }
  }

  return (
    <label
      className={[
        `storybook-font-${size}-${disabled ? 'disabled' : 'enabled'}`
      ].join(' ')}
    >
      <input
        type="checkbox"
        role="switch"
        className={[
          `switch-color-${color}`,
          `storybook-switch-size-${size}`
        ].join(' ')}
        checked={isControlled ? checked ?? false : internalChecked} // 외부에서 받은 checked 값 또는 내부 상태 사용
        disabled={!!disabled}
        name={name || ''}
        onChange={handleChange}
      />
      <span>{label}</span>
    </label>
  )
}