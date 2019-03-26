var dataSet= d3.json("classData.json");


dataSet.then(function(d)
        {
          var array= d.map( function(peng){

            return peng.quizes[0].grade;

          });
          console.log(array)

          drawHistogram(d, 0);


        },

       function(err)
       {
          console.log(err);

       })


       var drawHistogram= function(data, day)
      {

        var screen=
        {
            width: 500,
            height: 500
        };



        var svg=d3.select("svg")
                  .attr("width", screen.width)
                  .attr("height", screen.height);

       var margins=
       {
         top: 20,
         bottom:20,
         right: 20,
         left:20
       };

       var width= screen.width - margins.left - margins.right;
       var height= screen.height - margins.top -margins.bottom;


       var xScale= d3.scaleLinear()
                      .domain([0,10])
                      .nice()
                      .range([0,width]);
      var yScale= d3.scaleLinear()
                    .domain([0,23])
                    .nice()
                    .range([height,0])



      //where's my data???
      var newData= d3.range(100)
                      .map(function(x){return dataSet;});



      var binMaker= d3.histogram()
                      .domain(xScale.domain())
                      .thresholds(xScale.ticks(10));

      var bins= binMaker(dataSet);
      console.log("bins",bins);







      }
