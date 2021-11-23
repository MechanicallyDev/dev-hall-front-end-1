import React from 'react'
import InputMask from 'react-input-mask'

const TelephoneInput = props => (
  <InputMask mask='(99)99999-9999' {...props} />
)

export { TelephoneInput }
