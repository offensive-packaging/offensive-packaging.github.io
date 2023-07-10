import { Grid, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { NextPage } from 'next'

import PButton from 'components/PButton'
import Socials from 'containers/Linktree/linktree/social'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(5)
  },
  linktree: {
    marginTop: theme.spacing(3),
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(2)
    }
  }
}))

const Linktree: NextPage = () => {
  const classes = useStyles()
  const socialData = Socials.map((data, i) => (
    <PButton
      key={`id-${i}`}
      className={classes.linktree}
      variant="contained"
      gradient
      to={data.link}
    >
      {data.name}
    </PButton>
  ))

  return (
    <Grid container className={classes.root} justifyContent="center">
      <Grid
        item
        container
        xs={10}
        justifyContent="center"
        alignItems="center"
        direction="column"
        wrap="nowrap"
      >
        <Typography variant="h1" align="center" paragraph>
          Linktree
        </Typography>
        {socialData}
      </Grid>
    </Grid>
  )
}

export default Linktree
