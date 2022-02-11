window.addEventListener("scroll", function () {
  function progress() {
    const counters = document.querySelectorAll(".counter");
    const speed = 200;
    for (let i = 0; i < counters.length; i++) {
      let altura = window.innerHeight / 1.3;
      let altura1 = window.innerHeight / 1;
      let distancia = counters[i].getBoundingClientRect().top;

      counters.forEach((counter) => {
        const updateCount = () => {
          const target = +counter.getAttribute("data-target");
          const cero = +counter.getAttribute("data-cero");
          const count = +counter.innerText;
          const inc = target / speed;

          if (distancia <= altura) {
            if (count < target) {
              counter.innerText = Math.ceil(count + inc);
              setTimeout(updateCount, 1);
            } else {
              count.innerText = target;
            }
          } else if (distancia > altura1) {
            if (count > cero) {
              // counter.innerText = Math.floor(count - inc);
              // setTimeout(updateCount, 1);
              counter.innerText = cero;
            } else {
              count.innerText = cero;
            }
          } 
          // else {
          //   counter.innerText = 0;
          // }
        };
        updateCount();
      });
    }
  }
  progress();
});

// if (distancia <= altura) {
//   counters.forEach((counter) => {
//     const updateCount = () => {
//       const target = +counter.getAttribute("data-target");
//       const count = +counter.innerText;

//       const inc = target / speed;

//       if (count < target) {
//         counter.innerText = Math.ceil(count + inc);
//         setTimeout(updateCount, 100);
//       } else {
//         count.innerText = target;
//       }
//     };
//     updateCount();
//   });
// } else {
//   counters.forEach((counter) => {
//     const updateCount = () => {
//       const target = +counter.getAttribute("data-target");
//       const count = +counter.innerText;
//       // const cero = 0

//       const inc = target / speed;

//       if (count > 0) {
//         counter.innerText = Math.ceil(count - inc);
//         setTimeout(updateCount, 100);
//       } else {
//         count.innerText = 0;
//       }
//     };
//     updateCount();
//   });
// }

// const counters = document.querySelectorAll(".counter");
// const speed = 1000;

// counters.forEach((counter) => {
//   const updateCount = () => {
//     const target = +counter.getAttribute("data-target");
//     const count = +counter.innerText;

//     const inc = target / speed;

//     if (count < target) {
//       counter.innerText = Math.ceil(count + inc);
//       setTimeout(updateCount, 1);
//     } else {
//       count.innerText = target;
//     }
//   };
//   updateCount();
// });
