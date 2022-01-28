
export async function Ajax(props){
     let {url, cbSuccess} = props,
          $error = document.createElement("div");

     await fetch(url)
          .then(res => res.ok ? res.json() : Promise.reject(res))
          .then(json => cbSuccess(json))
          .catch(err => {
               let msg = err.statusText || `Ocurrió un error`,
                    errCode = err.status || `desconocido`;
               $error.classList.add("error");

               $error.innerHTML = `<p>Error ${errCode}: ${msg}</p>`;

               document.querySelector(".main-section").appendChild($error);

               console.log(err);
          });
}