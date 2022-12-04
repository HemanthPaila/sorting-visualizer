function insertion()
{
    for(var i=1;i<Array.length;i++)
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