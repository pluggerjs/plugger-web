'use strict';

describe('Service: moduleService', function () {

  // load the service's module
  beforeEach(module('App'));

  // instantiate service
  var moduleService;
  beforeEach(inject(function (_moduleService_) {
    moduleService = _moduleService_;
  }));

  it('should do something', function () {
    expect(!!moduleService).toBe(true);
  });

});
