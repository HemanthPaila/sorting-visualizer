var merge1=[];

function merge_sort()
{
    divide(0,array.length-1);
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
		var idx1=si;
		var idx2=mid+1;
		var i=0;
		while(idx1<=mid && idx2<=ei)
		{
			if(array[idx1]<=array[idx2])
			{
				merge1[i++]=array[idx1++];
			}
			else
			{
				merge1[i++]=array[idx2++];
			}
		}
		while(idx1<=mid)
		{
			merge1[i++]=array[idx1++];
		}
		while(idx2<=ei)
		{
			merge1[i++]=array[idx2++];
		}
		for(var x=0,j=si;x<merge1.length;x++,j++)
		{
			array[j]=merge1[x];
		}
}

function merge()
{
	document.getElementById("wcase").innerHTML="O(n log n)";
    document.getElementById("acase").innerHTML="Θ(n log n)";
    document.getElementById("bcase").innerHTML="Ω(n log n)";
    document.getElementById("space").innerHTML="O(n)";
	merge_sort();
	console.log(merge1);
}