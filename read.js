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
                      .range([0,width])
                      .nice();


      var binMaker= d3.histogram()
                      .domain(xScale.domain())
                      .thresholds(xScale.ticks(10));


      var bins= binMaker(data);
      console.log("bins",bins);

      var percentage= function(d)
      {
        return d.length/array.length;
      }

      var yScale= d3.scaleLinear()
                    .domain([0,d3.max(bins,function(d){return percentage(d);})])
                    .range([height,0])
                    .nice();




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
                      .attr("y", function(d){return yScale(percentage(d));})
                      .attr("height", function(d){ return height-yScale(percentage(d));})






      //where's my data???
      var newData= d3.range(100)
                      .map(function(x){return dataSet;});












}
