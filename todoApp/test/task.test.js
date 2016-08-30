'use strict';

var assert = require('chai').assert;
var Task = require('../app/scripts/task.js');

describe('Task', function () {
    it('should exist', function () {
        var task = new Task(); 

        assert.notEqual(task, undefined);
    });

    it('should have a title', function (){
        var task = new Task();

        task.title = 'happiness';

        assert.equal(task.title, 'happiness');
    });

    it('should have a date', function (){
        var task = new Task();
        var expectedDate = new Date();

        task.date = expectedDate;

        assert.equal(task.date, expectedDate);
    });

});

