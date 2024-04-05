import {
    onGetTasks,
    saveTask,
    deleteTask,
    getTask,
    updateTask,
    getTasks,
  } from "./firebaseFac.js";
  
  const taskForm = document.getElementById("task-formFac");
  const tasksContainer = document.getElementById("tasks-containerFac");
  
  let editStatus = false;
  let id = "";
  
  window.addEventListener("DOMContentLoaded", async (e) => {
    // const querySnapshot = await getTasks();
    // querySnapshot.forEach((doc) => {
    //   console.log(doc.data());
    // });
  
    onGetTasks((querySnapshot) => {
      tasksContainer.innerHTML = "";
  
      querySnapshot.forEach((doc) => {
        const task = doc.data();
        tasksContainer.innerHTML += `
      <tr>
        <th scope="row">${task.ccFac}</th>
        <td>${task.nameFac}</td>
        <td></td>
        <td>      <button class="btn bg-info btn-edit" data-id="${doc.id}">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>
Ver
      </button></td>
      </tr>
      `;
      });
  
      const btnsDelete = tasksContainer.querySelectorAll(".btn-delete");
      btnsDelete.forEach((btn) =>
        btn.addEventListener("click", async ({ target: { dataset } }) => {
          try {
            await deleteTask(dataset.id);
          } catch (error) {
            console.log(error);
          }
        })
      );
  
      const btnsEdit = tasksContainer.querySelectorAll(".btn-edit");
      btnsEdit.forEach((btn) => {
        btn.addEventListener("click", async (e) => {
          try {
            const doc = await getTask(e.target.dataset.id);
            const task = doc.data();
            taskForm["task-fechFac"].value = task.fech,
          taskForm["task-nomFac"].value = task.nameFac,
          taskForm["task-nitFac"].value = task.ccFac,
          taskForm["lentes"].value = task.lenFac,
          taskForm["lentesDes"].value = task.lenFacVal,
          taskForm["monturas"].value = task.monFac,
          taskForm["monturasDes"].value = task.monFacVal,
          taskForm["otros"].value = task.otrFac,
          taskForm["otrosDes"].value = task.otrFacVal,
          taskForm["abono"].value =task.aboFac,
          taskForm["saldo"].value = task.salFac,
          taskForm["total"].value = task.totFac,
          taskForm["task-telFac"].value = task.telFac,
  
            editStatus = true;
            id = doc.id;
            taskForm["btn-task-formFac"].innerText = "Update";
          } catch (error) {
            console.log(error);
          }
        });
      });
    });
  });
  
  taskForm.addEventListener("submit", async (e) => {
    e.preventDefault();
  
    const fechF = taskForm["task-fechFac"];
    const nomF = taskForm["task-nomFac"];
    const ccF = taskForm["task-nitFac"];
    const lenF = taskForm["lentes"];
    const lenFV = taskForm["lentesDes"];
    const monF = taskForm["monturas"];
    const monFV = taskForm["monturasDes"];
    const otrF = taskForm["otros"];
    const otrFV = taskForm["otrosDes"];
    const aboF = taskForm["abono"];
    const salF = taskForm["saldo"];
    const totF = taskForm["total"];
    const telF = taskForm["task-telFac"];
  
    try {
      if (!editStatus) {
        await saveTask(
          fechF.value,
          nomF.value,
          ccF.value,
          lenF.value,
          lenFV.value,
          monF.value,
          monFV.value,
          otrF.value,
          otrFV.value,
          aboF.value,
          salF.value,
          totF.value,
          telF.value
        );
      } else {
        await updateTask(id, {
          fech : fechF.value,
          nameFac :           nomF.value,
          ccFac :           ccF.value,
          lenFac :           lenF.value,
          lenFacVal :        lenFV.value,
          monFac :           monF.value,
          monFacVal :        monFV.value,
          otrFac :           otrF.value,
          otrFacVal :        otrFV.value,
          totFac :           totF.value,
          aboFac :           aboF.value,
          salFac :           salF.value,
          telFac:            telF.value
        });
  
        editStatus = false;
        id = "";
        taskForm["btn-task-formFac"].innerText = "Save";
      }
  
      taskForm.reset();
    } catch (error) {
      console.log(error);
    }
  });


  
  
 

  