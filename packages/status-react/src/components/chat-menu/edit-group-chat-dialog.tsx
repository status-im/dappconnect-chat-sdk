import React from 'react'

import { Avatar, Dialog, TextInput } from '~/src/system'

export const EditGroupChatDialog = () => {
  return (
    <Dialog title="Edit Group">
      <Dialog.Body align="center">
        <TextInput
          label="Group name"
          placeholder="A catchy name"
          maxLength={30}
        />
        <Avatar size="120" />
      </Dialog.Body>
      <Dialog.Actions>
        <Dialog.Action>Save changes</Dialog.Action>
      </Dialog.Actions>
    </Dialog>
  )
}
