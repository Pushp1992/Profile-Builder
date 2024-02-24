import {React, useContext} from 'react';
import {MenuPopUpContext} from '../context';


const PublicPage = () => {
    const {showSection} = useContext(MenuPopUpContext);
    console.log('public view', showSection);
    return(
        <h3>Public view Page</h3>
    )
};

export default PublicPage;
