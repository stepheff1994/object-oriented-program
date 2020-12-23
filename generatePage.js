const Employee = require("./lib/Employee.class");

const generatePage = (data) => {
  return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
      <link href='generatePage.css' rel='stylesheet' />
      <title>Portfolio Demo</title>
    </head>
  
    <body>
    <div class="employee-cards">
        <div class='container'>
            <div class='row'>
                ${createCards(data)}
    </div>

    </body>
    </html>
    `;
};

function createCards(arr) {
  let content = "";

  arr.forEach((employee) => {

    content += `
        <div class="card col-4">
            <img src="img_avatar.png" alt="Avatar" style="width:100%">
            <div class="container">
                <h4><b>${employee.engineerName}</b></h4> 
                <p><a href="https://github.com/${employee.github}">Github</a></p>
                <h4><b>${employee.internName}</b></h4> 
                <p>${employee.school}</p>  
            </div>
        </div>
        `;
  });

  content += `
        </div>
    </div>
  `
  return content;
}

module.exports = generatePage;
