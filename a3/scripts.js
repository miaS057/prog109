function createRhombus(pHeight, pColorEven, pColorOdd, pSymbol) {
up(pHeight, pColorEven, pColorOdd, pSymbol);
down(pHeight, pColorEven, pColorOdd, pSymbol);

}

function up(pHeight, pColorEven, pColorOdd, pSymbol)
{
  var rLine = "";
  for(i = 1; i < pHeight; i++)
  {
    rLine +="<p>";
    for(j = 0; j < i; j++)
    {
      for(k = 0; k < pHeight - i; k++)
      {
        if(j === 0){
          rLine += "<span style='color:#FFFFFF>;'>" + " &nbsp " +"</span>";
        }
      }
      if (j % 2)
      {
        rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
      }
      else
      {
        rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";
      }
    }
    for(k = 0; k < i * 2 - i; k++)
    {
      if(i % 2)
      {
        if (k % 2)
        {
          rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";
        }
        else
        {
          rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
        }
      }
      else
      {
        if (k % 2)
        {
          rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
        }
        else
        {
          rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";
        }
      }
      
    }
    rLine += "<p>";
  }
  document.getElementById("up").innerHTML = rLine;
}
  
function down(pHeight, pColorEven, pColorOdd, pSymbol)
{
  var rLine = "";
  for(i = pHeight; i > 0; i--)
  {
    rLine +="<p>";
    for(j = 0; j < i; j++)
    {
      for(k = 0; k < pHeight - i; k++)
      {
        if(j === 0){
          rLine += "<spanspan style='color:#FFFFFF>;'>" + " &nbsp " +"</span>";
        }
      }
      if (j % 2)
      {
        rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
      }
      else
      {
        rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";
      }
    }
    for(k = 0; k < i * 2 - i; k++)
    {
      if(i % 2)
      {
        if (k % 2)
        {
          rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";
        }
        else
        {
          rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
        }
      }
      else
      {
        if (k % 2)
        {
          rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
        }
        else
        {
          rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";
        }
      }
      
    }
    rLine += "<p>";
  }
  document.getElementById("down").innerHTML = rLine;
}
