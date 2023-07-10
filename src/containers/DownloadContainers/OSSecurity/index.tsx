import { Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'

import parrotSecurity1 from './assets/parrot-security-1.png'
import parrotSecurity2 from './assets/parrot-security-2.png'
import parrotSecurity3 from './assets/parrot-security-3.png'
import parrotSecurity4 from './assets/parrot-security-4.png'
import parrotSecurity5 from './assets/parrot-security-5.png'

import DESection from 'containers/DownloadContainers/DESection'

const useStyles = makeStyles(theme => ({
  desktopEnvironment: {
    marginTop: theme.spacing(8)
  }
}))

const OSSecurity = () => {
  const classes = useStyles()
  return (
    <>
      <Grid container justifyContent="center">
        <DESection
          className={classes.desktopEnvironment}
          name="Security Edition"
          description={
            <>
              Parrot Security Edition is a special purpose operating system designed for Penetration
              Test and Red Team operations. It contains a full arsenal of ready to use pentesting
              tools. Also, it is available for amd64 architectures and also in OVA format (amd64
              only) and for UTM (Apple Silicon).
            </>
          }
          version="5.3 Electro Ara"
          releaseDate="May 1, 2023"
          architecture="amd64, arm64"
          screenshots={[
            parrotSecurity1,
            parrotSecurity2,
            parrotSecurity3,
            parrotSecurity4,
            parrotSecurity5
          ]}
          requirements={[
            { heading: 'Processor', description: 'Dual Core CPU' },
            { heading: 'Graphics', description: 'No Graphical Acceleration Required' },
            { heading: 'Memory', description: '1 GB RAM' },
            { heading: 'Storage', description: '20 GB available space' }
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
                      Pre-installed VLC, GIMP and a whole repository from which to install other
                      software such as OBS, Blender, Kdenlive, Krita and more!
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
                  heading: 'Pentest-ready',
                  description: (
                    <>
                      Lots of penetration testing tools, all already installed, including
                      Powersploit, Scapy, Rizin and more!
                    </>
                  )
                },
                {
                  heading: 'Development Tools',
                  description: <>VSCodium and Geany. You can start developing what you want.</>
                }
              ]
            }
          ]}
          downloadOption={{
            iso: 'https://deb.parrot.sh/parrot/iso/5.3/Parrot-security-5.3_amd64.iso',
            virtualbox: 'https://deb.parrot.sh/parrot/iso/5.3/Parrot-security-5.3_amd64.ova',
            utm: 'https://deb.parrot.sh/parrot/iso/5.3/Parrot-security-5.3_arm64.utm.zip'
          }}
          torrent={{
            iso: 'https://deb.parrot.sh/parrot/iso/5.3/Parrot-security-5.3_amd64.iso.torrent',
            virtualbox:
              'https://deb.parrot.sh/parrot/iso/5.3/Parrot-security-5.3_amd64.ova.torrent',
            utm: 'https://deb.parrot.sh/parrot/iso/5.3/Parrot-security-5.3_arm64.utm.torrent'
          }}
          allHashes={{ url: 'https://deb.parrot.sh/parrot/iso/5.3/signed-hashes.txt' }}
        />
      </Grid>
    </>
  )
}

export default OSSecurity
