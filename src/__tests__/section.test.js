describe('The section', () => {
  beforeEach(() => {
    console.log('BeforeEach');
  });
  beforeAll(() => {
    console.log('BeforeAll');
  });
  afterEach(() => {
    console.log('AfterEach')
  });
  afterAll(() =>{
    console.log('AfterAll')
  });
  it.only('just test jest', () => {
    expect(2+2).toEqual(4);
  });
  it.skip('just test jest 2', () => {
    expect(2+5).toEqual(7);
  });
});

// describe('test mock', () => {

// });