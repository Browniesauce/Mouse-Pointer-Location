const ContainerEL = document.querySelector(".container");

window.addEventListener("mousemove" , (eve) =>{
    ContainerEL.innerHTML = `
        <div class='mouse-event'>
        ${eve.clientX}
        <h4>Mouse X Position(px)</h4>
        </div>
        <div class="mouse-event">
        ${eve.clientY}
        <h4>Mouse Y Prosition(px)</h4>
        </div>`;
});