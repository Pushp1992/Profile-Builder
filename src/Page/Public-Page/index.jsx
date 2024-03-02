import {React, useContext} from 'react';
import {MenuPopUpContext} from '../context';


const PublicPage = () => {
    // the value is directly coming from context
    // but the new context value is not coming
    const showSection = useContext(MenuPopUpContext);
    console.log('showSection', showSection);
    return(
        <h3>Public view Page for future usability for Routing</h3>
    )
};

export default PublicPage;
