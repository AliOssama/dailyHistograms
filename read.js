var dataSet= d3.json("classData.json");


dataSet.then(function(d)
        {
          var day = 0;
          drawHistogram(d,day);
        },

       function(err)
       {
          console.log(err);

       })


       var drawHistogram= function(data,day)
      {
        d3.select("button#day0")
          .on("click",function(){
          updateHistogram0(data,0)});
        d3.selectAll("button#day1")
          .on("click",function(){
          updateHistogram1(data, 1)});
        d3.selectAll("button#day2")
          .on("click",function(){
          updateHistogram2(data, 2)});
        d3.selectAll("button#day3")
          .on("click",function(){
          updateHistogram3(data, 3)});
        d3.selectAll("button#day4")
          .on("click",function(){
          updateHistogram4(data, 4)});
        d3.selectAll("button#day5")
          .on("click",function(){
          updateHistogram5(data, 5)});
        d3.selectAll("button#day6")
          .on("click",function(){
          updateHistogram6(data, 6)});
        d3.selectAll("button#day7")
          .on("click",function(){
          updateHistogram7(data, 7)});
        d3.selectAll("button#day8")
          .on("click",function(){
          updateHistogram8(data, 8)});
        d3.selectAll("button#day9")
          .on("click",function(){
          updateHistogram9(data, 9)});
        var array= data.map( function(peng,day){
          return peng.quizes[day].grade;

        });
          console.log(array)
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


      var bins= binMaker(array);
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


      var xAxis = d3.axisBottom()
            .scale(xScale)
      var yAxis = d3.axisLeft()
                    .scale(yScale)
      svg.append('g').classed("xAxis",true)
                    .call(xAxis)
                    .attr("transform","translate("+margins.left+","+(margins.top+height)+ ")")



      //where's my data???
      var newData= d3.range(100)
                      .map(function(x){return dataSet;});



}
var updateHistogram0= function(data)
{
 d3.select("button#day0")
   .on("click",function(){
   updateHistogram0(data)});
 d3.selectAll("button#day1")
   .on("click",function(){
   updateHistogram1(data)});
 d3.selectAll("button#day2")
   .on("click",function(){
   updateHistogram2(data)});
 d3.selectAll("button#day3")
   .on("click",function(){
   updateHistogram3(data)});
 d3.selectAll("button#day4")
   .on("click",function(){
   updateHistogram4(data)});
 d3.selectAll("button#day5")
   .on("click",function(){
   updateHistogram5(data)});
 d3.selectAll("button#day6")
   .on("click",function(){
   updateHistogram6(data)});
 d3.selectAll("button#day7")
   .on("click",function(){
   updateHistogram7(data)});
 d3.selectAll("button#day8")
   .on("click",function(){
   updateHistogram8(data)});
 d3.selectAll("button#day9")
   .on("click",function(){
   updateHistogram9(data)});

var array2= data.map(function(peng, next){
   return peng.quizes[0].grade;

 });

 console.log(array2)
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


var bins= binMaker(array2);
console.log("bins",bins);

var percentage= function(d)
{
 return d.length/array2.length;
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
var updateHistogram1= function(data)
{
 d3.select("button#day0")
   .on("click",function(){
   updateHistogram0(data)});
 d3.selectAll("button#day1")
   .on("click",function(){
   updateHistogram1(data)});
 d3.selectAll("button#day2")
   .on("click",function(){
   updateHistogram2(data)});
 d3.selectAll("button#day3")
   .on("click",function(){
   updateHistogram3(data)});
 d3.selectAll("button#day4")
   .on("click",function(){
   updateHistogram4(data)});
 d3.selectAll("button#day5")
   .on("click",function(){
   updateHistogram5(data)});
 d3.selectAll("button#day6")
   .on("click",function(){
   updateHistogram6(data)});
 d3.selectAll("button#day7")
   .on("click",function(){
   updateHistogram7(data)});
 d3.selectAll("button#day8")
   .on("click",function(){
   updateHistogram8(data)});
 d3.selectAll("button#day9")
   .on("click",function(){
   updateHistogram9(data)});

var array2= data.map(function(peng, next){
   return peng.quizes[1].grade;

 });

 console.log(array2)
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


var bins= binMaker(array2);
console.log("bins",bins);

var percentage= function(d)
{
 return d.length/array2.length;
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
var updateHistogram2= function(data)
{
 d3.select("button#day0")
   .on("click",function(){
   updateHistogram0(data)});
 d3.selectAll("button#day1")
   .on("click",function(){
   updateHistogram1(data)});
 d3.selectAll("button#day2")
   .on("click",function(){
   updateHistogram2(data)});
 d3.selectAll("button#day3")
   .on("click",function(){
   updateHistogram3(data)});
 d3.selectAll("button#day4")
   .on("click",function(){
   updateHistogram4(data)});
 d3.selectAll("button#day5")
   .on("click",function(){
   updateHistogram5(data)});
 d3.selectAll("button#day6")
   .on("click",function(){
   updateHistogram6(data)});
 d3.selectAll("button#day7")
   .on("click",function(){
   updateHistogram7(data)});
 d3.selectAll("button#day8")
   .on("click",function(){
   updateHistogram8(data)});
 d3.selectAll("button#day9")
   .on("click",function(){
   updateHistogram9(data)});

var array2= data.map(function(peng, next){
   return peng.quizes[2].grade;

 });

 console.log(array2)
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


var bins= binMaker(array2);
console.log("bins",bins);

var percentage= function(d)
{
 return d.length/array2.length;
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
var updateHistogram3= function(data)
{
 d3.select("button#day0")
   .on("click",function(){
   updateHistogram0(data)});
 d3.selectAll("button#day1")
   .on("click",function(){
   updateHistogram1(data)});
 d3.selectAll("button#day2")
   .on("click",function(){
   updateHistogram2(data)});
 d3.selectAll("button#day3")
   .on("click",function(){
   updateHistogram3(data)});
 d3.selectAll("button#day4")
   .on("click",function(){
   updateHistogram4(data)});
 d3.selectAll("button#day5")
   .on("click",function(){
   updateHistogram5(data)});
 d3.selectAll("button#day6")
   .on("click",function(){
   updateHistogram6(data)});
 d3.selectAll("button#day7")
   .on("click",function(){
   updateHistogram7(data)});
 d3.selectAll("button#day8")
   .on("click",function(){
   updateHistogram8(data)});
 d3.selectAll("button#day9")
   .on("click",function(){
   updateHistogram9(data)});

var array2= data.map(function(peng, next){
   return peng.quizes[3].grade;

 });

 console.log(array2)
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


var bins= binMaker(array2);
console.log("bins",bins);

var percentage= function(d)
{
 return d.length/array2.length;
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
var updateHistogram4= function(data)
{
 d3.select("button#day0")
   .on("click",function(){
   updateHistogram0(data)});
 d3.selectAll("button#day1")
   .on("click",function(){
   updateHistogram1(data)});
 d3.selectAll("button#day2")
   .on("click",function(){
   updateHistogram2(data)});
 d3.selectAll("button#day3")
   .on("click",function(){
   updateHistogram3(data)});
 d3.selectAll("button#day4")
   .on("click",function(){
   updateHistogram4(data)});
 d3.selectAll("button#day5")
   .on("click",function(){
   updateHistogram5(data)});
 d3.selectAll("button#day6")
   .on("click",function(){
   updateHistogram6(data)});
 d3.selectAll("button#day7")
   .on("click",function(){
   updateHistogram7(data)});
 d3.selectAll("button#day8")
   .on("click",function(){
   updateHistogram8(data)});
 d3.selectAll("button#day9")
   .on("click",function(){
   updateHistogram9(data)});

var array2= data.map(function(peng, next){
   return peng.quizes[4].grade;

 });

 console.log(array2)
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


var bins= binMaker(array2);
console.log("bins",bins);

var percentage= function(d)
{
 return d.length/array2.length;
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
var updateHistogram5= function(data)
{
 d3.select("button#day0")
   .on("click",function(){
   updateHistogram0(data)});
 d3.selectAll("button#day1")
   .on("click",function(){
   updateHistogram1(data)});
 d3.selectAll("button#day2")
   .on("click",function(){
   updateHistogram2(data)});
 d3.selectAll("button#day3")
   .on("click",function(){
   updateHistogram3(data)});
 d3.selectAll("button#day4")
   .on("click",function(){
   updateHistogram4(data)});
 d3.selectAll("button#day5")
   .on("click",function(){
   updateHistogram5(data)});
 d3.selectAll("button#day6")
   .on("click",function(){
   updateHistogram6(data)});
 d3.selectAll("button#day7")
   .on("click",function(){
   updateHistogram7(data)});
 d3.selectAll("button#day8")
   .on("click",function(){
   updateHistogram8(data)});
 d3.selectAll("button#day9")
   .on("click",function(){
   updateHistogram9(data)});

var array2= data.map(function(peng, next){
   return peng.quizes[5].grade;

 });

 console.log(array2)
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


var bins= binMaker(array2);
console.log("bins",bins);

var percentage= function(d)
{
 return d.length/array2.length;
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
var updateHistogram6= function(data)
{
 d3.select("button#day0")
   .on("click",function(){
   updateHistogram0(data)});
 d3.selectAll("button#day1")
   .on("click",function(){
   updateHistogram1(data)});
 d3.selectAll("button#day2")
   .on("click",function(){
   updateHistogram2(data)});
 d3.selectAll("button#day3")
   .on("click",function(){
   updateHistogram3(data)});
 d3.selectAll("button#day4")
   .on("click",function(){
   updateHistogram4(data)});
 d3.selectAll("button#day5")
   .on("click",function(){
   updateHistogram5(data)});
 d3.selectAll("button#day6")
   .on("click",function(){
   updateHistogram6(data)});
 d3.selectAll("button#day7")
   .on("click",function(){
   updateHistogram7(data)});
 d3.selectAll("button#day8")
   .on("click",function(){
   updateHistogram8(data)});
 d3.selectAll("button#day9")
   .on("click",function(){
   updateHistogram9(data)});

var array2= data.map(function(peng, next){
   return peng.quizes[6].grade;

 });

 console.log(array2)
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


var bins= binMaker(array2);
console.log("bins",bins);

var percentage= function(d)
{
 return d.length/array2.length;
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
var updateHistogram7= function(data)
{
 d3.select("button#day0")
   .on("click",function(){
   updateHistogram0(data)});
 d3.selectAll("button#day1")
   .on("click",function(){
   updateHistogram1(data)});
 d3.selectAll("button#day2")
   .on("click",function(){
   updateHistogram2(data)});
 d3.selectAll("button#day3")
   .on("click",function(){
   updateHistogram3(data)});
 d3.selectAll("button#day4")
   .on("click",function(){
   updateHistogram4(data)});
 d3.selectAll("button#day5")
   .on("click",function(){
   updateHistogram5(data)});
 d3.selectAll("button#day6")
   .on("click",function(){
   updateHistogram6(data)});
 d3.selectAll("button#day7")
   .on("click",function(){
   updateHistogram7(data)});
 d3.selectAll("button#day8")
   .on("click",function(){
   updateHistogram8(data)});
 d3.selectAll("button#day9")
   .on("click",function(){
   updateHistogram9(data)});

var array2= data.map(function(peng, next){
   return peng.quizes[7].grade;

 });

 console.log(array2)
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


var bins= binMaker(array2);
console.log("bins",bins);

var percentage= function(d)
{
 return d.length/array2.length;
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
var updateHistogram8= function(data)
{
 d3.select("button#day0")
   .on("click",function(){
   updateHistogram0(data)});
 d3.selectAll("button#day1")
   .on("click",function(){
   updateHistogram1(data)});
 d3.selectAll("button#day2")
   .on("click",function(){
   updateHistogram2(data)});
 d3.selectAll("button#day3")
   .on("click",function(){
   updateHistogram3(data)});
 d3.selectAll("button#day4")
   .on("click",function(){
   updateHistogram4(data)});
 d3.selectAll("button#day5")
   .on("click",function(){
   updateHistogram5(data)});
 d3.selectAll("button#day6")
   .on("click",function(){
   updateHistogram6(data)});
 d3.selectAll("button#day7")
   .on("click",function(){
   updateHistogram7(data)});
 d3.selectAll("button#day8")
   .on("click",function(){
   updateHistogram8(data)});
 d3.selectAll("button#day9")
   .on("click",function(){
   updateHistogram9(data)});

var array2= data.map(function(peng, next){
   return peng.quizes[8].grade;

 });

 console.log(array2)
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


var bins= binMaker(array2);
console.log("bins",bins);

var percentage= function(d)
{
 return d.length/array2.length;
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
var updateHistogram9= function(data)
{
 d3.select("button#day0")
   .on("click",function(){
   updateHistogram0(data)});
 d3.selectAll("button#day1")
   .on("click",function(){
   updateHistogram1(data)});
 d3.selectAll("button#day2")
   .on("click",function(){
   updateHistogram2(data)});
 d3.selectAll("button#day3")
   .on("click",function(){
   updateHistogram3(data)});
 d3.selectAll("button#day4")
   .on("click",function(){
   updateHistogram4(data)});
 d3.selectAll("button#day5")
   .on("click",function(){
   updateHistogram5(data)});
 d3.selectAll("button#day6")
   .on("click",function(){
   updateHistogram6(data)});
 d3.selectAll("button#day7")
   .on("click",function(){
   updateHistogram7(data)});
 d3.selectAll("button#day8")
   .on("click",function(){
   updateHistogram8(data)});
 d3.selectAll("button#day9")
   .on("click",function(){
   updateHistogram9(data)});

var array2= data.map(function(peng, next){
   return peng.quizes[9].grade;

 });

 console.log(array2)
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


var bins= binMaker(array2);
console.log("bins",bins);

var percentage= function(d)
{
 return d.length/array2.length;
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

