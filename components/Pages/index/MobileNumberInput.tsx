import styled from 'styled-components'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import VInput from '@/components/Form/VInput'
import { useState } from 'react'

function MobileNumberInput() {
  const [mobileNumber, setMobileNumber] = useState('')

  const onSendMobileNumber = () => {
    console.log('mobileNumber', mobileNumber)
  }

  return (
    <MobileNumberInputWrap className="mobile-number-input">
      <VInput
        type="number"
        inputMode="numeric"
        maxLength={15}
        placeholder="휴대폰 번호를 입력해주세요."
        onChange={(value) => setMobileNumber(value)}
      />
      <button onClick={onSendMobileNumber}>
        <ArrowForwardIcon className="right-icon" />
      </button>
    </MobileNumberInputWrap>
  )
}

const MobileNumberInputWrap = styled.div`
  width: 352px;
  height: 44px;
  display: flex;
  align-items: center;
  position: relative;
  border-radius: 22px;
  overflow: hidden;

  .input {
    width: 100%;
    height: 100%;
    padding: 0 24px;
    border-radius: inherit;
    border: none;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.black09};

    ::placeholder {
      font-size: inherit;
      color: inherit;
      opacity: 0.7;
    }

    input {
      padding: 0;
      border: none !important;
      color: inherit;
      font-size: inherit;
    }
  }

  button {
    width: 44px;
    height: 44px;
    padding: 8px;
    border-radius: inherit;
    background-color: ${({ theme }) => theme.colors.primary};
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;

    .right-icon {
      width: 100%;
      font-weight: 700;
      font-size: 28px;
      color: ${({ theme }) => theme.colors.white};
    }
  }
`

export default MobileNumberInput