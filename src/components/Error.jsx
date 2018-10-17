import React from 'react'
import styled from 'styled-components'

import IconWarning from './IconWarning'

import { supportContact } from '../../config.json'

const Error = styled.div`
  ${({ fill }) => (fill ? 'width: 100%;' : null)}

  background-color: rgba(255, 255, 255, 0.1);;
  padding: 24px;
`

const ErrorHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
`

const ErrorTitle = styled.h4`
  font-family: 'DIN Light';
  font-size: 24px;
  color: white;
  margin-left: 12px;
`

const ErrorMessage = styled.p`
  font-family: 'DIN Light';
  font-size: ${({ small }) => (small ? '12px' : '18px')};
  color: white;
`

const generateHumanReadableError = (error) => {
  if (!error.status) {
    return ('It looks like there\'s something wrong with the internet connection.')
  }

  return ('That\'s about all we know.')
}

export default ({ error, callerDescription }) => (
  <Error>
    <ErrorHeader>
      <IconWarning width="56px" />
      <ErrorTitle>There was a problem loading { callerDescription }</ErrorTitle>
    </ErrorHeader>
    <ErrorMessage>{ generateHumanReadableError(error) }</ErrorMessage>
    {
      supportContact
        ? <ErrorMessage small>Please report this to { supportContact }.</ErrorMessage>
        : null
    }
  </Error>
)
