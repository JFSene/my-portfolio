import React, { Component } from 'react';
import Banner from './layout/Banner';

class Home extends Component {

  constructor(props){
    super(props);
    this.eventToggleSidebar = this.eventToggleSidebar.bind(this)
  }

  eventToggleSidebar(e) {
    e.preventDefault();
    this.props.toggleSidebar(!this.props.layout.sidebarOpen);
  }

  render() {

    return (

      	<div className="posts">
  
  			<div className="post banner">
			    <h1 className="post-title">I build <em>scalable</em>, <em>maintainable</em> and <em>secure</em> mobile and web applications.</h1>
				<p><a href="#" onClick={this.eventToggleSidebar}> Find out more!</a></p>

			</div>
  
		  	<div className="post clearfix">

				<h2>Mobile technologies I work with:</h2>
				<div className="skill-item clearfix">
					<h4>Mobile Development</h4>
					<ul className="">
						<li><em>iOS</em></li>
						<li><em>Swift</em>
							<ul>
								<li><em>Cocopods</em></li>
								<li><em>Realm</em></li>
								<li><em>Alamofire</em></li>
							</ul>
						</li>
						<li><em><b>*</b><b>*</b><b>*</b>Objective-C</em></li>
					</ul>
				</div>

				<div className="skill-item clearfix">
					<h4>Cross Platform Development</h4>
					<ul>
						<li><em>React-Native</em></li>
							<ul>
								<li><em>Redux</em></li>
								<li><em>React-Navigation</em></li>
							</ul>
						<li><em><b>*</b><b>*</b><b>*</b>Xamarin.Forms</em></li>
					</ul>
				</div>
			</div>


			<div className="post clearfix">
				<h2>Web Tecnologies I work with:</h2>

				<div className="skill-item clearfix">
					<h4>Client Side JS</h4>
					<ul className="">
						<li><em><b>*</b><b>*</b>React</em>
							<ul>
								<li><em><b>*</b>Redux</em></li>
								<li><em>Flux</em></li>
							</ul>
						</li>
						<li><em>D3</em></li>
					</ul>
				</div>

				<div className="skill-item clearfix">
					<h4>Server Side JS</h4>
					<ul>
						<li><em>MongoDB</em></li>
						<li><em><b>*</b>Node</em>
							<ul>
								<li><em><b>*</b>Express</em></li>
							</ul>
						</li>
					</ul>
				</div>

				<div className="exclaimation">
					<em><b>*</b>This site is built with these technologies. View the <a href="https://github.com/jfsene">github repo here</a>.</em><br/>
					<em><b>**</b>I know React can be used on the server side too. This site is Isomorphical rendered.</em><br/>
					<em><b>***</b>Languages I can read and undestand but have not worked professionally with.</em>
				</div>

  			</div>


  			<div className="post clearfix">

				<h2>Companies I have worked with:</h2>

				<ul className="clients">
					<li className="routerbox-logo">Routerbox</li>
					<li className="capptan-logo">Capptan</li>
				</ul>

			</div>

			<Banner />

  		</div>
  
    );
  }
}

export default Home;