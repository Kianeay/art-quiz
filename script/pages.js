
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
             
              <p class="main__cards__card__title">Artists</p>
              <a href="#artists" class="fill-div hash"></a>
            </div>
  
            <div class="main__cards__card">
            <img src="./assets/30full.jpg" alt="">
            <p class="main__cards__card__title">Pictures</p>
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