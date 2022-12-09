var btn=document.querySelector(".btn a");
function bubble_sort()
{
    btn.disabled=true;
    for(var i=0;i<array.length-1;i++)
    {
        for(var j=1;j<array.length-i;j++)
        {
            // select(div_arr[j-1],div_arr[j],"red");
            if(array[j-1]>array[j])
            {
                // select1(div_arr[j-1],"yellow");
                var temp=array[j-1];
                array[j-1]=array[j];
                array[j]=temp;
                div_heightSwap(array[j],div_arr[j],"blue");
                div_heightSwap(array[j-1],div_arr[j-1],"blue");
            }
            // div_heightSwap(div_arr[j-1],div_arr[j],"blue");
        }
    }
    console.log(array);
}

function bubble()
{
    document.getElementById("wcase").innerHTML="O(n)";
    document.getElementById("acase").innerHTML="Θ(n^2)";
    document.getElementById("bcase").innerHTML="Ω(n^2)";
    document.getElementById("space").innerHTML="O(1)";
    disableButtons();
    disableRangeFields();
    bubble_sort();
    console.log(array.length);
    enableButtons();
    enableRangeFields();
}