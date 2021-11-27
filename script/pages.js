export const Main = {
  id: "main",
  title: "Themes",
  render: (className = "container", ...rest) => {
    return `
          <main class="main ${className}">
  
          <div class="wrapper">
          <div class="main__cards flex flex-jc-c">
            <div class="main__cards__card">
              <img src="./assets/rembrandt.jpg" alt="">
             
              <p class="main__cards__card__title">Художники</p>
              <a href="#artists" class="fill-div hash"></a>
            </div>
  
            <div class="main__cards__card">
            <img src="./assets/30full.jpg" alt="">
            <p class="main__cards__card__title">Картины</p>
            <a href="#pictures" class="fill-div hash"></a>
          </div>
  
   
         
          </div>
        </div>
  
          </main>
          `;
  },
};

export const Artists = {
  id: "artists",
  title: "Artists quiz",
  render: (className = "container", ...rest) => {
    return `
      <div class="${className}">
  
      <div class="wrapper">
      <div class="artists__cards flex flex-jc-c">

      <div class="artists__cards__card grey portrait">
     
        <img loading="lazy" src="./assets/full/0full.jpg" alt="" />
        <p class="artists__cards__card__title">Portrait</p>
        <a href="#artgame" class="fill-div hash"></a>
      </div>

      <div class="artists__cards__card grey landscape">
        <img loading="lazy" src="./assets/full/10full.jpg" alt="" />
        <p class="artists__cards__card__title">landscape</p>
        <a href="#artgame" class="fill-div hash"></a>
      </div>

      <div class="artists__cards__card grey stillLife">
      <img loading="lazy" src="./assets/full/20full.jpg" alt="" />
      <p class="artists__cards__card__title">still life</p>
      <a href="#artgame" class="fill-div hash"></a>
      </div>

      <div class="artists__cards__card grey graphic">
      <img loading="lazy" src="./assets/full/30full.jpg" alt="" />
      <p class="artists__cards__card__title">graphic</p>
      <a href="#artgame" class="fill-div hash"></a>
      </div>

      <div class="artists__cards__card grey antique">
      <img loading="lazy" src="./assets/full/40full.jpg" alt="" />
      <p class="artists__cards__card__title">antique</p>
      <a href="#artgame" class="fill-div hash"></a>
      </div>

      <div class="artists__cards__card grey avantGarde">
      <img loading="lazy" src="./assets/full/50full.jpg" alt="" />
      <p class="artists__cards__card__title">avant-garde</p>
      <a href="#artgame" class="fill-div hash"></a>
      </div>

      <div class="artists__cards__card grey renaissance">
      <img loading="lazy" src="./assets/full/60full.jpg" alt="" />
      <p class="artists__cards__card__title">renaissance</p>
      <a href="#artgame" class="fill-div hash"></a>
      </div>

      <div class="artists__cards__card grey surrealism">
      <img loading="lazy" src="./assets/full/70full.jpg" alt="" />
      <p class="artists__cards__card__title">surrealism</p>
      <a href="#artgame" class="fill-div hash"></a>
      </div>

      <div class="artists__cards__card grey kitsch">
      <img loading="lazy" src="./assets/full/80full.jpg" alt="" />
      <p class="artists__cards__card__title">kitsch</p>
      <a href="#artgame" class="fill-div hash"></a>
      </div>

      <div class="artists__cards__card grey minimalism">
      <img loading="lazy" src="./assets/full/90full.jpg" alt="" />
      <p class="artists__cards__card__title">minimalism</p>
      <a href="#artgame" class="fill-div hash"></a>
      </div>

      <div class="artists__cards__card grey avangard">
      <img loading="lazy" src="./assets/full/100full.jpg" alt="" />
      <p class="artists__cards__card__title">avangard</p>
      <a href="#artgame" class="fill-div hash"></a>
      </div>

      <div class="artists__cards__card grey industrial">
      <img loading="lazy" src="./assets/full/110full.jpg" alt="" />
      <p class="artists__cards__card__title">industrial</p>
      <a href="#artgame" class="fill-div hash"></a>
      </div>

    </div>
      </div>
          `;
  },
};

export const ArtistGame = {
  id: "art-game",
  title: "Artists quiz",
  render: (className = "container", ...rest) => {
    return `
    <div class="wrapper">
    <a href="#artists" class="breadcrumb">/категории</a>
      <div class="${className}">
        <h2 class="artgame__title">Кто автор данной картины?</h2>
        <div class="artgame__img-wrap">
          <img class="artgame__img-wrap__img" src="" alt="">
        </div>
        <ul class="artgame__controls">
        <li class="artgame__controls__list"></li>
        <li class="artgame__controls__list"></li>
        <li class="artgame__controls__list"></li>
        <li class="artgame__controls__list"></li>
        <li class="artgame__controls__list"></li>
        <li class="artgame__controls__list"></li>
        <li class="artgame__controls__list"></li>
        <li class="artgame__controls__list"></li>
        <li class="artgame__controls__list"></li>
        <li class="artgame__controls__list"></li>
      </ul>
        <div class="artgame__answers">
          <button class="artgame__answers__answer">first</button>
          <button class="artgame__answers__answer">sec</button>
          <button class="artgame__answers__answer">third</button>
          <button class="artgame__answers__answer">forth</button>
        </div>
      </div>
    </div> 

   `;
  },
};


