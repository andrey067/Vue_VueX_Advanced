
export default {
    async getDadosApiPorId<T>(url: string): Promise<T> {
        return await fetch(url).then((response) => response.json()).then((response: T) => {
            return response;
        });
    },
    async getDadosApi<T>(url: string): Promise<T>  {
        return await fetch(url).then((response) => response.json()).then((response: T) => {
            return response;
        });
    }
}