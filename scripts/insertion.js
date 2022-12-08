function insertion_sort()
{
    for(var i=1;i<array.length;i++)
    {
        var temp=array[i];
        var j=i;
        while(j>0 && array[j-1]>temp)
        {
            array[j]=array[j-1];
            j--;
        }
        array[j]=temp;
    }
    console.log(array);
}
function insertion()
{
    document.getElementById("wcase").innerHTML="O(n^2)";
    document.getElementById("acase").innerHTML="Θ(n^2)";
    document.getElementById("bcase").innerHTML="Ω(n)";
    document.getElementById("space").innerHTML="O(1)";
    insertion_sort();
}