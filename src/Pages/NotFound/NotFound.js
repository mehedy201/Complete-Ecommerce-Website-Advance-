import React from 'react';
import notFound from '../../Images/99776312_s (1).webp'
import FooterSection from '../../Shared/FooterSection/FooterSection';

const NotFound = () => {
    return (
        <>
            <div className='container my-5'>
                <div className='d-flex justify-content-center align-items-center'>
                    <img style={{height: '100%', width: 'auto'}} src={notFound} alt="" />
                </div>
            </div>
            {/* Footer Section ---------------------------------------------------------- */}
            <footer  className='footer_color mt-4'>
                <FooterSection></FooterSection>
            </footer>
        </>
    );
};

export default NotFound;