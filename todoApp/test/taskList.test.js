'use strict';

var assert = require('chai').assert;
var TaskList = require('../app/scripts/taskList.js');
var Task = require('../app/scripts/task.js');

describe('TaskList', function () {
    it('should exist', function () {
        var taskList = new TaskList(); 

        assert.notEqual(taskList, undefined);
    });

    it('should have ability to add tasks', function() {
        var taskList = new TaskList(); 
        var task1 = new Task();
        task1.title = 'task a';
        var task2 = new Task();
        task2.title = 'task b';
        var task3 = new Task();
        task3.title = 'task c';
        var expectedTasks = [task1, task2, task3];

        taskList.add(task1);
        taskList.add(task2);
        taskList.add(task3);

        assert.deepEqual(taskList.getTasks(), expectedTasks);  
    });
});
