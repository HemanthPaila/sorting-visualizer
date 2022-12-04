function merge()
{
    divide(0,arr.length);
}
function divide(si,ei)
{
    if(si>=ei)
    {
        return ;
    }
    var mid=(si+ei)/2;
    divide(si,mid);
    divide(mid+1,ei);
    conquer(si,mid,ei);
}
function conquer(si,mid,ei)
{
    var merge=new int[ei-si+1];
		var idx1=si;
		var idx2=mid+1;
		var i=0;
		while(idx1<=mid && idx2<=ei)
		{
			if(arr[idx1]<=arr[idx2])
			{
				merge[i++]=arr[idx1++];
			}
			else
			{
				merge[i++]=arr[idx2++];
			}
		}
		while(idx1<=mid)
		{
			merge[i++]=arr[idx1++];
		}
		while(idx2<=ei)
		{
			merge[i++]=arr[idx2++];
		}
		for(var x=0,j=si;x<merge.length;x++,j++)
		{
			arr[j]=merge[x];
		}
}