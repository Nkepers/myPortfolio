import './education.scss'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export default function Education() {
  return (
    <div className='education' id='education'>
      <h1>Education</h1>
      <h3>These are my current accomplishments
      <ArrowDownwardIcon fontSize='large' />
      </h3>
      <div className='certs'>
        <img src="/assets/awsCert.png" alt="Cert in AWS Cloud Practitioner" />
        <img src="/assets/uofaCert.png" alt="Cert from University of Arizona for Full Stack Development" />
      </div>

    </div>
  )
}
