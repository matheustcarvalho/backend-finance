import axios from 'axios';

export class NotificationService {
    public static async notify() {
        try {
            const response = await axios.post('https://util.devi.tools/api/v1/notify');

            if (response.status === 204) {
                return { success: 1 };
            }

            throw new Error('Falha ao enviar notificação');
        } catch (error) {
            console.error('Erro ao enviar notificação:', error instanceof Error ? error.message : 'Erro desconhecido');

            return {
                status: 'error',
                message: 'The service is not available, try again later',
            };
        }
    }
}
