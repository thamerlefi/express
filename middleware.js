const testTime = (req, res, next) => {
    const date = new Date();
    const day = date.getDay(); // returns an integer number between 1 and 7 (monday to sunday)
    const hour = date.getHours(); // returns an integer number between 00 and 23
  
    //if you are in work time (Monday to Friday, from 9 to 17) 
    //you can modify this condition to check the middleware's functionnality
    if (day >= 1 && day <= 5 && hour >= 9 && hour <= 17) {
      next(); // when the condition is true this function allows us to pass to the next functions
    } else {
      res.render('horsTime')
    }
  };

  module.exports = testTime