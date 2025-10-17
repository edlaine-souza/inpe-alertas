//mock
const api = { enviar: jest.fn(() => "Simulado!") };

//teste mock
test("simulação de envio", () => { 
    const resposta = api.enviar(); 
    expect(resposta).toBe("Simulado!"); 
});