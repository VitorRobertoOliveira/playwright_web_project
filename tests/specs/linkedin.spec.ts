import { test, expect } from '@playwright/test';

test('Validar que os campos são obrigatorios', async ({ page }) => {
  await page.goto('https://www.linkedin.com/signup?_l=pt&trk=guest_homepage-basic_nav-header-join');
  await expect(page).toHaveTitle("Cadastre-se | LinkedIn");
  await page.getByRole('button', { name: 'Aceite e cadastre-se' }).click();
  await page.getByText('Insira seu e-mail ou número de celular.').isVisible();
});
