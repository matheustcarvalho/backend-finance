import axios from 'axios';

export const authorizeTransfer = async () => {
    try {
        const response = await axios.get('https://util.devi.tools/api/v2/authorize');
        return response.data;
    } catch (error) {
        throw new Error('Erro ao consultar serviço de autorização');
    }
};
