import { types } from "../../../src/auth"

describe('Test en el archivo types', () => {
    test('Debe de regresar estos types', () => {
        expect(types).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout',
        })
    })
})