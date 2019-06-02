import React from 'react';

const headerStyles={
    width:"100%",
    height:"100px",
    backgroundColor:"#ddd"
}

 const Header=()=>{
     return(
        <div style={headerStyles}>
            <h1>Movie App</h1>
        </div>
     );
 }

 export default Header;