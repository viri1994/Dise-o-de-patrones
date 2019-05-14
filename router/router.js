const Pag1=require('../controllers/pag1');
const Search = require("../Controllers/search");


const router=(req, resp)=>{
	if(req.url==='/pag1'){
		var result=Pag1(req);
		resp.end(result);
	} else if (req.url==='/search'){
		 var search = Search(req);
      resp.end(search);
		
	}
		

};


module.exports=router;