import { Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'

import parrotHome1 from './assets/parrot-home-1.png'
import parrotHome2 from './assets/parrot-home-2.png'
import parrotHome3 from './assets/parrot-home-3.png'
import parrotHome4 from './assets/parrot-home-4.png'
import parrotHome5 from './assets/parrot-home-5.png'

import DESection from 'containers/DownloadContainers/DESection'

const useStyles = makeStyles(theme => ({
  desktopEnvironment: {
    marginTop: theme.spacing(8)
  }
}))

const OSHome = () => {
  const classes = useStyles()
  return (
    <>
      <Grid container justifyContent="center">
        <DESection
          className={classes.desktopEnvironment}
          name="Home Edition"
          description={
            <>
              Parrot Home Edition is a general purpose operating system with the typical Parrot look
              and feel. This edition is designed for daily use, privacy and software development.
              Parrot Tools can be manually installed to assemble a custom and lightweight pentesting
              environment. It is available for amd64 architectures and also in OVA format (amd64
              only) and for UTM (Apple Silicon).
            </>
          }
          version="5.3 Electro Ara"
          releaseDate="May 1, 2023"
          architecture="amd64, arm64"
          screenshots={[parrotHome1, parrotHome2, parrotHome3, parrotHome4, parrotHome5]}
          requirements={[
            { heading: 'Processor', description: 'Dual Core CPU' },
            { heading: 'Graphics', description: 'No Graphical Acceleration Required' },
            { heading: 'Memory', description: '1 GB RAM' },
            { heading: 'Storage', description: '16 GB available space' }
          ]}
          features={[
            {
              hero: 'Workstation',
              content: [
                {
                  heading: 'Full Office Suite',
                  description: (
                    <>
                      Pre-installed LibreOffice, and possibility to install other softwares via the
                      Synaptic package manager.
                    </>
                  )
                },
                {
                  heading: 'Multimedia Production',
                  description: (
                    <>
                      VLC, GIMP and a whole repository from which to install other software such as
                      OBS, Blender, Kdenlive, Krita and more!
                    </>
                  )
                }
              ]
            },
            {
              hero: 'Privacy',
              content: [
                {
                  heading: 'Anonymity tools',
                  description: <>AnonSurf, TOR, Firefox pre-installed Ad-blockers.</>
                },
                {
                  heading: 'Cryptography',
                  description: (
                    <>
                      Full disk encryption and all encryption tools including zulucrypt, sirikali...
                      at your fingertips!
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
            iso: 'https://deb.parrot.sh/parrot/iso/5.3/Parrot-home-5.3_amd64.iso',
            virtualbox: 'https://deb.parrot.sh/parrot/iso/5.3/Parrot-home-5.3_amd64.ova',
            utm: 'https://deb.parrot.sh/parrot/iso/5.3/Parrot-home-5.3_arm64.utm.zip'
          }}
          torrent={{
            iso: 'https://deb.parrot.sh/parrot/iso/5.3/Parrot-home-5.3_amd64.iso.torrent',
            virtualbox: 'https://deb.parrot.sh/parrot/iso/5.3/Parrot-home-5.3_amd64.ova.torrent',
            utm: 'https://deb.parrot.sh/parrot/iso/5.3/Parrot-home-5.3_arm64.utm.torrent'
          }}
          allHashes={{ url: 'https://deb.parrot.sh/parrot/iso/5.3/signed-hashes.txt' }}
        />
      </Grid>
    </>
  )
}

export default OSHome
