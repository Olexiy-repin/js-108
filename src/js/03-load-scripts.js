// https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js
// https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js
// https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js

/*
 * Завантаження скриптів
 */
//? Рішення через колбеки

// const loadScript = (url, onSuccess, onError) => {
//   const script = document.createElement('script');

//   script.src = url;

//   document.body.append(script);

//   script.addEventListener('load', event => {
//     onSuccess(`${url} завантажився успішно`);
//   });

//   script.addEventListener('error', event => {
//     onError(`${url} не завантажився`);
//   });
// };

// loadScript(
//   'https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js',
//   message => {
//     console.log(message);

//     loadScript(
//       'https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js',
//       message => {
//         console.log(message);

//         loadScript(
//           'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js',
//           message => {
//             console.log(message);
//           },
//           err => {
//             console.log(err);
//           }
//         );
//       },
//       err => {
//         console.log(err);
//       }
//     );
//   },
//   err => {
//     console.log(err);
//   }
// );

//? Рішення через проміси
const loadScript = url => {
  const promise = new Promise((resolve, reject) => {
    const script = document.createElement('script');

    script.src = url;

    document.body.append(script);

    script.addEventListener('load', event => {
      resolve(`${url} завантажився успішно`);
    });

    script.addEventListener('error', event => {
      reject(`${url} не завантажився`);
    });
  });

  return promise;
};

loadScript('https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js')
  .then(message => {
    console.log(message);
  })
  .catch(err => {
    console.log(err);
  });

loadScript('https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js')
  .then(message => {
    console.log(message);

    return loadScript('https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js');
  })
  .then(message => {
    console.log(message);
  })
  .catch(err => {
    console.log(err);
  });
