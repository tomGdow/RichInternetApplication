function tgd(pick, arrLen) {
	//tgd(5, 10) returns an array of 5 unique random integers between 0 -9
	//tgd(10, 10) returns an array of 10 unique random integers betweeen 0-9 
	
				  var arr = [];
			  while(arr.length < pick)
				{
					var randomnumber=(Math.ceil(Math.random()*arrLen)-1) 
					var found=false;
					  for(var i=0;i<arr.length;i++)
						  {
						  if(arr[i]==randomnumber){found=true;break}
						  }
				if(!found)arr[arr.length]=randomnumber;
				}
				return arr}