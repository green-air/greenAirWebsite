import React from 'react';
import './NoPage.css';

function NoPage() {
    return (
        <div>
          <div class="container">
            <img class="img" src="https://upload.wikimedia.org/wikipedia/commons/1/1f/Nicosia_01-2017_img07_cats.jpg" width="900px" />
            <div class="center">
              <p class="bubble speech">Meow 404!: Give me cat bizcits meow or I slash your tyres!</p>
            </div>
          </div>
            <footer>Image courtesy of <a href="https://commons.wikimedia.org/wiki/Main_Page" />Wikimedia Commons</footer>
        </div>
    );
}

export default NoPage;