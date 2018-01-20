var tab = document.getElementById("pixel_canvas");

function drawTable(width, height) {
    for(var i = 0; i < height; i++){
        var row = document.createElement("tr");
        for (var y = 0; y < width; y++){
            var cell = document.createElement("td");
            row.appendChild(cell);
        }
        tab.appendChild(row);
    }

    $("td").on("click", function () {
         $(this).css("background-color", $("#colorPicker").val());
    });
}

$("#submit").on("click", function (event) {
    $("table").empty();
    var widthVal = $("#input_width").val();
    var heightVal = $("#input_height").val();
    drawTable(widthVal, heightVal);
    event.preventDefault();
});
