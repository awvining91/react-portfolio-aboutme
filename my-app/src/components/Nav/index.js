
import React, { useEffect } from 'react';
//import { changeFirstCap } from '../../utils/helpers';

// Destructuring is happening below and we are assigning variable names

function Nav(props) {
  const {
    currentTab,
    updatePage,

  } = props;

    useEffect(() => {
      document.title = changeFirstCap(currentTab.name);
    }, [currentTab]);


  return (

   
    <nav>
    <ul className="nav nav-tabs">
      <li className="nav-item">
          <a
            href="#about"
            onClick={() => updatePage('About')}
            
            className={currentTab === 'About' ? 'nav-link active' : 'nav-link'}
          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#portfolio"
            onClick={() => updatePage('Portfolio')}
            
            className={currentTab === 'Portfolio' ? 'nav-link active' : 'nav-link'}
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => updatePage('Contact')}
           
            className={currentTab === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#resume"
            onClick={() => updatePage('Resume')}
            
            className={currentTab === 'Resume' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </a>
        </li>
    </ul>
    </nav>

  );
}

export default Nav;