export const Pictures = {
  id: "pictures",
  title: "Artists quiz",
  render: (className = "container", ...rest) => {
    return `
      <div class="${className}">
  
      <div class="wrapper">
      <div class="artists__cards flex flex-jc-c">

      <div class="artists__cards__card grey portrait">
        <img loading="lazy"  src="./assets/full/130full.jpg" alt="" />
        <p class="artists__cards__card__title">Portrait</p>
        <a href="#picturesgame" class="fill-div hash"></a>
      </div>

      <div class="artists__cards__card grey landscape">
        <img loading="lazy"  src="./assets/full/140full.jpg" alt="" />
        <p class="artists__cards__card__title">landscape</p>
        <a href="#picturesgame" class="fill-div hash"></a>
      </div>

      <div class="artists__cards__card grey stillLife">
      <img loading="lazy"  src="./assets/full/150full.jpg" alt="" />
      <p class="artists__cards__card__title">still life</p>
      <a href="#picturesgame" class="fill-div hash"></a>
      </div>

      <div class="artists__cards__card grey graphic">
      <img loading="lazy"  src="./assets/full/160full.jpg" alt="" />
      <p class="artists__cards__card__title">graphic</p>
      <a href="#picturesgame" class="fill-div hash"></a>
      </div>

      <div class="artists__cards__card grey antique">
      <img loading="lazy"  src="./assets/full/170full.jpg" alt="" />
      <p class="artists__cards__card__title">antique</p>
      <a href="#picturesgame" class="fill-div hash"></a>
      </div>

      <div class="artists__cards__card grey avantGarde">
      <img loading="lazy"  src="./assets/full/180full.jpg" alt="" />
      <p class="artists__cards__card__title">avant-garde</p>
      <a href="#picturesgame" class="fill-div hash"></a>
      </div>

      <div class="artists__cards__card grey renaissance">
      <img loading="lazy"  src="./assets/full/190full.jpg" alt="" />
      <p class="artists__cards__card__title">renaissance</p>
      <a href="#picturesgame" class="fill-div hash"></a>
      </div>

      <div class="artists__cards__card grey surrealism">
      <img loading="lazy"  src="./assets/full/200full.jpg" alt="" />
      <p class="artists__cards__card__title">surrealism</p>
      <a href="#picturesgame" class="fill-div hash"></a>
      </div>

      <div class="artists__cards__card grey kitsch">
      <img loading="lazy" src="./assets/full/210full.jpg" alt="" />
      <p class="artists__cards__card__title">kitsch</p>
      <a href="#picturesgame" class="fill-div hash"></a>
      </div>

      <div class="artists__cards__card grey minimalism">
      <img loading="lazy"  src="./assets/full/220full.jpg" alt="" />
      <p class="artists__cards__card__title">minimalism</p>
      <a href="#picturesgame" class="fill-div hash"></a>
      </div>

      <div class="artists__cards__card grey avangard">
      <img loading="lazy"  src="./assets/full/230full.jpg" alt="" />
      <p class="artists__cards__card__title">avangard</p>
      <a href="#picturesgame" class="fill-div hash"></a>
      </div>

      <div class="artists__cards__card grey industrial">
      <img loading="lazy"  src="./assets/full/40full.jpg" alt="" />
      <p class="artists__cards__card__title">industrial</p>
      <a href="#picturesgame" class="fill-div hash"></a>
      </div>

    </div>
      </div>
          `;
  },
};

export const PicturesGame = {
  id: "pictures-game",
  title: "Pictures quiz",
  render: (className = "container", ...rest) => {
    return `
    <div class="wrapper">
    <a href="#pictures" class="breadcrumb">/категории</a>
    <div class="${className}">
      <h2 class="artgame__title">Какую картину написал?</h2>

      <ul class="artgame__controls">
      <li class="artgame__controls__list"></li>
      <li class="artgame__controls__list"></li>
      <li class="artgame__controls__list"></li>
      <li class="artgame__controls__list"></li>
      <li class="artgame__controls__list"></li>
      <li class="artgame__controls__list"></li>
      <li class="artgame__controls__list"></li>
      <li class="artgame__controls__list"></li>
      <li class="artgame__controls__list"></li>
      <li class="artgame__controls__list"></li>
    </ul>
      <div class="artgame__answers">
      <div class="artgame__img-wrap">
        <img class="artgame__img-wrap__img" src="" alt="">
      </div>
      <div class="artgame__img-wrap">
      <img class="artgame__img-wrap__img" src="" alt="">
    </div>
    <div class="artgame__img-wrap">
    <img class="artgame__img-wrap__img" src="" alt="">
  </div>
  <div class="artgame__img-wrap">
  <img class="artgame__img-wrap__img" src="" alt="">
</div>
      </div>
    </div>
  </div>   
          `;
  },
};

