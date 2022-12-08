function merge_sort()
{
    divide(0,array.length);
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
    var merge=new Array(ei-si+1);
		var idx1=si;
		var idx2=mid+1;
		var i=0;
		while(idx1<=mid && idx2<=ei)
		{
			if(arrrr[idx1]<=array[idx2])
			{
				merge[i++]=array[idx1++];
			}
			else
			{
				merge[i++]=array[idx2++];
			}
		}
		while(idx1<=mid)
		{
			merge[i++]=array[idx1++];
		}
		while(idx2<=ei)
		{
			merge[i++]=array[idx2++];
		}
		for(var x=0,j=si;x<merge.length;x++,j++)
		{
			array[j]=merge[x];
		}
}

function merge()
{
	document.getElementById("wcase").innerHTML="O(n log n)";
    document.getElementById("acase").innerHTML="Θ(n log n)";
    document.getElementById("bcase").innerHTML="Ω(n log n)";
    document.getElementById("space").innerHTML="O(n)";
	merge_sort();
	console.log(array);
}