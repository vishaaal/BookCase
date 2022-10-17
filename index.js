
function darkMode() {

    jQuery('body').addClass("night").removeClass("day");
    jQuery('h1.gallery-head').addClass("night").removeClass("day");
    jQuery('p.lead').addClass("night").removeClass("day");
}


function lightMode() {
    jQuery('body').addClass("day").removeClass("night");
    jQuery('h1.gallery-head').addClass("day").removeClass("night");
    jQuery('p.lead').addClass("day").removeClass("night");
}

const setNormalView = isNormalView => {
    if (isNormalView) {
      document.querySelector('#normal-view').classList.add('selected');
      document.querySelector('#compact-view').classList.remove('selected');
  
      document.querySelectorAll('.card-body').forEach(cardBody => {
        cardBody.classList.remove('hidden');
      });
  
      document.querySelectorAll('.row>div').forEach(ele => {
        ele.classList.replace('col-lg-2', 'col-lg-4');
      });
    } else {
      document.querySelector('#compact-view').classList.add('selected');
      document.querySelector('#normal-view').classList.remove('selected');
  
      document.querySelectorAll('.card-body').forEach(cardBody => {
        cardBody.classList.add('hidden');
      });
  
      document.querySelectorAll('.row>div').forEach(ele => {
        ele.classList.replace('col-lg-4', 'col-lg-2');
      });
    }
  };
  
  setNormalView(true); // By default normal view is enabled.
  
  document.querySelector('#normal-view').addEventListener('mousedown', () => {
    setNormalView(true);
  });
  
  document.querySelector('#compact-view').addEventListener('mousedown', () => {
    setNormalView(false);
  });
  
  const fixBrokenImages = () => {
      const fallbackURL = 'images/fallback_image.png'
      const img = document.getElementsByTagName('img');
      for (let i = 0; i < img.length; i++) {
          let t = img[i];
          if (t.naturalWidth === 0) {
              t.src = fallbackURL;
          }
      }
  };
  
  window.onload = fixBrokenImages;

  