export const Settings = {
  id: "settings",
  title: "quiz Settings",
  render: (className = "container", ...rest) => {
    return `
    <div class="${className}">
    <div class="wrapper">
      <fieldset style="border: none;display: flex;justify-content: center;">
      <input class="time-check" type="checkbox"</input>
        <label for="rangeVal">Таймер:</label>
     
        <input type="range" min='5'  max='30' step="5"
            oninput="document.getElementById('rangeValLabel').innerHTML = this.value;"
             name="rangeVal" id="rangeVal" >
        </input>
        <em id="rangeValLabel" style="font-style: normal;"></em>
    </fieldset>
    </div>
  </div>      
          `;
  },
};

export const Scores = {
  id: "scores",
  title: "quiz scores",
  render: (className = "container", ...rest) => {
    return `

    <div class="${className}">
  
    <div class="wrapper">
    <div class="artists__cards flex flex-jc-c">

    <div class="artists__cards__card   portrait">
      <img loading="lazy"  src="./assets/full/130full.jpg" alt="" />
      <p class="artists__cards__card__title">Portrait</p>
      <a href="#scoreinfo" class="fill-div hash"></a>
    </div>

    <div class="artists__cards__card   landscape">
      <img loading="lazy"  src="./assets/full/140full.jpg" alt="" />
      <p class="artists__cards__card__title">landscape</p>
      <a href="#scoreinfo" class="fill-div hash"></a>
    </div>

    <div class="artists__cards__card   stillLife">
    <img loading="lazy"  src="./assets/full/150full.jpg" alt="" />
    <p class="artists__cards__card__title">still life</p>
    <a href="#scoreinfo" class="fill-div hash"></a>
    </div>

    <div class="artists__cards__card   graphic">
    <img loading="lazy"  src="./assets/full/160full.jpg" alt="" />
    <p class="artists__cards__card__title">graphic</p>
    <a href="#scoreinfo" class="fill-div hash"></a>
    </div>

    <div class="artists__cards__card   antique">
    <img loading="lazy"  src="./assets/full/170full.jpg" alt="" />
    <p class="artists__cards__card__title">antique</p>
    <a href="#scoreinfo" class="fill-div hash"></a>
    </div>

    <div class="artists__cards__card   avantGarde">
    <img loading="lazy"  src="./assets/full/180full.jpg" alt="" />
    <p class="artists__cards__card__title">avant-garde</p>
    <a href="#scoreinfo" class="fill-div hash"></a>
    </div>

    <div class="artists__cards__card   renaissance">
    <img loading="lazy"  src="./assets/full/190full.jpg" alt="" />
    <p class="artists__cards__card__title">renaissance</p>
    <a href="#scoreinfo" class="fill-div hash"></a>
    </div>

    <div class="artists__cards__card   surrealism">
    <img loading="lazy"  src="./assets/full/200full.jpg" alt="" />
    <p class="artists__cards__card__title">surrealism</p>
    <a href="#scoreinfo" class="fill-div hash"></a>
    </div>

    <div class="artists__cards__card   kitsch">
    <img loading="lazy" src="./assets/full/210full.jpg" alt="" />
    <p class="artists__cards__card__title">kitsch</p>
    <a href="#scoreinfo" class="fill-div hash"></a>
    </div>

    <div class="artists__cards__card   minimalism">
    <img loading="lazy"  src="./assets/full/220full.jpg" alt="" />
    <p class="artists__cards__card__title">minimalism</p>
    <a href="#scoreinfo" class="fill-div hash"></a>
    </div>

    <div class="artists__cards__card   avangard">
    <img loading="lazy"  src="./assets/full/230full.jpg" alt="" />
    <p class="artists__cards__card__title">avangard</p>
    <a href="#scoreinfo" class="fill-div hash"></a>
    </div>

    <div class="artists__cards__card   industrial">
    <img loading="lazy"  src="./assets/full/40full.jpg" alt="" />
    <p class="artists__cards__card__title">industrial</p>
    <a href="#scoreinfo" class="fill-div hash"></a>
    </div>

  </div>
    </div>


          `;
  },
};

export const Scoreinfo = {
  id: "scoreinfo",
  title: "category info",
  render: (className = "container", ...rest) => {
    return `
    <div class="${className}">
    <div class="wrapper">
    <div class="scoreinfo__cards__category"></div>
      <div class="${className}__cards">
        
      </div>
    </div>
    </div>    
          `;
  },
};
