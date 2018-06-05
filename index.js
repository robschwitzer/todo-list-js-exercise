// Arrays to keep track of each task's state
const taskTitles       = [];
const taskComplete     = [];
const taskDescriptions = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    // Print the state of a task to the console in a nice readable way
    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },
     // Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
    markCompleted: function () {
      this.complete = true;
    }
  };
  return task;
}

// DRIVER CODE BELOW

const task1 = newTask('Review w2', 'go back and review week 2 material and lectures');
const task2 = newTask('Complete activities', 'complete all incomplete activities from previous weeks');
const tasks = [task1, task2];

task1.logState();
task1.markCompleted();
task1.logState();

task2.logState();
task2.markCompleted();
task2.logState();

task1.title = 'Review w3';
console.log(task1);

task1.logState();
task1.markCompleted();
task1.logState();
