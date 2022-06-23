import { Button } from '@mui/material'
import React from 'react'
import {auth} from "../firebase"

function SignOut() {
  return (
    <div>
        <Button onclick={() => auth.signOut()}>SignOut</Button>
    </div>
  )
}

export default SignOut