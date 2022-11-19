import React, {
  HTMLInputTypeAttribute,
  useEffect,
  useRef,
  useState,
} from 'react'
import CloseRounded from '@material-ui/icons/CloseRounded'
import SearchOutlined from '@material-ui/icons/SearchOutlined'
import styled from 'styled-components'
import cx from 'classnames'
import isNil from 'lodash/isNil'

type VInputModeProps =
  'email'
  | 'search'
  | 'tel'
  | 'text'
  | 'url'
  | 'none'
  | 'numeric'
  | 'decimal'
  | 'number'
  | 'currency'

interface VInputProps {
  type?: HTMLInputTypeAttribute | 'search' | 'currency'
  inputMode?: VInputModeProps
  id?: string
  className?: string
  value?: string | number
  patternType?: undefined | 'number' | 'string' | 'email' | 'currency'
  errorMessage?: string
  placeholder?: string
  maxLength?: number
  onChange?: (value: string) => void
  isClearable?: boolean
  readonly?: boolean
  onClick?: () => void
  disabled?: boolean
  invalid?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

function VInput({
  id,
  type = 'text',
  inputMode = 'text',
  className,
  value = '',
  placeholder,
  maxLength = 0,
  onChange = () => {},
  isClearable = true,
  readonly = false,
  onClick = () => {},
  disabled = false,
}: VInputProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [inputValue, setInputValue] = useState(value)

  const onChangeValue = (value: number | string) => {
    let targetValue = value.toString()
    if (maxLength !== 0 && targetValue.length > maxLength) return
    if (type === 'number' || type === 'currency') {
      targetValue = targetValue.replace(/[^0-9]/g, '')
      targetValue = targetValue.replace(/-/g, '')
    }
    if (type === 'currency') {
      if (targetValue.indexOf('0') === 0) {
        targetValue = targetValue.substring(1)
      }
      targetValue = targetValue.replace(/\d(?=(?:\d{3})+$)/g, '$&,')
    }
    setInputValue(targetValue)
    onChange(targetValue)
  }
  const onClear = () => {
    setInputValue('')
    inputRef?.current?.focus()
    onChange('')
  }
  useEffect(
    function onChangeInputValue() {
      if (!isNil(value)) {
        onChangeValue(value)
      }
    },
    [value],
  )
  return (
    <VInputWrap
      className={cx(`input`, { className })}
      onClick={() => {
        if (disabled) return
        onClick()
      }}
    >
      <LeftIcon
        className="left-icon"
        type={type}
      />
      <input
        id={id}
        ref={inputRef}
        type={type === 'currency' ? 'text' : type}
        className={cx({ filled: !isNil(inputValue) && inputValue.toString().length > 0 })}
        value={inputValue}
        placeholder={placeholder}
        onChange={(e) => onChangeValue(e.target.value)}
        readOnly={readonly}
        disabled={disabled}
        inputMode={inputMode === 'currency' || inputMode === 'number' ? 'numeric' : inputMode}
      />
      {isClearable && (<RightIcon
        className="right-icon"
        onClick={onClear}
      />)}
    </VInputWrap>
  )
}

const LeftIcon = ({
  className = '',
  type = 'text',
}) => {
  switch (type) {
    case 'search':
      return <SearchOutlined className={className} />
    default:
      return <></>
  }
}

const RightIcon = ({
  className = '',
  onClick = () => {
  },
}) => {
  return <CloseRounded
    className={className}
    onClick={onClick}
  />
}

const VInputWrap = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;

  input {
    width: 100%;
    padding: 12px 36px 12px 12px;
    background-color: transparent;
  }

  * + input {
    padding-left: 36px;
  }

  .left-icon,
  .right-icon {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .left-icon {
    left: 12px
  }

  .right-icon {
    right: 12px;
  }
`

export default VInput
