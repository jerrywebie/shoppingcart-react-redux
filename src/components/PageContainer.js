import React from 'react';

const PageContainer = ({
    children
}) =>  {
  return (
    <div style={{height: '700vh', width: '100%', marginTop: 100}}>{children}</div>
  )
}

export default PageContainer;