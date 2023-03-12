const DIV_FILE = document.querySelector("#div-file");
const FILE = document.querySelector("#file");
const CONTAINER_ROMPECABEZA = document.querySelector("#container-ronpecabeza");
const RELOAD = document.querySelector("#reload");
const CANVAS = document.querySelector("#canvas");
let context = CANVAS.getContext("2d");
CANVAS.style.display = "none";
let colorInvert = null;
const BTNS_COLORES = document.querySelectorAll(".color");
BTNS_COLORES.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    switch (event.target.className) {
      case "color btn-black":
        //colocar que cambie el fondo!
        break;
      case "color btn-white":
        //colocar que cambie el fondo!
        break;
      default:
        break;
    }
  });
});
DIV_FILE.addEventListener("click", () => FILE.click());
FILE.addEventListener("change", (event) => {
  const FRAGMENT = document.createDocumentFragment();
  const FILE_READER = new FileReader();
  let imgName = event.target.files[0];
  FILE_READER.readAsDataURL(imgName);
  FILE_READER.addEventListener("load", (event) => {
    let div = document.createElement("div");
    let imagen = document.createElement("IMG");
    let imagenrompecabeza = document.createElement("IMG");
    imagenrompecabeza.setAttribute("src", "img/rompecabeza.png");
    div.id = "container-rpc";
    imagen.setAttribute("src", event.target.result);
    /*imagen.setAttribute('id','rompecabeza')*/

    /*div.innerHTML = `
      <div id="imagenrompecabeza">
        <img src=${event.target.result} id="rompecabeza" />
        <img src="img/rompecabeza.png" alt="" id="rompecabezaborde" />
      </div>
      `;*/
    CANVAS.style.display = "block";

    imagen.addEventListener("load", () =>
      context.drawImage(imagen, 0, 0, 800, 500)
    );
    imagenrompecabeza.addEventListener("load", () => context.drawImage(imagenrompecabeza, 0, 0, 805, 500));

    /*FRAGMENT.appendChild(div);
    CONTAINER_ROMPECABEZA.appendChild(FRAGMENT);*/
    window.scroll({
      top: 500,
      left: 0,
      behavior: "smooth",
    });
    DIV_FILE.style.display = "none";
    RELOAD.style.display = "block";
  });
});
RELOAD.addEventListener("click", () => (location.href = "../index.html"));
CANVAS.addEventListener("click", (event) => {
  let a = document.createElement("a");
  a.setAttribute("id", "descargar");
  a.setAttribute("href", CANVAS.toDataURL("image/png"));
  a.setAttribute("download", "ROMPECABEZA");
  a.innerText = "descargar imagen,";
  a.style.position = "absolute";
  a.style.zIndex = "1000000";
  CONTAINER_ROMPECABEZA.appendChild(a);
});
//CANVAS
