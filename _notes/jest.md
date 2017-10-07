# Run test
  "test":"jest --watch"

## Jest normal testing
  Test api

## Jest snapshot testing
  Test components
  yarn add --dev react-test-renderer

  ```
  const tree = renderer.create(
      <ArticleList {...testProps}/>  
    ).toJSON();

  expect(tree).toMatchSnapshot();
  ```