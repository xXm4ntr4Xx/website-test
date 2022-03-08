import React from 'react';
import styles from './styles/Project.module.css';

function Project() {
  return (
    <div className={''}> 
       <div>
           <h1 className={styles.header_one}>Bootcamp helper</h1>
         <a className={styles.images} href='https://bootcamperknowledge.herokuapp.com/'>
          <img  src="https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/8f923854-1c63-4bf1-ac71-4cdd10fda6ed.gif?ClientID=vimeo-core-prod&Date=1645557355&Signature=d0deab5ff1f4fe70ef7b3c0bad7537b877dd2261" alt=''/>
         </a>
         <div className={styles.header_text}>
          <h2 className={styles.header2}>Description<br/><p>This is the result of our national project week.
            <br/> For this task we have to put down everything we learned during the bootcamp.<br/>
            For the week we work as a team of 4 and every day we use to split in a pair and work in different areas <br/>of the project(1 team worked on front-end and 1 team worked on back-end) <br/>
             As a team we have to work with agile methodoly.Disney Ideation, use sprint, Kanban Board, Tech stack diagram<br/>
             Have been a wonderful experience see how people with different background and different knowledge can produce in a week working togheter.<br/>
              </p></h2>
            <p className={styles.parag}><span>Tools : </span>Html,Css,Vanilla Javascript, React, Express, Heroku, Miro Board, Figma, Wireframe</p>
            <a  style={{color:'green',marginLeft:'2%'}}href='https://github.com/SchoolOfCode/national-project-week-jenny-josh-joan-pietro'> Source Code</a>
            <a  style={{color:'blue',marginLeft:'2%'}}href='https://bootcamperknowledge.herokuapp.com/'>Bootcamper Helper Link</a>
          </div>

                            

          <div>
          <h1 className={styles.header_one}>City weather API</h1>
        <div className={''}>
        <a className={styles.images} href='https://weather-application001.herokuapp.com/'>
          <img  src="https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/b7cd41d4-884d-451f-b256-0335af874c47.gif?ClientID=vimeo-core-prod&Date=1644864340&Signature=e2e9c7e9f40cdf5d7f13c5ac3996a13d070426ba"alt=''/>
        </a>
          <div className={styles.header_text}>
          <h2 className={styles.header2}>Description<br/><p>First Project of School of Code where i create a City Info using e weather API.
            <br/> The app has been created using Vanilla Javascript,Html and Css. The Most challenge <br/>part of this
             project has been retreive the info from  the API and assign the different data <br/>to a variable and place the info on the page.
             <br/>Was the first time i use  Css in a complete project for create a table and add weather icon on the page.</p></h2>
            <p className={styles.parag}><span>Tools : </span>Html,Css,Vanilla Javascript, FetchAPI</p>
            <a  style={{color:'green',marginLeft:'2%'}}href='https://github.com/xXm4ntr4Xx/City-weather-Api'> Source Code</a>
            <a style={{color:'blue',marginLeft:'2%'}}href='https://weather-application001.herokuapp.com/ '>Weather Api Link</a>
          </div>  
        </div>
       </div>


       <div>
          <h1 className={styles.header_one}>Html Template Example </h1>
        <div className={''}>
        <a className={styles.images} href='https://html-portfolio-template-test.netlify.app'>
          <img src='https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/ecaf745b-768d-4bab-8580-3248b363cc0b.gif?ClientID=vimeo-core-prod&Date=1646350971&Signature=b8c1b40f67c7b919080ea2602c0690affeeeb2c3'alt=''/>
        </a>
        <div className={styles.header_text}>
          <h2 className={styles.header2}>Description<br/><p>With this exercise i start to watch around for simple template for create portfolio on the internet.<br/>
            looking on the internet i found Bootstrap. A website that allow you to create<br/> website template very quickly, as normal bootsrap framework is based on class</p></h2>
            <p className={styles.parag}><span>Tools : </span>Html,Bootstrap tools, Netlify</p>
            <a  style={{color:'green',marginLeft:'2%'}}href='https://github.com/xXm4ntr4Xx/html-portfolio-new'> Source Code</a>
            <a  style={{color:'blue',marginLeft:'2%'}}href='https://html-portfolio-template-test.netlify.app'>Html Template Example Link</a>
            
          </div>  
        </div>
       </div>


    </div>
    </div>
  )
}

export default Project