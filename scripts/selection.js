function selection_sort()
{
    for(var i=0;i<arr.length;i++)
    {
        var minindex=i;
        for(var j=i+1;j<arr.length;j++)
        {
            if(arr[j]<arr[minindex])
            {
                minindex=j;
            }
        }
        var temp=arr[i];
        arr[i]=arr[minindex];
        arr[minindex]=temp;
    }
}
function selection()
{
    document.getElementById("wcase").innerHTML="O(n^2)";
    document.getElementById("acase").innerHTML="Θ(n^2)";
    document.getElementById("bcase").innerHTML="Ω(n^2)";
    document.getElementById("space").innerHTML="O(1)";
}