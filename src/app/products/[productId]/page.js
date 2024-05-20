import React from 'react';

const DynamicId
 = ({params , searchParams}) => {
  console.log(searchParams)

    return (
        <div>
            <h2>this is product id page {params.productId}</h2>
        </div>
    );
};

export default DynamicId
;