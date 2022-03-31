function deleteTodo(i) 
{
  $.post("Home/Delete", { id: i }).always(() => {
      window.location.reload();
  });
}

function populateForm(i) 
{
  $.get("Home/PopulateForm", { id: i }).always((response) => {
    console.log("i: " + i);
    console.log("name: " + response.name);
    console.log("id: " + response.id);
    
      $("#Todo_Name").val(response.name);
      $("#Todo_Id").val(response.id);
      $("#form-button").val("Update Todo");
      $("#form-action").attr("action", "/Home/Update");
  }), 'json';
}
