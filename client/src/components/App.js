import React, {Component} from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from '../actions';

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/react-demo.css";
// pages
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import Sections from "views/Sections.js";
import Presentation from "views/Presentation.js";
import AboutUs from "views/examples/AboutUs.js";
import AddProduct from "views/examples/AddProduct.js";
import BlogPost from "views/examples/BlogPost.js";
import BlogPosts from "views/examples/BlogPosts.js";
import ContactUs from "views/examples/ContactUs.js";
import Discover from "views/examples/Discover.js";
import Ecommerce from "views/examples/Ecommerce.js";
import Error404 from "views/examples/Error404.js";
import Error422 from "views/examples/Error422.js";
import Error500 from "views/examples/Error500.js";
import LandingPage from "views/examples/LandingPage.js";
import LoginPage from "views/examples/LoginPage.js";
import ProductPage from "views/examples/ProductPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import SearchWithSidebar from "views/examples/SearchWithSidebar.js";
import Settings from "views/examples/Settings.js";
import TwitterRedesign from "views/examples/TwitterRedesign.js";


// others
//vv Tutorial vv//
import Header from './survey-tutorial/components-tutorial/Header.js';
import Landing from './survey-tutorial/components-tutorial/Landing'
import Dashboard from './survey-tutorial/Dashboard';
import SurveyNew from './survey-tutorial/components-tutorial/SurveyNew'
///npm uninstall materialize-css@next//
//might keep

//redux + components



//is user logged in?
class App extends Component {
    componentDidMount() {
      this.props.fetchUser();
    }
  
    render() {
      return (
        <div>  
        <BrowserRouter>
            <Switch>
            <Route path="/index" render={(props) => <Index {...props} />} />
            <Route 
                path="/register"
                render={(props) => <RegisterPage {...props} />}
            />
            <Route 
                path="/login-page" 
                render={(props) => <LoginPage {...props} />} 
            />
            <Route
                path="/nucleo-icons"
                render={(props) => <NucleoIcons {...props} />}
            />
            {/*vvv tutorial code(main.js + import redux + Provider wrap(store)) */}
            
            <Route path="/tut-landing" render= {(props) => <div><Header /> <Landing /></div>} />
            <Route exact path="/tut-surveys" render= {(props) => <div><Header /> <Dashboard /></div>} />
            
            <Route path="/tut-surveys/new" render= {(props) => <div><Header /> <SurveyNew /></div>} />
            
            {/*^^^ tutorial code(main.js + import redux + Provider wrap(store)) */}

            <Route path="/sections" render={(props) => <Sections {...props} />} />
            <Route
                path="/"
                render={(props) => <Presentation {...props} />}
            />

            <Route path="/about-us" render={(props) => <AboutUs {...props} />} />
            <Route
                path="/add-product"
                render={(props) => <AddProduct {...props} />}
            />
            <Route path="/blog-post" render={(props) => <BlogPost {...props} />} />
            <Route path="/blog-posts" render={(props) => <BlogPosts {...props} />} />
            <Route path="/contact-us" render={(props) => <ContactUs {...props} />} />
            <Route path="/discover" render={(props) => <Discover {...props} />} />
            <Route path="/e-commerce" render={(props) => <Ecommerce {...props} />} />
            <Route path="/error-404" render={(props) => <Error404 {...props} />} />
            <Route path="/error-422" render={(props) => <Error422 {...props} />} />
            <Route path="/error-500" render={(props) => <Error500 {...props} />} />
            <Route
                path="/landing-page"
                render={(props) => <LandingPage {...props} />}
            />

            <Route
                path="/product-page"
                render={(props) => <ProductPage {...props} />}
            />
            <Route
                path="/profile-page"
                render={(props) => <ProfilePage {...props} />}
            />
            <Route
                path="/register"
                render={(props) => <RegisterPage {...props} />}
            />
            <Route
                path="/search-with-sidebar"
                render={(props) => <SearchWithSidebar {...props} />}
            />
            <Route path="/settings" render={(props) => <Settings {...props} />} />
            <Route
                path="/twitter-redesign"
                render={(props) => <TwitterRedesign {...props} />}
            />

            <Redirect to="/" />
            </Switch>
        </BrowserRouter>,
        </div>
        );
    };
};

export default connect(null, actions)(App);