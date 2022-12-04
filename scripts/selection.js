function selection()
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