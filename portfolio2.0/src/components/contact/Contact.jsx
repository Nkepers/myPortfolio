import './contact.scss'

export default function Contact() {
  return (
    <div className='contact' id='contact'>
      <div className="left">
        <img src="/assets/contactIcon.png" alt="<a href='https://pngtree.com/so/Cartoon'>Cartoon png from pngtree.com/</a>" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form>
          <input type="text" placeholder='Email' />
          <textarea placeholder='Message'></textarea>
          <button type='submit'>Send</button>
        </form>
      </div>
    </div>
  )
}
