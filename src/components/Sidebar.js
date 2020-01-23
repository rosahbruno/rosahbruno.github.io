import React, { Component } from 'react';
import Scrollspy from 'react-scrollspy';
import Scroll from './Scroll';

import avatar from '../assets/images/bbme.png';
import config from '../../config';

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileMenu: false,
      tabs: [
        { content: 'about', href: 'about' },
        { content: 'experience', href: 'experience' },
        { content: 'education', href: 'education' },
        { content: 'skills', href: 'skills' },
        { content: 'interests', href: 'interests' },
        { content: 'portfolio', href: 'portfolio' },
      ],
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({
      mobileMenu: !this.state.mobileMenu,
      fade: true
    });
  }

  render() {
    const { tabs } = this.state;
    const show = (this.state.mobileMenu) ? 'show' : '';

    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
        id="sideNav"
      >
        <a className="navbar-brand" href="#page-top">
          <span className="d-block d-lg-none">
            {config.firstName} {config.lastName}
          </span>
          <span className="d-none d-lg-block">
            <img
              className="img-fluid img-profile rounded-circle mx-auto mb-2"
              src={avatar}
              alt="personal avatar | bruno rosa"
            />
          </span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={this.toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div 
          id="navbarSupportedContent"
          className={"collapse navbar-collapse " + show}>
          <Scrollspy
            items={tabs.map(s => s.href)}
            currentClassName="active"
            offset={-300}
            className="navbar-nav"
          >
            {tabs.map((tab, i) => {
              const { href, content } = tab;
              return (
                <li className="nav-item" key={href} onClick={this.toggleMenu}>
                  <Scroll type="id" element={href}>
                    <a className="nav-link" href={`#${href}`}>
                      {content}
                    </a>
                  </Scroll>
                </li>
              );
            })}
          </Scrollspy>
        </div>
      </nav>
    );
  }
}
