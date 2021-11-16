

  export const Main = {
    id: "main",
    title: "Themes",
    render: (className = "container", ...rest) => {
      return `
          <main class="main ${className}">
  
          <div class="wrapper">
          <div class="main__cards flex flex-jc-c">
            <div class="main__cards__card">
              <img src="./assets.jpg" alt="">
              <p class="main__cards__card__title">Artists</p>
              <a href="#artists" class="fill-div hash"></a>
            </div>
  
            <div class="main__cards__card">
            <img src="./assets/.jpg" alt="">
            <p class="main__cards__card__title">Pictures</p>
            <a href="#pictures" class="fill-div hash"></a>
          </div>
  
   
         
          </div>
        </div>
  
          </main>
          `;
    },
  };

