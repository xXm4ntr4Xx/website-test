import React from 'react'
import styles from './styles/About.module.css'


function About() {
  return (
    <div>
        <div className={styles.myBio}>
            <p className={styles.parag}>
            Im a 33 years old guy from Italy.
            After being working in the casino business as a croupier for 10 years I decided to find some new adventure. Thats why I decided to join school of code, where I have been able to pass from zero knowledge about coding, to be able to work in a team and apply Agile methodology, apply Disney ideation, create retrospective, use Kanban board and prepare the sprint of the day, how to create story points, etc...
            Learn the basics of computer programming using Html, CSS, Javascript.
            Use frameworks like React and Next.js to improve javascript performance.
            We learned how to interact with databases like Postgres, how to deploy websites online using Heroku deployment, Gatsby Cloud, Netlify.
            We learn about docker and the role of the container.
            We learned the importance of testing (jest, cypress).
            </p>
        </div>
    </div>
  )
}

export default About