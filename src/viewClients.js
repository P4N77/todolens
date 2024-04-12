import {
    onGetTasks,
    saveTask,
    deleteTask,
    getTask,
    updateTask,
    getTasks,
  } from "./firebase.js";
  
  const taskForm = document.getElementById("task-form");
  const tasksContainer = document.getElementById("tasks-container");
  const forP = document.getElementById("facP")
  console.log(forP["task-name"]);
  
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
        <th scope="row">${task.idClient}</th>
        <td>${task.nameClient}</td>
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
            taskForm["task-doc"].value = task.idClient;
            taskForm["task-name"].value = task.nameClient;
            taskForm["task-lastname"].value = task.lastnameClient;
            taskForm["task-birth"].value = task.birthClient;
            taskForm["task-tel"].value = task.telClient;
            taskForm["task-control"].value = task.controlClient;
          taskForm["od_es"].value = task.od_es,
            taskForm["od_ci"].value = task.od_cil,
            taskForm["od_gr"].value = task.od_gra,
            taskForm["od_ad"].value = task.od_add,
          taskForm["od_av"].value = task.od_av,
          taskForm["od_dp"].value = task.od_dpu,
            taskForm["oi_es"].value = task.oi_es,
            taskForm["oi_ci"].value = task.oi_cil,
            taskForm["oi_gr"].value = task.oi_gra,
            taskForm["oi_ad"].value = task.oi_add,
          taskForm["oi_av"].value = task.oi_av,
          taskForm["oi_dp"].value = task.oi_dpu,
              taskForm["lens_od_es"].value = task.len_od_es,
              taskForm["lens_od_ci"].value = task.len_od_cil,
              taskForm["lens_od_gr"].value = task.len_od_gra,
              taskForm["lens_od_ad"].value = task.len_od_add,
            taskForm["lens_od_av"].value = task.len_od_av,
            taskForm["lens_od_dp"].value = task.len_od_dpu,
              taskForm["lens_oi_es"].value = task.len_oi_es,
              taskForm["lens_oi_ci"].value = task.len_oi_cil,
              taskForm["lens_oi_gr"].value = task.len_oi_gra,
              taskForm["lens_oi_ad"].value = task.len_oi_add,
            taskForm["lens_oi_av"].value = task.len_oi_av,
            taskForm["lens_oi_dp"].value = task.len_oi_dpu,
            forP["task-name"].value =task.lastnameClient+" "+task.nameClient,
            forP["task-doc"].value = task.idClient;
            forP["task-tel"].value = task.telClient;
            forP["od_es"].value = task.od_es,
            forP["od_ci"].value = task.od_cil,
            forP["od_gr"].value = task.od_gra,
            forP["od_ad"].value = task.od_add,
          forP["od_av"].value = task.od_av,
          forP["od_dp"].value = task.od_dpu,
            forP["oi_es"].value = task.oi_es,
            forP["oi_ci"].value = task.oi_cil,
            forP["oi_gr"].value = task.oi_gra,
            forP["oi_ad"].value = task.oi_add,
          forP["oi_av"].value = task.oi_av,
          forP["oi_dp"].value = task.oi_dpu,
              forP["lens_od_es"].value = task.len_od_es,
              forP["lens_od_ci"].value = task.len_od_cil,
              forP["lens_od_gr"].value = task.len_od_gra,
              forP["lens_od_ad"].value = task.len_od_add,
            forP["lens_od_av"].value = task.len_od_av,
            forP["lens_od_dp"].value = task.len_od_dpu,
              forP["lens_oi_es"].value = task.len_oi_es,
              forP["lens_oi_ci"].value = task.len_oi_cil,
              forP["lens_oi_gr"].value = task.len_oi_gra,
              forP["lens_oi_ad"].value = task.len_oi_add,
            forP["lens_oi_av"].value = task.len_oi_av,
            forP["lens_oi_dp"].value = task.len_oi_dpu,

  
            editStatus = true;
            id = doc.id;
            taskForm["btn-task-form"].innerText = "Update";
          } catch (error) {
            console.log(error);
          }
        });
      });
    });
  });
  
  taskForm.addEventListener("submit", async (e) => {
    e.preventDefault();
  
    const docClient = taskForm["task-doc"];
    const nameClient = taskForm["task-name"];
    const lastClient = taskForm["task-lastname"];
    const birthClient = taskForm["task-birth"];
    const telClient = taskForm["task-tel"];
    const control = taskForm["task-control"];
    const od_esf = taskForm["od_es"];
    const od_cil = taskForm["od_ci"];
    const od_gra = taskForm["od_gr"];
    const od_adi = taskForm["od_ad"];
    const od_av = taskForm["od_av"];
    const od_dp = taskForm["od_dp"];
    const oi_esf = taskForm["oi_es"];
    const oi_cil = taskForm["oi_ci"];
    const oi_gra = taskForm["oi_gr"];
    const oi_adi = taskForm["oi_ad"];
    const oi_av = taskForm["oi_av"];
    const oi_dp = taskForm["oi_dp"];
    const len_od_esf = taskForm["lens_od_es"];
    const len_od_cil = taskForm["lens_od_ci"];
    const len_od_gra = taskForm["lens_od_gr"];
    const len_od_adi = taskForm["lens_od_ad"];
    const len_od_av = taskForm["lens_od_av"];
    const len_od_dp = taskForm["lens_od_dp"];
    const len_oi_esf = taskForm["lens_oi_es"];
    const len_oi_cil = taskForm["lens_oi_ci"];
    const len_oi_gra = taskForm["lens_oi_gr"];
    const len_oi_adi = taskForm["lens_oi_ad"];
    const len_oi_av = taskForm["lens_oi_av"];
    const len_oi_dp = taskForm["lens_oi_dp"];
  
  
  
    try {
      if (!editStatus) {
        await saveTask(
          docClient.value,
          nameClient.value,
          lastClient.value,
          birthClient.value,
          telClient.value,
          control.value,
          od_esf.value,
          od_cil.value,
          od_gra.value,
          od_adi.value,
          od_av.value,
          od_dp.value,
          oi_esf.value,
          oi_cil.value,
          oi_gra.value,
          oi_adi.value,
          oi_av.value,
          oi_dp.value,
          len_od_esf.value,
          len_od_cil.value,
          len_od_gra.value,
          len_od_adi.value,
          len_od_av.value,
          len_od_dp.value,
          len_oi_esf.value,
          len_oi_cil.value,
          len_oi_gra.value,
          len_oi_adi.value,
          len_oi_av.value,
          len_oi_dp.value
          );
      } else {
        await updateTask(id, {
          idClient: docClient.value,
          nameClient : nameClient.value,
          lastnameClient: lastClient.value,
          birthClient : birthClient.value,
          telClient: telClient.value,
          controlClient : control.value,
          od_es : od_esf.value,
          od_cil :         od_cil.value,
          od_gra :         od_gra.value,
          od_add :         od_adi.value,
          od_av :         od_av.value,
          od_dpu :         od_dp.value,
          oi_es :         oi_esf.value,
          oi_cil :         oi_cil.value,
          oi_gra :         oi_gra.value,
          oi_add :         oi_adi.value,
          oi_av :         oi_av.value,
          oi_dpu :         oi_dp.value,
          len_od_es :         len_od_esf.value,
          len_od_cil :         len_od_cil.value,
          len_od_gra :         len_od_gra.value,
          len_od_add :         len_od_adi.value,
          len_od_av :         len_od_av.value,
          len_od_dpu :         len_od_dp.value,
          len_oi_es :         len_oi_esf.value,
          len_oi_cil :         len_oi_cil.value,
          len_oi_gra :         len_oi_gra.value,
          len_oi_add :         len_oi_adi.value,
          len_oi_av :         len_oi_av.value,
          len_oi_dpu :         len_oi_dp.value
  
        });
  
        editStatus = false;
        id = "";
        taskForm["btn-task-form"].innerText = "Save";
      }
  
      taskForm.reset();
      title.focus();
    } catch (error) {
      console.log(error);
    }
  });
  
  
  
  async function filterTasksByTitle(title) {
    const tasksContainer = document.getElementById("tasks-container");
    const querySnapshot = await getTasks();
  
    tasksContainer.innerHTML = "";
  
    querySnapshot.forEach((doc) => {
      const task = doc.data();
      const taskTitle = task.title.toLowerCase();
  
      if (taskTitle.includes(title.toLowerCase())) {
        tasksContainer.innerHTML += `
          <tr>
            <th scope="row">${task.title}</th>
            <td>${task.description}</td>
            <td>
              <button class="btn btn-secondary btn-edit" data-id="${doc.id}">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>
                Ver
              </button>
            </td>
          </tr>
        `;
      }
    });
  }
  
  // Ejemplo de uso:
  const btnTitulo = getElementById("botonTitulo")
  const titulo = getElementById("titulo");
  
  btnTitulo = addEventListener("click",()=>{
    filterTasksByTitle(titulo);
  })
