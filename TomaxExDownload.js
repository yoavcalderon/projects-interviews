// $(function(){
//     let container = document.getElementById("divMain");
//     let canvas = document.createElement('canvas');
//     container.appendChild(canvas);
    
//     let width = container.clientWidth;
//     let height = container.clientHeight;
    // let posX = container.getBoundingClientRect().left + window.scrollX;
    // let posY = container.getBoundingClientRect().top + window.scrollY;

//     canvas.width = width;
//     canvas.height = height;
// });

// let screenShot = ()=>{

//     console.log("screen shot called");
//     let container = document.getElementById("divMain");

//     let canvas = document.createElement('canvas');
//     let width = container.clientWidth;
//     let height = container.clientHeight;
//     let ctx = canvas.getContext('2d');

//     ctx.drawImage(this,0,0,width,height);
//     let img = document.getElementById("photo");
//     img.onload = function(){
//         ctx.drawImage(img,0,0)
//     }


    // let url = canvas.toDataURL('png');
    // console.log(url);
    // let a = document.getElementById('screen_shot');
    // a.setAttribute('href', url);
    
    // $.ajax({
    //     type: "POST",
    //     url,

    // })

// };
window.onload = function() {
    var width = window.innerWidth;
    var height = window.innerHeight;
  
    var stage = new Konva.Stage({
      divMain: "divMain",
      width: width,
      height: height
    });
  
    var layer = new Konva.Layer();
    stage.add(layer);
  
    // main API:
    var imageObj = new Image();
    imageObj.onload = function() {
      var img = new Konva.Image({
        x: 0,
        y: 0,
        image: imageObj,
        width: width,
        height: height
      });
  
      // add the shape to the layer
      layer.add(img);
      layer.batchDraw();
    };
    imageObj.src = "view.jpg";
  
    function downloadURI(uri, name) {
      var link = document.createElement("a");
      link.download = name;
      link.href = uri;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      delete link;
    }
  
    document.getElementById("save").addEventListener(
      "click",
      function() {
        var dataURL = stage.toDataURL({ pixelRatio: 3 });
        downloadURI(dataURL, "stage.png");
      },
      false
    );
    // console.log("loaded");
  };
