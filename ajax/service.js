function getImages(pageNumber) {
    const promise = axios.get(`https://repetitora.net/api/JS/Images?page=${pageNumber}&count=1`);
    return promise.then((response) => {
      return response.data;
    });
};    
function getTasks() {
    const promise = axios.get(`https://repetitora.net/api/JS/Tasks/?widgetId=2346238&count=5`);
    return promise.then((response) => {
      return response.data;
    });
};
function createTask(title) {
    const promise = axios.post(`https://repetitora.net/api/JS/Tasks/?widgetId=2346238&title=${title}`, {
      widgetId:2346238,
      title:title,
   
    });
    return promise.then((response) => {
      console.log(response.data);
      return response.data;
      
    });
};
      
function updateTask(title,id) {
    const promise = axios.put(`https://repetitora.net/api/JS/Tasks/?widgetId=2346238&title=${title}`, {
      widgetId:2346238,
      title:title,
      taskId:id,
    });
    return promise.then((response) => {
      return response.data;
    });
};
      
function deleteTask(id) {
    const promise = axios.delete(`https://repetitora.net/api/JS/Tasks/?widgetId=2346238&taskId=${title}`);
    return promise.then((response) => {
      return response.data;
    });
};
      

    
  