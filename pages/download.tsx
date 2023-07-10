import { Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { SnackbarProvider } from 'notistack'

import 'react-image-lightbox/style.css'
import GetInvolvedSection from 'containers/ContributeContainers/GetInvolvedSection'
import OSSelection from 'containers/DownloadContainers/OSSelection'

const useStyles = makeStyles({
  contribute: {
    marginTop: 139
  },
  snackbar: {
    backgroundColor: 'linear-gradient(99.16deg, #05EEFF 24.01%, #00FFF0 81.75%)',
    color: '#03232E',
    borderRadius: 16
  }
})

const Download: NextPage = () => {
  const classes = useStyles()
  const router = useRouter()
  const version =
    router.query.version === 'security' ||
    router.query.version === 'home' ||
    router.query.version === 'hackthebox' ||
    router.query.version === 'architect' ||
    router.query.version === 'cloud' ||
    router.query.version === 'raspberry'
      ? router.query.version
      : 'security'
  return (
    <SnackbarProvider preventDuplicate classes={{ variantSuccess: classes.snackbar }}>
      <Grid container justifyContent="center">
        <OSSelection initialVersion={version} />
        <GetInvolvedSection />
      </Grid>
    </SnackbarProvider>
  )
}

export default Download
