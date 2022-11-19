import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    font-family: ${({theme}) => theme.font.Spoqa};
    -webkit-font-smoothing: antialiased;
    -webkit-overflow-scrolling: touch;
    -moz-osx-font-smoothing: grayscale;
    outline: none;
    -webkit-tap-highlight-color: ${({theme}) => theme.colors.transparent};
    //color: $color-28;
    font-size: 14px;
    letter-spacing: -0.02em;
    line-height: 1.44;
    scrollbar-3dlight-color: ${({theme}) => theme.colors.transparent};
    scrollbar-darkshadow-color: ${({theme}) => theme.colors.transparent};
    scrollbar-arrow-color: ${({theme}) => theme.colors.transparent};
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }

  html {
    width: 100%;
    height: auto;
    overflow-x: hidden;
    position: relative;
  }

  body {
    width: 100%;
    height: 100%;
    min-height: 100vh;
    overflow-x: hidden;
    position: relative;
  }

  ul {
    list-style: none;
  }

  a {
    font-size: inherit;
    font-weight: inherit;
    color: inherit;
    text-decoration: none;
    cursor: pointer;

    * {
      cursor: pointer;
    }
  }

  input[type=date] {
    -webkit-appearance: none;
  }

  select {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background-size: 12px;
    background-repeat: no-repeat;
    background-position: right 8px center;
  }

  select::-ms-expand {
    display: none;
  }

  select option {
    font-weight: normal;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background-color: ${({theme}) => theme.colors.white};
  }

  @keyframes autofill {
    100% {
      background: ${({theme}) => theme.colors.transparent};
      color: inherit;
    }
  }

  @-webkit-keyframes autofill {
    100% {
      background: ${({theme}) => theme.colors.transparent};
      color: inherit;
    }
  }

  input,
  textarea,
  select,
  button {
    border: none;
    height: 44px;
  }

  textarea {
    resize: none;
    outline: none;
  }

  button {
    outline: none;
    border: none;
    cursor: pointer;
    background-color: ${({theme}) => theme.colors.transparent};

    a {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  fieldset {
    padding: 0;
    margin: 0;
    border: none;
    text-align: left;
  }

  input {

    &[type='number']::-webkit-outer-spin-button,
    &[type='number']::-webkit-inner-spin-button {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
    }

    &[type='number'] {
      -moz-appearance: textfield;
    }
  }
  
  input,
  textarea,
  select {
    -webkit-appearance: none;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    font-size: 14px;
    border: 1px solid ${({theme}) => theme.colors.black05};
    border-radius: 2px;

    ::placeholder {
      color: ${({theme}) => theme.colors.black04};
    }
    :placeholder-shown {
      text-overflow: ellipsis;
    }
    &[readonly] {
      cursor: pointer;
    }

    &:focus:not([readonly]),
    &.filled {
      border: 1px solid ${({theme}) => theme.colors.primary};
    }

    &.invalid {
      border: 1px solid ${({theme}) => theme.colors.error};
    }

    &:disabled {
      background-color: ${({theme}) => theme.colors.black01};
      color: ${({theme}) => theme.colors.black05};
      border: none;
      cursor: not-allowed;
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      -webkit-animation: autofill 0s forwards;
      animation: autofill 0s forwards;
    }

    &::-webkit-inner-spin-button,
    &::-webkit-calendar-picker-indicator {
      display: none;
      -webkit-appearance: none;
    }
  }
  
  .v-alert {
    width: 100vw;
    height: 100vh;
  }
`
