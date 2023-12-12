 
const myBtn = document.getElementById("myBtn");
myBtn. addEventListener("click", function(e){
    const name= prompt ("What is 주황 in English?");
    document.body.innerHTML = "<p> Orange is correct! <br> Orange is the color of enthusiasm and emotion. Orange exudes warmth <br> and joy  and is considered a fun color that provides emotional strength. <br> It is optimistic and uplifting, adds spontaneity and positivity to <br> life and it encourages social communication and creativity. <br> It is a youthful and energetic color.</p>"
    ;
});
// customized cursor (chat gpt)
document.addEventListener("DOMContentLoaded", function () {
    const customCursor = document.getElementById("custom-cursor");

    document.addEventListener("mousemove", function (e) {
      // Update the position of the custom cursor
      customCursor.style.left = e.pageX - customCursor.offsetWidth / 2 + "px";
      customCursor.style.top = e.pageY - customCursor.offsetHeight / 2 + "px";
    });

    document.addEventListener("mouseenter", function () {
      // Show the custom cursor when inside the document
      customCursor.style.display = "block";
    });

    document.addEventListener("mouseleave", function () {
      // Hide the custom cursor when outside the document
      customCursor.style.display = "none";
    });
  });

