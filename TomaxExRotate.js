interact('.rotatable')
//   .on('tap', function (event) {
//     event.currentTarget.classList.toggle('switch-bg')
//     event.preventDefault()
//   })
//   .on('doubletap', function (event) {
//     event.currentTarget.classList.toggle('large')
//     event.currentTarget.classList.remove('rotate')
//     event.preventDefault()
//   })
  .on('tap', function (event) {
    event.currentTarget.classList.toggle('rotate')
  })
  

//   
//   .on('tap', function (event) {
//     angle = changeAngle(angle); 
//     event.currentTarget.style.transform = `rotate(${angle})`
//     console.log( event.currentTarget);
 
//      // toggle('rotate')
//    })
 
//    const changeAngle = (angle)=>{
//      if(angle <270) angle+=90;
//      else angle = 0;
//      return angle;
//    };