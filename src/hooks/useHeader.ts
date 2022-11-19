import { useState } from 'react'

function UseHeader() {
  const [headerTitle, setHeaderTitle] = useState('')
  return {
    headerTitle,
    setHeaderTitle,
  }
}

export default UseHeader
