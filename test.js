const { test, expect } = require('@playwright/test');

test('Test Scenario 1: Simple Form Demo', async ({ page }) => {
  console.log('Opening LambdaTest Selenium Playground...');
  await page.goto('https://www.lambdatest.com/selenium-playground');

  console.log('Clicking Simple Form Demo...');
  await page.click('text=Simple Form Demo');
  
  console.log('Checking URL...');
  await expect(page).toHaveURL(/.*simple-form-demo/);
  
  const message = 'Welcome to LambdaTest';
  console.log('Entering message:', message);
  await page.fill('input#user-message', message);
  
  console.log('Clicking Get Checked Value...');
  await page.click('button:has-text("Get Checked Value")');
  
  console.log('Verifying message...');
  const displayedMessage = await page.textContent('#message');
  await expect(displayedMessage).toBe(message);
  console.log('Test Scenario 1 completed successfully!');
});

test('Test Scenario 2: Drag Slider', async ({ page }) => {
  console.log('Opening LambdaTest Selenium Playground...');
  await page.goto('https://www.lambdatest.com/selenium-playground');
  
  console.log('Clicking Drag & Drop Sliders...');
  await page.click('text=Drag & Drop Sliders');
  
  console.log('Finding slider with default value 15...');
  const slider = await page.locator('input[value="15"]');
  
  console.log('Moving slider to 95...');
  await slider.fill('95');
  
  console.log('Verifying slider value is 95...');
  const sliderValue = await page.textContent('output#rangeSuccess');
  await expect(sliderValue).toBe('95');
  console.log('Test Scenario 2 completed successfully!');
});

test('Test Scenario 3: Form Submission', async ({ page }) => {
  console.log('Opening LambdaTest Selenium Playground...');
  await page.goto('https://www.lambdatest.com/selenium-playground');
  
  console.log('Clicking Input Form Submit...');
  await page.click('text=Input Form Submit');
  
  console.log('Clicking Submit without filling form...');
  await page.click('button:has-text("Submit")');
  
  console.log('Checking for error message...');
  const nameField = await page.locator('input#name');
  const validationMessage = await nameField.evaluate(element => element.validationMessage);
  expect(validationMessage).toContain('Please fill out this field');
  
  console.log('Filling out the form...');
  await page.fill('input#name', 'John Doe');
  await page.fill('input#inputEmail4', 'john@example.com');
  await page.fill('input#inputPassword4', 'password123');
  await page.fill('input#company', 'Test Company');
  await page.fill('input#websitename', 'https://example.com');
  await page.selectOption('select[name="country"]', 'United States');
  await page.fill('input#inputCity', 'New York');
  await page.fill('input#inputAddress1', '123 Test Street');
  await page.fill('input#inputAddress2', 'Apt 1');
  await page.fill('input#inputState', 'NY');
  await page.fill('input#inputZip', '10001');
  
  console.log('Submitting form...');
  await page.click('button:has-text("Submit")');
  
  console.log('Checking for success message...');
  const successMessage = await page.textContent('p.success-msg');
  await expect(successMessage).toContain('Thanks for contacting us, we will get back to you shortly.');
  console.log('Test Scenario 3 completed successfully!');
});
