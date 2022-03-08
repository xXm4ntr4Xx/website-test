import React from 'react'
import contactStyles from './styles/Contact.module.css'

function Contact() {
  return (
    <div>
      <div className={contactStyles.social_list}>
            <a href = "mailto: pietroannobil@gmail.com" className={contactStyles.linkp}><span>Email : </span>pietroannobil@gmail.com</a>
            <p className={contactStyles.linkp}><span>Telephone : </span>07501971950</p>
            <a href = "https://www.linkedin.com/in/pietro-annobil-025483180/" className={contactStyles.linkp}>Linkedin </a>
        </div>
    </div>
  )
}

export default Contact