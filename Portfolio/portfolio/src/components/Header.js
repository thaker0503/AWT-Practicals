import React from 'react'

export default function Header() {
  return (
    <>
        <header className="header">
                <div className="head-top"> 
                    <a href="/" className="menu-btn">
                        <span></span>
                    </a>
                    <div className="logo hover-masks-logo"> 
                        <a href="/"> 
                            <span className="mask-lnk">Thaker <strong>Yatharth</strong></span> 
                        
                        
                            <span className="mask-lnk mask-lnk-hover">Download <strong>CV</strong></span> 
                        </a>
                    </div>
                    <div className="top-menu hover-masks">
                        <div className="top-menu-nav">
                            <div className="menu-topmenu-elementor-container">
                                <ul id="menu-topmenu-elementor" className="menu">
                                    <li id="menu-item-618" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-510 current_page_item current-menu-ancestor current-menu-parent current_page_parent current_page_ancestor  menu-item-618">
                                        <a href="/" aria-current="page">
                                            <span className="mask-lnk">Home</span>
                                            <span className="mask-lnk  mask-lnk-hover ">Home</span>
                                            
                                        </a>
                                        <span className="open-lnk"></span>
                                    </li>
                                    <li id="menu-item-613" className="menu-item menu-item-type-post_type menu-item-object-page  menu-item-613">
                                        <a href="./resume.html">
                                            <span className="mask-lnk">Resume</span>
                                            <span className="mask-lnk mask-lnk-hover">Resume</span>
                                        </a>
                                        <span className="open-lnk"></span>
                                    </li>
                                    <li id="menu-item-615" className="menu-item menu-item-type-post_type menu-item-object-page  menu-item-615">
                                        <a href="./works.html">
                                             <span className="mask-lnk">Works</span>
                                            <span className="mask-lnk mask-lnk-hover">Works</span>
                                        </a>
                                        <span className="open-lnk"></span>
                                    </li>
                                    <li id="menu-item-626" className="menu-item menu-item-type-post_type menu-item-object-page  menu-item-626">
                                        <a href="./contact.html">
                                            <span className="mask-lnk">Contacts</span>
                                            <span className="mask-lnk mask-lnk-hover">Contacts</span>
                                        </a>
                                        <span className="open-lnk"></span>
                                    </li>
                                </ul>    
                            </div>
                        

                        </div>
                    </div>
                </div>
            </header>
    </>
  )
}
