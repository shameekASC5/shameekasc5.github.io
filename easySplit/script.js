function getParameter(parameterName) {
   let parameters = new URLSearchParams(window.location.search);
   return parameters.get(parameterName);
}

function findUUID() {
   // envoke php script
   group_identifier = getParameter("UUID");
   console.log(group_identifier);
}