var connection = require('./config');
module.exports.userList=function(req,res){
    /*var today = new Date();
    var users={
        "name":req.body.name,
        "email":req.body.email,
        "password":req.body.password,
        "created_at":today,
        "updated_at":today
    }*/
    connection.query('SELECT * from employee', function (error, results, fields) {
      if (error) {
        res.json({
            status:false,
            message:'there are some error with query'
        })
      }else{
		  console.log('The solution is: ', results);
          res.json({
            status:true,
            data:results,
            message:'user registered sucessfully'
        })
      }
    });
}