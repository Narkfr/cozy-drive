import React from 'react'

import Recipient from './Recipient'

const WhoHasAccess = ({ recipients, documentType, onUnshare }) => (
  <div>
    {recipients
      .filter(r => r.status !== 'revoked')
      .map(({ contact, status }) => (
        <Recipient
          contact={contact}
          status={status}
          documentType={documentType}
          onUnshare={onUnshare}
        />
      ))}
  </div>
)

export default WhoHasAccess
