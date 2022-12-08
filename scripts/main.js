// variables decleration
var array=[];
var div_arr=[];
var arr_size=document.querySelector("#size").value;
var fun_speed=0;
var container=document.querySelector(".middle-container");
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
    container.innerHTML="";
    array=[];
    for(var i=0;i<arr_size;i++)
    {
        var random=Math.random()*500;
        var number=Math.floor(random)+1;
        array[i]=number;
        div_arr[i]=document.createElement("div");
        container.appendChild(div_arr[i]);
        div_arr[i].style="width:50px;height:" + (array[i]) + "px;background-color:#e58304;margin: 1px 1px;";
    }
    console.log(array);
}
// disableing buttons
function disableButtons()
{
    document.querySelector("#g_arr").style.pointerEvents="none";
    document.querySelector("#b_sort").style.pointerEvents="none";
    document.querySelector("#i_sort").style.pointerEvents="none";
    document.querySelector("#s_sort").style.pointerEvents="none";
    document.querySelector("#q_sort").style.pointerEvents="none";
    document.querySelector("#m_sort").style.pointerEvents="none";
    document.querySelector("#h_sort").style.pointerEvents="none";
}
// disableing range fields
function disableRangeFields()
{
    document.querySelector("#size").style.pointerEvents="none";
    document.querySelector("#speed").style.pointerEvents="none";
}
// disableing form
function disableForm()
{
    document.querySelector("form-id").style.pointerEvents="none";
    document.querySelector("form-btn").style.pointerEvents="none";
}
//enableing buttons
function enableButtons()
{
    document.querySelector("#g_arr").style.pointerEvents="auto";
    document.querySelector("#b_sort").style.pointerEvents="auto";
    document.querySelector("#i_sort").style.pointerEvents="auto";
    document.querySelector("#s_sort").style.pointerEvents="auto";
    document.querySelector("#q_sort").style.pointerEvents="auto";
    document.querySelector("#m_sort").style.pointerEvents="auto";
    document.querySelector("#h_sort").style.pointerEvents="auto";
}
// enable range fields
function enableRangeFields()
{
    document.querySelector("#size").style.pointerEvents="auto";
    document.querySelector("#speed").style.pointerEvents="auto";
}
// enableing form
function enableForm()
{

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