
import React, { useState } from 'react';
import { reactLocalStorage } from 'reactjs-localstorage';

function Home() {

  function FLogout() {
    reactLocalStorage.remove('Xuser');
    window.location.href = "/login"
  }

  return (
    <div className='home'>
      <h1>การไฟฟ้านะจ๊ะ</h1>
    </div>
  );
}

export default Home;