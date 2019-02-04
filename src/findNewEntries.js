if (window.location.pathname.includes("/033")) {
    let created = false;
    let counter;
    // const createDiffNavbar = 
    (function createDiffNavbar(){
        // debugger;
        if(!created){
            // const headElement = document.getElementsByTagName("head")[0];
            // headElement.appendChild();
            const div = document.createElement("div");
            div.innerText = "Find a difference";
            div.classList.add("diffNavbarPosition");
            
            const arrowUp = document.createElement("span");
            arrowUp.textContent = "▲";
            arrowUp.addEventListener("click", function(e){
                counter--;
                // if(counter > 0){
                    alert("UP");
                // }
            });
            div.appendChild(arrowUp);

            const arrowDown = document.createElement("span");
            arrowDown.textContent = "▼";
            arrowDown.onclick = function(){
                alert("DOWN");
            };
            div.appendChild(arrowDown);

            const body = document.getElementsByTagName("body")[0];
            body.appendChild(div);
            created = true;
        }
    }());

    function updateDiffNavbar(entry){
        // const anchor = document.createElement("a");
        // anchor.
        // diffNavbar.appendChild(anchor);
    }

    let diffs = 0;
    document.querySelectorAll("tr.dataRow").forEach(function (tr) {
        const cells = tr.cells;
        if (cells[6].textContent === cells[7].textContent) {
            const errorList = [];
            for (let i = 0; i < cells.length; i++) {
                if (i == 2 && cells[i].childNodes[0].nodeType === 1) {
                    cells[i].childNodes[0].style = "color: red;";
                } else {
                    cells[i].style = "color: red; font-weight: bold; font-size: 20px;";
                }
                errorList.push(cells[i].textContent);
            }
            cells[0].dataset.diff = ++diffs;
            //// eslint-disable-next-line no-console
            console.error("error: " + errorList.join(", "));
        }
    });
}