document.getElementById('photo').onclick = zoom;
var num = 0;

function zoom()
{ if ( num == 0 )
    {
    num = 1;
    document.getElementById('photo').style.width='700px';   

    }
  else 
    {
    num = 0;
    document.getElementById('photo').style.width='500px';
    }

}

