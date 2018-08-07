var data=  [{ id :01, x:00, y : 01, fare : 1200  }, { id :02, x:00, y : 02, fare : 1200  },
    { id :03, x:00, y : 03, fare : 1200  },
    { id :04, x:00, y : 04, fare : 1200  },
    { id :05, x:00, y : 05, fare : 1200  },
    { id :06, x:00, y : 06, fare : 1200  },
    { id :07, x:00, y : 07, fare : 1200  },
    { id :08, x:00, y : 08, fare : 1200  },
    { id :09, x:00, y : 09, fare : 1200  },
    { id :10, x:00, y : 10, fare : 1200  },
    { id :11, x:00, y : 11, fare : 1200  },
    { id :12, x:00, y : 12, fare : 1200  },
    { id :13, x:00, y : 13, fare : 1200  },
    { id :03, x:00, y : 03, fare : 1200  },
    { id :04, x:00, y : 04, fare : 1200  },
    { id :05, x:00, y : 05, fare : 1200  },
    { id :06, x:00, y : 06, fare : 1200  },
    { id :07, x:00, y : 07, fare : 1200  },
    { id :08, x:00, y : 08, fare : 1200  },
    { id :09, x:00, y : 09, fare : 1200  },
    { id :10, x:00, y : 10, fare : 1200  },
    { id :11, x:00, y : 11, fare : 1200  },
    { id :12, x:00, y : 12, fare : 1200  },
    { id :13, x:00, y : 13, fare : 1200  }]




    function renderBus(data){
     
      var bus = document.getElementById("bus-container")
       for(var i=0; i<data.length;i++){
          var divElement= document.createElement("div");
          divElement.setAttribute("class","seat");
          var seatDiv= document.createElement("div");
          seatDiv.setAttribute("class","fare");
          seatDiv.setAttribute("id",data[i].id);
          seatDiv.setAttribute("seat-num",data[i].id);
          seatDiv.innerHTML =data[i].fare;
          seatDiv.onclick = getBusDetails;
          divElement.appendChild(seatDiv);
          bus.appendChild(divElement);
          
       }
    }
    renderBus(data);

   function getBusDetails(event){
     var seatDetails= document.getElementById("seat-details");
     var i =event.target.id;
     var divElement = document.createElement("div");
     divElement.setAttribute("class","seat-number");
     var seatDiv= document.createElement("div");
     seatDiv.setAttribute("class","fare-price");
     seatDiv.setAttribute("id",data[i].id);
     var seatNumDiv= document.createElement("div");
     seatNumDiv.setAttribute("class","seat-num");
     seatNumDiv.setAttribute("id",data[i].id);
     seatDiv.innerHTML = data[i].fare;
     seatNumDiv.innerHTML = data[i].id;
     divElement.appendChild(seatDiv);
     divElement.appendChild(seatNumDiv);
     seatDetails.appendChild(divElement);
   }