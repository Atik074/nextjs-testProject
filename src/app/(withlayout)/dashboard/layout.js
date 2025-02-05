import Footer from '@/components/Shared/Footer';
import React from 'react';

const Dashboard
 = ({children}) => {
    return (
        <div>
            <div className='min-h-screen'>
                {children}
            </div>
            <Footer/>
        </div>
    );
};

export default Dashboard
;