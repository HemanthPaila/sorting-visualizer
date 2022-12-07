var array=[];
var arr_size=0;
var fun_speed=0;
// generating array size
function array_size()
{
    arr_size=document.querySelector("#size").value;
}
//generating function speed
function func_speed()
{
    fun_speed=document.querySelector("#speed").value;
}
// generating an array
function generate_array()
{
    array=[];
    for(var i=0;i<arr_size;i++)
    {
        var random=Math.random()*100;
        var number=Math.floor(random)+1;
        array.push(number);
    }
    console.log(array);
}
function main()
{
    var n;
    switch(n)
    {
        case 1:bubble();
        break;
        case 2:insertion();
        break;
        case 3:selection();
        break;
        case 4:quick();
        break;
        case 5:merge();
        break;
        case 6:heap();
        break;
    }
}