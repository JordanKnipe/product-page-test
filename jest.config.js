module.exports = {

    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/resources/js/$1', // Adjust '<rootDir>/src/$1' as necessary to match your project structure
        '\\.svg$': '<rootDir>/resources/js/__mocks__/svgMock.js' 
      },
      transform: {
        '^.+\\.js$': 'babel-jest',
        '^.+\\.vue$': 'vue-jest'
      },
      transformIgnorePatterns: [
        '\\.svg$'
      ],
      moduleFileExtensions: ['js', 'json', 'vue', 'svg']
    };
  