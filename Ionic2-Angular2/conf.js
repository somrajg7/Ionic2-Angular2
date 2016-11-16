exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec.js'],
  capabilities: {
      'browserName': 'chrome' 
  },
  baseUrl: 'http://localhost:8100',
  useAllAngular2AppRoots: true
}