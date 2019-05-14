'use strict'
const modelSearch=require('../models/modelSearch.js');
const fs = require('fs');
var path = require ('path');
var appDir = path.dirname(require.main.filename);
var ruta = path.join('/views', 'vista.html')


const htmlRender = (html, data) => { console.log (htmlRender);
    let parsedHtml = html.toString('utf8');

    /*for(key in data){
        let exp = "{{"+key+"}}";
        let reg = new RegExp(exp, 'g');
        parsedHtml = parsedHtml.replace(reg, data[key]);
    }

	return parsedHtml;*/
};

	const search=(req)=>{
	var result=modelSearch(); 
	var nombre = 'Viridiana';
	result=result.filter((alumno) => { 
		if(alumno.nombre===nombre){
			{return result;}
		}

	

	})
	const view = fs.readFileSync(appDir+ ruta).toString('utf8');
	

	//const parsedHtml = htmlRender(view, result[0]);
	return(view);
	
		

};


module.exports=search;