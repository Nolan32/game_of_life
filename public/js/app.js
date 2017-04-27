	function createWorld(nbrligne,nbrcol){
	 		var univer="";
	 	for (var i = 0; i < nbrligne; i++) {
	 		 univer="<tr>"
	 		for (var j = 0;j <nbrcol; j++) {
	 			univer = univer +"<td id='"+[i]+[j]+"'>&nbsp;</td>";	
	 		}
	 		 
	 		univer = univer+ "</tr>"
			 	$('table').append(univer);
		}
	 	
	//console.log(univer)
	}
 	createWorld(10,10)

 	//$('#test').click(createWorld(10,10))

	var habitant = [{
					type : "vegetal",
					force:0,
					positionA : Math.floor(Math.random()*10),
					postionO: Math.floor(Math.random()*10),
					id: "",
					color: "green",
					age: 0,
					double: 10
					},
					{
					type : "herbivore",
					force:1,
					positionA: Math.floor(Math.random()*10),
					postionO: Math.floor(Math.random()*10),
					id:"",
					color:"orange",
					age: 0,
					lifeTime: 30,
					withoutEat: 10,
					},
					{
					type : "carnivore",
					force:2,
					positionA: Math.floor(Math.random()*10),
					postionO: Math.floor(Math.random()*10),
					id:"",
					color:"red",
					age: 0,
					lifeTime: 15,
					withoutEat: 10,
					},
					{
					type : "météorite",
					force:3,
					positionA: Math.floor(Math.random()*10),
					postionO: Math.floor(Math.random()*10),
					id:"",
					color:"grey",
					age: 0,
					lifeTime: 20,
					},
					{
					type : "météor",
					force:4,
					positionA: Math.floor(Math.random()*10),
					postionO: Math.floor(Math.random()*10),
					id:"",
					color:"brown",
					age: 0,
					lifeTime: 20,
					},
					{
					type : "apocalypse",
					force:5,
					positionA: Math.floor(Math.random()*10),
					postionO: Math.floor(Math.random()*10),
					id:"",
					color:"black",
					age: 0,
					lifeTime: 20,
					}
					];

					habitant[0].id=""+habitant[0].positionA+""+ habitant[0].postionO+"" ;
					habitant[1].id=""+habitant[1].positionA+""+ habitant[1].postionO+"" ;
					habitant[2].id=""+habitant[2].positionA+""+ habitant[2].postionO+"" ;
					habitant[3].id=""+habitant[3].positionA+""+ habitant[3].postionO+"" ;

					//console.log(habitant);
					
	function genereralea(){					
			var beast = habitant[Math.floor(Math.random()*habitant.length)]
			beast.positionA = Math.floor(Math.random()*10);
			beast.postionO =  Math.floor(Math.random()*10);
			beast.id = ""+beast.positionA+""+beast.postionO+"",
			console.log(beast.id);
			if (beast.color=="green" || beast.color=="orange" || beast.color=="red" || beast.color=="grey" || beast.color=="brown" || beast.color=="black") {
				$("#"+beast.id+"").addClass(beast.type);
			}
	}

	$('#test').click(function(){
		setInterval(genereralea,1);		
	});


			




	

	





