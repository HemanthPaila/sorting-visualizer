function bubble()
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