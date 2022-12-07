function bubble_sort()
{
    for(var i=0;i<arr.length-1;i++)
    {
        for(var j=0;j<arr.length-1;j++)
        {
            if(arr[j+1]<arr[j])
            {
                var temp=arr[j];
                arr[j]=arr[j+1];
                arr[j]=temp;
            }
        }
    }
}

function bubble()
{
    document.getElementById("wcase").innerHTML="O(n)";
    document.getElementById("acase").innerHTML="Θ(n^2)";
    document.getElementById("bcase").innerHTML="Ω(n^2)";
    document.getElementById("space").innerHTML="O(1)";
    bubble_sort();
}