
import { Routes, Route } from 'react-router-dom';
import EditPage from '../../Page/Edit-page';
import PublicPage from '../../Page/Public-Page';
// import ListingPage from '../../template/listing-page';

// All Route addition/removal will go in this file
export default function RouteList() {
    return (
        <Routes>
            <Route path='/' element={<EditPage />} />
            <Route path='/public-view' element={<PublicPage />} />
            {/* <Route path='/listing' element={<SearchResultPage />} /> */}
        </Routes>
    )
}
