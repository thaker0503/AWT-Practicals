import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer() {
  return (
    <>
      <footer className="footer">
            <div className="copy">
                <p><a href="mailto:thaker.yatharth.05@gmail.com">
                    E: thaker.yatharth,05@gmail.com</a></p>
                <p>T: (+91) 97240 17672</p>
            </div>
            <div className="soc-box">
                <div className="follow-label">Follow Me</div>
                <div className="soc"> 
                    <a href="https://www.linkedin.com/"> 
                    
                        <span className="ion fab fa-linkedin-in"></span>
                    </a> 
                    <a href="https://github.com/thaker0503"> 
                        <span className="ion fab fa-github"></span> 
                    </a> 
                    <a href="https://www.facebook.com/">
                        <span className="ion fab fa-facebook-square"></span> 
                    </a> 
                    <a href="https://www.instagram.com/"> 
                        <span className="ion fab fa-instagram"></span> 
                    </a>
                </div>
            </div>
            <div className="clear"></div>
        </footer>
    </>
  )
}
