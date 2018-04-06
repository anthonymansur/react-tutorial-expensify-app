const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('should add two numbers', () => {
  const result = add(2, 3);
  expect(result).toBe(5);
});

test('should greet person w/ name', () => {
  const result = generateGreeting('Anthony');
  expect(result).toBe('Hello Anthony!');
});

test('should greet person w/ no name', () => {
  const result = generateGreeting();
  expect(result).toBe('Hello Anonymous!');
});