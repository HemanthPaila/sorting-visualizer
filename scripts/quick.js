function quick()
{
    quick_sort(0,arr.length);
}
function quick_sort(low,high)
{
    if(low<high)
    {
        var p=partition(low,high);
        quick_sort(low,p-1);
        quick_sort(p+1,high);
}
}
function partition(low,high)
{
    var pivot=high;
		var i=low-1;
		for(var j=low;j<=high;j++)
		{
			if(arr[j]<=arr[pivot])
			{
				i++;
				var t=arr[i];
				arr[i]=arr[j];
				arr[j]=t;
			}
		}
	return i;
}

