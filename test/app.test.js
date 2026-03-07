const request = require("supertest");
const app = require("../index"); // Hada hwa l-fichier li fih l-logique

describe('Calculator API', () => {
    
    // Test dyal l-jam3 (Addition)
    test('adds 2 + 3', async () => {
        const res = await request(app).get('/add/2/3');
        expect(res.statusCode).toBe(200);
        // Hna khass tkun resultat hiya 5
        expect(res.body.result).toBe(5);
    });

    // Test dyal l-9isma 3la 0 (Erreur)
    test('divides 4 / 0', async () => {
        const res = await request(app).get('/divide/4/0');
        expect(res.statusCode).toBe(400); // Aw 500 3la hsab code dyalk
        expect(res.body.error).toBe("Division by zero");
    });
});