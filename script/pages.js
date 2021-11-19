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

      <div class="artists__cards__card">
        <img src="./assets/full/0full.jpg" alt="" />
        <p class="artists__cards__card__title">Portrait</p>
        <a href="#artgame" class="fill-div hash"></a>
      </div>

      <div class="artists__cards__card">
        <img src="./assets/full/10full.jpg" alt="" />
        <p class="artists__cards__card__title">landscape</p>
        <a href="#artgame" class="fill-div hash"></a>
      </div>

      <div class="artists__cards__card">
      <img src="./assets/full/20full.jpg" alt="" />
      <p class="artists__cards__card__title">still life</p>
      <a href="#artgame" class="fill-div hash"></a>
      </div>

      <div class="artists__cards__card">
      <img src="./assets/full/30full.jpg" alt="" />
      <p class="artists__cards__card__title">graphic</p>
      <a href="#artgame" class="fill-div hash"></a>
      </div>

      <div class="artists__cards__card">
      <img src="./assets/full/40full.jpg" alt="" />
      <p class="artists__cards__card__title">antique</p>
      <a href="#artgame" class="fill-div hash"></a>
      </div>

      <div class="artists__cards__card">
      <img src="./assets/full/50full.jpg" alt="" />
      <p class="artists__cards__card__title">avant-garde</p>
      <a href="#artgame" class="fill-div hash"></a>
      </div>

      <div class="artists__cards__card">
      <img src="./assets/full/60full.jpg" alt="" />
      <p class="artists__cards__card__title">renaissance</p>
      <a href="#artgame" class="fill-div hash"></a>
      </div>

      <div class="artists__cards__card">
      <img src="./assets/full/70full.jpg" alt="" />
      <p class="artists__cards__card__title">surrealism</p>
      <a href="#artgame" class="fill-div hash"></a>
      </div>

      <div class="artists__cards__card">
      <img src="./assets/full/80full.jpg" alt="" />
      <p class="artists__cards__card__title">kitsch</p>
      <a href="#artgame" class="fill-div hash"></a>
      </div>

      <div class="artists__cards__card">
      <img src="./assets/full/90full.jpg" alt="" />
      <p class="artists__cards__card__title">minimalism</p>
      <a href="#artgame" class="fill-div hash"></a>
      </div>

      <div class="artists__cards__card">
      <img src="./assets/full/100full.jpg" alt="" />
      <p class="artists__cards__card__title">avangard</p>
      <a href="#artgame" class="fill-div hash"></a>
      </div>

      <div class="artists__cards__card">
      <img src="./assets/full/110full.jpg" alt="" />
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
      <div class="${className}">
        <h2 class="artgame__title">Кто автор данной картины?</h2>
        <div class="artgame__img-wrap">
          <img src="" alt="">
        </div>
        <div class="artgame__answers">
          <p class="artgame__answers__answer">first</p>
          <p class="artgame__answers__answer">sec</p>
          <p class="artgame__answers__answer">third</p>
          <p class="artgame__answers__answer">forth</p>
        </div>
      </div>
    </div> 

   `;
  },
};

export const Pictures = {
  id: "pictures",
  title: "Pictures quiz",
  render: (className = "container", ...rest) => {
    return `
         
          `;
  },
};

export const Settings = {
  id: "settings",
  title: "quiz Settings",
  render: (className = "container", ...rest) => {
    return `
         
          `;
  },
};

export const Scores = {
  id: "scores",
  title: "quiz scores",
  render: (className = "container", ...rest) => {
    return `
         
          `;
  },
};
