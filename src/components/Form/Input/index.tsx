import cx from 'classnames'
// import {
//   HTMLInputTypeAttribute,
//   ReactNode,
// } from 'react'
import styled from 'styled-components'

// type InputTypeProps = HTMLInputTypeAttribute | 'currency'
// type InputModeProps = 'decimal' | 'email' | 'none' | 'numeric' | 'search' | 'tel' | 'text' | 'url'

interface InputProps {
  // type?: InputTypeProps
  // inputMode?: InputModeProps
  // id?: string
  className?: string
  // value?: string | number
  // errorMessage?: string
  // placeholder?: string
  // maxLength?: number
  // onChange?: (value: string) => void
  // isClearable?: boolean
  // readonly?: boolean
  onClick?: () => void
  disabled?: boolean
  // invalid?: boolean
  // leftIcon?: ReactNode
  // rightIcon?: ReactNode
}

function Input({
  className,
  onClick = () => {},
  disabled = false,
}: InputProps) {
  return (
    <InputWrapper
      className={cx(`input`, { className })}
      onClick={() => {
        if (disabled) return
        onClick()
      }}
     />
  )
}

const InputWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;

  input {
    width: 100%;
    padding: 1.2rem 3.6rem 1.2rem 1.2rem;
    background-color: transparent;
  }

  * + input {
    padding-left: 3.6rem;
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
    left: 1.2rem;
  }

  .right-icon {
    right: 1.2rem;
  }
`

export default Input
