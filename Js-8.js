const address = {
    street: 'Somewhere',
    city: 'CityTest',
    country: 'countryTest'
};

const street1 = address.street;
const city1 = address.city;
const country1 = address.country;

console.log(street1, city1, country1);

const { street, city, country } = address;

console.log(street, city, country);

const { street: st, city: ct, country: cty } = address;

console.log(st, ct, cty);