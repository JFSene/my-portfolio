import React, { Component, PropTypes } from 'react';
import Banner from './layout/Banner';


class Services extends Component {

  render () {
    return (
      <div>

	      	<Banner />

      	  <div className="services">

      	  	<h3>Prototypes/MVPs</h3>
      	  	<p>I can build you a prototype or a minimal viable product (MVP)for your idea. An MVP can validate your idea and help you raise funding.
      	  	</p> 

	      	<h3>Training</h3>
	      
	      </div>

	      <div className="services">

      	  	<h3>Native iOS Apps</h3>
      	  		<p></p>
							<p></p>

      	  	<h3>Hybridised Development</h3>
      	  	<p>Do you need a mobile app and web app with the same code base? I can code your web application so that it utilises Phonegap/Cordova to build both a web application and a cross-device mobile application.</p>

	      </div>

      </div>
    );
  }
}

export default Services;