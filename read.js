var dataSet= d3.json("classData.json");


dataSet.then(function(d)
        {
          var day=0;
          var array= d.map( function(peng,day){
            return peng.quizes[day].grade;

          });
            console.log(array)

          drawHistogram(d, day, array);
        },

       function(err)
       {
          console.log(err);

       })


       var drawHistogram= function(data, day, array)
      {
        frequency=[0,0,0,0,0,0,0,0,0,0,0]
        var count = array.forEach(function(d)
      {

        if (d == 0)
        {
          frequency[0]++;
        }
        if (d == 1)
        {
          frequency[1]++;
        }
        if (d == 2)
        {
          frequency[2]++;
        }
        if (d == 3)
        {
          frequency[3]++;
        }
        if (d == 4)
        {
          frequency[4]++;
        }
        if (d == 5)
        {
          frequency[5]++;
        }
        if (d == 6)
        {
          frequency[6]++;
        }
        if (d == 7)
        {
          frequency[7]++;
        }
        if (d == 8)
        {
          frequency[8]++;
        }
        if (d == 9)
        {
          frequency[9]++;
        }
        if (d == 10)
        {
          frequency[10]++;
        }
        return frequency;

      })
      console.log(frequency)
        var screen=
        {
            width: 500,
            height: 500
        };

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




      var binMaker= d3.histogram()
                      .domain(xScale.domain())
                      .thresholds(xScale.ticks(10));


      var bins= binMaker(frequency);
      console.log("bins",bins);

      var score= function(d)
      {
        return d.length;
      }

      var yScale= d3.scaleLinear()
                    .domain([0,23])
                    .nice()
                    .range([height,0])




        var svg=d3.select("svg")
                  .attr("width", screen.width)
                  .attr("height", screen.height);


        var plot=svg.append("g")
                    .classed("plot",true)
                    .attr("transform", "translate("+margins.left+","+(margins.top)+")");
        var bars= plot.selectAll("rect")
                      .data(bins)
                      .enter()
                      .append("rect")
                      .attr("x",function(d){return xScale(d.x0)})
                      .attr("width", function(d){ return Math.abs(xScale(d.x1-0.1)-xScale(d.x0))})
                      .attr("y", function(d){return yScale(score(d));})
                      .attr("height", function(d){ return height-yScale(score(d));})






      //where's my data???
      var newData= d3.range(100)
                      .map(function(x){return dataSet;});












}
