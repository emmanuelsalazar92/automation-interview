import { faker } from '@faker-js/faker';

export function getRandomQuantity(min = 1, max = 20): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateNameAndEmail() {
    return {
        name: faker.person.fullName(),
        email: faker.internet.email(),
    };
}

export function generateSignupDataForUSA(): any {
    return {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        password: faker.internet.password(),
        address: faker.location.streetAddress(),
        state: faker.location.state(),
        city: faker.location.city(),
        zipcode: faker.location.zipCode(),
        mobileNumber: faker.phone.number(),
        country: 'United States',
    };
}