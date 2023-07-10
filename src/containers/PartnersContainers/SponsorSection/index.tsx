import { CardActionArea, Grid, Hidden, Paper, Stack, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

import Carousel from 'components/Carousel'
import BunnyLogo from 'containers/HomeContainers/TrustSection/assets/bunnycdn.svg'

const useStyles = makeStyles(theme => ({
  actionArea: {
    display: 'flex',
    borderRadius: 24,
    marginTop: theme.spacing(2),
    height: '100%'
  },
  sponsorPaper: {
    height: '100%',
    padding: theme.spacing(4)
  },
  sponsorImg: {
    width: '100%',
    backgroundSize: 'cover',
    display: 'block',
    margin: 'auto',
    fill: theme.palette.mode === 'dark' ? 'white' : 'inherit',
    '& #linode-block': {
      fill: '#03232E'
    },
    '& #linode-text': {
      fill: theme.palette.mode === 'light' ? '#03232E' : '#FFF'
    },
    '& #bunny-text': {
      fill: theme.palette.mode === 'light' ? '#03232E' : '#FFF'
    }
  }
}))

const SponsorSection = () => {
  const classes = useStyles()

  return (
    <Grid container item xs={12} md={9}>
      <Hidden smDown>
        <Grid container item xs={12} alignItems="center" justifyContent="center" wrap="nowrap">
          <Stack direction="row" spacing={2}>
            <Grid item xs={12} justifyContent="center">
              <CardActionArea
                className={classes.actionArea}
                href="https://bunny.net?ref=ppalfbefw3"
              >
                <Paper className={classes.sponsorPaper} elevation={0}>
                  <Typography variant="h4" gutterBottom>
                    BunnyCDN
                  </Typography>
                  <Stack direction="row" spacing={2}>
                    <Typography variant="subtitle2">
                      BunnyCDN is a private and fast content distribution network used to boost the
                      download of the Parrot system. Go faster than the fastest with the
                      next-generation CDN, edge storage, and optimization service.
                    </Typography>
                    <BunnyLogo className={classes.sponsorImg} />
                  </Stack>
                </Paper>
              </CardActionArea>
            </Grid>
          </Stack>
        </Grid>
      </Hidden>
      <Hidden mdUp>
        <Grid item xs={12}>
          <Carousel swipe animation="slide" navButtonsAlwaysInvisible>
            <CardActionArea className={classes.actionArea} href="https://bunny.net?ref=ppalfbefw3">
              <Paper className={classes.sponsorPaper} elevation={0}>
                <Stack direction="column" spacing={2}>
                  <Typography variant="h4" gutterBottom>
                    BunnyCDN
                  </Typography>
                  BunnyCDN is a private and fast content distribution network used to boost the
                  download of the Parrot system. Go faster than the fastest with the next-generation
                  CDN, edge storage, and optimization service.
                  <BunnyLogo className={classes.sponsorImg} />
                </Stack>
              </Paper>
            </CardActionArea>
          </Carousel>
        </Grid>
      </Hidden>
    </Grid>
  )
}

export default SponsorSection
