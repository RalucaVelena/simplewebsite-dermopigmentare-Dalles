//Paragraph 1 more..button
function readMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
    
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Citeste mai mult";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Citeste mai putin";
      moreText.style.display = "inline";
    }
    }

    function readMore2() {
      var dots = document.getElementById("dots2");
      var moreText = document.getElementById("more2");
      var btnText = document.getElementById("myBtn2");
      
      if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Citeste mai mult";
        moreText.style.display = "none";
      } else {
        dots.style.display = "none";
        btnText.innerHTML = "Citeste mai putin";
        moreText.style.display = "inline";
      }
      }

      function readMore3() {
        var dots = document.getElementById("dots3");
        var moreText = document.getElementById("more3");
        var btnText = document.getElementById("myBtn3");
        
        if (dots.style.display === "none") {
          dots.style.display = "inline";
          btnText.innerHTML = "Citeste mai mult";
          moreText.style.display = "none";
        } else {
          dots.style.display = "none";
          btnText.innerHTML = "Citeste mai putin";
          moreText.style.display = "inline";
        }
        }