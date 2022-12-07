function insertion_sort()
{
    for(var i=1;i<arr.length;i++)
    {
        var temp=arr[i];
        var j=i;
        while(j>0 && arr[j-1]>temp)
        {
            arr[j]=arr[j-1];
            j--;
        }
        arr[j]=temp;
    }
}
function insertion()
{
    document.getElementById("wcase").innerHTML="O(n^2)";
    document.getElementById("acase").innerHTML="Θ(n^2)";
    document.getElementById("bcase").innerHTML="Ω(n)";
    document.getElementById("space").innerHTML="O(1)";
    insertion_sort();
}