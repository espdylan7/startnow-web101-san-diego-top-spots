//When the document is ready
$(document).ready(function() {

    //go grab data.json file
        $.getJSON( "./data.json", {type: "GET"} ).done( function(data) {
            //go through all of the data items
            //console.log(data[1])
            for (var i = 0; i < data.length; i++) {
                var individualData = data[i];

                //created a row
                var trElement = document.createElement('tr');
            
                //creating td
                var tdElement = document.createElement('td');
                var tdElement1 = document.createElement('td');
                var tdElement2 = document.createElement('td');
                
                //for element1 push the data.name

                //creating td2


                //td inside tr
                trElement.appendChild(tdElement);
                trElement.appendChild(tdElement1);
                trElement.appendChild(tdElement2);

                tdElement.innerHTML = individualData['name'];
                tdElement1.innerHTML = individualData['description'];
                //tdElement2.innerHTML = individualData['location'];

                

                var aHref = document.createElement('a');
                aHref.setAttribute('href', 'https://www.google.com/maps?q=' + individualData.location[0] + ',' + individualData.location[1])
                // aHref.innerHTML = ;
                console.log(aHref)

                var locationButton = document.createElement('button');
                aHref.append(locationButton);
                tdElement2.appendChild(aHref);
                locationButton.textContent = 'Google Maps' 
                
                
                

                // <a href="https://www.google.com/maps?q={longitude},{latitude}"></a>
                //https://www.google.com/maps?q=33.09745,-116.99572


            //inside td

                //tdElement.textContent = individualData

            //append the new tr to that element
            $('tbody').append(trElement);

            //create new td tr item

            //push them into table inside index.html

            }
        });
});
