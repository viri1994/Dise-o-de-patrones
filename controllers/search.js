'use strict'
const modelSearch=require('../models/modelSearch.js');
const search=(req)=>{
	var result=modelSearch(); 
	var nombre = 'Viridiana';
	result=result.filter((alumno) => { 
		if(alumno.nombre===nombre)
			{return result;}

	

	})
	return(JSON.stringify(result));
	
		

};


module.exports=search;