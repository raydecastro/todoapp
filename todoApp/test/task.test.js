'use strict';

var assert = require('chai').assert;
var Task = require('../app/scripts/task.js');

describe('Task', function () {
    it('should exist', function () {
        var task = new Task(); 

        assert.notEqual(task, undefined);
    });
});
