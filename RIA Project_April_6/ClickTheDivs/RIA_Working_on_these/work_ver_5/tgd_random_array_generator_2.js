function tgdtwo(pick, mylower, desiredarrLen) {
	//tgdtwo(5, 5, 10) returns an array of 5 unique random integers between 5 and 9 (!NoTT 10)
	//tgdtwo(99,1,100) returns an array of 99 unique random integers betweeen 1 and 99 (!NoTT 100)
	
				  var arr = [];
				  var arrLen =  desiredarrLen - mylower;
			  while(arr.length < pick)
				{
					var randomnumber=(Math.ceil(Math.random()*arrLen)-1) + mylower
					var found=false;
					  for(var i=0;i<arr.length;i++)
						  {
						  if(arr[i]==randomnumber){found=true;break}
						  }
				if(!found)arr[arr.length]=randomnumber;
				}
				return arr}
				