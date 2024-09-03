const container = document.getElementById("container");

for(let i = 0;i < 30;i++) {
    const column = document.createElement("div");
    column.classList.add("col");
    for(let j = 0;j < 30;j++) {
        const row = document.createElement("div");
        row.classList.add("row");
        row.style.border = "1px solid grey";
        column.appendChild(row);
        row.addEventListener("mouseleave", () => changeColor(row));
    }
    container.appendChild(column);

}

const clear = document.getElementById("btn");
clear.addEventListener("click", () => resetColor(container));

function changeColor(target) {
    target.style.backgroundColor = "grey";
}

function resetColor(target) {
    const rows = container.getElementsByClassName("row");
    for(let i = 0;i < rows.length;i++) {
        rows[i].style.backgroundColor = "white";
    }
}