{
    const tasks = [];

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        });
        const newTaskInput = document.querySelector(".js-newTask");
        newTaskInput.value = "";
    

        render();
        newTaskInput.focus();
    };

    const removeTask = (taskIndex) => {
        tasks.splice(taskIndex, 1);
        render();
    }

    const toggleTaskDone = (taskIndex) => {
        tasks[taskIndex].done = !tasks[taskIndex].done;
        render();
    }

    const bindEvents = () => {
        const toggleDoneButtons = document.querySelectorAll(".js-done");

        toggleDoneButtons.forEach((toggleDoneButton, index) => {
            toggleDoneButton.addEventListener("click", () => {
                toggleTaskDone(index);
            });
        });

        const removeButtons = document.querySelectorAll(".js-remove");

        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTask(index);
            });
        });
    }

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
        <li
        class="form__task${task.done ? " form__taskDone" : ""}" 
        >
        <button class= "form__buttonDone  js-done ${task.done ? "form__buttonDoneOn" : ""}"></button>
        ${task.content}
        <button class="form__buttonDelete  js-remove"></button>
        
        </li>
    `;
        }
        document.querySelector(".js-tasks").innerHTML = htmlString;

        bindEvents();
    };

    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const newTaskContent = document.querySelector(".js-newTask").value.trim();
            if (newTaskContent == "") {
                return;
            }
            addNewTask(newTaskContent);
            document.querySelector(".js-newTask").focus();

        });
    };
    init();
}