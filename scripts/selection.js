function selection_sort()
{
    for(var i=0;i<array.length;i++)
    {
        var minindex=i;
        for(var j=i+1;j<array.length;j++)
        {
            if(array[j]<array[minindex])
            {
                minindex=j;
            }
        }
        var temp=array[i];
        array[i]=array[minindex];
        array[minindex]=temp;
    }
    console.log(array);
}
function selection()
{
    document.getElementById("wcase").innerHTML="O(n^2)";
    document.getElementById("acase").innerHTML="Θ(n^2)";
    document.getElementById("bcase").innerHTML="Ω(n^2)";
    document.getElementById("space").innerHTML="O(1)";
    selection_sort();
}