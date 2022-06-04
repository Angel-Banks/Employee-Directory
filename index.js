





const employee = document.querySelectorAll('.employee');
// searchEmployee.addEventListener('input', (e) =>{
  // searchEmployee.addEventListener('input', function (e){

  searchEmployee.oninput=(e)=>{

    displayEmployees(e.target.value.toUpperCase());
  };

  const displayEmployees = (values) =>{

// function displayEmployees (values) {

    employee.forEach((staffPage)=> {
      var name = staffPage.innerHTML.toUpperCase();

        staffPage.style.display = "none"

        if (name.includes(values)){
            staffPage.style.display = "block"
            };
});
};
