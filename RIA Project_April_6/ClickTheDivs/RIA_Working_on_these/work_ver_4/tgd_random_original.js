//Generate an array with unique random numbers
			  var arr = [];
			  while(arr.length < numberOfDivsShowing)
				{
					var randomnumber=(Math.ceil(Math.random()*divIds.length)-1)
					var found=false;
					  for(var i=0;i<arr.length;i++)
						  {
						  if(arr[i]==randomnumber){found=true;break}
						  }
				if(!found)arr[arr.length]=randomnumber;
				}// JavaScript Document