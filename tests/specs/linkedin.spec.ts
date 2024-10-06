import { test, expect } from '@playwright/test';

function generateRandomEmail(): string {
  const chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
  let email = '';
  for (let i = 0; i < 10; i++) {
      email += chars[Math.floor(Math.random() * chars.length)];
  }
  email += '@example.com';
  return email;
}

function generateRandomPassword(length: number = 8): string {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()';
  let password = '';
  for (let i = 0; i < length; i++) {
      password += chars[Math.floor(Math.random() * chars.length)];
  }
  return password;
}

test('Validar que os campos são obrigatorios', async ({ page }) => {
  await page.goto('https://www.linkedin.com/signup?_l=pt&trk=guest_homepage-basic_nav-header-join');
  await expect(page).toHaveTitle("Cadastre-se | LinkedIn");
  await page.getByRole('button', { name: 'Aceite e cadastre-se' }).click();
  await page.getByText('Insira seu e-mail ou número de celular.').isVisible();
  await page.getByText('Insira sua senha.').isVisible();
});

test('Cadastro com Dados Válidos', async ({ page }) => {
  const randomEmail = generateRandomEmail();
  const randomPassword = generateRandomPassword();
  await page.goto('https://www.linkedin.com/signup?_l=pt&trk=guest_homepage-basic_nav-header-join');
  await expect(page).toHaveTitle("Cadastre-se | LinkedIn");
  await page.getByPlaceholder('E-mail ou número de telefone').fill(randomEmail);
  const elemento = await page.locator('#password');
  await elemento.fill(randomPassword);
  await page.getByRole('button', { name: 'Aceite e cadastre-se' }).click();
});