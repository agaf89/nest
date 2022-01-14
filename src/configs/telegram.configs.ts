import { ConfigService } from '@nestjs/config';
import { ITelegramOptions } from '../telegram/telegram.interface';

export const getTelegramConfig = (configService: ConfigService): ITelegramOptions => {
	const token = configService.get('TELEGRAM_BOT');
	if (!token) {
		throw new Error('Telegram не задан');
	}
	return {
		token,
		chatId: configService.get('CHAT_ID') || '',
	};
};
