'use strict'
const modelSearch=require('../models/modelSearch.js');
const search=(req)=>{
	var alumno=modelSearch(); 
	var nombre = 'Viridiana';
	result=alumno.filter((alumno) => { 
		if(alumno.nombre===nombre)
			{return result;}

	

	})
	return(JSON.stringify(result));
	
		

};


module.exports=search;