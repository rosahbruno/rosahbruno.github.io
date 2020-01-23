import React from 'react';

import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary"> {config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            {config.address} | <a href="tel:412-773-1347">{config.phone}</a> |
            <a href={`mailto:${config.email}`}> {config.email}</a>
          </div>
          <p className="lead mb-5">
            welcome to my site! i am a software engineer from pittsburgh currently working 
            <a href="https://www.brandingbrand.com"> @brandingbrand</a> specializing in mobile + web 
            development. 
            <br/><br/>
            i also am a co-founder of <a href="https://precisionstudio.org">@precisionstudio</a> where i
            lead our web + mobile projects and help with design, marketing, client acquisition, etc.. 
            <br/><br/>
            and i've been building web sites for 5+ years and my last 2 full-time gigs have been as a mobile dev
          </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">software enginer</h3>
              <div className="subheading mb-3"><a href="https://www.brandingbrand.com">branding brand</a></div>
              <p>
                working on a team of react/react-native devs helping major retail companies tell their story through apps
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">dec '19 - present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">co-founder</h3>
              <div className="subheading mb-3"><a href="https://precisionstudio.org/">precision studio</a></div>
              <p>
                i lead all tech projects and handle the mobile/web development. we have rolled out numerous 
                sites ranging from restaurants to real esate companies to pet stores. our current tech stack for web 
                includes: <a href="https://reactjs.org/">react</a>, <a href="https://redux.js.org/">redux</a>, <a href="https://www.gatsbyjs.org/">gatsby</a>, + <a href="https://firebase.google.com/">firebase</a>.
                our current mobile tech stack includes: <a href="https://facebook.github.io/react-native/">react native</a>, <a href="https://redux.js.org/">redux</a>, + <a href="https://firebase.google.com/">firebase</a>.<br/><br/>
                links to some of our work are listed down in my <a href="#portfolio">portfolio</a>.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">jan '19 - present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">lead developer</h3>
              <div className="subheading mb-3"><a href="https://www.bizimarketplace.com/">bizi marketplace</a></div>
              <p>
                bizi is a marketplace app specifically targetting college students. the app will give students a means to connect with other students at their school + 
                the community through specials + ads from local businesses. 
                <br/><br/>
                i led development + managed several small teams of devs working towards a roll-out to 
                the app store + google play store. i architected + implemented the majority of the 
                features including: real-time messaging, search, social interactions, product exploration, authentication, 
                theming, + the inclusion of specialized ads + offers from local businesses.
                <br/><br/>
                the app's tech stack includes: the <a href="https://ionicframework.com/">ionic framework</a>, <a href="https://angular.io/">angular</a>, + <a href="https://firebase.google.com/">firebase</a>.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">jan '18 - dec '19</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">mobile developer</h3>
              <div className="subheading mb-3"><a href="https://www.bnymellon.com/">bny mellon</a></div>
              <p>
                i worked as a dev on the mobility team inside of workplace technology. my time was split between 
                native + hybrid development w/ <a href="https://ionicframework.com/">ionic</a>. i worked primarily on our ios apps that were built with <a href="https://developer.apple.com/swift/">swift</a>. during 
                my stint @ bny i also led our team through a major upgrade of our hybrid apps from ionic3 -> ionic4 
                as well as contributing to our android apps built with <a href="https://kotlinlang.org/">kotlin</a>.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">aug '19 - dec '19</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">software engineer</h3>
              <div className="subheading mb-3"><a href="https://www.upmc.com/">upmc</a></div>
              <p>
                i was a member of the mars app team (clinical data archive of 30+ years). i was able to get 
                involved in a variety of projects involving: our new ui built in <a href="https://www.polymer-project.org/">polymer</a>, <a href="https://spark.apache.org/">spark</a> 
                + <a href="https://www.scala-lang.org/">scala</a> jobs for clinical record ingestion, created ui mockups + system design diagrams, 
                as well as automating a large # of legacy processes. during my time there i cut our daily time spent 
                maintaining our legacy system from 2 hours to >10 minutes.
                <br/><br/>
                i led multiple projects including: all of our team's work for the hospital-wide standardization of lab codes, 
                re-structuring of our entire result code db, building a ui to allow clinicians to manage messages that failed to 
                parse through mars, a full support wiki overhaul, as well as building + maintaining our legacy clinical record parsers.
                <br/><br/>
                i was involved in our support rotation + spent time doing data quality, participating in test events, and general system 
                maintenance.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">may '17 - aug '19</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">lead web developer</h3>
              <div className="subheading mb-3"><a href="https://www.juniata.edu">juniata college</a></div>
              <p>
                led a team of 8 students in creating + managing sections of <a href="https://www.juniata.edu">www.juniata.edu</a>. 
                i regularly met with faculty + staff to discuss improving their respective sections of the site. i handled majority of 
                our web governance, specifically: <a href="https://www.usability.gov/what-and-why/accessibility.html">accessibility</a>, 
                <a href="https://medium.com/@f5studio/what-is-qa-and-why-quality-assurance-is-important-in-web-development-process-f17ae9c59de7">quality assurance</a> + 
                <a href="https://moz.com/beginners-guide-to-seo">seo</a>. utilized <a href="https://omniupdate.com/products/index.html">ou campus cms</a> for creating site content, 
                also regularly would build custom widgets for the rest of the users.
                <br/><br/>
                led staff meetings, handled hiring, task delegations, scheduling, + mentoring/training
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">may '16 - may '17</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">web developer</h3>
              <div className="subheading mb-3"><a href="https://www.bizimarketplace.com/">juniata college</a></div>
              <p>
                worked as a developer on the marketing team's web dev staff. handled migrations of various sections of the legacy site 
                to our newly developed site. led training sessions in which we would teach faculty and staff proper use of our cms. would 
                meet + discuss feasibility of new features with faculty + staff looking to revitalize their sections of the site.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">jan '18 - present</span>
            </div>
          </div>

        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">juniata college</h3>
              <div className="subheading mb-3">Bachelor of Science</div>
              <div>computer science (with honors)</div>
              <p>
                overall gpa: 3.4
                <br/>
                major gpa: 3.9
              </p>
              <br/>
              <p>
                activities
                <br/>
                class of '18 member of the it advisory board, head of cs/it tutoring labs, head of cs/it mentoring program, golf team, ski club
              </p>
              <br/>
              <p>
                awards
                <br/>
                dale l. wampler award in information technology + computer science
                <br/>
                dean's list (over 3.6) 5 semesters
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">aug '14 - may '18</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">conemaugh township high school</h3>
              <div className="subheading mb-3">high school diploma</div>
              <p>gpa: 3.65</p>
              <br/>
              <p>
                activities
                <br/>
                football, basketball, baseball, ski club, spanish club, computer club, newspaper/yearbook sports editor, journalism
              </p>
              <br/>
              <p>
                awards
                <br/>
                computer + technology award winner as a sophomore for web design + as a senior for programming 1 + 2
                <br/>
                team captain of football + baseball teams
                <br/>
                all conference: baseball 3x, football 2x
                <br/>
                all county: baseball 4x, football 2x
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">aug 2010 - may '14</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>
          <ul className="fa-ul mb-0">
            <li>
              mobile - react native, ionic, swift, kotlin
            </li>
            <li>
              web - gatsby, react, angular, polymer, html5, css3, sass
            </li>
            <li>
              languages - js, java, c++, python, node, scala, sql, php
            </li>
            <li>
              big data - hadoop, spark, scala, hive, bigsql, zookeeper
            </li>
            <li>
              design - sketch, zeplin, balsamiq, visio
            </li>
            <li>
              scripting - python, bash, swift
            </li>
            <li>
              site optimization - seo, accessibility, quality assurance, data governance, performance testing
            </li>
            <li>
              testing - junit, jest, karma, jasmine
            </li>
            <li>
              version control - github, gitlab, subversion
            </li>
            <li>
              misc - linux, bash, api development, agile, scrum
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
          <p>
            my current professional interests include mobile, web apps, pwas, big data, design patterns, animations, design, + augmented reality.
            i am always looking for a new side project, freelance gig, or new technology to play around with.
          </p>
          <p>
            besides development, i enjoy many not-so-related activities like golf, snowboarding, working out, + i am generally a huge sports fan.
            i am also a big shows guy.. favorites include bojack horseman, barry, rick + morty, always sunny in philadelphia, curb your enthusiasm, + many more!
          </p>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="portfolio"
      >
        <div className="w-100">
          <h2 className="mb-5">portfolio</h2>
          <ul className="fa-ul mb-0">
            <li>
              branding brand
              <ul>
                <li>check our <a href="https://www.brandingbrand.com/">site</a> for some clients that we've worked with (you may have heard of a few)</li>
              </ul>
            </li>
            <li>
              bny mellon
              <ul>
                <li>all proprietary internal apps (help desk tool, incident management, internal social network, emergency contacts)</li>
              </ul>
            </li>
            <li>
              upmc
              <ul>
                <li>
                  worked on <a href="https://www.diagnosticimaging.com/articles/mars-data-archiving-system-poised-nationwide-intro">MARS</a>.. our team was moving this massive dataset to hadoop and rebuilding its services + ui
                </li>
              </ul>
            </li>
            <li>
              precision studio
              <ul>
                <li><a href="http://www.denunziosrestaurant.com/">denunzios</a></li>
                <li><a href="http://stoneybrooketown.com/">stoney brook</a></li>
                <li><a href="https://spaghettibenders.com/">spaghetti benders</a></li>
                <li><a href="http://shrewsburypets.com/">shrewsbury pet shop</a></li>
                <li><a href="https://precisionstudio.org/">precision studio</a></li>
              </ul>
            </li>
            <li>
              juniata
              <ul>
                <li><a href="https://www.juniata.edu/">juniata</a> - led a team of 8 students working on our main site</li>
                <li><a href="https://github.com/rosahbruno/Hue_Calendar">hue calendar</a></li>
                <li><a href="https://github.com/rosahbruno/fmEMSFinalApp">fort mill ems app</a></li>
              </ul>
            </li>
            <li>
              freelancing
              <ul>
                <li><a href="http://matthewgaynor.com/">matthewgaynor.com</a></li>
                <li>this site (obvi)</li>
              </ul>
            </li>
            <li>
              additional programming
              <ul>
                <li>
                  <a href="https://www.codewars.com/users/rosahbruno">codewars</a>
                </li>
              </ul>
            </li>
            <li>
              research
              <ul>
                <li>creating a cross-platform mobile app</li>
                <ul>
                  <li>conducted research with a colleague on the process + proper toolset for building a cross-platform mobile app</li>
                </ul>
                <li>
                  quantum computing - the catalyst of a computing revolution
                  <ul>
                    <li>conducted research with a colleague on the potential impact of quantum computing on our everyday lives in a very near future</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
