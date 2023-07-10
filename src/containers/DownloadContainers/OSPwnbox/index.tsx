import { Grid, Link } from '@mui/material'
import { makeStyles } from '@mui/styles'

import htb1 from './assets/htb-1.png'
import htb2 from './assets/htb-2.png'
import htb3 from './assets/htb-3.png'
import htb4 from './assets/htb-4.png'
import htb5 from './assets/htb-5.png'

import DESection from 'containers/DownloadContainers/DESection'

const useStyles = makeStyles(theme => ({
  desktopEnvironment: {
    marginTop: theme.spacing(8)
  },
  PwnboxTitle: {
    width: '100%',
    marginTop: theme.spacing(8),
    padding: theme.spacing(8),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(4)
    }
  },
  gridHrMarginTop: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2)
  },
  subtitleMargined: {
    marginBottom: theme.spacing(4)
  },
  subBlockHeading: {
    fontFamily: 'museo-sans',
    fontWeight: 900
  },
  academyLink: {
    zIndex: 1,
    position: 'relative'
  }
}))

const OSPwnbox = () => {
  const classes = useStyles()
  return (
    <>
      <Grid container justifyContent="center">
        <DESection
          className={classes.desktopEnvironment}
          name="Hack The Box Edition"
          description={
            <>
              Unleash the full power of your Pwnbox, a customized hacking cloud box based on
              ParrotOS Security Edition, on your computer or try it online at{' '}
              <Link
                className={classes.academyLink}
                href="https://affiliate.hackthebox.com/htb_academy_parrotsec"
                underline="none"
              >
                Hack The Box Academy
              </Link>
              .
            </>
          }
          version="5.3 Electro Ara"
          releaseDate="May 1, 2023"
          architecture="amd64"
          screenshots={[htb1, htb2, htb3, htb4, htb5]}
          requirements={[
            { heading: 'Processor', description: 'Dual Core CPU' },
            { heading: 'Graphics', description: 'No Graphical Acceleration Required' },
            { heading: 'Memory', description: '1 GB RAM' },
            { heading: 'Storage', description: '20 GB available space' }
          ]}
          features={[
            {
              hero: 'Use cases',
              content: [
                {
                  heading: 'Beginners in Cyber Security',
                  description: (
                    <>
                      If you don’t know which tools you need yet or how to set up a hacking VM/OS,
                      this is the answer on how to start your hacking journey.
                    </>
                  )
                },
                {
                  heading: 'Slow device/laptop or with low capabilities',
                  description: (
                    <>
                      Your PC doesn’t have the capabilities to run a hacking VM or is broken? Hack
                      The Box Edition to the rescue!
                    </>
                  )
                }
              ]
            },
            {
              hero: 'Development',
              content: [
                {
                  heading: 'Development Tools',
                  description: <>VSCodium and Geany. You can start developing what you want.</>
                },
                {
                  heading: 'Advanced Framework Support',
                  description: (
                    <>
                      Fully support for a lot of programming languages/frameworks like Go, Rust,
                      Python and more.
                    </>
                  )
                }
              ]
            }
          ]}
          downloadOption={{
            iso: 'https://deb.parrot.sh/parrot/iso/5.3/Parrot-htb-5.3_amd64.iso'
          }}
          torrent={{
            iso: 'https://deb.parrot.sh/parrot/iso/5.3/Parrot-htb-5.3_amd64.iso.torrent'
          }}
          allHashes={{ url: 'https://deb.parrot.sh/parrot/iso/5.3/signed-hashes.txt' }}
        ></DESection>
      </Grid>
    </>
  )
}

export default OSPwnbox
