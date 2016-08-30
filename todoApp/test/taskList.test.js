'use strict';

var assert = require('chai').assert;
var TaskList = require('../app/scripts/taskList.js');

describe('TaskList', function () {
    it('should exist', function () {
        var taskList = new TaskList(); 

        assert.notEqual(taskList, undefined);
    });

});
