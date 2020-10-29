import React from 'react';
import {Link} from 'react-router-dom';
import SurveyList from './components-tutorial/SurveyList';

const Dashboard = () => {
    return (
        <div>
            <SurveyList />
            <div className="fixed-action-btn">
                <Link to="/tut-surveys/new" className="btn-floating btn-large red">
                    <i className="material-icons">add</i>
                </Link>
            </div>
        </div>
    );
};

export default Dashboard;