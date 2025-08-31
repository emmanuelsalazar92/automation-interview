import { faker } from '@faker-js/faker';

// This function generates a random quantity between min and max
export function getRandomQuantity(min = 1, max = 20): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// This function generates random name and email
export function generateNameAndEmail() {
    return {
        name: faker.person.fullName(),
        email: faker.internet.email(),
    };
}

// This function generates random signup data for a user in the USA
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