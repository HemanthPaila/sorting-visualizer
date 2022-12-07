function bubble_sort()
{
    for(var i=0;i<array.length-1;i++)
    {
        for(var j=0;j<array.length-1;j++)
        {
            if(array[j+1]<array[j])
            {
                var temp=array[j];
                array[j]=array[j+1];
                array[j]=temp;
            }
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
    bubble_sort();
}