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
      </div>

      <div class="artists__cards__card">
        <img src="./assets/full/10full.jpg" alt="" />
        <p class="artists__cards__card__title">landscape</p>
      </div>

      <div class="artists__cards__card">
      <img src="./assets/full/20full.jpg" alt="" />
      <p class="artists__cards__card__title">still life</p>
      </div>

      <div class="artists__cards__card">
      <img src="./assets/full/30full.jpg" alt="" />
      <p class="artists__cards__card__title">graphic</p>
      </div>

      <div class="artists__cards__card">
      <img src="./assets/full/40full.jpg" alt="" />
      <p class="artists__cards__card__title">antique</p>
      </div>

      <div class="artists__cards__card">
      <img src="./assets/full/50full.jpg" alt="" />
      <p class="artists__cards__card__title">avant-garde</p>
      </div>

      <div class="artists__cards__card">
      <img src="./assets/full/60full.jpg" alt="" />
      <p class="artists__cards__card__title">renaissance</p>
      </div>

      <div class="artists__cards__card">
      <img src="./assets/full/70full.jpg" alt="" />
      <p class="artists__cards__card__title">surrealism</p>
      </div>

      <div class="artists__cards__card">
      <img src="./assets/full/80full.jpg" alt="" />
      <p class="artists__cards__card__title">kitsch</p>
      </div>

      <div class="artists__cards__card">
      <img src="./assets/full/90full.jpg" alt="" />
      <p class="artists__cards__card__title">minimalism</p>
      </div>

      <div class="artists__cards__card">
      <img src="./assets/full/100full.jpg" alt="" />
      <p class="artists__cards__card__title">avangard</p>
      </div>

      <div class="artists__cards__card">
      <img src="./assets/full/110full.jpg" alt="" />
      <p class="artists__cards__card__title">industrial</p>
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
