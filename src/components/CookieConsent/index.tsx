import { Snackbar, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { SyntheticEvent, MouseEvent, useState, useEffect } from 'react'

import PButton from 'components/PButton'

const useStyles = makeStyles(theme => ({
  banner: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: theme.zIndex.snackbar,
    padding: theme.spacing(1.5),
    backgroundColor: 'rgba(0, 255, 240, 0.8)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#000',
    boxShadow: '0 -2px 5px rgba(5, 10, 64, 0.1)'
  }
}))

const CookieConsentBanner = () => {
  const classes = useStyles()

  const hasNotConsented =
    typeof window !== 'undefined' && localStorage.getItem('cookieConsent') !== 'true'
  const [open, setOpen] = useState(hasNotConsented)

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true')
    setOpen(false)
  }

  const handleClose = (_event: SyntheticEvent | MouseEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent')
    if (cookieConsent === 'true') {
      setOpen(false)
    }
  }, [])

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      open={open}
      onClose={handleClose}
      message={
        <Typography variant="subtitle1">
          This website is a safe place, we respect your privacy enough to skip the cookies and go
          straight to the content.
        </Typography>
      }
      action={
        <PButton variant="contained" color="primary" size="medium" onClick={handleAccept}>
          Accept
        </PButton>
      }
      ContentProps={{
        classes: {
          root: classes.banner
        }
      }}
    />
  )
}

export default CookieConsentBanner
